# GetOutputShapeRange

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoutputshaperange`  |  **DocID**: `831fd21a1088455ba886a343d5d4c968`  |  **NodeID**: `000201775795449800901beeedfae3b4`

---

# GetOutputShapeRange

  #### 函数功能

根据算子输出索引获取对应的输出shape range指针。这里的输出索引是指算子实例化后实际的索引，不是原型定义中的索引。

   #### 函数原型

```
Range<Shape> *GetOutputShapeRange(const size_t index);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 算子输出索引，从0开始计数。  
  

    #### 返回值

输出shape range指针，index非法时，返回空指针。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferShapeRangeForXXX(gert::InferShapeRangeContext *context) {
  const auto x_shape_range = context->GetInputShapeRange(0);
  if (x_shape_range == nullptr) {
    // 防御式编程 ....
  }
  const auto min_shape = x_shape_range->GetMin();
  const auto max_shape = x_shape_range->GetMax();
 
  auto y_shape_range = context->GetOutputShapeRange(0);
  if (y_shape_range == nullptr) {
    // 防御式编程 ....
  }
  if (y_shape_range->GetMin() == nullptr || y_shape_range->GetMax() == nullptr) {
    // 防御式编程 ....
  }
  // shape range推导逻辑 .....
}
```

---
*Updated: 2026-04-20 01:43:59*
