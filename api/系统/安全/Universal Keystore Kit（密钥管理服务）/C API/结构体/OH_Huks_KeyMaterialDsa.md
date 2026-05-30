# OH_Huks_KeyMaterialDsa

> **分区**: API参考  |  **Slug**: `capi-hukstypeapi-oh-huks-keymaterialdsa`  |  **DocID**: `5623bf1de1284ce194f5e0d577d15030`

---

# OH_Huks_KeyMaterialDsa

 ```
struct OH_Huks_KeyMaterialDsa {...}
```
  #### 概述

定义DSA密钥的结构体类型。

 **起始版本：** 9

 **相关模块：** [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

 **所在头文件：** [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg 密钥的算法类型。  uint32_t keySize 密钥的长度。  uint32_t xSize x值的长度。  uint32_t ySize y值的长度。  uint32_t pSize p值的长度。  uint32_t qSize q值的长度。  uint32_t gSize g值的长度。

---
*Updated: 2026-04-22 06:49:02*
