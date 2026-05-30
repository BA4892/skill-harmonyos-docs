# OH_Huks_PubKeyInfo

> **分区**: API参考  |  **Slug**: `capi-hukstypeapi-oh-huks-pubkeyinfo`  |  **DocID**: `ae5c63d8e833450ba2e4544a216208fe`

---

# OH_Huks_PubKeyInfo

 ```
struct OH_Huks_PubKeyInfo {...}
```
  #### 概述

定义公钥信息的结构体类型。

 **起始版本：** 9

 **相关模块：** [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

 **所在头文件：** [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg 公钥的算法类型。  uint32_t keySize 公钥的长度。  uint32_t nOrXSize n或X值的长度。  uint32_t eOrYSize e或Y值的长度。  uint32_t placeHolder 占位符大小。

---
*Updated: 2026-04-22 06:49:00*
