# FIDO2_AuthenticatorSelectionCriteria

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___authenticator_selection_criteria`

**DocID**: `e6db363288204c2aa89eba9c08b30780`

**NodeID**: `0002017757963416851654099e980451`

---

FIDO2_AuthenticatorSelectionCriteria

概述

由webAuthn依赖方指定，与认证器有关。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

FIDO2_AuthenticatorAttachment

authenticatorAttachment

认证器信息（平台、漫游）。默认值为FIDO2_PLATFORM。可选。

const char * 
residentKey

常驻键。默认空。可选。

bool 
requireResidentKey

是否需要常驻键，true代表需要常驻键，false代表不需要。默认值为false。可选。

FIDO2_UserVerificationRequirement

userVerification

用户认证需求枚举。默认值为preferred。可选。

结构体成员变量说明

[h2]authenticatorAttachment

FIDO2_AuthenticatorAttachment
 FIDO2_AuthenticatorSelectionCriteria::authenticatorAttachment

描述

认证器信息（平台、漫游）。可选。

[h2]requireResidentKey

bool FIDO2_AuthenticatorSelectionCriteria::requireResidentKey

描述

是否需要常驻键，true代表需要常驻键，false代表不需要。默认值为false。可选。

[h2]residentKey

const char* FIDO2_AuthenticatorSelectionCriteria::residentKey

描述

常驻键。可选。

[h2]userVerification

FIDO2_UserVerificationRequirement
 FIDO2_AuthenticatorSelectionCriteria::userVerification

描述

用户认证需求枚举。默认值为preferred。可选。

---
*2026-04-22T15:53:59.036Z*