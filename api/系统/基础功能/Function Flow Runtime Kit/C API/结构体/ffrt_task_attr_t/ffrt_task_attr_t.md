# ffrt_task_attr_t

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ffrt-ffrt-task-attr-t`

**DocID**: `665dbebd1fe04a2f81ae1144f26148eb`

**NodeID**: `0002017757963416848904779a6e0c84`

---

ffrt_task_attr_t

typedef struct {...} ffrt_task_attr_t

概述

并行任务属性结构。

起始版本：
 10

相关模块：

FFRT

所在头文件：

type_def.h

汇总

[h2]成员变量

名称

描述

uint32_t storage[(ffrt_task_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]

任务属性占用空间

---
*2026-04-22T15:53:59.399Z*