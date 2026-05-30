# Http_EventsHandler

> **分区**: API参考  |  **Slug**: `capi-netstack-http-eventshandler`  |  **DocID**: `500ca27d4b6f4770913e9242227fbf4b`

---

# Http_EventsHandler

 ```
typedef struct Http_EventsHandler {...} Http_EventsHandler
```
  #### 概述

监听不同HTTP事件的回调函数。

 **起始版本：** 20

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

 **所在头文件：** [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Http_OnDataReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_ondatareceivecallback) onDataReceive 收到响应体时的回调函数，参考[Http_OnDataReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_ondatareceivecallback)。  [Http_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onprogresscallback) onUploadProgress 上传时调用的回调函数，参考[Http_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onprogresscallback)。  [Http_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onprogresscallback) onDownloadProgress 下载时调用的回调函数，参考[Http_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onprogresscallback)。  [Http_OnHeaderReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onheaderreceivecallback) onHeadersReceive 收到header时的回调函数，参考[Http_OnHeaderReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onheaderreceivecallback)。  [Http_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onvoidcallback) onDataEnd 传输结束时的回调函数，参考[Http_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onvoidcallback)。  [Http_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onvoidcallback) onCanceled 请求被取消时的回调函数，参考[Http_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_onvoidcallback)。

---
*Updated: 2026-04-22 06:49:05*
