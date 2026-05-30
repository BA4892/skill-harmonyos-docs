# FIDO2_PublicKeyAssertionCredential

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___public_key_assertion_credential`

**DocID**: `f36de33d5e44492591e510e66ed273d8`

**NodeID**: `0002017757963416851865dcbade9817`

---

FIDO2_PublicKeyAssertionCredential

概述

定义获取认证结果结构体。

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

const char * 
id

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

const char * 
type

该属性以JSON字符串形式，返回对象的接口对象的插槽的值。该插槽用于指定此对象所表示的凭据类型。

FIDO2_AuthenticatorResponse

response

认证器断言响应。

FIDO2_AuthenticatorAttachment

authenticatorAttachment

认证器信息（平台、漫游）。默认值为FIDO2_PLATFORM。可选。

AuthenticationExtensionsClientOutputs

clientExtensionResults

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。

结构体成员变量说明

[h2]authenticatorAttachment

FIDO2_AuthenticatorAttachment
 FIDO2_PublicKeyAssertionCredential::authenticatorAttachment

描述

认证器信息（平台、漫游）。可选。

[h2]clientExtensionResults

AuthenticationExtensionsClientOutputs
 FIDO2_PublicKeyAssertionCredential::clientExtensionResults

描述

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。

[h2]id

const char* FIDO2_PublicKeyAssertionCredential::id

描述

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

[h2]rawId

Uint8Buff
 FIDO2_PublicKeyAssertionCredential::rawId

描述

原始凭据标识符。

[h2]response

FIDO2_AuthenticatorResponse
 FIDO2_PublicKeyAssertionCredential::response

描述

认证器断言响应。

[h2]type

const char* FIDO2_PublicKeyAssertionCredential::type

描述

该属性以JSON字符串形式返回对象的接口对象的插槽的值，该插槽指定此对象所表示的凭据类型。

---
*2026-04-22T15:53:59.040Z*