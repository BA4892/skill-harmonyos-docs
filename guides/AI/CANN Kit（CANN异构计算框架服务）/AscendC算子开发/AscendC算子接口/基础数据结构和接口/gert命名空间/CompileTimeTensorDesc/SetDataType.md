# SetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-compiletimetensordesc-setdatatype`  |  **DocID**: `5e9df48abc6344f2a846568377dbf48e`  |  **NodeID**: `00020177579544980086124770848d72`

---

# SetDataType

  #### 函数功能

向CompileTimeTensorDesc中设置Tensor的数据类型。

   #### 函数原型

```
void SetDataType(const ge::DataType data_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | data_type  | 输入  需设置的CompileTimeTensorDesc所描述的Tensor的数据类型信息。

 关于ge::DataType类型，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

  
  

    #### 返回值

无

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
*Updated: 2026-04-20 01:43:58*
