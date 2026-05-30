# JSVM_EnvScope__*

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-envscope--8h`

**DocID**: `40dfef7b4ca94853b56783b7257a3e83`

**NodeID**: `0002017757958595808373fc4d7a74c7`

---

JSVM_EnvScope__*

typedef struct JSVM_EnvScope__* JSVM_EnvScope

概述

表示用于控制附加到当前虚拟机实例的环境。只有当线程通过OH_JSVM_OpenEnvScope进入该环境的JSVM_EnvScope后，该环境才对线程的虚拟机实例可用。

起始版本：
 11

相关模块：

JSVM

所在头文件：

jsvm_types.h

---
*2026-04-22T15:55:04.569Z*