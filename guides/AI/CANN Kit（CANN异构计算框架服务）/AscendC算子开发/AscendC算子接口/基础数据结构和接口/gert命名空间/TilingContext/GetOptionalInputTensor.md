# GetOptionalInputTensor

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoptionalinputtensor`  |  **DocID**: `e9ac5610b2bd4cfc84dbe0ec53d5724e`  |  **NodeID**: `000201775795449800720a12a3c53a9d`

---

# GetOptionalInputTensor

  #### 函数功能

根据算子原型定义中的输入索引获取对应的可选输入tensor指针。

   #### 函数原型

```
const Tensor *GetOptionalInputTensor(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 算子IR原型定义中的输入索引，从0开始计数。  
  

    #### 返回值

指定ir_index的输入tensor指针，当输入ir_index非法或该INPUT没有实例化时，返回空指针。

 关于Tensor类型的定义，请参见[Tensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-constructor)。

   #### 约束说明

如果输入没有被设置为数据依赖，调用此接口获取tensor时，只能在tensor中获取到正确的shape、format、datatype信息，无法获取到真实的tensor数据地址（获取到的地址为nullptr）。

   #### 调用示例

```
ge::graphStatus Tiling4ReduceCommon(TilingContext* context) {
  auto in_shape = context->GetInputShape(0);
  GE_ASSERT_NOTNULL(in_shape);
  auto axes_tensor = context->GetOptionalInputTensor(1);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:55*
