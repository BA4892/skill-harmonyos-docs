# native_huks_external_crypto_type.h

> **分区**: API参考  |  **Slug**: `capi-native-huks-external-crypto-type-h`  |  **DocID**: `cb1d8fd3b08d485e950fc1b63ff39895`

---

# native_huks_external_crypto_type.h

  #### 概述

定义面向外部密钥管理扩展的结构体与枚举类型。

 **引用文件：** <huks/native_huks_external_crypto_type.h>

 **库：** libhuks_external_crypto.z.so

 **系统能力：** SystemCapability.Security.Huks.CryptoExtension

 **起始版本：** 22

 **相关模块：** [HuksExternalCryptoTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-huksexternalcryptotypeapi)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_Huks_ExternalCryptoParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/sexternalcryptotypeapi-oh-huks-externalcryptoparam) OH_Huks_ExternalCryptoParam 定义参数集合中单个参数的结构体。  [OH_Huks_ExternalCryptoParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ternalcryptotypeapi-oh-huks-externalcryptoparamset) OH_Huks_ExternalCryptoParamSet 定义外部加密参数集合的结构。       #### [h2]枚举

 名称 typedef关键字 描述   [OH_Huks_ExternalCryptoTag](#oh_huks_externalcryptotag) OH_Huks_ExternalCryptoTag 列举参数集合中使用的标签值。       #### [h2]宏定义

 名称 描述   OH_HUKS_EXTERNAL_CRYPTO_MAX_PROVIDER_NAME_LEN 100 定义provider名称的最大字节长度。

 **起始版本：** 22

   OH_HUKS_EXTERNAL_CRYPTO_MAX_RESOURCE_ID_LEN 512 定义资源ID的最大字节长度。

 **起始版本：** 22

        #### 枚举类型说明

  #### [h2]OH_Huks_ExternalCryptoTag

enum OH_Huks_ExternalCryptoTag **描述**

 列举参数集合中使用的标签值。

 **起始版本：** 22

  枚举项 描述   OH_HUKS_EXT_CRYPTO_TAG_UKEY_PIN = OH_HUKS_TAG_TYPE_BYTES | 200001 PIN码。  OH_HUKS_EXT_CRYPTO_TAG_ABILITY_NAME = OH_HUKS_TAG_TYPE_BYTES | 200002 能力名称。  OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA = OH_HUKS_TAG_TYPE_BYTES | 200003 附加数据。  OH_HUKS_EXT_CRYPTO_TAG_UID = OH_HUKS_TAG_TYPE_INT | 200004 调用方的UID。  OH_HUKS_EXT_CRYPTO_TAG_PURPOSE = OH_HUKS_TAG_TYPE_INT | 200005 证书链用途。  OH_HUKS_EXT_CRYPTO_TAG_TIMEOUT = OH_HUKS_TAG_TYPE_UINT | 200006 获取属性操作的超时时间，单位：s。       #### [h2]OH_Huks_ExternalPinAuthState

enum OH_Huks_ExternalPinAuthState **描述**

 列举Ukey PIN码认证状态。

 **起始版本：** 22

  枚举项 描述   OH_HUKS_EXT_CRYPTO_PIN_NO_AUTH = 0 PIN码未认证。  OH_HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED = 1 PIN码认证成功。  OH_HUKS_EXT_CRYPTO_PIN_LOCKED = 2 PIN码被锁。

---
*Updated: 2026-04-22 06:48:18*
