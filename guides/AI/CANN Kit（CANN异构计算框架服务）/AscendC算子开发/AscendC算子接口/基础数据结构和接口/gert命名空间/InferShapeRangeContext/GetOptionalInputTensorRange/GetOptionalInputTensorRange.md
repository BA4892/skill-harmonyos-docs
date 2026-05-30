# GetOptionalInputTensorRange

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoptionalinputtensorrange`  |  **DocID**: `7c476a41225b47a2a34ca39d5b62db94`  |  **NodeID**: `000201775795449800726803d49f95a5`

---

# GetOptionalInputTensorRange

  #### 函数功能

根据算子原型定义中的输入索引获取对应的可选输入tensor range指针。

   #### 函数原型

```
using TensorRange = Range<Tensor>
const TensorRange *GetOptionalInputTensorRange(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 算子IR原型定义中的输入索引，从0开始计数。  
  

    #### 返回值

tensor range指针，ir_index非法，或该INPUT没有实例化时，返回空指针。

   #### 约束说明

如果输入没有被设置为数据依赖，调用此接口获取tensor range时，只能在tensor中获取到正确的shape、format、datatype信息。无法获取到真实的tensor数据地址（获取到的地址为nullptr）。

   #### 调用示例

```
const auto infer_shape_range_func = [](gert::InferShapeRangeContext *context) -> graphStatus {
  auto input_shape_range = context->GetOptionalInputTensorRange(0U);
  auto output_shape_range = context->GetOutputShapeRange(0U);
  *output_shape_range->GetMin() = input_shape_range->GetMin()->GetStorageShape();
  *output_shape_range->GetMax() = input_shape_range->GetMax()->GetStorageShape();
  return GRAPH_SUCCESS;
};
```

---
*Updated: 2026-04-20 01:43:54*
