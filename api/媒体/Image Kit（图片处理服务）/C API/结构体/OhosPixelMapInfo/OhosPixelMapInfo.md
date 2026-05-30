# OhosPixelMapInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohospixelmapinfo`

**DocID**: `2b5a22a5066e4b19a404558aaad7c843`

**NodeID**: `000201775795910761395c723ee1e85b`

---

OhosPixelMapInfo

struct OhosPixelMapInfo {...}

概述

用于定义PixelMap的相关信息。

起始版本：
 8

废弃版本：
 10

相关模块：

Image

所在头文件：

image_pixel_map_napi.h

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

Pixel的格式，取值范围：

0：未知格式。

2：格式为RGB_565。

3：格式为RGBA_8888。

4：格式为BGRA_8888。

5：格式为RGB_888。

6：格式为ALPHA_8。

7：格式为RGBA_F16。

8：格式为NV21。

9：格式为NV12。

---
*2026-04-22T15:53:59.854Z*