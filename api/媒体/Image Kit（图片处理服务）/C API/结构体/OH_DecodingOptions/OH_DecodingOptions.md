# OH_DecodingOptions

> **分区**: API参考  |  **Slug**: `capi-image-nativemodule-oh-decodingoptions`  |  **DocID**: `87e9c62ace1c4dd29e4efe2caef4b3c0`

---

# OH_DecodingOptions

 ```
typedef struct OH_DecodingOptions OH_DecodingOptions
```
  #### 概述

OH_DecodingOptions是native层封装的解码选项参数结构体，用于设置解码选项参数，在创建Pixelmap时作为入参传入，详细信息见[OH_ImageSourceNative_CreatePixelmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourcenative_createpixelmap)。

 OH_DecodingOptions结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

 创建OH_DecodingOptions对象使用[OH_DecodingOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_create)函数。

 释放OH_DecodingOptions对象使用[OH_DecodingOptions_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_release)函数。

 OH_DecodingOptions结构体内容和操作方式如下：

  字段类型 字段名称 字段描述 字段默认值 字段获取函数 字段设置函数   int32_t pixelFormat 像素格式 RGBA_8888 [OH_DecodingOptions_GetPixelFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getpixelformat) [OH_DecodingOptions_SetPixelFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setpixelformat)  uint32_t index 解码图片序号 0 [OH_DecodingOptions_GetIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getindex) [OH_DecodingOptions_SetIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setindex)  float rotate 旋转角度 单位为deg, 默认值为0 [OH_DecodingOptions_GetRotate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getrotate) [OH_DecodingOptions_SetRotate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setrotate)  Image_Size desiredSize 期望输出大小 默认为原始图片尺寸 [OH_DecodingOptions_GetDesiredSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getdesiredsize) [OH_DecodingOptions_SetDesiredSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setdesiredsize)  Image_Region desiredRegion 解码区域 默认为完整图片大小的区域 [OH_DecodingOptions_GetDesiredRegion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getdesiredregion) [OH_DecodingOptions_SetDesiredRegion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setdesiredregion)  int32_t desiredDynamicRange 期望动态范围 SDR [OH_DecodingOptions_GetDesiredDynamicRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_getdesireddynamicrange) [OH_DecodingOptions_SetDesiredDynamicRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_decodingoptions_setdesireddynamicrange)     **起始版本：** 12

 **相关模块：** [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

 **所在头文件：** [image_source_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h)

---
*Updated: 2026-04-22 06:40:53*
