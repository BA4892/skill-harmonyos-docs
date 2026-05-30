# GetOptionalInputShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infershapecontext-getoptionalinputshape`  |  **DocID**: `6a943f62228a4e9d843232e7f9f0d95b`  |  **NodeID**: `000201775795449800702b678cffc4bc`

---

# GetOptionalInputShape

  #### 函数功能

根据算子原型定义中的输入索引获取对应的可选输入shape指针。

   #### 函数原型

```
const Shape *GetOptionalInputShape(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 算子IR原型定义中的输入索引，从0开始计数。  
  

    #### 返回值

返回输入shape的指针，输入ir_index非法，或该输入没有实例化时，返回空指针。

 关于Shape类型的定义，请参见[Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-introduction)。

   #### 约束说明

无

   #### 调用示例

```
ge::graphStatus InferShapeForXXX(InferShapeContext *context) {
  auto in_shape = context->GetOptionalInputShape(2);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:54*
