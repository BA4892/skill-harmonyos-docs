# TransferConfiguration：定制数据传输

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `remote-communication-customtranferconfig`  |  **DocID**: `e989347cc4b44167849d6e4f663b8d03`  |  **NodeID**: `000201775795852716584af7fc0d91af`

---

# TransferConfiguration：定制数据传输

  #### 场景介绍

在远场通信框架中，开发者们利用 TransferConfiguration，可以对 HTTP请求期间的数据传输行为进行精细化管理和定制化调整。TransferConfiguration提供了自动重定向策略、超时时间设定等关键功能的配置选项。通过理解和灵活运用这些属性，开发者可以根据项目需求，实现数据传输策略的个性化定制，从而获得更高效、更可靠的数据传输体验。

   #### 约束与限制

定制数据传输能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。

   #### 使用示例

下面会介绍超时重试场景下TransferConfiguration如何去使用。

   #### [h2]超时重试

导入需要的模块。

  ```
import { rcp } from '@kit.RemoteCommunicationKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
  定义会话配置，创建会话，以及定义日志函数。

  ```
// 定义日志函数
const logI = console.info
const logE = console.error

// 定义会话配置
const sessionConfig: rcp.SessionConfiguration = {
  requestConfiguration: {
    transfer: {
      timeout: {
        connectMs: 3000,
        transferMs: 6000
      }
    }
  }
};

// 创建会话
const session = rcp.createSession(sessionConfig);
```
  定义异步函数，利用递归实现重试，如果请求失败，会在指定的重试次数内进行重试，在最后一次重试时，会等待3秒后再发送请求（根据实际情况进行调整）。

  ```
async function retryRequest(url: string, retryCount: number, attempt: number): Promise<rcp.Response | undefined> {
  return new Promise((resolve, reject) => {
    // 在最后一次重试时，等待一段时间后再发送请求
    const delay = attempt === retryCount - 1 ? 3000 : 0; // 如果是最后一次重试，延迟3秒，否则不延迟
    setTimeout(() => {
      session.get(url)
        .then(response => {
          if (response.statusCode === 200) {
            logI(`Request successful on attempt ${attempt}.`); // 记录请求成功信息
            resolve(response); // 请求成功，Promise resolve
          } else {
            logE(`Request failed on attempt ${attempt}, statusCode: ${response.statusCode}`); // 记录请求失败信息
            if (attempt < retryCount) { // 如果还未达到重试次数
              retryRequest(url, retryCount, attempt + 1); // 进行下一次重试
            } else { // 如果已经达到重试次数
              logE(`All retries failed.`); // 记录所有重试失败信息
              reject(new Error('All retries failed')); // 所有重试失败，Promise reject
            }
          }
        })
        .catch((err: BusinessError) => { // 请求的catch块，处理请求过程中抛出的错误
          logE(`Request error on attempt ${attempt}, error code is ${err.code}, error data is ${err.data}`); // 记录请求错误信息
          if (attempt < retryCount) { // 如果还未达到重试次数
            retryRequest(url, retryCount, attempt + 1); // 进行下一次重试
          } else { // 如果已经达到重试次数
            logE(`All retries failed.`); // 记录所有重试失败信息
            reject(new Error('All retries failed')); // 所有重试失败，Promise reject
          }
        });
    }, delay); // 延迟指定时间后再发送请求
  });
}
```
  调用retryRequest方法，实现网络请求的重试逻辑。

  ```
// 定义URL
const URL = 'https://www.example.com'

// 定义重试次数，值为3
const retryCount = 3
// 定义当前尝试次数，初始值为1
const attempt = 1

// 调用retryRequest函数进行网络请求，参数为URL、重试次数和当前尝试次数,将返回的结果存储在response变量中
const response = retryRequest(URL, retryCount, attempt);
// 使用then方法处理response的成功返回情况
response.then((res) => {
  // 如果返回的状态码不是200，表示请求未成功
  if (res?.statusCode != 200) {
    // 打印日志，表示超时重试失败
    logI(`Timeout retry failed`);
    return;
  }
  // 打印日志，如果返回的状态码是200，表示请求成功
  logI(`Timeout retry succeeded, print result: ${res}`);
}).catch((err: BusinessError) => {
  // 打印日志，表示响应出错，并打印错误信息
  logE(`Response error, the error code is ${err.code}, error data is ${err.data}`);
})
```

---
*Updated: 2026-04-20 01:47:06*
