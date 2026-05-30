# GetStorageShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getstorageshape`  |  **DocID**: `af21d2e351964103bb5ec61a83a22259`  |  **NodeID**: `0002017757954498007464ebecd9c6a0`

---

# GetStorageShape

  #### 函数功能

获取运行时shape。

   #### 函数原型

```
const Shape &GetStorageShape() const
```
   #### 参数说明

无

   #### 返回值

运行时shape。

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape({3, 256, 256}, {256, 256, 3});
auto storage_shape = shape.GetStorageShape(); // 256,256,3
```

---
*Updated: 2026-04-20 01:43:56*
