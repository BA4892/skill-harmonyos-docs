# 基于RAG框架实现邮件智能问答

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-ai-ragqa`  |  **DocID**: `52ebbafee4c34d46bb037555b513d88f`  |  **NodeID**: `0002017755470811942356d7fccb5aaa`

---

# 基于RAG框架实现邮件智能问答

 #### 概述

RAG（检索增强生成）是一种结合了信息检索与文本生成技术的混合型自然语言处理方法。其核心思想是通过引入外部知识库，动态检索与输入问题相关的信息，并基于这些信息生成更准确、可靠的回答，被广泛用于问答系统、对话助手、文档摘要等任务，尤其在需要结合外部知识的场景（如医疗、法律、学术研究）中表现突出。

 当RAG作用于私人信息领域，就可结合私人信息形成定制化的问答系统、检索助手，本文将从以下关键步骤介绍如何基于RAG框架实现邮件系统的智能问答。

 
- [知识库构建](#section147555014915)：将用户邮件信息写入数据库中，便于后续查找。
- [LLM部署与调用](#section29233013420)：部署大模型和配置request请求。
- [RAG会话](#section1939152912915)：配置并开启RAG会话，包括配置知识加工schema、检索配置retrieval.RetrievalConfig、检索条件retrieval.RetrievalCondition和LLM会话。

  #### 用户体验

 本文案例依托用户自定义的邮件数据库进行智能问答，准确识别语义并提供精确答案，并有以下基本功能：

 
- 自由增加数据： 系统能接收、存储新的数据源。
- 精准问答： 构建一个基于上述数据和模型的、能够提供准确答案的问答系统。

  #### 实现原理

 RAG提供用于进行流式问答的接口，整体问答流程分为两个阶段：

 
- **检索阶段**：根据用户输入的问题或指令，利用稠密向量检索、关键词匹配等技术，从数据库或文档库中筛选出最相关的文本片段。
- **生成阶段**：将检索结果与原始输入拼接，输入大语言模型（如千问等），生成结合上下文知识的最终回答。

  #### 知识库构建

本章节介绍如何将原始的邮件数据存储到数据库中，以便后续问答使用。

  #### [h2]原始数据准备

将邮件数据进行提取和清理，存储为如下例所示的结构，包含包括发件人、收件人、时间、邮件文本等基本信息，便于后续的搜索查找。

 ```
{
  "subject": "【请阅】Mate系列手机优惠政策",
  "sender_name": "zhangsan",
  "sender_email": "zhangsan@xxx.com",
  "received_time": "2025-05-15 15:49:04.135",
  "recipients": [
    {
      "Address": "lisi@xxx.com",
      "name": "lisi",
      "Type": 1
    },
    {
      "Address": "wangwu@xxx.com",
      "name": "wangwu",
      "Type": 2
    },
    {
      "Address": "zhaoliu@xxx.com",
      "name": "zhaoliu",
      "Type": 3
    }
  ],
  "to": [
    "lisi"
  ],
  "cc": [
    "wangwu"
  ],
  "bcc": [
    "zhaoliu"
  ],
  "attachment": [],
  "body": "优惠政策：\r\n\r\nMate60系列优惠xxx！！ Mate70系列优惠xxx！！。",
  "unread": false
}
```
  #### [h2]初始化数据库

首先需要构建一个数据库，获取一个RdbStore，其中包括建库、建表、插入数据的操作步骤。

 1、通过[relationalStore.getRdbStore()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-f#relationalstoregetrdbstore)接口创建或打开已有关系型数据库。

 2、通过[execute()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#execute12)接口执行建表操作，包含id、subject text、content text、image_text text、attachment_names text等字段。

  数据库创建时StoreConfig的enableSemanticIndex需要为true才能触发知识加工。

  ```
storeName: string = "testmail_store.db";
// keep same with the db name in knowledge_schema.json
storeConfig: relationalStore.StoreConfig = {
  name: this.storeName,
  securityLevel: relationalStore.SecurityLevel.S3,
  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,
  enableSemanticIndex: true
};
store: relationalStore.RdbStore | null = null;
dataIndexNow = 0;

async InitTable() {
  try {
    let context = AppStorage.get<common.UIAbilityContext>("Context") as common.UIAbilityContext;
    if (!this.store) {
      this.store = await relationalStore.getRdbStore(context, this.storeConfig);
    }
    if (this.store != undefined) {
      const createTableSql =
        "CREATE TABLE IF NOT EXISTS email(id integer primary key, subject text, content text, image_text text," +
          " attachment_names text, inlineFiles text, sender text, toReceivers text, ccReceivers text, " +
          "bccReceivers text, received_date text);";
      await this.store.execute(createTableSql, 0, undefined);
      await this.InsertData(context);
    }
  } catch (e) {
    hilog.error(0, TAG, `Init DB failed, code is ${e.code},message is ${e.message}.`);
  }
}
```
 依次读取原始数据文件，将读出的数据使用[execute()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#execute12)接口插入到新建的数据库中。

 ```
async InsertData(context: common.UIAbilityContext) {
  // ...
  let fileList: string[] = [];
  try {
    fileList = context.resourceManager.getRawFileListSync('');
  } catch (error) {
    let err = error as BusinessError;
    hilog.error(0x0000, TAG, `getRawFileListSync failed, error code=${err.code}, message=${err.message}`);
  }
  let dataIndex = this.dataIndexNow;
  for (let file of fileList) {
    // ...
    try {
      const rawFileData = await context.resourceManager.getRawFileContent(file);
      const fileData: string = buffer.from(rawFileData).toString();
      const resultObjArr = JSON.parse(fileData) as Array<object>;
      let jsonObj: object | undefined;
      for (let i = 0; i < resultObjArr.length; i++) {
        jsonObj = resultObjArr[i];
        dataIndex = await this.InsertSingleDataJson(jsonObj, this.store, dataIndex)
      }
    } catch (e) {
      hilog.error(0, TAG, `Load file failed, code is ${e.code},message is ${e.message}`);
    }
  }
  this.dataIndexNow = dataIndex;
}
```
  #### LLM部署与调用

本章节介绍LLM模型的部署和调用，在实际开发过程中可根据业务诉求自行选择LLM大模型进行配置，这里以华为云部署的大模型接入作为参考。

  #### [h2]模型部署

进入并登录网址[ModelArts - Console](https://console.huaweicloud.com/modelarts/?locale=zh-cn&region=cn-southwest-2#/model-studio/authmanage)，在左侧菜单中选择API Key管理，点击右上角创建API key，生成Key。 生成的key值只在弹窗中出现一次，请立刻保存后再关闭弹窗。

  - 在左侧菜单中选择在线推理，在商用服务列表中开通商用服务Qwen3-235B-A22B-32K。
- 在[费用中心](https://account.huaweicloud.com/usercenter/?agencyId=4a4d3a21c84e4c94b7995314981bf802&region=cn-southwest-2&locale=zh-cn#/userindex/allview)管理页面进行服务充值。

  #### [h2]模型调用

1、初始化请求，配置请求参数，在header中需要配置生成的API生成的key，extraData中需要传入相关的提问和模型参数，参考[请求参数说明](https://support.huaweicloud.com/usermanual-maas-modelarts/maas-modelarts-0011.html)设置frequency_penalty频率奖惩、presence_penalty新词语奖惩、top_p浮点数累计概率控制确保大模型回答偏向简短精准，提升系统的回答速度和准确度。

 ```
httpRequest: http.HttpRequest | null = null;
url: string = "https://api.modelarts-maas.com/v1/chat/completions";
isFinished: boolean = false;

//initialize the llm option
initOption(question: string) {
  let option: http.HttpRequestOptions = {
    // request
    method: http.RequestMethod.POST,
    header: {
      "Content-Type": "application/json",
      // API-KEY from Model
      "Authorization": "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    extraData: {
      "stream": true,
      "temperature": 0.1,
      "max_tokens": 10000,
      "frequency_penalty": 1,
      "model": "qwen3-235b-a22b",
      "top_p": 0.1,
      "presence_penalty": -1,
      "messages": JSON.parse(question)
    }
  };
  return option;
}
```
 2、使用[requestInStream()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#requestinstream10-1)根据URL地址和相关配置项，发起HTTP网络请求并返回流式响应。

 ```
async requestInStream(question: string) {
  if (this.httpRequest === null) {
    this.httpRequest = http.createHttp();
  }
  this.httpRequest.requestInStream(this.url, this.initOption(question)).catch((err: BusinessError) => {
    hilog.error(0x0000, 'LLMHttpUtils', `requestInStream failed, error code=${err.code}, message=${err.message}`);
  });
  this.isFinished = false;
}
```
 3、设置监听，订阅HTTP流式响应数据接收事件和HTTP流式响应数据接收完毕事件。

 ```
on(callback: Callback<ArrayBuffer>, endCallback: Callback<void>) {
  if (this.httpRequest === null) {
    this.httpRequest = http.createHttp();
  }
  this.httpRequest.on("dataReceive", callback);
  this.httpRequest.on('dataEnd', endCallback);
}
```
  #### RAG会话

 #### [h2]配置会话

1、配置知识库加工，如下所示配置resources/rawfile/arkdata/knowledge/knowledge_schema.json文件，倒排表、向量库、向量表将会根据schema配置自动生成。

 ```
{
  "knowledgeSource": [{
    "version": 1,
    "dbName": "testmail_store.db",
    "tables": [{
      "tableName": "email",
      "referenceFields": ["id"],
      "knowledgeFields": [{
        "columnName": "subject",
        "type": ["Text"]
      },
        {
          "columnName": "content",
          "type": ["Text"]
        },
        {
          "columnName": "image_text",
          "type": ["Text"]
        },
        {
          "columnName": "attachment_names",
          "type": ["Text"]
        },
        {
          "columnName": "sender",
          "type": ["Scalar"],
          "description": "sender"
        },
        {
          "columnName": "receivers",
          "type": ["Scalar"],
          "description": "receivers"
        },
        {
          "columnName": "received_date",
          "type": ["Scalar"],
          "description": "received_date"
        }]
    }]
  }]
}
```
 2、构建检索配置[retrieval.RetrievalConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-retrieval-api#section95236010016)，配置向量数据库和倒排索引数据库的参数，并将这些配置绑定到相应的检索通道中，构建了一个用于多数据源检索的配置对象retrievalConfig。这个配置对象可以被后续的检索操作使用，以从指定的数据库中检索数据。

 ```
getRetrievalConfig(): retrieval.RetrievalConfig {
  let storeConfigVector: relationalStore.StoreConfig = {
    name: "testmail_store_vector.db", // VectorBase
    securityLevel: relationalStore.SecurityLevel.S3,
    vector: true
  };

  let storeConfigInvIdx: relationalStore.StoreConfig = {
    name: "testmail_store.db", // original db is the inverted index db
    securityLevel: relationalStore.SecurityLevel.S3,
    tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER
  };

  let context = AppStorage.get<common.UIAbilityContext>("Context") as common.UIAbilityContext;
  let channelConfigVector: retrieval.ChannelConfig = {
    channelType: retrieval.ChannelType.VECTOR_DATABASE,
    context: context,
    dbConfig: storeConfigVector
  }
  let channelConfigInvIdx: retrieval.ChannelConfig = {
    channelType: retrieval.ChannelType.INVERTED_INDEX_DATABASE,
    context: context,
    dbConfig: storeConfigInvIdx
  }
  let retrievalConfig: retrieval.RetrievalConfig = {
    channelConfigs: [channelConfigInvIdx, channelConfigVector]
  }
  return retrievalConfig;
}
```
 3、配置检索条件[retrieval.RetrievalCondition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-retrieval-api#section4881955192413)，从多个数据源（基于逆向索引和向量相似度）召回相关数据，并通过RRF方法对召回结果进行重排，最终返回5条最相关的记录，在信息检索系统中提升召回率和精确率。

 ```
getRetrivalCondition(): retrieval.RetrievalCondition {
  let recallConditionInvIdx: retrieval.InvertedIndexRecallCondition = {
    ftsTableName: "email_inverted",
    fromClause: "select email_inverted.reference_id as rowid, * from email INNER JOIN email_inverted ON email.id = email_inverted.reference_id",
    primaryKey: ["chunk_id"],
    responseColumns: ["reference_id", "chunk_id", "chunk_source", "chunk_text", "subject", "image_text",
      "attachment_names"],
    deepSize: 500,
    recallName: 'invertedvectorRecall',
  }
  let floatArray = new Float32Array(128).fill(0.1);
  let vectorQuery: retrieval.VectorQuery = {
    column: "repr",
    value: floatArray,
    similarityThreshold: 0.1
  }
  let recallConditionVector: retrieval.VectorRecallCondition = {
    vectorQuery: vectorQuery,
    fromClause: "email_vector",
    primaryKey: ["id"],
    responseColumns: ["reference_id", "chunk_id", "chunk_source", "repr"],
    recallName: "vectorRecall",
    deepSize: 500
  }
  let rerankMethod: retrieval.RerankMethod = {
    rerankType: retrieval.RerankType.RRF,
    isSoftmaxNormalized: true,
  }
  let retrievalCondition: retrieval.RetrievalCondition = {
    rerankMethod: rerankMethod,
    recallConditions: [recallConditionInvIdx, recallConditionVector],
    resultCount: 5
  }
  return retrievalCondition;
}
```
 4、配置[LLM会话](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api#section1400115191116)，在HTTP流式响应数据接收事件中进行数据解析，将问题的答案和是否结束封装在answer中传入回调。此步骤会因大模型的选型受到影响，开发中根据实际选择的大模型进行调整。

 ```
export default class MyChatLlm extends rag.ChatLLM {
  temp: string = '';

  cancel(): void {
    LLMHttpUtils.cancel();
  }

  async streamChat(query: string, callback: Callback<rag.LLMStreamAnswer>): Promise<rag.LLMRequestInfo> {
    let ret = rag.LLMRequestStatus.LLM_SUCCESS;
    try {
      LLMHttpUtils.on(
        // data received callback function
        (data) => {
          try {
            if (LLMHttpUtils.isFinished) {
              return;
            }
            let decoder = util.TextDecoder.create(`"utf-8"`);
            let str = decoder.decodeToString(new Uint8Array(data));
            let resultStr: string = str.split('\n')[0];
            if(resultStr.startsWith('{"error_code"')){
              hilog.error(0, 'MyChatLlm', 'str =' + resultStr);
              let answer: rag.LLMStreamAnswer = {
                isFinished: true,
                chunk: `LLM catch other exception. msg:${resultStr}`,
                err:{
                  code: 1021011000,
                  name: `LLM catch other exception`,
                  message: `LLM catch other exception. msg:${resultStr}`
                }
              }
              try{
                let obj = JSON.parse(resultStr) as object;
                if(obj && obj['error_msg'] && obj['error_code'] && obj['error_msg'] === 'Invalid authorization header.'){
                  answer.chunk = `LLM catch other exception. msg:${obj['error_msg']}`;
                  answer.err!.message = 'Invalid ChatLLM authorization API key';
                }
              }
              catch(err){
                hilog.error(0, 'MyChatLlm', 'Parse json failed. String: ' + resultStr);
              }
              hilog.error(0, 'MyChatLlm', 'LLM catch other exception');
              LLMHttpUtils.isFinished = true;
              callback(answer);
              return;
            }
            let obj = JSON.parse(resultStr.slice(5))
            let chunk = ''
            if ((obj as object)?.["choices"].length === 0) {
              return;
            }
            if ((obj as object)?.["choices"][0]["delta"]["reasoning_content"]) {
              chunk = (obj as object)?.["choices"][0]["delta"]["reasoning_content"];
            } else {
              chunk = (obj as object)?.["choices"][0]["delta"]["content"];
            }
            this.temp += chunk;
            let isFinished: boolean = (str.length < 20);
            let answer: rag.LLMStreamAnswer = {
              isFinished: isFinished,
              chunk: chunk
            }
            LLMHttpUtils.isFinished = isFinished;
            callback(answer);
          } catch (err) {
            hilog.error(0, 'MyChatLlm', `BusinessError, error code: ${err.code}, error message: ${err.message}`);
          }
        },
        // data end callback function
        () => {
          if (LLMHttpUtils.isFinished) {
            return;
          }
          let answer: rag.LLMStreamAnswer = {
            isFinished: true,
            chunk: ''
          }
          LLMHttpUtils.isFinished = true;
          callback(answer);
          LLMHttpUtils.end();
          hilog.warn(0, 'MyChatLlm', 'Recv dataEnd callback.');
        }
      );
      LLMHttpUtils.requestInStream(query);
    } catch (err) {
      hilog.error(0, 'MyChatLlm', `Request HuaweiYun failed, error code: ${err.code}, error message: ${err.message}`);
      if (err.code ===2300028) {
        ret = rag.LLMRequestStatus.LLM_TIMEOUT;
      } else if (err.code === 2300007) {
        ret = rag.LLMRequestStatus.LLM_LOAD_FAILED;
      } else if (err.code === 9999999) {
        ret = rag.LLMRequestStatus.LLM_BUSY;
      } else {
        ret = rag.LLMRequestStatus.LLM_REQUEST_ERROR;
      }
    }
    return {
      chatId: 0,
      status: ret,
    };
  }
}
```
 5、在完成检索条件、检索配置、LLM会话的配置后，即可配置[rag.Config](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api#section1033315317182)。

 ```
getRAGConfig(): rag.Config {
  let retrievalConfig: retrieval.RetrievalConfig = this.getRetrievalConfig();
  let retrievalCondition: retrieval.RetrievalCondition = this.getRetrivalCondition();
  let config: rag.Config = {
    llm: new MyChatLlm(),
    retrievalConfig: retrievalConfig,
    retrievalCondition: retrievalCondition,
  }
  return config;
}
```
  #### [h2]开启会话

1、使用[rag.createRagSession()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api#section14201103320529)接口创建会话，需要传入应用上下文context和[rag.Config](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api#section1033315317182)。

 ```
let config: Config = new GetConfig();
let sessionCfg: rag.Config = config.getRAGConfig();
// create the rag session
rag.createRagSession(this.context, sessionCfg).then((data: rag.RagSession) => {
  AppStorage.setOrCreate<rag.RagSession>("RagSessionObject", data);
}).catch((err: BusinessError) => {
  hilog.error(DOMAIN, 'testTag', `createRagSession failed, code is ${err.code},message is ${err.message}.`);
})
```
 2、使用[streamRun()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-rag-api#section178721756950)接口开始会话，需要传入提问的问题、提问选项和处理的动作，接收返回的字符串进行拼接形成答案。

 ```
const answerTypes: Array<rag.StreamType> =
  [rag.StreamType.THOUGHT, rag.StreamType.REFERENCE, rag.StreamType.ANSWER];
let option: rag.RunConfig = { answerTypes }
this.streamRunStartTime = new Date();
hilog.info(0, TAG, `Before streamRun, time: ${this.streamRunStartTime.getTime()}`);
let ragSession: rag.RagSession = AppStorage.get<rag.RagSession>("RagSessionObject") as rag.RagSession;
await ragSession.streamRun(text, option, this.onReceived);
hilog.info(0, TAG, "after streamRun, before responseInStream");
```
  #### 总结

本文介绍了如何使用RAG架构构建问答系统，以提高问答的准确性。在接入RAG架构时，首先需要完成知识库的构建，将原始数据写入数据库中，然后进行LLM的接入，可自由选择大模型，但需要调参以确保回答的准确性和精炼简短，最后按照步骤完成RAG会话的配置与开启。

  #### 示例代码

- [基于RAG实现智能问答系统](https://gitcode.com/harmonyos_samples/RAG_QA)

---
*Updated: 2026-04-10 09:43:56*
