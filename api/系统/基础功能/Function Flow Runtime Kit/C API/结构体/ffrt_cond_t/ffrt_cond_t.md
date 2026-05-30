# ffrt_cond_t

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ffrt-ffrt-cond-t`

**DocID**: `9d613ed732834bd890d8f5ca8e3bada7`

**NodeID**: `000201775796341685019a5f05c6677d`

---

ffrt_cond_t

typedef struct {...} ffrt_cond_t

概述

FFRT条件变量结构。

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

uint32_t storage[(ffrt_cond_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]

FFRT条件变量占用空间

---
*2026-04-22T15:53:59.403Z*