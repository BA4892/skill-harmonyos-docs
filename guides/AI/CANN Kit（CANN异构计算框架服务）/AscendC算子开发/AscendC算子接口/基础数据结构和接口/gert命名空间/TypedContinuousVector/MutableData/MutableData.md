# MutableData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutabledata`  |  **DocID**: `b86c0a377f3b49b693b35fee8eafeca4`  |  **NodeID**: `00020177579544980067675b899e61e0`

---

# MutableData

  #### 函数功能

获取首个元素的指针地址，[GetData(), reinterpret_cast<T *>(GetData()) + GetSize())]中的数据即为当前容器中保存的数据。

   #### 函数原型

```
T *MutableData()
```
   #### 参数说明

无

   #### 返回值

首个元素的指针地址。

   #### 约束说明

无

   #### 调用示例

```
size_t capacity = 100U;
auto cv_holder = ContinuousVector::Create<int64_t>(capacity);
auto cv = reinterpret_cast<TypedContinuousVector *>(cv_holder.get());
auto cap = cv->MutableData();
```

---
*Updated: 2026-04-20 01:43:53*
