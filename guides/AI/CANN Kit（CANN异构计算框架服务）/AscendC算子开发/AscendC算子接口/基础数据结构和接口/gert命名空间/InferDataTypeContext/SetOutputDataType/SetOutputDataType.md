# SetOutputDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setoutputdatatype`  |  **DocID**: `a19250b28b9f41ed9a660dfa581849ec`  |  **NodeID**: `000201775795449800785631d2530a0d`

---

# SetOutputDataType

  #### 函数功能

根据输出索引，设置指定输出的数据类型。

   #### 函数原型

```
ge::graphStatus SetOutputDataType(const size_t index, const ge::DataType datatype);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子IR原型定义中的输出索引，从0开始计数。  
 | datatype  | 输入  需要设置的输出数据类型。

 关于DataType的说明，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

  
  

    #### 返回值

返回设置的结果状态，状态说明请参见[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-gegraphstatus)。

 index非法时，返回失败。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferDataTypeForXXX(InferDataTypeContext *context) {
  auto ret = context->SetOutputDataType(0, ge::DataType::DT_FLOAT);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:56*
