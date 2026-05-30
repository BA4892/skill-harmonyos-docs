# GetOutputDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputdatatype`  |  **DocID**: `f9efdce45530411a9472d278ad43057a`  |  **NodeID**: `000201775795449800747fc15c52e1ff`

---

# GetOutputDataType

  #### 函数功能

根据算子输出索引获取对应输出的数据类型。这里的输出索引是指算子实例化后实际的索引，不是原型定义中的索引。

   #### 函数原型

```
ge::DataType GetOutputDataType(const size_t index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子输出索引，从0开始计数。  
  

    #### 返回值

返回指定输出的数据类型，index非法时，返回DT_UNDEFINED。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferDataTypeForXXX(InferDataTypeContext *context) {
  auto data_type = context->GetOutputDataType(0);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:55*
