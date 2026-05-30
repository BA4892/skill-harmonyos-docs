# GetDimNum

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdimnum`  |  **DocID**: `3a525f8260b14921acc172aab19079d8`  |  **NodeID**: `000201775795449800885393c16404c2`

---

# GetDimNum

  #### 函数功能

获取dim_num。

   #### 函数原型

```
size_t GetDimNum() const
```
   #### 参数说明

无

   #### 返回值

获取dim_num，即Shape的长度。

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
auto dim_num = shape0.GetDimNum(); // 3
```

---
*Updated: 2026-04-20 01:43:59*
