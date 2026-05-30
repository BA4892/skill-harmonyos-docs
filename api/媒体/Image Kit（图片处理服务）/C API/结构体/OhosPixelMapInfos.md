# OhosPixelMapInfos

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohospixelmapinfos`

**DocID**: `5732eb733ca94cd4937255ef2f504919`

**NodeID**: `000201775795910761380c9c56a932b3`

---

OhosPixelMapInfos

typedef struct OhosPixelMapInfos {...} OhosPixelMapInfos

概述

用于定义PixelMap的相关信息。

起始版本：
 10

相关模块：

Image

所在头文件：

image_pixel_map_mdk.h

汇总

[h2]成员变量

名称

描述

uint32_t width

图片的宽，用pixels表示。

uint32_t height

图片的高，用pixels表示。

uint32_t rowSize

图片在内存中，每行所占的字节数。

DMA内存为图片的宽 * 每个像素字节数 + 每行末尾填充字节数；其他内存为图片的宽 * 每个像素字节数。

int32_t pixelFormat

Pixel的格式。

---
*2026-04-22T15:55:03.660Z*