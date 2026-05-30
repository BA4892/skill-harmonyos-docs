# GetCapacity

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getcapacity`  |  **DocID**: `a7e5174af74949359c556e80f5c0040c`  |  **NodeID**: `0002017757954498006657795b44ce7d`

---

# GetCapacity

  #### 函数功能

获取本实例可容纳的最大tiling data长度。

   #### 函数原型

```
size_t GetCapacity() const;
```
   #### 参数说明

无

   #### 返回值

最大tiling data长度。

   #### 约束说明

无

   #### 调用示例

```
auto td_buf = TilingData::CreateCap(100U);
auto td = reinterpret_cast<TilingData *>(td_buf.get());
size_t cap = td->GetCapacity(); // 100U
```

---
*Updated: 2026-04-20 01:43:53*
