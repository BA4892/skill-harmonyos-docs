# 压力管控(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `camera-system-pressure`  |  **DocID**: `368de5823f4d4ee2b9497ba8e22a7815`  |  **NodeID**: `0002017757955269287997883b9807a8`

---

# 压力管控(ArkTS)

       从API version 20开始，相机框架提供对系统压力等级的监听。

    在长时间使用相机的场景（如直播业务）中，相机应用可以通过监听系统压力等级变化，动态调整画质（如帧率、分辨率等），平衡功耗、发热和系统负载，保证功能长时间可用。

              #### 状态监听

     可以通过注册[systemPressureLevelChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photosession#onsystempressurelevelchange20)的回调函数获取系统压力的监听结果。

     当系统压力发生变化时，callback返回SystemPressureLevel参数。

     参数的具体内容可参考相机管理器回调接口实例[SystemPressureLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#systempressurelevel20)。

     ```
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, systemPressureLevel: camera.SystemPressureLevel): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`systemPressureLevel: ${systemPressureLevel}`);
}

function registerSystemPressureLevelChangeCallback(photoSession: camera.PhotoSession): void {
    photoSession.on('systemPressureLevelChange', callback);
}
```

---
*Updated: 2026-04-20 01:45:37*
