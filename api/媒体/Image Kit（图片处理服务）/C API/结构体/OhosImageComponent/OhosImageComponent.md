# OhosImageComponent

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagecomponent`

**DocID**: `1c4c987c56ad43ee89e451f385b2999c`

**NodeID**: `0002017757959107613645ce50f28c50`

---

OhosImageComponent

struct OhosImageComponent {...}

概述

定义图像组成信息。

起始版本：
 10

相关模块：

Image

所在头文件：

image_mdk.h

汇总

[h2]成员变量

名称

描述

uint8_t* byteBuffer

像素数据地址。

size_t size

内存中的像素数据大小。

int32_t componentType

像素数据类型。

1：OHOS_IMAGE_COMPONENT_FORMAT_YUV_Y 亮度信息。

2：OHOS_IMAGE_COMPONENT_FORMAT_YUV_U 色度信息。

3：OHOS_IMAGE_COMPONENT_FORMAT_YUV_V 色差值信息。

4：OHOS_IMAGE_COMPONENT_FORMAT_JPEG JPEG格式。

int32_t rowStride

像素数据行宽。读取相机预览流数据时，需要考虑按stride进行读取，具体用法见
C/C++预览流二次处理示例
。

int32_t pixelStride

像素数据的像素大小。

---
*2026-04-22T15:53:59.849Z*