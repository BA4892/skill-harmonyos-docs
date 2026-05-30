# Interface (ColorManagementQuery)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-colormanagementquery`

**DocID**: `35f5e2ac2ceb4e30b305e8608f3eb157`

**NodeID**: `000201775795910761226b89d80b22a2`

---

Interface (ColorManagementQuery)

色彩管理类，用于查询色彩空间参数。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 12开始支持。

导入模块

import { camera } from '@kit.CameraKit';

getSupportedColorSpaces
12+

getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>

获取支持的色彩空间列表。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

返回值：

类型

说明

Array<
colorSpaceManager.ColorSpace
>

支持的色彩空间列表。若接口调用失败，返回undefined。

示例：

import { colorSpaceManager } from '@kit.ArkGraphics2D';

function getSupportedColorSpaces(session: camera.PhotoSession): Array<colorSpaceManager.ColorSpace> {
 let colorSpaces: Array<colorSpaceManager.ColorSpace> = [];
 colorSpaces = session.getSupportedColorSpaces();
 return colorSpaces;
}

---
*2026-04-22T15:55:03.522Z*