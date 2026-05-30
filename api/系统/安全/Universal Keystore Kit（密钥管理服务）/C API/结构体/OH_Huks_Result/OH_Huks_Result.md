# OH_Huks_Result

> **分区**: API参考  |  **Slug**: `capi-hukstypeapi-oh-huks-result`  |  **DocID**: `d43f56d738854aa28cb0f382a16aaa85`

---

# OH_Huks_Result

 ```
struct OH_Huks_Result {...}
```
  #### 概述

表示状态返回数据，包括返回码和消息。

 **起始版本：** 9

 **相关模块：** [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

 **所在头文件：** [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t errorCode 状态返回码，参考[OH_Huks_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_errcode)。  const char *errorMsg 对状态返回码的说明信息。  uint8_t *data 其他返回数据。

---
*Updated: 2026-04-22 06:48:43*
