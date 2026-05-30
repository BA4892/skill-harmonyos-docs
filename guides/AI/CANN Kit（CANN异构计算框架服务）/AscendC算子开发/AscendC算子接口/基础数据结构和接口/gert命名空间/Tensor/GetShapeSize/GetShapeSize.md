# GetShapeSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getshapesize`  |  **DocID**: `c9938a90544a412395b1728508da9d5f`  |  **NodeID**: `00020177579544980068450b97e98f40`

---

# GetShapeSize

  #### 函数功能

获取当前Tensor运行时的shape大小，即此Tensor中包含的元素的数量。

   #### 函数原型

```
int64_t GetShapeSize() const
```
   #### 参数说明

不涉及。

   #### 返回值

返回执行时shape的大小。

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kOnDeviceHbm,                                // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto shape_size = tensor.GetShapeSize(); // 16*3*224*224
```

---
*Updated: 2026-04-20 01:43:53*
