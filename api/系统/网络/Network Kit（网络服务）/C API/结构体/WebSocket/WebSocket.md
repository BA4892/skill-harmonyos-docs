# WebSocket

> **分区**: API参考  |  **Slug**: `capi-netstack-websocket`  |  **DocID**: `583643d4b96a4f67b42c47c6d1d90b19`

---

# WebSocket

 ```
struct WebSocket {...}
```
  #### 概述

WebSocket客户端结构体。

 **起始版本：** 11

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

 **所在头文件：** [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [WebSocket_OnOpenCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h#websocket_onopencallback) onOpen 客户端接收连接消息的回调指针。  [WebSocket_OnMessageCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h#websocket_onmessagecallback) onMessage 客户端接收消息的回调指针。  [WebSocket_OnErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h#websocket_onerrorcallback) onError 客户端接收错误消息的回调指针。  [WebSocket_OnCloseCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h#websocket_onclosecallback) onClose 客户端接收关闭消息的回调指针。  [WebSocket_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-requestoptions) requestOptions 客户端建立连接请求内容。

---
*Updated: 2026-04-22 06:49:03*
