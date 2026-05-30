# Rcp_EventsHandler

> **分区**: API参考  |  **Slug**: `_rcp___events_handler`  |  **DocID**: `e05d62b4ce7e484b889ac090a534a418`

---

# Rcp_EventsHandler

  #### 概述

监听不同HTTP事件的回调函数。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_OnDataReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_data_receive_callback)[onDataReceive](#ondatareceive) 收到响应体时的回调函数。  [Rcp_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_progress_callback)[onUploadProgress](#onuploadprogress) 上传时调用的回调函数。  [Rcp_OnProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_progress_callback)[onDownloadProgress](#ondownloadprogress) 下载时调用的回调函数。  [Rcp_OnHeaderReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_header_receive_callback)[onHeaderReceive](#onheaderreceive) 收到header时的回调函数。  [Rcp_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_void_callback)[onDataEnd](#ondataend) 传输结束时的回调函数。  [Rcp_OnVoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___on_void_callback)[onCanceled](#oncanceled) 请求或会话被取消时的回调函数。       #### 结构体成员变量说明

  #### [h2]onCanceled

Rcp_OnVoidCallback Rcp_EventsHandler::onCanceled **描述**

 请求或会话被取消时的回调函数。

   #### [h2]onDataEnd

Rcp_OnVoidCallback Rcp_EventsHandler::onDataEnd **描述**

 传输结束时的回调函数。

   #### [h2]onDataReceive

Rcp_OnDataReceiveCallback Rcp_EventsHandler::onDataReceive **描述**

 收到响应体时的回调函数。

   #### [h2]onDownloadProgress

Rcp_OnProgressCallback Rcp_EventsHandler::onDownloadProgress **描述**

 下载时调用的回调函数。

   #### [h2]onHeaderReceive

Rcp_OnHeaderReceiveCallback Rcp_EventsHandler::onHeaderReceive **描述**

 收到header时的回调函数。

   #### [h2]onUploadProgress

Rcp_OnProgressCallback Rcp_EventsHandler::onUploadProgress **描述**

 上传时调用的回调函数。

---
*Updated: 2026-04-22 06:49:03*
