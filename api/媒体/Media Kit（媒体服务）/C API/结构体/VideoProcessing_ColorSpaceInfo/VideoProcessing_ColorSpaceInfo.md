# VideoProcessing_ColorSpaceInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `api-videoprocessing-videoprocessing-colorspaceinfo`

**DocID**: `07dfa01de1004ab9ab3a05414d0d249c`

**NodeID**: `0002017757959107614026cdd726fc35`

---

VideoProcessing_ColorSpaceInfo

typedef struct VideoProcessing_ColorSpaceInfo {...} VideoProcessing_ColorSpaceInfo

概述

视频颜色空间信息数据结构。

参考：

OH_VideoProcessing_IsColorSpaceConversionSupported

起始版本：
 12

相关模块：

VideoProcessing

所在头文件：

video_processing_types.h

汇总

[h2]成员变量

名称

描述

int32_t metadataType

视频元数据类型，参考
OH_NativeBuffer_MetadataType
。

int32_t colorSpace

视频颜色空间类型，参考
OH_NativeBuffer_ColorSpace
。

int32_t pixelFormat

视频像素格式，参考
OH_NativeBuffer_Format
。

---
*2026-04-22T15:53:59.934Z*