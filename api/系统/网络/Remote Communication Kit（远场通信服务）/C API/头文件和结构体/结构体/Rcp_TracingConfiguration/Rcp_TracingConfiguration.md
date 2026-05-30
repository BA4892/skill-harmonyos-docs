# Rcp_TracingConfiguration

> **分区**: API参考  |  **Slug**: `_rcp___tracing_configuration`  |  **DocID**: `dc66ca7d4dd94125836aa4802e18a04f`

---

# Rcp_TracingConfiguration

  #### 概述

请求追踪配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   bool [verbose](#verbose) 请求运行时是否记录详细日志。默认值为false。如果设置了infoToCollect中的选项，则自动启用。  [Rcp_InfoToCollect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___info_to_collect)[infoToCollect](#infotocollect) 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。  bool [collectTimeInfo](#collecttimeinfo) 是否收集请求计时信息。默认值为false。  [Rcp_EventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___events_handler)[httpEventsHandler](#httpeventshandler) 监听不同HTTP事件的回调函数。       #### 结构体成员变量说明

  #### [h2]collectTimeInfo

bool Rcp_TracingConfiguration::collectTimeInfo **描述**

 是否收集请求计时信息。默认值为false。

   #### [h2]httpEventsHandler

Rcp_EventsHandler Rcp_TracingConfiguration::httpEventsHandler **描述**

 监听不同HTTP事件的回调函数。

   #### [h2]infoToCollect

Rcp_InfoToCollect Rcp_TracingConfiguration::infoToCollect **描述**

 指定要收集的请求处理事件。可以通过响应对象检查收集的事件。

   #### [h2]verbose

bool Rcp_TracingConfiguration::verbose **描述**

 请求运行时是否记录详细日志。默认值为false。如果设置了infoToCollect中的选项，则自动启用。

---
*Updated: 2026-04-22 06:49:05*
