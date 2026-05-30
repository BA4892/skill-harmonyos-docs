# Interface (MediaAssetProgressHandler)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `s-apis-photoaccesshelper-mediaassetprogresshandler`

**DocID**: `2d9e4fdf42504c71add1350c6f14cf67`

**NodeID**: `000201775795910761231283110cf85b`

---

Interface (MediaAssetProgressHandler)

媒体资产进度处理器，应用于onProgress方法中获取媒体资产进度。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 15开始支持。

导入模块

import { photoAccessHelper } from '@kit.MediaLibraryKit';

onProgress
15+

onProgress(progress: number): void

当所请求的视频资源返回进度时系统会回调此方法。

系统能力
：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

参数名

类型

必填

说明

progress

number

是

返回的进度百分比，范围为[0, 100]。

---
*2026-04-22T15:53:59.946Z*