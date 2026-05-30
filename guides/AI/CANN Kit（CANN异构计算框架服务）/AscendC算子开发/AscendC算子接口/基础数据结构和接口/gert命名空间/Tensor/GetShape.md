# GetShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getshape`  |  **DocID**: `fd29702ace0a4e9ea6e33f960c7c648c`  |  **NodeID**: `0002017757954498009762d98eef4efa`

---

# GetShape

  #### 函数功能

获取Tensor的shape，包含运行时和原始shape。

   #### 函数原型

```
const StorageShape &GetShape() const
StorageShape &GetShape()
```
   #### 参数说明

无

   #### 返回值

const StorageShape &GetShape() const：返回只读的shape引用。

  StorageShape &GetShape()：返回shape引用。

  
 关于StorageShape类型的定义，请参见[StorageShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction)。

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {2, 1, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
auto shape = t.GetShape(); // sh
```

---
*Updated: 2026-04-20 01:44:01*
