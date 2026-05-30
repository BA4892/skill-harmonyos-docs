# Interface (ControlCenter)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-controlcenter`

**DocID**: `0a9074e727a64251bd83c25aa9480acb`

**NodeID**: `000201775795910761233eb26f607d23`

---

Interface (ControlCenter)

ControlCenter 继承自 
ControlCenterQuery
。

控制中心类，用于使能相机控制器。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 20开始支持。

导入模块

import { camera } from '@kit.CameraKit';

enableControlCenter
20+

enableControlCenter(enabled: boolean): void

使能相机控制器。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

enabled

boolean

是

开启或关闭相机控制器。true表示开启，false表示关闭。

错误码：

以下错误码的详细介绍请参见
Camera错误码
。

错误码ID

错误信息

7400103

Session not config.

示例：

function enableControlCenter(videoSession: camera.VideoSession, enable: boolean): void {
 let isSupported: boolean = videoSession.isControlCenterSupported();
 if (isSupported) {
 videoSession.enableControlCenter(enable);
 }
}

---
*2026-04-22T15:55:03.523Z*