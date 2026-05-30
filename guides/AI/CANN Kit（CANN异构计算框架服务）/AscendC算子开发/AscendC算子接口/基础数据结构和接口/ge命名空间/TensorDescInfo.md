# TensorDescInfo

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensordescinfo`  |  **DocID**: `556b44c866ce4cd786c56d233a7a7cf1`  |  **NodeID**: `00020177579544980055063bacb7c3b3`

---

# TensorDescInfo

 ```
struct TensorDescInfo {
    Format format_ = FORMAT_RESERVED;        /* tbe op register support format */
    DataType dataType_ = DT_UNDEFINED;       /* tbe op register support datatype */
    };
```
 Format为枚举类型，定义请参考[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。

 DataType为枚举类型，定义请参考[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

---
*Updated: 2026-04-20 01:43:50*
