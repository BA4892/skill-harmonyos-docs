# xeg_gles_extension.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-gles-extension-8h`  |  **DocID**: `45310c9d0c9d40a8941ae598cb9cd7e5`

---

# xeg_gles_extension.h

  #### 概述

XEngine扩展特性查询接口（OpenGL ES）。

 **引用文件**：<xengine/xeg_gles_extension.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]宏定义

 名称 描述   [XEG_EXTENSIONS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_extensions)   0x01U 作为[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)接口的入参，以获取XEngine支持的OpenGL ES扩展特性。       #### [h2]类型定义

 名称 描述   typedef const GLubyte *(GL_APIENTRYP  [PFN_HMS_XEG_GETSTRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_getstring)) (GLenum name) XEngine OpenGL ES扩展特性查询接口函数指针定义。       #### [h2]函数

 名称 描述   const GLubyte * [HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring) (GLenum name) XEngine OpenGL ES扩展特性查询接口。

---
*Updated: 2026-04-22 06:40:37*
