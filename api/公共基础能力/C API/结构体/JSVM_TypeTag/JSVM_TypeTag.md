# JSVM_TypeTag

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-typetag`

**DocID**: `ae994c3d21704a77af175dbb343b22b5`

**NodeID**: `00020177579585958082885dd6608476`

---

JSVM_TypeTag

typedef struct {...} JSVM_TypeTag

概述

类型标记，存储为两个无符号64位整数的128位值。作为一个UUID，通过它，JavaScript对象可以是"tagged"，以确保它们的类型保持不变。

起始版本：
 11

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

uint64_t lower

低64位

uint64_t upper

高64位

---
*2026-04-22T15:54:00.640Z*