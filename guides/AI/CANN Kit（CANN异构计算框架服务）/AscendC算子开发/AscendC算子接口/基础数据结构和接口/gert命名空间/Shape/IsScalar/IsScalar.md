# IsScalar

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-isscalar`  |  **DocID**: `a55e53cd26744658bc0789d0dddf263a`  |  **NodeID**: `000201775795449800824729dad60c8f`

---

# IsScalar

  #### 函数功能

判断本shape是否为标量，所谓标量，是指GetDimNum()为0的张量。

   #### 函数原型

```
bool IsScalar() const
```
   #### 参数说明

无

   #### 返回值

true为标量，false为非标量。

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
Shape shape2;
shape0.IsScalar(); // false
shape2.IsScalar(); // true
```

---
*Updated: 2026-04-20 01:43:57*
