# abr_gles.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `abr__gles_8h`

**DocID**: `9836d2f38bb2451ab5c293d07c9e7cf4`

**NodeID**: `000201775795874920277b87dda6cb69`

---

abr_gles.h

概述

声明OpenGL ES图形API平台的ABR接口。

库：
 libabr.so

系统能力：
 SystemCapability.GraphicsGame.RenderAccelerate

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]函数

名称

描述

ABR_ErrorCode

HMS_ABR_MarkFrameBuffer_GLES
(
ABR_Context
* context)

标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。

ABR_ErrorCode

HMS_ABR_GetScaledTexture_GLES
(
ABR_Context
* context, uint32_t originTexture, uint32_t* scaledTexture)

根据原始GLES纹理获取ABR渲染后的GLES纹理。

---
*2026-04-22T15:55:03.983Z*