# FG_DispatchDescription_GLES

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___dispatch_description___g_l_e_s`

**DocID**: `37f984af614f415dbeefd141d9c95032`

**NodeID**: `000201775795874920298972651e96d3`

---

FG_DispatchDescription_GLES

概述

此结构体描述下发帧生成命令
HMS_FG_Dispatch_GLES
需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

uint32_t 
inputColor

真实渲染帧颜色缓冲区索引，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。

取值范围：[0, 2^32 -1]。

uint32_t 
inputDepthStencil

真实渲染帧深度模板缓冲区索引，支持格式包括GL_DEPTH24_STENCIL8、GL_DEPTH32F_STENCIL8。

取值范围：[0, 2^32 -1]。

FG_Mat4x4

viewProj

真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

FG_Mat4x4

invViewProj

真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

uint32_t 
outputColor

预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。

取值范围：[0, 2^32 -1]。

结构体成员变量说明

[h2]inputColor

uint32_t FG_DispatchDescription_GLES::inputColor

描述

真实渲染帧颜色缓冲区索引，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。

[h2]inputDepthStencil

uint32_t FG_DispatchDescription_GLES::inputDepthStencil

描述

真实渲染帧深度模板缓冲区索引，支持格式包括GL_DEPTH24_STENCIL8、GL_DEPTH32F_STENCIL8。

[h2]invViewProj

FG_Mat4x4
 FG_DispatchDescription_GLES::invViewProj

描述

真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

[h2]outputColor

uint32_t FG_DispatchDescription_GLES::outputColor

描述

预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。

[h2]viewProj

FG_Mat4x4
 FG_DispatchDescription_GLES::viewProj

描述

真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。

---
*2026-04-22T15:54:00.151Z*