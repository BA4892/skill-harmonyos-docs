# GetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdatatype`  |  **DocID**: `6bc456a986674c81b10a5e8d4f7577a5`  |  **NodeID**: `000201775795449800878ed62d54648b`

---

# GetDataType

  #### 函数功能

获取Tensor的数据类型。

   #### 函数原型

```
ge::DataType GetDataType() const
```
   #### 参数说明

无

   #### 返回值

返回Tensor中的数据类型。

 关于ge::DataType的定义，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
// ge::DT_FLOAT
auto dt = t.GetDataType();
```

---
*Updated: 2026-04-20 01:43:59*
