# JSVM_CodeCache

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-codecache`

**DocID**: `f4ccad9f22934a9e82e4f40597d62c28`

**NodeID**: `00020177579585958083285dd2019357`

---

JSVM_CodeCache

typedef struct {...} JSVM_CodeCache

概述

表示当id为JSVM_COMPILE_CODE_CACHE时，content的类型。

起始版本：
 12

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

uint8_t* cache

缓存地址。

size_t length

缓存大小。

---
*2026-04-22T15:54:00.642Z*