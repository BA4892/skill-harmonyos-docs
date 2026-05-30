# Interface (QuickImageDataHandler)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-photoaccesshelper-quickimagedatahandler`

**DocID**: `59d76a57fe154fd48de8166bec0baa71`

**NodeID**: `0002017757959107612929c9954188f9`

---

Interface (QuickImageDataHandler)

媒体资源处理器，应用在onDataPrepared方法中可自定义媒体资源处理逻辑。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 13开始支持。

导入模块

import { photoAccessHelper } from '@kit.MediaLibraryKit';

onDataPrepared
13+

onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void

当请求的图片资源准备就绪时，系统会回调媒体资源就绪通知方法。如果资源准备出错，回调的data将为undefined。

map支持返回的信息：

map键名

值说明

'quality'

图片质量。高质量为'high'，低质量为'low'。

系统能力
：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

参数名

类型

必填

说明

data

T

是

已就绪的图片资源数据。泛型，支持
Picture
数据类型。

imageSource

image.ImageSource

是

已就绪的图片资源数据。

map
13+

Map<string, string>

是

用于获取图片资源的额外信息，如图片质量。仅支持'quality'。

示例：

import { image } from '@kit.ImageKit';

class MediaHandler implements photoAccessHelper.QuickImageDataHandler<image.Picture> {
 onDataPrepared(data: image.Picture, imageSource: image.ImageSource, map: Map<string, string>) {
 console.info('on image data prepared');
 }
}

---
*2026-04-22T15:53:59.949Z*