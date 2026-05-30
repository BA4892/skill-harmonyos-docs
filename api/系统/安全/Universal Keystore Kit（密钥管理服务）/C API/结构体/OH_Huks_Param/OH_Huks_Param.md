# OH_Huks_Param

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hukstypeapi-oh-huks-param`

**DocID**: `a21d8dd484a649d4934298ca411265a3`

**NodeID**: `000201775796341684909bd1b8301a95`

---

OH_Huks_Param

struct OH_Huks_Param {...}

概述

定义参数集中的参数结构体类型。

起始版本：
 9

相关模块：

HuksTypeApi

所在头文件：

native_huks_type.h

汇总

[h2]成员变量

名称

描述

uint32_t tag

标签值。

union {

 bool boolParam; 

 int32_t int32Param; 

 uint32_t uint32Param; 

 uint64_t uint64Param; 

struct OH_Huks_Blob
 blob; 

 }

boolParam：bool型参数。

int32Param：int32_t型参数。

uint32Param：uint32_t型参数。

uint64Param：uint64_t型参数。

blob：OH_Huks_Blob型参数。

---
*2026-04-22T15:53:59.082Z*