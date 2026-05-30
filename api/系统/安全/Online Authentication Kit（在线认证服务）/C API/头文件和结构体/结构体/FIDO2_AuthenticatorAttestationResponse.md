# FIDO2_AuthenticatorAttestationResponse

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___authenticator_attestation_response`

**DocID**: `55fdd34590dc4bfdaf68c83c222ceaa6`

**NodeID**: `00020177579634168514409c1109eed0`

---

FIDO2_AuthenticatorAttestationResponse

概述

认证器声明响应。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

Uint8Buff

attestationObject

声明对象。

Uint8Buff

clientDataJson

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

Uint8Buff

publicKey

publicKey凭证请求的选项，字节流。

Uint8Buff

authenticatorData

认证器数据，字节流。

FIDO2_Algorithm

publicKeyAlgorithm

密码算法。

FIDO2_AuthenticatorTransportArray

transports

定义身份认证器访问类型（USB、NFC、蓝牙）。

结构体成员变量说明

[h2]attestationObject

Uint8Buff
 FIDO2_AuthenticatorAttestationResponse::attestationObject

描述

声明对象。

[h2]authenticatorData

Uint8Buff
 FIDO2_AuthenticatorAttestationResponse::authenticatorData

描述

认证器数据，字节流。

[h2]clientDataJson

Uint8Buff
 FIDO2_AuthenticatorAttestationResponse::clientDataJson

描述

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

[h2]publicKey

Uint8Buff
 FIDO2_AuthenticatorAttestationResponse::publicKey

描述

publicKey凭证请求的选项，字节流。

[h2]publicKeyAlgorithm

FIDO2_Algorithm
 FIDO2_AuthenticatorAttestationResponse::publicKeyAlgorithm

描述

密码算法。

[h2]transports

FIDO2_AuthenticatorTransportArray
 FIDO2_AuthenticatorAttestationResponse::transports

描述

定义身份认证器访问类型（USB、NFC、蓝牙）。

---
*2026-04-22T15:55:02.723Z*