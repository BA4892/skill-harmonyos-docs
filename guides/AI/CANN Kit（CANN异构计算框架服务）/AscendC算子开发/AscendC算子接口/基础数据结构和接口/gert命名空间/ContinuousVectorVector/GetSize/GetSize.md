# GetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-continuousvectorvector-getsize`  |  **DocID**: `8de72c921b274ab8922eccdbc4704c6b`  |  **NodeID**: `00020177579544980079199a9b9068e9`

---

# GetSize

  #### 函数功能

获取当前存放的实际元素数量。

   #### 函数原型

```
size_t GetSize() const
```
   #### 参数说明

无

   #### 返回值

当前存放的实际元素数量。

   #### 约束说明

无

   #### 调用示例

```
// 创建ContinuousVectorVector对象cvv
// ...
// 增加元素
// ...
auto cv = cvv->add(inner_vector_capacity);
// ...
// 获取当前存放的实际元素数量
auto size = cvv->GetSize();
```

---
*Updated: 2026-04-20 01:43:56*
