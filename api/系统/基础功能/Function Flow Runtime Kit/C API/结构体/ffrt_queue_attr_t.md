# ffrt_queue_attr_t

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ffrt-ffrt-queue-attr-t`

**DocID**: `83a8c64220fb48e6a01bf6f3eee6fd2f`

**NodeID**: `0002017757963416849175bf7d89ab5b`

---

ffrt_queue_attr_t

typedef struct {...} ffrt_queue_attr_t

概述

串行队列属性结构。

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

uint32_t storage[(ffrt_queue_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]

串行队列属性占用空间

---
*2026-04-22T15:55:03.168Z*