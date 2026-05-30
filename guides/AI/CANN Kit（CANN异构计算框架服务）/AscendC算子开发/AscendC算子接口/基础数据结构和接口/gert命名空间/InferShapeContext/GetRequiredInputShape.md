# GetRequiredInputShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infershapecontext-getrequiredinputshape`  |  **DocID**: `65fa229a87af4611b84544c6acb0637b`  |  **NodeID**: `000201775795449800806582ba25f953`

---

# GetRequiredInputShape

  #### 函数功能

根据算子原型定义中的输入索引获取对应的必选输入shape指针。

   #### 函数原型

```
const Shape *GetRequiredInputShape(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 必选输入在算子IR原型定义中的索引，从0开始计数。  
  

    #### 返回值

返回指定输入的shape指针，若输入的ir_index非法，返回空指针。

 关于Shape类型的定义，请参见[Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-introduction)。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferShapeForXXX(InferShapeContext *context) {
  auto in_shape = context->GetRequiredInputShape(2);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:56*
