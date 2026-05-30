# FIDO2_AttestationFormatsArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___attestation_formats_array`

**DocID**: `9aced53993674933ac63b59e4cd2b08a`

**NodeID**: `000201775796341685140607604960b6`

---

FIDO2_AttestationFormatsArray

概述

依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

uint32_t 
attestationFormatsNum

PubKeyCredParam个数。

char ** 
attestationFormats

认证凭据的附加参数列表。

结构体成员变量说明

[h2]attestationFormats

char** FIDO2_AttestationFormatsArray::attestationFormats

描述

认证凭据的附加参数列表。

[h2]attestationFormatsNum

uint32_t FIDO2_AttestationFormatsArray::attestationFormatsNum

描述

认证凭据的附加参数列表长度。

---
*2026-04-22T15:55:02.722Z*