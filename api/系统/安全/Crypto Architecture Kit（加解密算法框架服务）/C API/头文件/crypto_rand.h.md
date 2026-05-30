# crypto_rand.h

> **分区**: API参考  |  **Slug**: `capi-crypto-rand-h`  |  **DocID**: `9acc4d3d8b3b428a973efbdd825417da`

---

# crypto_rand.h

  #### 概述

定义随机数生成器API。

 **引用文件：** <CryptoArchitectureKit/crypto_rand.h>

 **库：** libohcrypto.so

 **系统能力：** SystemCapability.Security.CryptoFramework

 **起始版本：** 20

 **相关模块：** [CryptoRandApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) OH_CryptoRand 定义随机数生成器结构。       #### [h2]函数

 名称 描述   [OH_Crypto_ErrCode OH_CryptoRand_Create(OH_CryptoRand **ctx)](#oh_cryptorand_create) 创建随机数生成器。

  注意：创建的资源必须通过[OH_CryptoRand_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_destroy)销毁。

   [OH_Crypto_ErrCode OH_CryptoRand_GenerateRandom(OH_CryptoRand *ctx, int len, Crypto_DataBlob *out)](#oh_cryptorand_generaterandom) 生成随机数。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

   [const char *OH_CryptoRand_GetAlgoName(OH_CryptoRand *ctx)](#oh_cryptorand_getalgoname) 获取随机数生成器实例的算法名称。  [OH_Crypto_ErrCode OH_CryptoRand_SetSeed(OH_CryptoRand *ctx, Crypto_DataBlob *seed)](#oh_cryptorand_setseed) 设置随机数生成器的种子。  [OH_Crypto_ErrCode OH_CryptoRand_EnableHardwareEntropy(OH_CryptoRand *ctx)](#oh_cryptorand_enablehardwareentropy) 启用硬件熵源。  [void OH_CryptoRand_Destroy(OH_CryptoRand *ctx)](#oh_cryptorand_destroy) 销毁随机数生成器实例。       #### 函数说明

  #### [h2]OH_CryptoRand_Create()

OH_Crypto_ErrCode OH_CryptoRand_Create(OH_CryptoRand **ctx) **描述**

 创建随机数生成器。

  注意：创建的资源必须通过[OH_CryptoRand_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_destroy)销毁。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) **ctx 指向随机数生成器实例的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoRand_GenerateRandom()

OH_Crypto_ErrCode OH_CryptoRand_GenerateRandom(OH_CryptoRand *ctx, int len, Crypto_DataBlob *out) **描述**

 生成随机数。

  注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) *ctx 随机数生成器实例。  int len 表示生成随机数的长度，单位为byte，范围在[1, INT_MAX]。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *out 用于获取随机数的指针。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoRand_GetAlgoName()

const char *OH_CryptoRand_GetAlgoName(OH_CryptoRand *ctx) **描述**

 获取随机数生成器实例的算法名称。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) *ctx 指向随机数生成器实例。     **返回：**

  类型 说明   const char * 返回随机数生成器实例的算法名称。       #### [h2]OH_CryptoRand_SetSeed()

OH_Crypto_ErrCode OH_CryptoRand_SetSeed(OH_CryptoRand *ctx, Crypto_DataBlob *seed) **描述**

 设置随机数生成器的种子。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) *ctx 随机数生成器实例。  [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *seed 种子数据。     **���回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoRand_EnableHardwareEntropy()

OH_Crypto_ErrCode OH_CryptoRand_EnableHardwareEntropy(OH_CryptoRand *ctx) **描述**

 启用硬件熵源。

 **起始版本：** 21

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) *ctx 随机数生成器实例。     **返回：**

  类型 说明   [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) CRYPTO_SUCCESS：操作成功。

  CRYPTO_NOT_SUPPORTED：操作不支持。

  CRYPTO_MEMORY_ERROR：内存错误。

  CRYPTO_PARAMETER_CHECK_FAILED：参数检查失败。

  CRYPTO_OPERTION_ERROR：调用三方算法库API出错。

        #### [h2]OH_CryptoRand_Destroy()

void OH_CryptoRand_Destroy(OH_CryptoRand *ctx) **描述**

 销毁随机数生成器实例。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_CryptoRand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptorandapi-oh-cryptorand) *ctx 随机数生成器实例。

---
*Updated: 2026-04-22 06:49:00*
