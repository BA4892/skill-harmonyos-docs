# MutableFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-mutableformat`  |  **DocID**: `b32e50f74e8a4037a48eed01ba3dcf07`  |  **NodeID**: `000201775795449801019c593d80678e`

---

# MutableFormat

  #### 函数功能

获取Tensor的format，包含运行时format和原始format。

   #### 函数原型

```
StorageFormat &MutableFormat()
```
   #### 参数说明

无

   #### 返回值

format引用。

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
auto fmt = tensor.MutableFormat();
```

---
*Updated: 2026-04-20 01:44:02*
