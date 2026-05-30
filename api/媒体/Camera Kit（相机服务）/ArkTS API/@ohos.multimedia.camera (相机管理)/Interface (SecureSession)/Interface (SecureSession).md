# Interface (SecureSession)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-camera-securesession`

**DocID**: `a668a4d243a34d5d835045c533f6c056`

**NodeID**: `00020177579591076134750a4152d05d`

---

Interface (SecureSession)

SecureSession 继承自 
Session
、
Flash
、
AutoExposure
、
WhiteBalance
、
Focus
、
Zoom
。

安全模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦的操作。

通过
createSession
接口传入
SceneMode
为SECURE_PHOTO模式创建一个安全模式的会话。该模式开放给人脸识别、银行等有安全诉求的应用，需要结合Device Security Kit使用，支持同时输出普通预览流和安全流的业务场景。请参考
安全相机开发指导
。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 12开始支持。

导入模块

import { camera } from '@kit.CameraKit';

addSecureOutput
12+

addSecureOutput(previewOutput: PreviewOutput): void

将其中一条
PreviewOutput
标记成安全输出。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

previewOutput

PreviewOutput

是

需要标记成安全输出的预览流，传参异常时，会返回错误码。

错误码：

以下错误码的详细介绍请参见
Camera错误码
。

错误码ID

错误信息

7400101

Parameter missing or parameter type incorrect.

7400102

Operation not allowed.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

function addSecureOutput(session: camera.SecureSession, previewOutput: camera.PreviewOutput): void {
 try {
 session.addSecureOutput(previewOutput);
 } catch (error) {
 // 失败返回错误码error.code并处理。
 let err = error as BusinessError;
 console.error(`The addOutput call failed. error code: ${err.code}`);
 }
}

on('error')
12+

on(type: 'error', callback: ErrorCallback): void

监听安全相机会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

type

string

是

监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用
beginConfig
，
commitConfig
，
addInput
等接口发生错误时返回错误信息。

callback

ErrorCallback

是

回调函数，用于获取错误信息。返回错误码，错误码类型
CameraErrorCode
。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError): void {
 console.error(`Video session error code: ${err.code}`);
}

function registerSessionError(secureSession: camera.SecureSession): void {
 secureSession.on('error', callback);
}

off('error')
12+

off(type: 'error', callback?: ErrorCallback): void

注销监听安全相机会话的错误事件，通过注册回调函数获取结果。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

type

string

是

监听事件，固定为'error'，session创建成功之后可监听该接口。

callback

ErrorCallback

否

回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。

示例：

function unregisterSessionError(secureSession: camera.SecureSession): void {
 secureSession.off('error');
}

on('focusStateChange')
12+

on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void

监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。

当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

type

string

是

监听事件，固定为'focusStateChange'，session创建成功可监听。仅当自动对焦模式时，且相机对焦状态发生改变时可触发该事件。

callback

AsyncCallback<
FocusState
>

是

回调函数，用于获取当前对焦状态。

示例：

import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, focusState: camera.FocusState): void {
 if (err !== undefined && err.code !== 0) {
 console.error(`Callback Error, errorCode: ${err.code}`);
 return;
 }
 console.info(`Focus state: ${focusState}`);
}

function registerFocusStateChange(secureSession: camera.SecureSession): void {
 secureSession.on('focusStateChange', callback);
}

off('focusStateChange')
12+

off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void

注销监听相机聚焦的状态变化。

元服务API：
 从API version 19开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Camera.Core

参数：

参数名

类型

必填

说明

type

string

是

监听事件，固定为'focusStateChange'，session创建成功可监听。

callback

AsyncCallback<
FocusState
>

否

回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。

示例：

function unregisterFocusStateChange(secureSession: camera.SecureSession): void {
 secureSession.off('focusStateChange');
}

---
*2026-04-22T15:53:59.731Z*