# FG_PerFrameExtendedCameraInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___per_frame_extended_camera_info`

**DocID**: `37fca3badd5a43568c871344942280d2`

**NodeID**: `000201775795874920322346762fa5c6`

---

FG_PerFrameExtendedCameraInfo

概述

此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时，可以提供更加详细的相机信息以获得更加准确的超帧预测效果。

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

FG_Mat4x4
 proj

相机投影矩阵，即从视图空间到裁剪空间坐标系的转换矩阵。

FG_Mat4x4
 translatedInvViewProj

平移视图投影矩阵的逆矩阵，即从裁剪空间到以相机为中心的世界空间坐标系的转换矩阵。

FG_Mat4x4
 translatedView

平移视图矩阵，即从以相机为中心的世界空间到视图空间坐标系的转换矩阵。

FG_Mat4x4
 translatedViewProj

平移视图投影矩阵，即从以相机为中心的世界空间到裁剪空间坐标系的转换矩阵。

FG_Vec3D
 worldPosition

相机世界空间坐标。

结构体成员变量说明

[h2]proj

FG_Mat4x4
 FG_PerFrameExtendedCameraInfo::proj

描述

相机投影矩阵，即从视图空间到裁剪空间坐标系的转换矩阵。

[h2]translatedInvViewProj

FG_Mat4x4
 FG_PerFrameExtendedCameraInfo::translatedInvViewProj

描述

平移视图投影矩阵的逆矩阵，即从裁剪空间到以相机为中心的世界空间坐标系的转换矩阵。

[h2]translatedView

FG_Mat4x4
 FG_PerFrameExtendedCameraInfo::translatedView

描述

平移视图矩阵，即从以相机为中心的世界空间到视图空间坐标系的转换矩阵。

[h2]translatedViewProj

FG_Mat4x4
 FG_PerFrameExtendedCameraInfo::translatedViewProj

描述

平移视图投影矩阵，即从以相机为中心的世界空间到裁剪空间坐标系的转换矩阵。

[h2]worldPosition

FG_Vec3D
 FG_PerFrameExtendedCameraInfo::worldPosition

描述

相机世界空间坐标。

---
*2026-04-22T15:55:03.996Z*