# InferDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-inferdatatype`  |  **DocID**: `f8a72053ba714b77bec3aa05062a6c76`  |  **NodeID**: `0002017757954498007555a71c53778a`

---

# InferDataType

  #### 函数功能

注册算子的InferDataType函数。

 开发者需要为算子编写一个InferDataTypeKernelFunc类型的函数，并使用该接口进行注册。

 InferDataTypeKernelFunc类型定义如下。

 ```
using InferDataTypeKernelFunc = UINT32 (*)(InferDataTypeContext *);
```
   #### 函数原型

```
OpImplRegisterV2 &InferDataType(InferDataTypeKernelFunc infer_datatype_func);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | infer_datatype_func  | 输入  | 要注册的自定义InferDataType函数，类型为InferDataTypeKernelFunc。  
  

    #### 返回值

返回算子的OpImplRegisterV2对象，该对象新增注册了InferDataType函数infer_datatype_func。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:55*
