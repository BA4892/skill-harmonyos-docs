# GetInputDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getinputdatatype`  |  **DocID**: `7b23f70702f6406ab3143b0763f411e1`  |  **NodeID**: `00020177579544980063222a1b8c4f68`

---

# GetInputDataType

  #### 函数功能

根据算子输入索引获取对应输入的数据类型。这里的输入索引是指算子实例化后实际的索引，不是原型定义中的索引。

   #### 函数原型

```
ge::DataType GetInputDataType(const size_t index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子的输入索引，从0开始计数。  
  

    #### 返回值

返回指定输入的数据类型。

 若输入index非法，返回DT_UNDEFINED。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferDataTypeForXXX(InferDataTypeContext *context) {
  auto data_type = context->GetInputDataType(0);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:51*
