# GetRequiredInputShapeRange

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getrequiredinputshaperange`  |  **DocID**: `543804d39afa46569072f1f43244db07`  |  **NodeID**: `000201775795449800866f186239eef2`

---

# GetRequiredInputShapeRange

  #### 函数功能

根据算子原型定义中的输入索引获取对应的必选输入shape range指针。

   #### 函数原型

```
const Range<Shape> *GetRequiredInputShapeRange(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 必选输入在算子IR原型定义中的索引，从0开始计数。  
  

    #### 返回值

shape range指针，ir_index非法时，返回空指针。

   #### 约束说明

无

   #### 调用示例

```
const auto infer_shape_range_func = [](gert::InferShapeRangeContext *context) -> graphStatus {
  auto input_shape_range = context->GetRequiredInputShapeRange(0U);
  auto output_shape_range = context->GetOutputShapeRange(0U);
  output_shape_range->SetMin(const_cast<gert::Shape *>(input_shape_range->GetMin()));
  output_shape_range->SetMax(const_cast<gert::Shape *>(input_shape_range->GetMax()));
  return GRAPH_SUCCESS;
};
```

---
*Updated: 2026-04-20 01:43:58*
