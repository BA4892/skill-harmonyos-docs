# ProcessingConfiguration：定制处理行为

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `remote-communication-customprocessconfig`  |  **DocID**: `fb28fa1c6ea94fa9ab62356a209302b9`  |  **NodeID**: `00020177579585271661322409cdc3b8`

---

# ProcessingConfiguration：定制处理行为

  #### 场景介绍

ProcessingConfiguration 是 Remote Communication Kit 中用于定制响应处理行为的一个重要组件。它允许你在消息被分发到不同的处理器之前或之后执行一些自定义的逻辑。场景如检验响应状态是否为成功即响应码是否为200。

   #### 约束与限制

定制处理行为能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。

   #### 使用示例

导入需要的模块。

  ```
import { rcp } from '@kit.RemoteCommunicationKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
  创建会话、请求以及定义相关处理配置。

  ```
const session = rcp.createSession();
const request = new rcp.Request("https://www.example.com");

// 定义处理配置，用于验证响应状态码是否为200
const processing: rcp.ProcessingConfiguration = {
  validateResponse: (response: rcp.Response): boolean => {
    return response.statusCode === 200;
  },
};

// 将处理配置应用到请求中
request.configuration = {
  processing: processing,
};
```
  发送请求并等待响应。如果 processing.validateResponse 的返回值是 true，则会执行 then 方法处理成功的响应；如果 processing.validateResponse 的返回值是 false，则会执行 catch 方法处理可能出现的错误。

  ```
session.fetch(request).then((response: rcp.Response) => {
  // 如果 processing.validateResponse 返回值是true，则会执行以下流程。
  if (response) {
    console.info(`Response received with status code: ${response.statusCode}`);
  } else {
    console.error('No response received');
  }
  session.close();
}).catch((err: BusinessError) => {
  // 如果 processing.validateResponse 返回值是false，则会执行以下流程。
  console.error(`The error code is ${err.code}, error data is ${err.data}`);
  session.close();
});
```

---
*Updated: 2026-04-20 01:47:07*
