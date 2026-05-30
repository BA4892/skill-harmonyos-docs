# GetFloat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getfloat`  |  **DocID**: `b6b22ab561f04c0fa2a6fbd1de1d0153`  |  **NodeID**: `0002017757954498008735909b851010`

---

# GetFloat

  #### 函数功能

获取float类型的属性值。

   #### 函数原型

```
const float *GetFloat(const size_t index) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 属性在IR原型定义中以及在OP_IMPL注册中的索引。  
  

    #### 返回值

指向属性值的指针。

   #### 约束说明

无

   #### 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
const float *attr0 = runtime_attrs->GetFloat(0);
```

---
*Updated: 2026-04-20 01:43:59*
