# ffrt_mutex_t

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ffrt-ffrt-mutex-t`

**DocID**: `fd7260a34ada4dc4a6eba1fc6e834a3b`

**NodeID**: `0002017757963416849939f607fff673`

---

ffrt_mutex_t

typedef struct {...} ffrt_mutex_t

概述

FFRT互斥锁结构。

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

uint32_t storage[(ffrt_mutex_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]

FFRT互斥锁占用空间

---
*2026-04-22T15:55:03.171Z*