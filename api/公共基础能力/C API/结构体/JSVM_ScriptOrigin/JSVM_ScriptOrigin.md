# JSVM_ScriptOrigin

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-scriptorigin`

**DocID**: `1461739bc11743e685e6043fd9969df9`

**NodeID**: `0002017757958595808305426262d5d8`

---

JSVM_ScriptOrigin

typedef struct {...} JSVM_ScriptOrigin

概述

某段JavaScript代码的原始信息，如sourceMap路径、源文件名、源文件中的起始行/列号等。

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

const char* sourceMapUrl

Sourcemap 路径。

const char* resourceName

源文件名。

size_t resourceLineOffset

这段代码在源文件中的起始行号。

size_t resourceColumnOffset

这段代码在源文件中的起始列号。

---
*2026-04-22T15:54:00.641Z*