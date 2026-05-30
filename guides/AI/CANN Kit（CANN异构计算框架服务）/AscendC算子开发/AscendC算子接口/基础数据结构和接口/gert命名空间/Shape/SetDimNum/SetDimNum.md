# SetDimNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setdimnum`  |  **DocID**: `9c97bf005dc44baca6e49f0b858b22de`  |  **NodeID**: `0002017757954498009038b34afd6ef6`

---

# SetDimNum

  #### 函数功能

设置dim num。

   #### 函数原型

```
void SetDimNum(const size_t dim_num)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | dim_num  | 输入  | 将Shape对象的dim_num_设置为dim_num。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
shape0.SetDimNum(1);
auto dim_num = shape0.GetDimNum(); // 1
```

---
*Updated: 2026-04-20 01:43:59*
