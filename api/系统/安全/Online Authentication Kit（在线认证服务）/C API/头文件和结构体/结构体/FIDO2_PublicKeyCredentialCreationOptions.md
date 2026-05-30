# FIDO2_PublicKeyCredentialCreationOptions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___public_key_credential_creation_options`

**DocID**: `139c8e9c0d9341cf814641eba2ba23b2`

**NodeID**: `000201775796341685190bcdae2fc922`

---

FIDO2_PublicKeyCredentialCreationOptions

概述

创建新的认证凭据的选项。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

FIDO2_PublicKeyCredentialRpEntity

rp

创建新凭据时的依赖方属性。

FIDO2_PublicKeyCredentialUserEntity

user

创建新凭据时用户的属性。

Uint8Buff

challenge

挑战值。

FIDO2_CredentialCreationOptionArray

pubKeyCredParams

认证凭据的附加参数数组。

uint32_t 
timeout

注册操作最长时间，单位为毫秒。默认为300000（5分钟）。可选。

FIDO2_PublicKeyCredentialDescriptorArray

excludeCredentials

FIDO服务器已注册的凭据列表。默认值为[]。可选。

FIDO2_AuthenticatorSelectionCriteria

authenticatorSelection

身份认证器相关配置项。

FIDO2_PublicKeyCredentialHintArray

hints

认证方式指示。默认值为[]。可选。

FIDO2_AttestationConveyancePreference

attestation

凭据传递首选项。默认值为none，可选。

FIDO2_AttestationFormatsArray

attestationFormats

依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。

char * 
extensions

扩展名必须是表示Map<string, Object>对象的JSON字符串。默认空。可选。

结构体成员变量说明

[h2]attestation

FIDO2_AttestationConveyancePreference
 FIDO2_PublicKeyCredentialCreationOptions::attestation

描述

凭据传递首选项。默认值为none，可选。

[h2]attestationFormats

FIDO2_AttestationFormatsArray
 FIDO2_PublicKeyCredentialCreationOptions::attestationFormats

描述

依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。

[h2]authenticatorSelection

FIDO2_AuthenticatorSelectionCriteria
 FIDO2_PublicKeyCredentialCreationOptions::authenticatorSelection

描述

身份认证器相关配置项。

[h2]challenge

Uint8Buff
 FIDO2_PublicKeyCredentialCreationOptions::challenge

描述

挑战。

[h2]excludeCredentials

FIDO2_PublicKeyCredentialDescriptorArray
 FIDO2_PublicKeyCredentialCreationOptions::excludeCredentials

描述

FIDO服务器已注册的凭据列表。默认值为[]。可选。

[h2]extensions

char* FIDO2_PublicKeyCredentialCreationOptions::extensions

描述

扩展名必须是表示Map<string, Object>对象的JSON字符串。可选。

[h2]hints

FIDO2_PublicKeyCredentialHintArray
 FIDO2_PublicKeyCredentialCreationOptions::hints

描述

认证方式指示。默认值为[]。可选。

[h2]pubKeyCredParams

FIDO2_CredentialCreationOptionArray
 FIDO2_PublicKeyCredentialCreationOptions::pubKeyCredParams

描述

认证凭据的附加参数数组。

[h2]rp

FIDO2_PublicKeyCredentialRpEntity
 FIDO2_PublicKeyCredentialCreationOptions::rp

描述

创建新凭据时的依赖方属性。

[h2]timeout

uint32_t FIDO2_PublicKeyCredentialCreationOptions::timeout

描述

注册操作最长时间，单位为毫秒。可选。

[h2]user

FIDO2_PublicKeyCredentialUserEntity
 FIDO2_PublicKeyCredentialCreationOptions::user

描述

创建新凭据时用户的属性。

---
*2026-04-22T15:55:02.735Z*