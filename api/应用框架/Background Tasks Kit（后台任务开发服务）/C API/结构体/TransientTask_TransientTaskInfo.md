# TransientTask_TransientTaskInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-transienttask-transienttask-transienttaskinfo`

**DocID**: `bc92095d49c3440b90ff632f5684e4c7`

**NodeID**: `000201775796216196637bca5c7fea66`

---

TransientTask_TransientTaskInfo

typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo

概述

定义所有短时任务信息结构体。用于返回当日剩余总配额和已申请的所有短时任务信息。

起始版本：
 20

相关模块：

TransientTask

所在头文件：

transient_task_type.h

汇总

[h2]成员变量

名称

描述

int32_t remainingQuota

当日剩余总配额。单位：毫秒。

TransientTask_DelaySuspendInfo
 transientTasks[
TRANSIENT_TASK_MAX_NUM
]

已申请的所有短时任务信息。包括短时任务请求ID、剩余时间（单位：毫秒）。

---
*2026-04-22T15:55:02.454Z*