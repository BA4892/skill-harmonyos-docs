# OhosImageSourceSupportedFormatList

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagesourcesupportedformatlist`

**DocID**: `c6128209a03e4a59951c8b9c1f112564`

**NodeID**: `00020177579591076141579678224fed`

---

OhosImageSourceSupportedFormatList

struct OhosImageSourceSupportedFormatList {...}

概述

定义图像源支持的格式字符串列表。由
OH_ImageSource_GetSupportedFormats
获取。

起始版本：
 10

相关模块：

Image

所在头文件：

image_source_mdk.h

汇总

[h2]成员变量

名称

描述

struct 
OhosImageSourceSupportedFormat
** supportedFormatList = nullptr

图像源支持的格式字符串列表头地址。

size_t size = 0

图像源支持的格式字符串列表大小。

---
*2026-04-22T15:53:59.860Z*