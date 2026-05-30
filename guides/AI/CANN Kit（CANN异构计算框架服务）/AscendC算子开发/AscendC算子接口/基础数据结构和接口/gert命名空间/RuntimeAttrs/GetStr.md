# GetStr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getstr`  |  **DocID**: `9f78a5b3a0ed4ab8ad960fb973ded987`  |  **NodeID**: `00020177579544980082997aae367195`

---

# GetStr

  #### 函数功能

获取string类型的属性值。

   #### 函数原型

```
const char *GetStr(const size_t index) const
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
const char *attr0 = runtime_attrs->GetStr(0);
```

---
*Updated: 2026-04-20 01:43:57*
