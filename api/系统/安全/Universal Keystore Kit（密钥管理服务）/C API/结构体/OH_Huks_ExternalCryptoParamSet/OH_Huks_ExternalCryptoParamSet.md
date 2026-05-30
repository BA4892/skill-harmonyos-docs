# OH_Huks_ExternalCryptoParamSet

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ternalcryptotypeapi-oh-huks-externalcryptoparamset`

**DocID**: `8cac089a20314535a1922e2040c40ec8`

**NodeID**: `00020177579634168479639690188c42`

---

OH_Huks_ExternalCryptoParamSet

typedef struct OH_Huks_ExternalCryptoParamSet {...} OH_Huks_ExternalCryptoParamSet

概述

定义外部加密参数集合的结构。

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

uint32_t paramSetSize

参数集合所占内存大小，单位：Byte。

起始版本：
 22

uint32_t paramsCnt

参数集合中的参数数量。

起始版本：
 22

OH_Huks_ExternalCryptoParam
 params[]

参数数组，大小由paramSetSize与paramsCnt决定。

起始版本：
 22

---
*2026-04-22T15:53:59.080Z*