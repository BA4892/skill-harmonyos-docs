# INFER_FUNC_REG

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infer-func-reg`  |  **DocID**: `55798fdc353b49f5a8fe6b7f8668ed33`  |  **NodeID**: `000201775795449800586850517a4b50`

---

# INFER_FUNC_REG

  #### 函数功能

注册算子的InferShape函数。

   #### 函数原型

INFER_FUNC_REG(op_name, x) 该函数内部会自动调用INFER_VERIFY_FUNC(op_name, x)，INFER_VERIFY_FUNC函数中的op_name为算子的类型，x为指向INFER_FUNC_REG（op_name,x）中“x”的指针。

   #### 约束说明

无

   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | op_name  | 输入  | 算子类型。  
 | x  | 输入  | InferShape函数名，和[IMPLEMT_INFERFUNC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-implemt-inferfunc)的InferShape函数名保持一致。  
  

    #### 返回值

无

---
*Updated: 2026-04-20 01:43:50*
