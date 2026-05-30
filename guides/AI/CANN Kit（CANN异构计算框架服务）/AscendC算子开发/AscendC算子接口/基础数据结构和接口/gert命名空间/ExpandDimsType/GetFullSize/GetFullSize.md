# GetFullSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getfullsize`  |  **DocID**: `06ac1e4163f8463a82a9c110faab9a34`  |  **NodeID**: `000201775795449800743fbe98f7ea95`

---

# GetFullSize

  #### 函数功能

获取补维后的dim数。

   #### 函数原型

```
AxisIndex GetFullSize() const
```
   #### 参数说明

无

   #### 返回值

返回补维规则的长度，或者说是补维规则描述的维度。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType type1("1001");
auto dim_num = type1.GetFullSize(); // dim_num=4
```

---
*Updated: 2026-04-20 01:43:55*
