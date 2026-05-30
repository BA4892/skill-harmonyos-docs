# GetBool

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getbool`  |  **DocID**: `7084cfd6fb504f8797376e81da71aa46`  |  **NodeID**: `000201775795449800900a78f2980d90`

---

# GetBool

  #### 函数功能

获取bool类型的属性值。

   #### 函数原型

```
const bool *GetBool(const size_t index) const
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
const bool *attr0 = runtime_attrs->GetBool(0);
```

---
*Updated: 2026-04-20 01:43:59*
