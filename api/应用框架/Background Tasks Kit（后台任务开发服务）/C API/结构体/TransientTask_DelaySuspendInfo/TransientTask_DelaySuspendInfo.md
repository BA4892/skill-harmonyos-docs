# TransientTask_DelaySuspendInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-transienttask-transienttask-delaysuspendinfo`

**DocID**: `39e30b2aaea548e1b2451bb0b750d551`

**NodeID**: `000201775796216196488279d4636254`

---

TransientTask_DelaySuspendInfo

typedef struct TransientTask_DelaySuspendInfo {...} TransientTask_DelaySuspendInfo

概述

定义短时任务返回信息结构体。用于返回当前短时任务的任务ID和剩余时间。

起始版本：
 13

相关模块：

TransientTask

所在头文件：

transient_task_type.h

汇总

[h2]成员变量

名称

描述

int32_t requestId

短时任务请求ID。

int32_t actualDelayTime

剩余时间（单位：毫秒）。

---
*2026-04-22T15:53:58.794Z*