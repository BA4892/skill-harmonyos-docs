# GetOriginFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoriginformat`  |  **DocID**: `17bdf09739254d379200367530bd3c7e`  |  **NodeID**: `000201775795449800660fe46bd7a317`

---

# GetOriginFormat

  #### 函数功能

获取原始format。

   #### 函数原型

```
ge::Format GetOriginFormat() const
```
   #### 参数说明

无

   #### 返回值

原始format。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
auto origin_format = format.GetOriginFormat();  // Format::FORMAT_NCHW
```

---
*Updated: 2026-04-20 01:43:53*
