# SetTiling

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-settiling`  |  **DocID**: `4e79c81ec54b45a38391c056b073e01f`  |  **NodeID**: `00020177579544980108918ee8555e7b`

---

# SetTiling

  #### 函数功能

注册Tiling函数。

   #### 函数原型

```
OpAICoreDef &SetTiling(gert::OpImplRegisterV2::TilingKernelFunc func);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | func  | 输入  Tiling函数。TilingKernelFunc类型定义如下。

 using TilingKernelFunc = UINT32 (*)(TilingContext *);

  
  

    #### 返回值

[OpAICoreDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-settiling)算子定义。

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:07*
