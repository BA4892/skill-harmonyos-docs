# GetStorageFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getstorageformat`  |  **DocID**: `53ef40eb64f94bb89e307acf125b0f21`  |  **NodeID**: `000201775795449800750888cdb2f636`

---

# GetStorageFormat

  #### 函数功能

获取运行时format。

   #### 函数原型

```
ge::Format GetStorageFormat() const
```
   #### 参数说明

无

   #### 返回值

运行时format。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
auto storage_format = format.GetStorageFormat();  // Format::FORMAT_C1HWNC0
```

---
*Updated: 2026-04-20 01:43:55*
