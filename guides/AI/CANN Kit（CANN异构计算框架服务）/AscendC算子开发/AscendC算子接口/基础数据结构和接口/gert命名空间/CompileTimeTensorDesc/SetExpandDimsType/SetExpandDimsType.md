# SetExpandDimsType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-compiletimetensordesc-setexpanddimstype`  |  **DocID**: `d81cd7c9950149028ee00acb085b54d2`  |  **NodeID**: `000201775795449800917fb26825db84`

---

# SetExpandDimsType

  #### 函数功能

设置原始Format向运行时Format转换时的补维规则。

   #### 函数原型

```
void SetExpandDimsType(const ExpandDimsType &expand_dims_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | expand_dims_type  | 输入  需要设置的补维规则。

 关于ExpandDimsType的说明，请参见[ExpandDimsType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-expanddimstype-introduction)。

  
  

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
td.SetExpandDimsType(type_);
auto type = td.GetExpandDimsType(); // type_("1001")
```

---
*Updated: 2026-04-20 01:43:59*
