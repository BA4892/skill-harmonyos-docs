# AutoMappingFn

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-automappingfn`  |  **DocID**: `c1067e5391934d54b2b9f8c20e972d03`  |  **NodeID**: `000201775795449801041f4403a19116`

---

# AutoMappingFn

  #### 函数功能

自动映射回调函数。

   #### 函数原型

```
Status AutoMappingFn(const google::protobuf::Message *op_src, ge::Operator &op)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | op_src  | 输入  | 转换前原始模型中的算子，包含原始模型中算子的属性。  
 | op  | 输入  适配AI处理器的算子。

 关于Operator类，请参见[Operator](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-construction-and-destructor)。

  
  

    #### 约束说明

若原始TensorFlow算子与适配AI处理器的算子属性无法一一映射，AutoMappingFn函数无法应用于回调函数[ParseParamsByOperatorFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-parseparamsbyoperatorfn)中，此种场景下，请在回调函数中使用[AutoMappingByOpFn](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingbyopfn)接口进行可以映射成功的属性的自动解析，使用示例请参见[调用示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingbyopfn#调用示例)。

---
*Updated: 2026-04-20 01:44:03*
