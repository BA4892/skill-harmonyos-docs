# GetData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-continuousvector-getdata`  |  **DocID**: `c493251a386c47769f40a6c174c44fa5`  |  **NodeID**: `000201775795449800852046aa4a6d0c`

---

# GetData

  #### 函数功能

获取首个元素的指针地址，[GetData(), reinterpret_cast<T *>(GetData()) + GetSize()) 中的数据即为当前容器中保存的数据。

   #### 函数原型

```
const void *GetData() const
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
auto cv = reinterpret_cast<ContinuousVector *>(cv_holder.get());
auto cap = cv->GetData();
```

---
*Updated: 2026-04-20 01:43:58*
