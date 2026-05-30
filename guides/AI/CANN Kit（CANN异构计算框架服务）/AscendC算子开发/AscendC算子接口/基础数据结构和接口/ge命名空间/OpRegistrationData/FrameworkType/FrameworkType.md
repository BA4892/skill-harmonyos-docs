# FrameworkType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-frameworktype`  |  **DocID**: `cea358a94d9d4a8cacbfe1a30b8f9696`  |  **NodeID**: `0002017757954498007539162a37aee8`

---

# FrameworkType

  #### 函数功能

设置原始模型的框架类型。

   #### 函数原型

```
OpRegistrationData &FrameworkType(const domi::FrameworkType &fmk_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | fmk_type  | 输入  框架类型。

 - CAFFE

 - TENSORFLOW

 - ONNX

 FrameworkType枚举值的如下：CAFFE、MINDSPORE、TENSORFLOW、ANDROID_NN、ONNX、FRAMEWORK_RESERVED。

---
*Updated: 2026-04-20 01:43:56*
