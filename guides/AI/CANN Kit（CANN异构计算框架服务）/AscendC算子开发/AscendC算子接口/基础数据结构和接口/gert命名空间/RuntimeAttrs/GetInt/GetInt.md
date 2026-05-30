# GetInt

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getint`  |  **DocID**: `b49d510538d3479bb68d3275b7a3f1e0`  |  **NodeID**: `000201775795449800706f8bf58ec718`

---

# GetInt

  #### 函数功能

获取int类型的属性值。

   #### 函数原型

```
const int64_t *GetInt(const size_t index) const
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
const int64_t *attr0 = runtime_attrs->GetInt(0);
```

---
*Updated: 2026-04-20 01:43:54*
