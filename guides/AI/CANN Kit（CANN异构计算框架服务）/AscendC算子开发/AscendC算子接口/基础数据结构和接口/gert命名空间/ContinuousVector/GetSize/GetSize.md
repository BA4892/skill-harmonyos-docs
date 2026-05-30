# GetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-continuousvector-getsize`  |  **DocID**: `36ac2bd9e28246688e11d5d86134535f`  |  **NodeID**: `0002017757954498007608edb81ab1aa`

---

# GetSize

  #### 函数功能

获取当前保存的元素个数。

   #### 函数原型

```
size_t GetSize() const
```
   #### 参数说明

无

   #### 返回值

当前保存的元素个数。

   #### 约束说明

无

   #### 调用示例

```
size_t capacity = 100U;
auto cv_holder = ContinuousVector::Create<int64_t>(capacity);
auto cv = reinterpret_cast<ContinuousVector *>(cv_holder.get());
auto size = cv->GetSize(); // 0U
```

---
*Updated: 2026-04-20 01:43:55*
