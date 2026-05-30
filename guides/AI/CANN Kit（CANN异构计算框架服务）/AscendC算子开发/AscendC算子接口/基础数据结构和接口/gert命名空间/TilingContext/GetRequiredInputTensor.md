# GetRequiredInputTensor

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getrequiredinputtensor`  |  **DocID**: `98fd19f6e7f14bdea733a293953077bd`  |  **NodeID**: `000201775795449800770c5ec1167c78`

---

# GetRequiredInputTensor

  #### 函数功能

根据算子原型定义中的输入索引获取对应的必选输入tensor指针。

   #### 函数原型

```
const Tensor *GetRequiredInputTensor(const size_t ir_index) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ir_index  | 输入  | 必选输入在算子IR原型定义中的索引，从0开始计数。  
  

    #### 返回值

指定的输入tensor指针，当输入ir_index非法时，返回空指针。

 关于Tensor类型的定义，请参见[Tensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-constructor)。

   #### 约束说明

如果输入没有被设置为数据依赖，调用此接口获取tensor时，只能在tensor中获取到正确的shape、format、datatype信息。无法获取到真实的tensor数据地址（获取到的地址为nullptr）。

   #### 调用示例

```
ge::graphStatus InferShape4ConcatD(TilingContext* context) {
  auto in_tensor = context->GetRequiredInputTensor(0U);
  // ...
}
```

---
*Updated: 2026-04-20 01:43:56*
