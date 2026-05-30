# 相机控制器(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `camera-control-center`  |  **DocID**: `4e9c600e802c4cee91e0f16dd5abe864`  |  **NodeID**: `00020177579552692880074384879f4e`

---

# 相机控制器(ArkTS)

       从API version 20开始，相机框架通过相机控制器，为应用在直播场景提供美颜、虚化等能力。

    相机控制器为直播和视频通话场景设计，目前仅支持在前置镜头的录像模式下使用，最高可支持1080P分辨率和30fps帧率。

              #### 开发步骤

     详细的API说明请参考[Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera)。

     
             导入camera接口，接口中提供了相机相关的属性和方法，导入方法如下。

       ```
import { camera } from '@kit.CameraKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             通过[isControlCenterSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-controlcenterquery#iscontrolcentersupported20)接口，查询当前设备及当前场景是否支持相机控制器。

       ```
function isControlCenterSupported(videoSession: camera.VideoSession): boolean {
  let isSupported: boolean = videoSession.isControlCenterSupported();
  return isSupported;
}
```
             通过[getSupportedEffectTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-controlcenterquery#getsupportedeffecttypes20)接口，查询当前设备及当前场景下，相机控制器支持的效果类型。

       ```
function getSupportedEffectTypes(videoSession: camera.VideoSession): Array<camera.ControlCenterEffectType> {
  let effectTypes: Array<camera.ControlCenterEffectType> = [];
  effectTypes = videoSession.getSupportedEffectTypes();
  return effectTypes;
}
```
             若设备及场景支持相机控制器，使用[enableControlCenter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-controlcenter#enablecontrolcenter20)接口可启用或关闭控制器。

       ```
function enableControlCenter(videoSession: camera.VideoSession, enable: boolean): void {
  let isSupported: boolean = videoSession.isControlCenterSupported();
  if (isSupported) {
    videoSession.enableControlCenter(enable);
  }
}
```
             使能相机控制器后，可以在状态栏看到新增的视频效果图标。

       

             点击视频效果图标，在弹出的二级页面中，用户可调节控制器支持的效果，如图所示为美颜和背景虚化。

       

     
                  #### 状态监听

     使用相机控制器的过程中，应用可以监听控制器效果的使能状态。

     通过注册[controlCenterEffectStatusChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession#oncontrolcentereffectstatuschange20)的回调函数获取控制器中各效果的使能状态。

     当控制器中某效果使能状态发生变化时，callback返回[ControlCenterStatusInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-i#controlcenterstatusinfo20)参数。

     ```
import { camera } from '@kit.CameraKit';
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, status: camera.ControlCenterStatusInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`controlCenterEffectStatusChange: ${status}`);
}

function registerControlCenterEffectStatusChangeCallback(videoSession: camera.VideoSession): void {
  videoSession.on('controlCenterEffectStatusChange', callback);
}
```

---
*Updated: 2026-04-20 01:45:37*
