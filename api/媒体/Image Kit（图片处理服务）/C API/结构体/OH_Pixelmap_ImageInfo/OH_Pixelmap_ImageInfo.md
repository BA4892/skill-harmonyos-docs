# OH_Pixelmap_ImageInfo

> **分区**: API参考  |  **Slug**: `capi-image-nativemodule-oh-pixelmap-imageinfo`  |  **DocID**: `7e140fd7bb7d449b8bd6bd560cae201c`

---

# OH_Pixelmap_ImageInfo

 ```
struct OH_Pixelmap_ImageInfo
```
  #### 概述

OH_Pixelmap_ImageInfo是native层封装的图像像素信息结构体，保存图像像素的宽高、行跨距、像素格式、是否是HDR。

 创建OH_Pixelmap_ImageInfo对象使用[OH_PixelmapImageInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_create)函数。

 释放OH_Pixelmap_ImageInfo对象使用[OH_PixelmapImageInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_release)函数。

 OH_Pixelmap_ImageInfo结构体内容和操作方式如下：

  字段类型 字段名称 字段描述 操作函数 函数描述   uint32_t width 图片宽 [OH_PixelmapImageInfo_GetWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getwidth) 获取图片宽。  uint32_t height 图片高 [OH_PixelmapImageInfo_GetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getheight) 获取图片高。  uint32_t rowStride 行跨距 [OH_PixelmapImageInfo_GetRowStride](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getrowstride) 获取行跨距。  int32_t pixelFormat 像素格式 [OH_PixelmapImageInfo_GetPixelFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getpixelformat) 获取像素格式。  int32_t alphaType 透明度类型 [OH_PixelmapImageInfo_GetAlphaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getalphatype) 获取透明度类型。  bool isHdr 是否为高动态范围（HDR）的信息 [OH_PixelmapImageInfo_GetDynamicRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapimageinfo_getdynamicrange) 获取Pixelmap是否为高动态范围的信息。     **起始版本：** 12

 **相关模块：** [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

 **所在头文件：** [pixelmap_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h)

---
*Updated: 2026-04-22 06:41:06*
