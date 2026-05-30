# JSVM_ExtendedErrorInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-extendederrorinfo`

**DocID**: `fec23f76eff34873a7969f3533d64293`

**NodeID**: `000201775795859580827740b87c4c46`

---

JSVM_ExtendedErrorInfo

typedef struct {...} JSVM_ExtendedErrorInfo

概述

扩展的异常信息。

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

const char* errorMessage

UTF-8编码的字符串，包含异常信息。

void* engineReserved

特定于VM的详细异常信息。目前尚未为任何VM实现此功能。

uint32_t engineErrorCode

特定于VM的异常代码。目前尚未为任何VM实现此功能。

JSVM_Status errorCode

源自最后一个异常的JSVM-API状态码。

---
*2026-04-22T15:54:00.639Z*