# SetPlacement

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-ge-tensor-setplacement`  |  **DocID**: `76f6defb48e54e16aed47ba6af1a29f6`  |  **NodeID**: `000201775795449801042f85f770ab17`

---

# SetPlacement

  #### 函数功能

设置tensor的placement。

   #### 函数原型

```
void SetPlacement(const TensorPlacement placement)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | placement  | 输入  需要设置的tensor的placement。

 关于TensorPlacement类型的定义，请参见[TensorPlacement](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensorplacement)。

  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
tensor.SetPlacement(TensorPlacement::kOnDeviceHbm);
auto placement = tensor.GetPlacement(); // kOnDeviceHbm
```

---
*Updated: 2026-04-20 01:44:03*
