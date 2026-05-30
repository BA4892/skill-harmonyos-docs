# OH_Pixelmap_HdrStaticMetadata

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `i-image-nativemodule-oh-pixelmap-hdrstaticmetadata`

**DocID**: `051ea9950ca546df8cc07a5ef3c11d78`

**NodeID**: `0002017757959107611503fee9b4e8c7`

---

OH_Pixelmap_HdrStaticMetadata

typedef struct OH_Pixelmap_HdrStaticMetadata {...} OH_Pixelmap_HdrStaticMetadata

概述

HDR_STATIC_METADATA关键字对应的静态元数据值。

起始版本：
 12

相关模块：

Image_NativeModule

所在头文件：

pixelmap_native.h

汇总

[h2]成员变量

名称

描述

float displayPrimariesX[3]

归一化后显示设备三基色的X坐标，数组的长度为3，以0.00002为单位，范围[0.0, 1.0]。

float displayPrimariesY[3]

归一化后显示设备三基色的Y坐标，数组的长度为3，以0.00002为单位，范围[0.0, 1.0]。

float whitePointX

归一化后白点值的X坐标，以0.00002为单位，范围[0.0, 1.0]。

float whitePointY

归一化后白点值的Y坐标，以0.00002为单位，范围[0.0, 1.0]。

float maxLuminance

图像主监视器最大亮度。以1为单位，最大值为65535。

float minLuminance

图像主监视器最小亮度。以0.0001为单位，最大值6.55535。

float maxContentLightLevel

显示内容的最大亮度。以1为单位，最大值为65535。

float maxFrameAverageLightLevel

显示内容的最大平均亮度，以1为单位，最大值为65535。

---
*2026-04-22T15:53:59.837Z*