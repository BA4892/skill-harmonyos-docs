# OhosImageSourceSupportedFormat

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagesourcesupportedformat`

**DocID**: `d77dc28bd8904a7da7d8e0e6803a6858`

**NodeID**: `000201775795910761414b6ccd6f96c5`

---

OhosImageSourceSupportedFormat

struct OhosImageSourceSupportedFormat {...}

概述

定义图像源支持的格式字符串。此选项给
OhosImageSourceSupportedFormatList
和
OH_ImageSource_GetSupportedFormats
接口使用。

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

char* format = nullptr

图像源支持的格式字符串头地址。

size_t size = 0

图像源支持的格式字符串大小。

---
*2026-04-22T15:53:59.859Z*