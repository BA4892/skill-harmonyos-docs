# FIDO2_AuthenticatorResponse

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___authenticator_response`

**DocID**: `f668a860099546a086bbcdbb74c9c558`

**NodeID**: `000201775796341685160d3c566855e4`

---

FIDO2_AuthenticatorResponse

概述

定义获取认证器断言响应的结构体。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

Uint8Buff

authenticatorData

身份认证器数据。

Uint8Buff

signature

签名。

Uint8Buff

userHandle

用户句柄（用户ID）。可选。

Uint8Buff

clientDataJson

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

结构体成员变量说明

[h2]authenticatorData

Uint8Buff
 FIDO2_AuthenticatorResponse::authenticatorData

描述

身份认证器数据。

[h2]clientDataJson

Uint8Buff
 FIDO2_AuthenticatorResponse::clientDataJson

描述

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

[h2]signature

Uint8Buff
 FIDO2_AuthenticatorResponse::signature

描述

签名。

[h2]userHandle

Uint8Buff
 FIDO2_AuthenticatorResponse::userHandle

描述

用户句柄。可选。

---
*2026-04-22T15:53:59.035Z*