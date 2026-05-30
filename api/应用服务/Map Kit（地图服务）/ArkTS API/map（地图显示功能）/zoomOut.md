# zoomOut

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-zoomout`

**DocID**: `71b38a1100b841b8a734236dd7c9726a`

**NodeID**: `000201775795946267355705b8016c3d`

---

zoomOut

导入模块

import { map } from '@kit.MapKit';

zoomOut

zoomOut(): CameraUpdate

缩小地图缩放级别，在当前地图显示的级别基础上减1。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

返回值：

类型

说明

CameraUpdate

描述地图状态将要发生的变化。

示例：

let cameraUpdate: map.CameraUpdate = map.zoomOut();

---
*2026-04-22T15:55:04.240Z*