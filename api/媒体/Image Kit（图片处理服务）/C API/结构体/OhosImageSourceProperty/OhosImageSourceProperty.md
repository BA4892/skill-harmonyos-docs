# OhosImageSourceProperty

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagesourceproperty`

**DocID**: `d20c7064d60d4a05a1d7c8361bd142a0`

**NodeID**: `000201775795910761416569a63684f0`

---

OhosImageSourceProperty

struct OhosImageSourceProperty {...}

概述

定义图像源属性键值字符串。此选项给
OH_ImageSource_GetImageProperty
和
OH_ImageSource_ModifyImageProperty
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

char* value = nullptr

定义图像源属性键值字符串头地址。

size_t size = 0

定义图像源属性键值字符串大小。

---
*2026-04-22T15:53:59.860Z*