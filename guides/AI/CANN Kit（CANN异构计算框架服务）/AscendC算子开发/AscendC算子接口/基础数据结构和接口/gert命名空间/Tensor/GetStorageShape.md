# GetStorageShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-getstorageshape`  |  **DocID**: `7c63db46917842649ff6f7f3eaf27c50`  |  **NodeID**: `000201775795449800939d887fb90796`

---

# GetStorageShape

  #### 函数功能

获取运行时Tensor的StorageShape，此shape对象为只读。StorageShape和[GetOriginShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-getoriginshape)的区别如下。OriginShape是Tensor最初创建时的形状，StorageShape是保存Tensor数据的底层存储的形状。运行时为了适配底层硬件，Tensor的StorageShape和其OriginShape可能会有所不同。

   #### 函数原型

```
const Shape &GetStorageShape() const
```
   #### 参数说明

无

   #### 返回值

只读的运行时shape引用。

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {2, 1, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
auto shape = t.GetStorageShape(); // 2,1,3
```

---
*Updated: 2026-04-20 01:44:00*
