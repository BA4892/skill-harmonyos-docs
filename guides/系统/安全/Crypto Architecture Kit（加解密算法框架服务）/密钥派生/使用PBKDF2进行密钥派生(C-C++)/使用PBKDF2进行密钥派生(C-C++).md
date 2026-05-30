# 使用PBKDF2进行密钥派生(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `crypto-key-derivation-using-pbkdf2-ndk`  |  **DocID**: `19896a565c00423e888c0eebace9f33d`  |  **NodeID**: `0002017757958527162013c2425a10bf`

---

# 使用PBKDF2进行密钥派生(C/C++)

       对应的算法规格请查看[密钥派生算法规格：PBKDF2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-overview#pbkdf2算法)。

              #### 开发步骤

     
             调用[OH_CryptoKdfParams_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdfparams_create)，指定字符串参数'PBKDF2'，创建密钥派生参数对象。

             调用[OH_CryptoKdfParams_SetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdfparams_setparam)，设置PBKDF2所需的参数。示例如下：

       
        - CRYPTO_KDF_KEY_DATABLOB：用于生成派生密钥的原始密码。
        - CRYPTO_KDF_SALT_DATABLOB：盐值。
        - CRYPTO_KDF_ITER_COUNT_INT：重复运算的次数，需要为正整数。
       
             调用[OH_CryptoKdf_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdf_create)，指定字符串参数'PBKDF2|SHA256'，创建密钥派生函数对象。

             调用[OH_CryptoKdf_Derive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdf_derive)，指定目标密钥的字节长度，进行密钥派生。

     
     ```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include <cstdio>
#include <cstring>
#include "file.h"

static OH_Crypto_ErrCode setParams(OH_CryptoKdfParams **params)
{
    // 设置密码。
    const char *password = "123456";
    Crypto_DataBlob passwordBlob = {
        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(password)),
        .len = strlen(password)
    };
    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_KEY_DATABLOB, &passwordBlob);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

    // 设置盐值。
    const char *salt = "saltstring";
    Crypto_DataBlob saltBlob = {
        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(salt)),
        .len = strlen(salt)
    };
    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_SALT_DATABLOB, &saltBlob);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

    // 设置迭代次数。
    int iterations = 10000;
    Crypto_DataBlob iterationsBlob = {
        .data = reinterpret_cast<uint8_t *>(&iterations),
        .len = sizeof(int)
    };
    ret = OH_CryptoKdfParams_SetParam(*params, CRYPTO_KDF_ITER_COUNT_INT, &iterationsBlob);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
end:
    OH_CryptoKdfParams_Destroy(*params);
    *params = nullptr;
    return ret;
}

OH_Crypto_ErrCode doTestPbkdf2()
{
    // 创建PBKDF2参数对象。
    OH_CryptoKdfParams *params = nullptr;
    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_Create("PBKDF2", &params);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    ret = setParams(&params);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    // 创建密钥派生函数对象。
    OH_CryptoKdf *kdfCtx = nullptr;
    ret = OH_CryptoKdf_Create("PBKDF2|SHA256", &kdfCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    // 派生密钥。
    Crypto_DataBlob out = {0};
    uint32_t keyLength = 32; // 生成32字节的密钥。
    ret = OH_CryptoKdf_Derive(kdfCtx, params, keyLength, &out);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdf_Destroy(kdfCtx);
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    printf("Derived key length: %u\n", out.len);

    // 清理资源。
    OH_Crypto_FreeDataBlob(&out);
    OH_CryptoKdf_Destroy(kdfCtx);
    OH_CryptoKdfParams_Destroy(params);
    return CRYPTO_SUCCESS;
}
```

---
*Updated: 2026-04-20 01:46:32*
