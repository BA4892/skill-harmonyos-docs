# GetFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getformat`  |  **DocID**: `fef874a711224d1ba9bbb394f5d1aa17`  |  **NodeID**: `0002017757954498010164d03f97aa88`

---

# GetFormat

  #### 函数功能

获取Tensor的format，包含运行时format和原始format，返回的format对象都是只读的。

   #### 函数原型

```
const StorageFormat &GetFormat() const
```
   #### 参数说明

无

   #### 返回值

只读的format引用。

 关于StorageFormat类型的定义，请参见[StorageFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageformat-constructor)。

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto fmt = tensor.GetFormat();
```

---
*Updated: 2026-04-20 01:44:02*
