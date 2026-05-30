# OhosImageDecodingOps

> **分区**: API参考  |  **Slug**: `capi-image-ohosimagedecodingops`  |  **DocID**: `b955323e84ca4c9f9ad912e59f3f0ce1`

---

# OhosImageDecodingOps

 ```
struct OhosImageDecodingOps {...}
```
  #### 概述

定义图像源解码选项。此选项给[OH_ImageSource_CreatePixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createpixelmap)和[OH_ImageSource_CreatePixelMapList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_createpixelmaplist)接口使用。

 **起始版本：** 10

 **相关模块：** [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

 **所在头文件：** [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int8_t editable 定义输出的像素位图是否可编辑。  int32_t pixelFormat 定义输出的像素格式。  int32_t fitDensity 定义解码目标的像素密度。  uint32_t index 定义ImageSource解码索引。  uint32_t sampleSize 定义解码样本大小选项。  uint32_t rotate 定义解码旋转选项。  struct [OhosImageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesize) size 定义解码目标像素宽高的大小。  struct [OhosImageRegion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimageregion) region 定义ImageSource解码的像素范围。

---
*Updated: 2026-04-22 06:41:20*
