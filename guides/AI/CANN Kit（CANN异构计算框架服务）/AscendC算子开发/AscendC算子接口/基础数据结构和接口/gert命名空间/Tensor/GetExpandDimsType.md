# GetExpandDimsType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-getexpanddimstype`  |  **DocID**: `71b4e4e1854a448481b7172f5ec2aaa2`  |  **NodeID**: `000201775795449801029d85af3548f2`

---

# GetExpandDimsType

  #### 函数功能

获取shape的补维规则。

   #### 函数原型

```
ExpandDimsType GetExpandDimsType() const
```
   #### 参数说明

无

   #### 返回值

返回shape的补维规则。

 关于ExpandDimsType类型的定义，请参见[ExpandDimsType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-expanddimstype-introduction)。

   #### 约束说明

无

   #### 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}},       // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}},  // format
              kFollowing,                                  // placement
              ge::DT_FLOAT16,                              // dt
              nullptr};
auto expand_dims_type = tensor.GetExpandDimsType();   // ExpandDimsType{}
```

---
*Updated: 2026-04-20 01:44:02*
