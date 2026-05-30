# GetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-compiletimetensordesc-getdatatype`  |  **DocID**: `94e2660f08c147aea193036df9df2098`  |  **NodeID**: `0002017757954498006505d51d62f37b`

---

# GetDataType

  #### 函数功能

获取CompileTimeTensorDesc所描述的Tensor的数据类型。

   #### 函数原型

```
ge::DataType GetDataType() const
```
   #### 参数说明

无

   #### 返回值

DataType的声明[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

   #### 约束说明

无

   #### 调用示例

```
auto dtype_ = ge::DataType::DT_INT32;
StorageFormat fmt_(ge::Format::FORMAT_NC, ge::FORMAT_NCHW, {});
ExpandDimsType type_("1001");
gert::CompileTimeTensorDesc td;
td.SetDataType(dtype_);
auto dtype = td.GetDataType(); // ge::DataType::DT_INT32;
td.SetStorageFormat(fmt_.GetStorageFormat());
auto storage_fmt = td.GetStorageFormat(); // ge::FORMAT_NCHW
td.SetOriginFormat(fmt_.GetOriginFormat());
auto origin_fmt = td.GetOriginFormat(); // ge::Format::FORMAT_NC
td.SetExpandDimsType(type_);
auto type = td.GetExpandDimsType(); // type_("1001")
```

---
*Updated: 2026-04-20 01:43:53*
