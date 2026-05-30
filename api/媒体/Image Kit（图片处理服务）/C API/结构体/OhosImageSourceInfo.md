# OhosImageSourceInfo

> **分区**: API参考  |  **Slug**: `capi-image-ohosimagesourceinfo`  |  **DocID**: `7092dfbb07684f09be007ede0462a08e`

---

# OhosImageSourceInfo

 ```
struct OhosImageSourceInfo {...}
```
  #### 概述

定义图像源信息，由[OH_ImageSource_GetImageInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_getimageinfo)获取。

 **起始版本：** 10

 **相关模块：** [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

 **所在头文件：** [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t pixelFormat 图像源像素格式，由[OH_ImageSource_CreateFromUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH_ImageSource_CreateFromFd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromfd)和[OH_ImageSource_CreateFromData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromdata)设置。  int32_t colorSpace 图像源色彩空间。  int32_t alphaType 图像源透明度类型。  int32_t density 图像源密度，由[OH_ImageSource_CreateFromUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromuri)、[OH_ImageSource_CreateFromFd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromfd)和[OH_ImageSource_CreateFromData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createfromdata)设置。  struct [OhosImageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesize) size 图像源像素宽高的大小。

---
*Updated: 2026-04-22 06:41:20*
