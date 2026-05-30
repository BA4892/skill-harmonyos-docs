# SetScalar

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setscalar`  |  **DocID**: `f76c6ca5d53949f1ac343453faba80d6`  |  **NodeID**: `00020177579544980084919768d0a1c8`

---

# SetScalar

  #### 函数功能

设置shape为标量。

   #### 函数原型

```
void SetScalar()
```
   #### 参数说明

无

   #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
shape0.IsScalar(); // false
shape0.SetScalar();
shape0.IsScalar(); // true
```

---
*Updated: 2026-04-20 01:43:58*
