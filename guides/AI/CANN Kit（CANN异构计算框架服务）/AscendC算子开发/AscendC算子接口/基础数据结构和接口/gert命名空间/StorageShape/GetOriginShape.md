# GetOriginShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoriginshape`  |  **DocID**: `987da52e9bf84b029b2434d52105f9fa`  |  **NodeID**: `000201775795449800729e56e9c5982c`

---

# GetOriginShape

  #### 函数功能

获取原始shape。

   #### 函数原型

```
const Shape &GetOriginShape() const
```
   #### 参数说明

无

   #### 返回值

原始shape

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape({3, 256, 256}, {256, 256, 3});
auto origin_shape = shape.GetOriginShape(); // 3,256,256
```

---
*Updated: 2026-04-20 01:43:55*
