# HiAppEvent_AppEventInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hiappevent-hiappevent-appeventinfo`

**DocID**: `974a00aac20c49e98e2377416a0e711b`

**NodeID**: `000201775796341684762fc036e71a93`

---

HiAppEvent_AppEventInfo

typedef struct HiAppEvent_AppEventInfo {...} HiAppEvent_AppEventInfo

概述

单个事件信息，包含事件领域、事件名称、事件类型和事件携带的用json格式字符串表示的自定义参数列表。

起始版本：
 12

相关模块：

HiAppEvent

所在头文件：

hiappevent.h

汇总

[h2]成员变量

名称

描述

const char* domain

事件领域。

const char* name

事件名称。

enum 
EventType
 type

事件类型。

const char* params

json格式字符串类型的事件参数列表。

---
*2026-04-22T15:53:59.563Z*