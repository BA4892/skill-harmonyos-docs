# OH_ImagePackerNative

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-nativemodule-oh-imagepackernative`

**DocID**: `a83446b9316d4b419c7423c18ac28fe8`

**NodeID**: `0002017757959107613200ad57af761d`

---

OH_ImagePackerNative

typedef struct OH_ImagePackerNative OH_ImagePackerNative

概述

ImagePacker结构体类型，用于执行ImagePacker相关操作。

此结构体内容不可直接操作，采用函数调用方式操作具体字段，结构体内容和操作方式如下：

字段类型

字段名称

字段描述

操作函数

函数描述

OH_ImageSourceNative

imageSource

图片源

OH_ImagePackerNative_PackToDataFromImageSource

将ImageSource编码为指定格式的数据。

OH_PixelmapNative

pixelmap

native层的pixelmap

OH_ImagePackerNative_PackToDataFromPixelmap

将Pixelmap编码为指定格式的数据。

int32_t

imagesourceFd

ImageSource关联的文件描述符

OH_ImagePackerNative_PackToFileFromImageSource

将一个ImageSource编码到文件中。

int32_t

pixelmapFd

pixelmap关联的文件描述符

OH_ImagePackerNative_PackToFileFromPixelmap

将一个Pixelmap编码到文件中。

创建OH_ImagePackerNative对象使用
OH_ImagePackerNative_Create
函数。

释放OH_ImagePackerNative对象使用
OH_ImagePackerNative_Release
函数。

起始版本：
 12

相关模块：

Image_NativeModule

所在头文件：

image_packer_native.h

---
*2026-04-22T15:55:03.652Z*