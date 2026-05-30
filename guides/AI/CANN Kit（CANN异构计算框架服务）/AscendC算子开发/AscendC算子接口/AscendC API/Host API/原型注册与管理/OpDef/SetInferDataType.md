# SetInferDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setinferdatatype`  |  **DocID**: `dc88e09ecc9c481d9cda54064047b411`  |  **NodeID**: `000201775795449801145f88d8af566d`

---

# SetInferDataType

  #### 函数功能

注册DataType推导函数。

   #### 函数原型

```
OpDef &SetInferDataType(gert::OpImplRegisterV2::InferDataTypeKernelFunc func);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | func  | 输入  DataType推导函数。**InferDataTypeKernelFunc**类型定义如下。

 using InferDataTypeKernelFunc = UINT32 (*)(InferDataTypeContext *);

  
  

    #### 返回值

[OpDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-input)算子定义。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:12*
