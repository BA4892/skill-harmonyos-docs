# SetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-continuousvector-setsize`  |  **DocID**: `ed11f0ab2c88408785d4c9b4ebdc361f`  |  **NodeID**: `0002017757954498007901e7c8209a17`

---

# SetSize

  #### 函数功能

设置当前保存的元素个数。

   #### 函数原型

```
ge::graphStatus SetSize(const size_t size)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | size  | 输入  | 当前保存的元素个数。  
  

    #### 返回值

成功时返回ge::GRAPH_SUCCESS。

 设置的size>capacity时，返回失败ge::GRAPH_FAILED。

   #### 约束说明

无

   #### 调用示例

```
size_t capacity = 100U;
auto cv_holder = ContinuousVector::Create<int64_t>(capacity);
auto cv = reinterpret_cast<ContinuousVector *>(cv_holder.get());
auto ret = cv->SetSize(10U); // ge::GRAPH_SUCCESS
ret = cv->GetSize(101U); // ge::GRAPH_FAILED
```

---
*Updated: 2026-04-20 01:43:56*
