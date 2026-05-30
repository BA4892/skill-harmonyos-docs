# AREngine_ARAugmentedImageSource

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arengine-struct-araugmentedimagesource`

**DocID**: `120fe8d8a0d345d7b332bc164943bece`

**NodeID**: `0002017757958749202711f86295fed1`

---

AREngine_ARAugmentedImageSource

概述

图像数据。

起始版本：
 5.1.0(18)

相关模块：

AR Engine

汇总

[h2]成员变量

名称

描述

const char *
imageName

图像名，不允许为空，255个字符以内，超过255个的字符将会被丢弃。

const uint8_t *
imageData

灰度图像元素数组地址。

int32_t 
pixelWidth

图像像素宽度。

int32_t 
pixelHeight

图像像素高度。

int32_t 
stride

图像步幅。

float 
realWidthInMeters

图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。

结构体成员变量说明

[h2]imageName

const char* AREngine_ARAugmentedImageSource::imageName

描述

图像名，不允许为空，255个字符以内，超过255个的字符将会被丢弃。

[h2]imageData

const uint8_t* AREngine_ARAugmentedImageSource::imageData

描述

灰度图像元素数组地址。

[h2]pixelWidth

int32_t AREngine_ARAugmentedImageSource::pixelWidth

描述

图像像素宽度。

[h2]pixelHeight

int32_t AREngine_ARAugmentedImageSource::pixelHeight

描述

图像像素高度。

[h2]stride

int32_t AREngine_ARAugmentedImageSource::stride

描述

图像步幅。

[h2]realWidthInMeters

float AREngine_ARAugmentedImageSource::realWidthInMeters

描述

图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。

---
*2026-04-22T15:53:59.984Z*