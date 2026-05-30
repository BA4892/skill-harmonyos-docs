# Rcp_OnHeaderReceiveCallback

> **分区**: API参考  |  **Slug**: `_rcp___on_header_receive_callback`  |  **DocID**: `b8ec293b398144cdb76ee135bd8e96b8`

---

# Rcp_OnHeaderReceiveCallback

  #### 概述

[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的接收到的header的回调配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_OnHeaderReceiveCallbackFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_onheaderreceivecallbackfunc)[callback](#callback) 接收到的headers的回调函数。  void * [usrObject](#usrobject) 用户定义的对象，在回调函数中使用。       #### 结构体成员变量说明

  #### [h2]callback

Rcp_OnHeaderReceiveCallbackFunc Rcp_OnHeaderReceiveCallback::callback **描述**

 接收到的headers的回调函数。

   #### [h2]usrObject

void* Rcp_OnHeaderReceiveCallback::usrObject **描述**

 用户定义的对象，在回调函数中使用。

---
*Updated: 2026-04-22 06:49:04*
