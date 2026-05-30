# net_websocket_type.h

> **分区**: API参考  |  **Slug**: `capi-net-websocket-type-h`  |  **DocID**: `b95fe29cd29649c2a5eea15bc13e59f9`

---

# net_websocket_type.h

  #### 概述

定义websocket客户端模块的C接口需要的数据结构。

 **引用文件：** <network/netstack/net_websocket_type.h>

 **库：** libnet_websocket.so

 **系统能力：** SystemCapability.Communication.NetStack

 **起始版本：** 11

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

   #### 汇总

  #### [h2]结构体

 名称 描述   [WebSocket_CloseResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-closeresult) websocket客户端来自服务端关闭的参数。  [WebSocket_CloseOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-closeoption) websocket客户端主动关闭的参数。  [WebSocket_ErrorResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-errorresult) websocket客户端来自服务端连接错误的参数。  [WebSocket_OpenResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-openresult) websocket客户端来自服务端连接成功的参数。  [WebSocket_Header](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-header) websocket客户端增加header头的链表节点。  [WebSocket_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-requestoptions) webSocket客户端和服务端建立连接的参数。  [WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket) webSocket客户端结构体。       #### [h2]函数

 名称 typedef关键字 描述   [typedef void (*WebSocket_OnOpenCallback)(struct WebSocket *client, WebSocket_OpenResult openResult)](#websocket_onopencallback) WebSocket_OnOpenCallback websocket客户端接收open消息的回调函数定义。  [typedef void (*WebSocket_OnMessageCallback)(struct WebSocket *client, char *data, uint32_t length)](#websocket_onmessagecallback) WebSocket_OnMessageCallback websocket客户端接收数据的回调函数定义。  [typedef void (*WebSocket_OnErrorCallback)(struct WebSocket *client, WebSocket_ErrorResult errorResult)](#websocket_onerrorcallback) WebSocket_OnErrorCallback websocket客户端接收error错误消息的回调函数定义。  [typedef void (*WebSocket_OnCloseCallback)(struct WebSocket *client, WebSocket_CloseResult closeResult)](#websocket_onclosecallback) WebSocket_OnCloseCallback webSocket客户端接收close消息的回调函数定义。       #### 枚举类型说明

  #### [h2]WebSocket_ErrCode

enum WebSocket_ErrCode **描述**

 定义websocket请求的错误码。

 **起始版本：** 11

  枚举项 描述   WEBSOCKET_OK = 0 操作成功。  E_BASE = 1000 错误码基准值。  WEBSOCKET_CLIENT_NULL = (E_BASE + 1) websocket客户端为空。  WEBSOCKET_CLIENT_NOT_CREATED = (E_BASE + 2) websocket客户端未创建。  WEBSOCKET_CONNECTION_ERROR = (E_BASE + 3) 建立websocket连接时发生错误。  WEBSOCKET_CONNECTION_PARSE_URL_ERROR = (E_BASE + 5) 解析websocket连接参数时出错。  WEBSOCKET_CONNECTION_NO_MEMORY = (E_BASE + 6) websocket客户端建立连接过程中内存不足。  WEBSOCKET_CONNECTION_CLOSED_BY_PEER = (E_BASE + 7) websocket连接被对端关闭。  WEBSOCKET_DESTROYED = (E_BASE + 8) websocket连接断开。  WEBSOCKET_PROTOCOL_ERROR = (E_BASE + 9) 协议错误。  WEBSOCKET_SEND_NO_MEMORY = (E_BASE + 10) websocket客户端发送数据时系统内存不足。  WEBSOCKET_SEND_DATA_NULL = (E_BASE + 11) 发送数据为空。  WEBSOCKET_DATA_LENGTH_EXCEEDED = (E_BASE + 12) 发送数据长度超出限制。  WEBSOCKET_QUEUE_LENGTH_EXCEEDED = (E_BASE + 13) 发送数据队列长度超出限制。  WEBSOCKET_NO_CLIENT_CONTEXT = (E_BASE + 14) websocket客户端的上下文为空。  WEBSOCKET_NO_HEADER_CONTEXT = (E_BASE + 15) webSocket客户端协议头为空。  WEBSOCKET_HEADER_EXCEEDED = (E_BASE + 16) webSocket客户端协议头超出限制。  WEBSOCKET_NO_CONNECTION = (E_BASE + 17) websocket客户端未连接。  WEBSOCKET_NO_CONNECTION_CONTEXT = (E_BASE + 18) 释放websocket连接上下文时无相应上下文。       #### 函数说明

  #### [h2]WebSocket_OnOpenCallback()

typedef void (*WebSocket_OnOpenCallback)(struct WebSocket *client, WebSocket_OpenResult openResult) **描述**

 websocket客户端接收open消息的回调函数定义。

 **起始版本：** 11

 **参数：**

  参数项 描述   [struct WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket) *client websocket客户端。  [ WebSocket_OpenResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-openresult) openResult websocket客户端接收建立连接消息的内容。       #### [h2]WebSocket_OnMessageCallback()

typedef void (*WebSocket_OnMessageCallback)(struct WebSocket *client, char *data, uint32_t length) **描述**

 websocket客户端接收数据的回调函数定义。

 **起始版本：** 11

 **参数：**

  参数项 描述   [struct WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket) *client websocket客户端。  char *data websocket客户端接收的数据。  uint32_t length websocket客户端接收的数据长度。       #### [h2]WebSocket_OnErrorCallback()

typedef void (*WebSocket_OnErrorCallback)(struct WebSocket *client, WebSocket_ErrorResult errorResult) **描述**

 websocket客户端接收error错误消息的回调函数定义。

 **起始版本：** 11

 **参数：**

  参数项 描述   [struct WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket) *client websocket客户端。  [ WebSocket_ErrorResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-errorresult) errorResult websocket客户端接收连接错误消息的内容。       #### [h2]WebSocket_OnCloseCallback()

typedef void (*WebSocket_OnCloseCallback)(struct WebSocket *client, WebSocket_CloseResult closeResult) **描述**

 webSocket客户端接收close消息的回调函数定义。

 **起始版本：** 11

 **参数：**

  参数项 描述   [struct WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket) *client websocket客户端。  [ WebSocket_CloseResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-closeresult) closeResult webSocket客户端接收关闭消息的内容。

---
*Updated: 2026-04-22 06:48:55*
