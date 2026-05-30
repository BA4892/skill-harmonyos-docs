# GetStorageFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-compiletimetensordesc-getstorageformat`  |  **DocID**: `34158d0b632143229b73a684a7ae8125`  |  **NodeID**: `0002017757954498007739247dce1313`

---

# GetStorageFormat

  #### 函数功能

获取运行时Tensor中存储数据的实际排布格式。

   #### 函数原型

```
ge::Format GetStorageFormat() const
```
   #### 参数说明

无

   #### 返回值

运行时数据的实际排布格式。

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
td.SetExpandDimsType(type_);auto type = td.GetExpandDimsType(); // type_("1001")
```

---
*Updated: 2026-04-20 01:43:56*
