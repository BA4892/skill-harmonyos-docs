# ffrt_rwlock_t

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ffrt-ffrt-rwlock-t`

**DocID**: `a92fdd970d6641d284c6ff38c5ba85e6`

**NodeID**: `000201775796341685008818233e6b41`

---

ffrt_rwlock_t

typedef struct {...} ffrt_rwlock_t

概述

FFRT读写锁结构。

起始版本：
 18

相关模块：

FFRT

所在头文件：

type_def.h

汇总

[h2]成员变量

名称

描述

uint32_t storage[(ffrt_rwlock_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]

FFRT读写锁占用空间

---
*2026-04-22T15:53:59.402Z*