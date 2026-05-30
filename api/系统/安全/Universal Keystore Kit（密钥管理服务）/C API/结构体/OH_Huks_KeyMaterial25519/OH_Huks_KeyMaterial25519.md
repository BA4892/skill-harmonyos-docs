# OH_Huks_KeyMaterial25519

> **分区**: API参考  |  **Slug**: `capi-hukstypeapi-oh-huks-keymaterial25519`  |  **DocID**: `a035b625727442948cba8912c0bcac19`

---

# OH_Huks_KeyMaterial25519

 ```
struct OH_Huks_KeyMaterial25519 {...}
```
  #### 概述

定义25519类型密钥的结构体类型。

 **起始版本：** 9

 **相关模块：** [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

 **所在头文件：** [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg 密钥的算法类型。  uint32_t keySize 25519类型密钥的长度。  uint32_t pubKeySize 公钥的长度。  uint32_t priKeySize 私钥的长度。  uint32_t reserved 预留字段。建议开发者赋值为0。

---
*Updated: 2026-04-22 06:49:03*
