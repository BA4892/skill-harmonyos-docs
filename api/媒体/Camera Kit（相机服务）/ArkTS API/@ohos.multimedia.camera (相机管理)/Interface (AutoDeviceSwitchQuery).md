# Interface (AutoDeviceSwitchQuery)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-autodeviceswitchquery`

**DocID**: `c5c59d97bda64ea597c7d16e00762c47`

**NodeID**: `00020177579591076109294dfdb4cecc`

---

Interface (AutoDeviceSwitchQuery)

自动切换镜头查询类，用于查询设备是否支持自动切换镜头。

自动切换镜头能力
仅支持折叠屏设备使用，如需使能该能力请参考
enableAutoDeviceSwitch
。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 13开始支持。

导入模块

import { camera } from '@kit.CameraKit';

isAutoDeviceSwitchSupported
13+

isAutoDeviceSwitchSupported(): boolean

查询设备是否支持自动切换镜头能力。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

返回值：

类型

说明

boolean

是否支持自动切换镜头，true为支持，false为不支持。

示例：

// 本示例用于查询折叠屏设备是否支持自动切换相机镜头。
// 当示例代码返回true时，可继续使用enableAutoDeviceSwitch使能自动切换摄像头能力。
function isAutoDeviceSwitchSupported(session: camera.PhotoSession): boolean {
 let isSupported = false;
 isSupported = session.isAutoDeviceSwitchSupported();
 return isSupported;
}

---
*2026-04-22T15:55:03.518Z*