# GetExpandDimsType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getexpanddimstype`  |  **DocID**: `e477dc2b6c2a49e1b0be2fed454aeb56`  |  **NodeID**: `0002017757954498008111fb9e3b05d1`

---

# GetExpandDimsType

  #### 函数功能

获取补维规则。

   #### 函数原型

```
ExpandDimsType GetExpandDimsType() const
```
   #### 参数说明

无

   #### 返回值

补维规则。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
auto fmt_dim_type = format.GetExpandDimsType();
```

---
*Updated: 2026-04-20 01:43:57*
