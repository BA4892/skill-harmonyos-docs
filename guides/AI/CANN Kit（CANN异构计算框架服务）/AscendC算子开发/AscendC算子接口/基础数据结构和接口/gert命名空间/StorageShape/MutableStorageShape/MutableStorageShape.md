# MutableStorageShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutablestorageshape`  |  **DocID**: `87e9e2927e58420fa8be1cd8f7c03b82`  |  **NodeID**: `0002017757954498008392669f56eff6`

---

# MutableStorageShape

  #### 函数功能

获取可写的运行时shape。

   #### 函数原型

```
Shape &MutableStorageShape()
```
   #### 参数说明

无

   #### 返回值

可写的运行时shape。

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape({3, 256, 256}, {256, 256, 3});
auto storage_shape = shape.MutableStorageShape(); // 256,256,3
```

---
*Updated: 2026-04-20 01:43:58*
