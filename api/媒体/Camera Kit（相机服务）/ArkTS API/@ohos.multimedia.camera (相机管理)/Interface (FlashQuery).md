# Interface (FlashQuery)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-flashquery`

**DocID**: `6087dcb1e48748408bbc5ed8ea3bd1c0`

**NodeID**: `000201775795910761282618b77eed74`

---

Interface (FlashQuery)

提供了查询设备的闪光灯状态和模式的能力。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface的起始版本为API version 12。接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。

导入模块

import { camera } from '@kit.CameraKit';

hasFlash
11+

hasFlash(): boolean

检测是否有闪光灯，返回是否支持闪光灯。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

返回值：

类型

说明

boolean

表示设备是否支持闪光灯。true表示支持闪光灯，false表示不支持闪光灯。

如果返回false，则
isFlashModeSupported
、
setFlashMode
和
getFlashMode
都不会生效。

接口调用失败会返回相应错误码，错误码类型
CameraErrorCode
。

错误码：

以下错误码的详细介绍请参见
Camera错误码
。

错误码ID

错误信息

7400103

Session not config, only throw in session usage.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

function hasFlash(photoSession: camera.PhotoSession): boolean {
 let status: boolean = false;
 try {
 status = photoSession.hasFlash();
 } catch (error) {
 // 失败返回错误码error.code并处理。
 let err = error as BusinessError;
 console.error(`The hasFlash call failed. error code: ${err.code}`);
 }
 return status;
}

isFlashModeSupported
11+

isFlashModeSupported(flashMode: FlashMode): boolean

检测闪光灯模式是否支持。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

flashMode

FlashMode

是

指定闪光灯模式。传参为null或者undefined，作为0处理，闪光灯关闭。

返回值：

类型

说明

boolean

检测表示支持该闪光灯模式。true表示支持，false表示不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型
CameraErrorCode
。

错误码：

以下错误码的详细介绍请参见
Camera错误码
。

错误码ID

错误信息

7400103

Session not config, only throw in session usage.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

function isFlashModeSupported(photoSession: camera.PhotoSession): boolean {
 let status: boolean = false;
 try {
 status = photoSession.isFlashModeSupported(camera.FlashMode.FLASH_MODE_AUTO);
 } catch (error) {
 // 失败返回错误码error.code并处理。
 let err = error as BusinessError;
 console.error(`The isFlashModeSupported call failed. error code: ${err.code}`);
 }
 return status;
}

---
*2026-04-22T15:55:03.525Z*