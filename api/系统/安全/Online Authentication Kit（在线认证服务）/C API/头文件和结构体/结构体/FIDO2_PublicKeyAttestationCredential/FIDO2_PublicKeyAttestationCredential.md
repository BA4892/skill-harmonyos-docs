# FIDO2_PublicKeyAttestationCredential

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___public_key_attestation_credential`

**DocID**: `312b006d736d4b5d9b64a91b1d3edd0c`

**NodeID**: `00020177579634168518976ba7a7472b`

---

FIDO2_PublicKeyAttestationCredential

概述

定义获取注册结果结构体。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

Uint8Buff

rawId

原始凭据标识符。

FIDO2_AuthenticatorAttestationResponse

response

认证器证明响应。

FIDO2_AuthenticatorAttachment

authenticatorAttachment

认证器信息（平台、漫游）。默认值为FIDO2_PLATFORM。可选。

const char * 
id

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

const char * 
type

此属性返回对象的接口对象的槽的值，它指定此对象所代表的凭据类型。

AuthenticationExtensionsClientOutputs

clientExtensionResults

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。

结构体成员变量说明

[h2]authenticatorAttachment

FIDO2_AuthenticatorAttachment
 FIDO2_PublicKeyAttestationCredential::authenticatorAttachment

描述

认证器信息（平台、漫游）。可选。

[h2]clientExtensionResults

AuthenticationExtensionsClientOutputs
 FIDO2_PublicKeyAttestationCredential::clientExtensionResults

描述

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。

[h2]id

const char* FIDO2_PublicKeyAttestationCredential::id

描述

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

[h2]rawId

Uint8Buff
 FIDO2_PublicKeyAttestationCredential::rawId

描述

原始凭据标识符。

[h2]response

FIDO2_AuthenticatorAttestationResponse
 FIDO2_PublicKeyAttestationCredential::response

描述

认证器证明响应。

[h2]type

const char* FIDO2_PublicKeyAttestationCredential::type

描述

此属性返回对象的接口对象的槽的值，它指定此对象所代表的凭据类型。

---
*2026-04-22T15:53:59.040Z*