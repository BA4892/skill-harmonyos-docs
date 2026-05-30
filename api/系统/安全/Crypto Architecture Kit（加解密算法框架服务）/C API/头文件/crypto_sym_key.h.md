# crypto_sym_key.h

> **分区**: API参考  |  **Slug**: `capi-crypto-sym-key-h`  |  **DocID**: `c54ae3120bae42198d60e2c784b16b15`

---

# crypto_sym_key.h

  #### 概述

定义对称密钥接口。

 **引用文件：** <CryptoArchitectureKit/crypto_sym_key.h>

 **库：** libohcrypto.so

 **系统能力：** SystemCapability.Security.CryptoFramework

 **起始版本：** 12

 **相关模块：** [CryptoSymKeyApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) OH_CryptoSymKey 定义对称密钥结构体。  [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) OH_CryptoSymKeyGenerator 定义对称密钥结构。       #### [h2]函数

 名称 描述   [OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Create(const char *algoName, OH_CryptoSymKeyGenerator **ctx)](#oh_cryptosymkeygenerator_create) 根据给定的算法名称创建对称密钥生成器。

  注意：创建的资源必须通过[OH_CryptoSymKeyGenerator_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_destroy)销毁。

   [OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Generate(OH_CryptoSymKeyGenerator *ctx, OH_CryptoSymKey **keyCtx)](#oh_cryptosymkeygenerator_generate) 随机生成对称密钥。

  注意：使用完成后必须通过[OH_CryptoSymKey_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_destroy)销毁keyCtx内存。

   [OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Convert(OH_CryptoSymKeyGenerator *ctx, const Crypto_DataBlob *keyData, OH_CryptoSymKey **keyCtx)](#oh_cryptosymkeygenerator_convert) 将对称密钥数据转换为对称密钥。

  注意：使用完成后必须通过[OH_CryptoSymKey_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_destroy)销毁keyCtx内存。

   [const char *OH_CryptoSymKeyGenerator_GetAlgoName(OH_CryptoSymKeyGenerator *ctx)](#oh_cryptosymkeygenerator_getalgoname) 获取对称密钥生成器的算法名称。  [void OH_CryptoSymKeyGenerator_Destroy(OH_CryptoSymKeyGenerator *ctx)](#oh_cryptosymkeygenerator_destroy) 销毁对称密钥生成器。  [const char *OH_CryptoSymKey_GetAlgoName(OH_CryptoSymKey *keyCtx)](#oh_cryptosymkey_getalgoname) 从对称密钥获取对称密钥算法名称。  [OH_Crypto_ErrCode OH_CryptoSymKey_GetKeyData(OH_CryptoSymKey *keyCtx, Crypto_DataBlob *out)](#oh_cryptosymkey_getkeydata) 从密钥实例获取对称密钥数据。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

   [void OH_CryptoSymKey_Destroy(OH_CryptoSymKey *keyCtx)](#oh_cryptosymkey_destroy) 销毁对称密钥实例。       #### 函数说明

  #### [h2]OH_CryptoSymKeyGenerator_Create()

OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Create(const char *algoName, OH_CryptoSymKeyGenerator **ctx) **描述**

 根据给定的算法名称创建对称密钥生成器。

  注意：创建的资源必须通过[OH_CryptoSymKeyGenerator_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_destroy)销毁。

 **起始版本：** 12

 **参数：**

  参数项 描述   const char *algoName 用于生成生成器的算法名称。

  例如"AES256"、"AES128"、"SM4"等。

   [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) **ctx 指向对称密钥生成器实例的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoSymKeyGenerator_Generate()

OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Generate(OH_CryptoSymKeyGenerator *ctx, OH_CryptoSymKey **keyCtx) **描述**

 随机生成对称密钥。

  注意：使用完成后必须通过[OH_CryptoSymKey_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_destroy)销毁keyCtx内存。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) *ctx 指向对称密钥生成器实例。  [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) **keyCtx 指向对称密钥的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoSymKeyGenerator_Convert()

OH_Crypto_ErrCode OH_CryptoSymKeyGenerator_Convert(OH_CryptoSymKeyGenerator *ctx, const Crypto_DataBlob *keyData, OH_CryptoSymKey **keyCtx) **描述**

 将对称密钥数据转换为对称密钥。

  注意：使用完成后必须通过[OH_CryptoSymKey_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_destroy)销毁keyCtx内存。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) *ctx 指向对称密钥生成器实例。  [const Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *keyData 指向生成对称密钥的数据。  [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) **keyCtx 指向对称密钥实例的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoSymKeyGenerator_GetAlgoName()

const char *OH_CryptoSymKeyGenerator_GetAlgoName(OH_CryptoSymKeyGenerator *ctx) **描述**

 获取对称密钥生成器的算法名称。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) *ctx 指向对称密钥生成器实例的指针。     **返回：**

  类型 说明   const char * 返回对称密钥生成器算法名称。       #### [h2]OH_CryptoSymKeyGenerator_Destroy()

void OH_CryptoSymKeyGenerator_Destroy(OH_CryptoSymKeyGenerator *ctx) **描述**

 销毁对称密钥生成器。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkeygenerator) *ctx 指向对称密钥生成器实例的指针。       #### [h2]OH_CryptoSymKey_GetAlgoName()

const char *OH_CryptoSymKey_GetAlgoName(OH_CryptoSymKey *keyCtx) **描述**

 从对称密钥获取对称密钥算法名称。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) *keyCtx 指向对称密钥实例。     **返回：**

  类型 说明   const char * 返回对称密钥算法名称。       #### [h2]OH_CryptoSymKey_GetKeyData()

OH_Crypto_ErrCode OH_CryptoSymKey_GetKeyData(OH_CryptoSymKey *keyCtx, Crypto_DataBlob *out) **描述**

 从密钥实例获取对称密钥数据。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) *keyCtx 指向对称密钥实例。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *out 获取到的结果。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_INVALID_PARAMS：参数无效。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoSymKey_Destroy()

void OH_CryptoSymKey_Destroy(OH_CryptoSymKey *keyCtx) **描述**

 销毁对称密钥实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_CryptoSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptosymkeyapi-oh-cryptosymkey) *keyCtx 指向对称密钥实例。

---
*Updated: 2026-04-22 06:49:02*
