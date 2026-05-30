# Rcp_OnVoidCallback

> **分区**: API参考  |  **Slug**: `_rcp___on_void_callback`  |  **DocID**: `2c11943e3bcd4a5395e662e4f5ef33d1`

---

# Rcp_OnVoidCallback

  #### 概述

在[Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)中配置的数据结束或已取消事件的回调配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_OnVoidCallbackFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_onvoidcallbackfunc)[callback](#callback) DataEnd或Canceled事件回调函数。  void * [usrObject](#usrobject) 用户定义的对象，在回调函数中使用。       #### 结构体成员变量说明

  #### [h2]callback

Rcp_OnVoidCallbackFunc Rcp_OnVoidCallback::callback **描述**

 DataEnd或Canceled事件回调函数。

   #### [h2]usrObject

void* Rcp_OnVoidCallback::usrObject **描述**

 用户定义的对象，在回调函数中使用。

---
*Updated: 2026-04-22 06:49:05*
