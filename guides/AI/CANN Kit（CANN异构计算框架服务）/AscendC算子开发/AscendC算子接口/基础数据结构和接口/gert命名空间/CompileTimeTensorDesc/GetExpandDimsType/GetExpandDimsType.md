# GetExpandDimsType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-compiletimetensordesc-getexpanddimstype`  |  **DocID**: `f29e679470ca4ae998759bd22eea4a57`  |  **NodeID**: `000201775795449800818403c830b095`

---

# GetExpandDimsType

  #### 函数功能

获取原始Format向运行时Format转换时的补维规则。

   #### 函数原型

```
ExpandDimsType GetExpandDimsType() const
```
   #### 参数说明

无

   #### 返回值

补维规则，请参考[ExpandDimsType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-expanddimstype-introduction)。

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
*Updated: 2026-04-20 01:43:57*
