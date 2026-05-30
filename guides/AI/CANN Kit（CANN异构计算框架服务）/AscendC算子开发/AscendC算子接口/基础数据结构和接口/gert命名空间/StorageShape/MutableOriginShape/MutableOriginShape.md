# MutableOriginShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutableoriginshape`  |  **DocID**: `1a954b7a3bb743f2bbebc805d3988794`  |  **NodeID**: `000201775795449800775513007b45da`

---

# MutableOriginShape

  #### 函数功能

获取可写的原始shape。

   #### 函数原型

```
Shape &MutableOriginShape()
```
   #### 参数说明

无

   #### 返回值

可写的原始shape。

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape({3, 256, 256}, {256, 256, 3});
auto origin_shape = shape.MutableOriginShape(); // 3,256,256
```

---
*Updated: 2026-04-20 01:43:57*
