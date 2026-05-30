# COMMON_INFER_FUNC_REG

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-common-infer-func-reg`  |  **DocID**: `b4b3103e0f5345f792efaf54d9feeff2`  |  **NodeID**: `0002017757954498005784fc9f9fbc07`

---

# COMMON_INFER_FUNC_REG

  #### 函数功能

注册算子的InferShape函数。

 与[INFER_FUNC_REG](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-infer-func-reg)的区别是，此函数注册的InferShape函数入参为operator基类而非子类，此接口支持多算子共用同一个InferShape函数。

   #### 函数原型

COMMON_INFER_FUNC_REG(op_name, x) 该函数内部会自动调用COMMON_INFER_VERIFY_FUNC(x)，COMMON_INFER_VERIFY_FUNC(x)函数中的x为指向COMMON_INFER_FUNC_REG(op_name, x)中“x”的指针。

   #### 约束说明

无

   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | op_name  | 输入  | 算子类型。  
 | x  | 输入  | InferShape函数名，和[IMPLEMT_COMMON_INFERFUNC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-implemt-common-inferfunc)的InferShape函数名保持一致。  
  

    #### 返回值

无

---
*Updated: 2026-04-20 01:43:50*
