# crypto_digest.h

> **分区**: API参考  |  **Slug**: `capi-crypto-digest-h`  |  **DocID**: `d45f30da18b9487ab395986333a72cef`

---

# crypto_digest.h

  #### 概述

定义摘要算法API。

 **引用文件：** <CryptoArchitectureKit/crypto_digest.h>

 **库：** libohcrypto.so

 **系统能力：** SystemCapability.Security.CryptoFramework

 **起始版本：** 12

 **相关模块：** [CryptoDigestApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) OH_CryptoDigest 定义摘要结构体。       #### [h2]函数

 名称 描述   [OH_Crypto_ErrCode OH_CryptoDigest_Create(const char *algoName, OH_CryptoDigest **ctx)](#oh_cryptodigest_create) 根据给定的算法名称创建一个摘要实例。

  注意：创建的资源必须通过[OH_DigestCrypto_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_digestcrypto_destroy)销毁。

   [OH_Crypto_ErrCode OH_CryptoDigest_Update(OH_CryptoDigest *ctx, Crypto_DataBlob *in)](#oh_cryptodigest_update) 更新摘要数据。  [OH_Crypto_ErrCode OH_CryptoDigest_Final(OH_CryptoDigest *ctx, Crypto_DataBlob *out)](#oh_cryptodigest_final) 完成摘要计算。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

   [uint32_t OH_CryptoDigest_GetLength(OH_CryptoDigest *ctx)](#oh_cryptodigest_getlength) 获取摘要长度。  [const char *OH_CryptoDigest_GetAlgoName(OH_CryptoDigest *ctx)](#oh_cryptodigest_getalgoname) 获取摘要算法名称。  [void OH_DigestCrypto_Destroy(OH_CryptoDigest *ctx)](#oh_digestcrypto_destroy) 销毁摘要实例。       #### 函数说明

  #### [h2]OH_CryptoDigest_Create()

OH_Crypto_ErrCode OH_CryptoDigest_Create(const char *algoName, OH_CryptoDigest **ctx) **描述**

 根据给定的算法名称创建一个摘要实例。

  注意：创建的资源必须通过[OH_DigestCrypto_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_digestcrypto_destroy)销毁。

 **起始版本：** 12

 **参数：**

  参数项 描述   const char *algoName 用于生成摘要实例的算法名称。

  例如"SHA256"。

   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) **ctx 指向摘要实例的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoDigest_Update()

OH_Crypto_ErrCode OH_CryptoDigest_Update(OH_CryptoDigest *ctx, Crypto_DataBlob *in) **描述**

 更新摘要数据。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx 指向摘要实例。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *in 传入的消息。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

      **参考：**

 [OH_CryptoDigest_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_cryptodigest_final)

   #### [h2]OH_CryptoDigest_Final()

OH_Crypto_ErrCode OH_CryptoDigest_Final(OH_CryptoDigest *ctx, Crypto_DataBlob *out) **描述**

 完成摘要计算。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx 指向摘要实例。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *out 返回的Md的计算结果。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

      **参考：**

 [OH_CryptoDigest_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_cryptodigest_update)

   #### [h2]OH_CryptoDigest_GetLength()

uint32_t OH_CryptoDigest_GetLength(OH_CryptoDigest *ctx) **描述**

 获取摘要长度。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx 指向摘要实例。     **返回：**

  类型 说明   uint32_t 返回摘要长度。

  如果输入参数ctx为NULL，则返回401，其他情况下返回0。

        #### [h2]OH_CryptoDigest_GetAlgoName()

const char *OH_CryptoDigest_GetAlgoName(OH_CryptoDigest *ctx) **描述**

 获取摘要算法名称。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx 指向摘要实例。     **返回：**

  类型 说明   const char * 返回摘要算法名称。       #### [h2]OH_DigestCrypto_Destroy()

void OH_DigestCrypto_Destroy(OH_CryptoDigest *ctx) **描述**

 销毁摘要实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx 指向摘要实例。

---
*Updated: 2026-04-22 06:48:49*
