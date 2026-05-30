# GetOriginShape

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-getoriginshape`  |  **DocID**: `1006b5c409064747bb2f54fe1577573a`  |  **NodeID**: `0002017757954498009614e9d4d73124`

---

# GetOriginShape

  #### 函数功能

获取Tensor的原始shape。

   #### 函数原型

```
const Shape &GetOriginShape() const
```
   #### 参数说明

无

   #### 返回值

只读的原始shape引用。

 关于Shape类型的定义，请参见[Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-construction-and-destructor)。

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {2, 1, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
auto shape = t.GetOriginShape(); // 1,2,3
```

---
*Updated: 2026-04-20 01:44:00*
