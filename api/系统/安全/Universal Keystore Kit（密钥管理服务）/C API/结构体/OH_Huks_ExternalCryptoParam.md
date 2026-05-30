# OH_Huks_ExternalCryptoParam

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `sexternalcryptotypeapi-oh-huks-externalcryptoparam`

**DocID**: `9c4c366f7d6546718307e3b4b5211a5f`

**NodeID**: `0002017757963416847074a2a4bf1b61`

---

OH_Huks_ExternalCryptoParam

typedef struct {...} OH_Huks_ExternalCryptoParam

概述

定义参数集合中单个参数的结构体。

起始版本：
 22

相关模块：

HuksExternalCryptoTypeApi

所在头文件：

native_huks_external_crypto_type.h

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

标签内容。

boolParam：布尔类型参数。

int32Param：int32_t类型参数。

uint32Param：uint32_t类型参数。

uint64Param：uint64_t类型参数。

blob：OH_Huks_Blob类型参数。

---
*2026-04-22T15:55:02.785Z*