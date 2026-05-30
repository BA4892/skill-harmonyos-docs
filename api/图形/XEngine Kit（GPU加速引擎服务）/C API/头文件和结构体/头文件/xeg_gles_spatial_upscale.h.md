# xeg_gles_spatial_upscale.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-gles-spatial-upscale-8h`  |  **DocID**: `4931430579bc4f27bd8ffc7bfd195d73`

---

# xeg_gles_spatial_upscale.h

  #### 概述

XEngine空域GPU超分特性OpenGL ES接口。使用此头文件的接口前需要通过[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)接口查询[XEG_SPATIAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatial_upscale_extension_name)扩展可用。

 **引用文件**：<xengine/xeg_gles_spatial_upscale.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]宏定义

 名称 描述   [XEG_SPATIAL_UPSCALE_SCISSOR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatial_upscale_scissor)   0x1U 用于设置[HMS_XEG_SpatialUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_spatialupscaleparameter)接口的SCISSOR参数。  [XEG_SPATIAL_UPSCALE_SHARPNESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_spatial_upscale_sharpness)   0x2U 用于设置[HMS_XEG_SpatialUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_spatialupscaleparameter)接口的SHARPNESS参数。       #### [h2]类型定义

 名称 描述   typedef void(GL_APIENTRYP [PFN_HMS_XEG_SPATIALUPSCALEPARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_spatialupscaleparameter)) (GLenum pname, GLvoid *param) 设置空域GPU超分输入参数的函数指针定义。  typedef void(GL_APIENTRYP [PFN_HMS_XEG_RENDERSPATIALUPSCALE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_renderspatialupscale)) (GLuint inputTexture) 执行空域GPU超分渲染命令的函数指针定义。       #### [h2]函数

 名称 描述   GL_APICALL void GL_APIENTRY [HMS_XEG_SpatialUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_spatialupscaleparameter) (GLenum pname, GLvoid *param) 设置空域GPU超分输入参数。  GL_APICALL void GL_APIENTRY [HMS_XEG_RenderSpatialUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_renderspatialupscale) (GLuint inputTexture) 执行空域GPU超分渲染命令。

---
*Updated: 2026-04-22 06:40:38*
