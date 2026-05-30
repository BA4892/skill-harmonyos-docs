# SetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-setsize`  |  **DocID**: `8d9fcf779068414d932d05fd24ab9968`  |  **NodeID**: `00020177579544980084566f4efca2ef`

---

# SetSize

  #### 函数功能

设置Tensor的内存大小。

   #### 函数原型

```
void SetSize(const size_t size)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | size  | 输入  | Tensor的内存大小，单位是字节。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
t.SetSize(0U);
```

---
*Updated: 2026-04-20 01:43:58*
