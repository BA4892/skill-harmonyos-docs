# GetListInt

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getlistint`  |  **DocID**: `4f50e2a550b740f6b67d30481323dc8e`  |  **NodeID**: `00020177579544980074033dd6f6f439`

---

# GetListInt

  #### 函数功能

获取list int类型的属性值。

   #### 函数原型

```
const TypedContinuousVector<int64_t> *GetListInt(const size_t index) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | index  | 输入  | 属性在IR原型定义中以及在OP_IMPL注册中的索引。  
  

    #### 返回值

指向属性值的指针。

 关于TypedContinuousVector类型的定义，请参见[TypedContinuousVector](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-typedcontinuousvector-introduction)。

   #### 约束说明

无

   #### 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
const TypedContinuousVector<int64_t> *attr0 = runtime_attrs->GetListInt(0);
```

---
*Updated: 2026-04-20 01:43:55*
