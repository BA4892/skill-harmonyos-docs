# OH_ImageSource_Info

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-nativemodule-imagesource-info`

**DocID**: `aca2283ce34c46e28b8e39e79a4b0db5`

**NodeID**: `00020177579591076103237d9be25fcf`

---

OH_ImageSource_Info

struct OH_ImageSource_Info

概述

OH_ImageSource_Info是native层封装的ImageSource信息结构体，OH_ImageSource_Info结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

创建OH_ImageSource_Info对象使用
OH_ImageSourceInfo_Create
函数。

释放OH_ImageSource_Info对象使用
OH_ImageSourceInfo_Release
函数。调用该接口之后，与OH_ImageSource_Info结构体相关的属性均会被释放。因此在调用该接口前，请务必确认相关属性已不再被需要或对相关属性已完成深拷贝操作。

OH_ImageSource_Info结构体内容和操作方式如下：

字段类型

字段名称

字段描述

操作函数

函数描述

uint32_t

width

图片宽度

OH_ImageSourceInfo_GetWidth

获取图片的宽。

uint32_t

height

图片高度

OH_ImageSourceInfo_GetHeight

获取图片的高。

bool

isHdr

是否为高动态范围（HDR）的信息

OH_ImageSourceInfo_GetDynamicRange

获取图片是否为高动态范围的信息。

Image_MimeType

mimeType

图片源的MIME类型

OH_ImageSourceInfo_GetMimetype

获取图片的MimeType。

起始版本：
 12

相关模块：

Image_NativeModule

所在头文件：

image_source_native.h

---
*2026-04-22T15:55:03.640Z*