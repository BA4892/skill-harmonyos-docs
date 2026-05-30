# 加密导出导入密钥(C/C++)

> **分区**: Guides  |  **Slug**: `huks-wrap-key-ndk`  |  **DocID**: `c5fa2792a67a48849415830f024f04ba`  |  **NodeID**: `000201776840016061042f690ea0e098`

---

# 加密导出导入密钥(C/C++)

       从API 20开始，支持加密导出导入密钥。

              #### 在CMake脚本中链接相关动态库

     ```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so)
```
                  #### 开发步骤

     
             初始化生成密钥属性集，需要设置[OH_HUKS_TAG_IS_ALLOWED_WRAP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_tag)，指定密钥允许导出。

             调用[OH_Huks_GenerateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_generatekeyitem)生成密钥，具体请参考[密钥生成](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-generation-overview)。

             调用[OH_Huks_WrapKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_wrapkey)加密导出密钥。

             调用[OH_Huks_UnwrapKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_unwrapkey)加密导入密钥。

     
                  #### 开发案例

     ```
#include "huks/native_huks_api.h"
#include "huks/native_huks_param.h"
#include "napi/native_api.h"
#include <string.h>

OH_Huks_Result InitParamSet(
    struct OH_Huks_ParamSet **paramSet,
    const struct OH_Huks_Param *params,
    uint32_t paramCount)
{
    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        return ret;
    }
    ret = OH_Huks_AddParams(*paramSet, params, paramCount);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeParamSet(paramSet);
        return ret;
    }
    ret = OH_Huks_BuildParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeParamSet(paramSet);
        return ret;
    }
    return ret;
}

struct OH_Huks_Param g_testGenerateKeyParam[] = {
    {
        .tag = OH_HUKS_TAG_ALGORITHM,
        .uint32Param = OH_HUKS_ALG_ECC
    }, {
        .tag = OH_HUKS_TAG_PURPOSE,
        .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE
    }, {
        .tag = OH_HUKS_TAG_KEY_SIZE,
        .uint32Param = OH_HUKS_ECC_KEY_SIZE_256
    }, {
        .tag = OH_HUKS_TAG_DIGEST,
        .uint32Param = OH_HUKS_DIGEST_NONE
    }, {
        .tag = OH_HUKS_TAG_IS_ALLOWED_WRAP,
        .boolParam = true
    }
};

struct OH_Huks_Param g_wrapKeyParam[] = {
    {
        .tag = OH_HUKS_TAG_KEY_WRAP_TYPE,
        .uint32Param = OH_HUKS_KEY_WRAP_TYPE_HUK_BASED
    }
};

static napi_value GenerateKey(napi_env env, napi_callback_info info)
{
    /* 1.确定密钥别名 */
    const char *alias = "test_generate";
    struct OH_Huks_Blob aliasBlob = { .size = (uint32_t)strlen(alias), .data = (uint8_t *)alias };
    struct OH_Huks_ParamSet *testGenerateKeyParamSet = nullptr;
    struct OH_Huks_ParamSet *wrapKeyParamSet = nullptr;
    struct OH_Huks_Result ohResult;
    do {
        /* 2.初始化密钥属性集 */
        ohResult = InitParamSet(&testGenerateKeyParamSet, g_testGenerateKeyParam,
            sizeof(g_testGenerateKeyParam) / sizeof(OH_Huks_Param));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        
        /* 3.生成密钥 */
        ohResult = OH_Huks_GenerateKeyItem(&aliasBlob, testGenerateKeyParamSet, nullptr);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        
        /* 4.初始化加密导出导入密钥属性集 */
        ohResult = InitParamSet(&wrapKeyParamSet, g_wrapKeyParam,
            sizeof(g_wrapKeyParam) / sizeof(OH_Huks_Param));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        
        /* 5.加密导出密钥 */
        uint8_t WrappedData[2048] = {0};
        struct OH_Huks_Blob wrappedKey = {2048, WrappedData};
        ohResult = OH_Huks_WrapKey(&aliasBlob, wrapKeyParamSet, &wrappedKey);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        
        /* 6.加密导入密钥 */
        ohResult = OH_Huks_UnwrapKey(&aliasBlob, wrapKeyParamSet, &wrappedKey);
    } while (0);
    OH_Huks_FreeParamSet(&testGenerateKeyParamSet);
    OH_Huks_FreeParamSet(&wrapKeyParamSet);
    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```

---
*Updated: 2026-04-22 06:40:13*
