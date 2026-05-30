# crypto_key_agreement.h

> **分区**: API参考  |  **Slug**: `capi-crypto-key-agreement-h`  |  **DocID**: `231a867ecc6f463e99ebfe431acbcf93`

---

# crypto_key_agreement.h

  #### 概述

定义密钥协商接口。

 **引用文件：** <CryptoArchitectureKit/crypto_key_agreement.h>

 **库：** libohcrypto.so

 **系统能力：** SystemCapability.Security.CryptoFramework

 **起始版本：** 20

 **相关模块：** [CryptoKeyAgreementApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptokeyagreementapi)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_CryptoKeyAgreement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptokeyagreementapi-oh-cryptokeyagreement) OH_CryptoKeyAgreement 定义密钥协商结构。       #### [h2]函数

 名称 描述   [OH_Crypto_ErrCode OH_CryptoKeyAgreement_Create(const char *algoName, OH_CryptoKeyAgreement **ctx)](#oh_cryptokeyagreement_create) 根据给定的算法名称创建密钥协商实例。

  注意：创建的资源必须通过[OH_CryptoKeyAgreement_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-key-agreement-h#oh_cryptokeyagreement_destroy)销毁。

   [OH_Crypto_ErrCode OH_CryptoKeyAgreement_GenerateSecret(OH_CryptoKeyAgreement *ctx, OH_CryptoPrivKey *privkey, OH_CryptoPubKey *pubkey, Crypto_DataBlob *secret)](#oh_cryptokeyagreement_generatesecret) 生成密钥协商的秘密值。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放secret内存。

   [void OH_CryptoKeyAgreement_Destroy(OH_CryptoKeyAgreement *ctx)](#oh_cryptokeyagreement_destroy) 销毁密钥协商实例。       #### 函数说明

  #### [h2]OH_CryptoKeyAgreement_Create()

OH_Crypto_ErrCode OH_CryptoKeyAgreement_Create(const char *algoName, OH_CryptoKeyAgreement **ctx) **描述**

 根据给定的算法名称创建密钥协商实例。

  注意：创建的资源必须通过[OH_CryptoKeyAgreement_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-key-agreement-h#oh_cryptokeyagreement_destroy)销毁。

 **起始版本：** 20

 **参数：**

  参数项 描述   const char *algoName 用于生成密钥协商实例的算法名称。

  例如"ECC"、"X25519"。

   [OH_CryptoKeyAgreement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptokeyagreementapi-oh-cryptokeyagreement) **ctx 密钥协商实例。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoKeyAgreement_GenerateSecret()

OH_Crypto_ErrCode OH_CryptoKeyAgreement_GenerateSecret(OH_CryptoKeyAgreement *ctx, OH_CryptoPrivKey *privkey, OH_CryptoPubKey *pubkey, Crypto_DataBlob *secret) **描述**

 生成密钥协商的秘密值。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放secret内存。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoKeyAgreement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptokeyagreementapi-oh-cryptokeyagreement) *ctx 密钥协商实例。  [OH_CryptoPrivKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptoasymkeyapi-oh-cryptoprivkey) *privkey 私钥。  [OH_CryptoPubKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptoasymkeyapi-oh-cryptopubkey) *pubkey 公钥。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *secret 秘密值。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoKeyAgreement_Destroy()

void OH_CryptoKeyAgreement_Destroy(OH_CryptoKeyAgreement *ctx) **描述**

 销毁密钥协商实例。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoKeyAgreement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptokeyagreementapi-oh-cryptokeyagreement) *ctx 密钥协商实例。

---
*Updated: 2026-04-22 06:48:56*
