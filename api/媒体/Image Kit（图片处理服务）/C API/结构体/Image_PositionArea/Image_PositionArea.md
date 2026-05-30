# Image_PositionArea

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-nativemodule-image-positionarea`

**DocID**: `07e1b75a9a0748f78451c64b3c7678d3`

**NodeID**: `000201775795910761430bc23c88dab9`

---

Image_PositionArea

typedef struct Image_PositionArea {...} Image_PositionArea

概述

要读取或写入的图像像素区域。

起始版本：
 22

相关模块：

Image_NativeModule

所在头文件：

image_common.h

汇总

[h2]成员变量

名称

描述

uint8_t *pixels

读取或写入的图像像素数据。仅支持BRGA_8888格式的数据。

size_t pixelsSize

图像像素数据的长度（单位：字节）。

uint32_t offset

数据读取或写入的偏移量（单位：字节）。

uint32_t stride

区域的跨距，即区域中每行像素所占的空间（单位：字节）。stride >= region.size.width * 4。

Image_Region
 region

读取或写入的区域。区域宽度加X坐标不能大于原图的宽度，区域高度加Y坐标不能大于原图的高度。

---
*2026-04-22T15:53:59.869Z*