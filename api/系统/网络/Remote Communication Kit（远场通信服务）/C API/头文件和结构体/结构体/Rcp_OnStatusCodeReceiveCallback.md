# Rcp_OnStatusCodeReceiveCallback

> **分区**: API参考  |  **Slug**: `_rcp___on_status_code_callback`  |  **DocID**: `2ad3d6a39a6b4d4eb258cdfb3180946b`

---

# Rcp_OnStatusCodeReceiveCallback

  #### 概述

响应的状态码接收回调函数。可以通过[HMS_Rcp_SetRequestOnStatusCodeReceiveCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_setrequestonstatuscodereceivecallback)为请求设置相应回调函数。

 **起始版本：** 6.0.1(21)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_OnStatusCodeReceiveCallbackFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_onstatuscodereceivecallbackfunc) 请求过程中接收响应状态码的回调函数。  void *[usrObject](#usrobject) 用户定义的对象，在回调函数中使用。       #### 结构体成员变量说明

  #### [h2]callback

Rcp_OnStatusCodeReceiveCallbackFunc Rcp_OnStatusCodeReceiveCallback::callback **描述**

 响应状态码接收回调函数。

   #### [h2]usrObject

void* Rcp_OnStatusCodeReceiveCallback::usrObject **描述**

 用户定义的对象，在回调函数中使用。

---
*Updated: 2026-04-22 06:49:05*
