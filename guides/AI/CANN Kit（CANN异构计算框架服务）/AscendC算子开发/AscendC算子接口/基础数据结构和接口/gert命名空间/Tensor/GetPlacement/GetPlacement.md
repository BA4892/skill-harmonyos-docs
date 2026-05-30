# GetPlacement

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-ge-tensor-getplacement`  |  **DocID**: `6a3c4402802546e5b16a1bb7501f9c56`  |  **NodeID**: `000201775795449801036ea7b0574181`

---

# GetPlacement

  #### 函数功能

获取tensor的placement。

   #### 函数原型

```
TensorPlacement GetPlacement() const
```
   #### 参数说明

无

   #### 返回值

返回tensor的placement。

 关于TensorPlacement类型的定义，请参见[TensorPlacement](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensorplacement)。

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto placement = tensor.GetPlacement(); // kFollowing
```

---
*Updated: 2026-04-20 01:44:03*
