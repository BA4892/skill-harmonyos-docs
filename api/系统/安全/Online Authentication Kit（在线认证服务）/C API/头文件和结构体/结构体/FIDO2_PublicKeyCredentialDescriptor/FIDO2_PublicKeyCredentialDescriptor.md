# FIDO2_PublicKeyCredentialDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___public_key_credential_descriptor`

**DocID**: `6cd6e357af4043be806c3d67244f1754`

**NodeID**: `000201775796341685193e8e19521c48`

---

FIDO2_PublicKeyCredentialDescriptor

概述

用于注册或认证凭据的参数。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

FIDO2_PublicKeyCredentialType

type

凭证类型。

Uint8Buff

id

凭据标识符。

FIDO2_AuthenticatorTransportArray

transports

定义身份认证器访问类型（USB、NFC、蓝牙）。

结构体成员变量说明

[h2]id

Uint8Buff
 FIDO2_PublicKeyCredentialDescriptor::id

描述

凭据标识符。

[h2]transports

FIDO2_AuthenticatorTransportArray
 FIDO2_PublicKeyCredentialDescriptor::transports

描述

定义身份认证器访问类型（USB、NFC、蓝牙）。

[h2]type

FIDO2_PublicKeyCredentialType
 FIDO2_PublicKeyCredentialDescriptor::type

描述

凭证类型。

---
*2026-04-22T15:53:59.041Z*