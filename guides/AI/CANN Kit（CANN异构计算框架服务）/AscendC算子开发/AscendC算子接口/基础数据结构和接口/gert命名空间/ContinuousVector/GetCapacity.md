# GetCapacity

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-continuousvector-getcapacity`  |  **DocID**: `3a553020d66244fda1865d3d2d1cd54b`  |  **NodeID**: `000201775795449800828acb545ae522`

---

# GetCapacity

  #### 函数功能

获取最大可保存的元素个数。

   #### 函数原型

```
size_t GetCapacity() const
```
   #### 参数说明

无

   #### 返回值

最大可保存的元素个数。

   #### 约束说明

无

   #### 调用示例

```
size_t capacity = 100U;
auto cv_holder = ContinuousVector::Create<int64_t>(capacity);
auto cv = reinterpret_cast<ContinuousVector *>(cv_holder.get());
auto cap = cv->GetCapacity(); // 100U
```

---
*Updated: 2026-04-20 01:43:57*
