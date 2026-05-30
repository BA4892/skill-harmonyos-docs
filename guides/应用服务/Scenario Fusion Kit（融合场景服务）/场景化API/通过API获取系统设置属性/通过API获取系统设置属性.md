# 通过API获取系统设置属性

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-api-system-setup`  |  **DocID**: `45286d909c5049008d204528cda1286a`  |  **NodeID**: `0002017757956490860180892cfa0f51`

---

# 通过API获取系统设置属性

                 #### 场景介绍

     Scenario Fusion Kit提供获取系统设置属性API，调用该接口可以获取蓝牙、定位、Wi-Fi开关信息，以及设备方向信息等系统信息属性。

                  #### 约束与限制

     场景化API支持Phone、Tablet和2in1设备，并且从5.1.0(18)版本开始，新增支持Wearable和TV设备。

                  #### 接口说明

     以下是获取系统设置属性的接口说明，更多接口及使用方法请参见[atomicService（融合场景化API）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-atomicservice)。

           
                        | 接口名          | 描述         
                               | [getSystemSetting](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-atomicservice#getsystemsetting)(properties?: Array<[SystemSettingType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-atomicservice#systemsettingtype)>): [SystemSettingInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-atomicservice#systemsettinginfo)          | 获取系统设置属性的方法，支持获取蓝牙、定位、Wi-Fi开关信息，以及设备方向信息的请求对象。         
             

                       #### 开发步骤

     
             导入Scenario Fusion Kit模块以及相关公共模块。

       ```
import { atomicService } from '@kit.ScenarioFusionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             传入属性参数，调用接口获取对应属性值，代码如下：

       ```
let stateArray: Array<atomicService.SystemSettingType> =
  ['bluetoothEnabled', 'locationEnabled', 'deviceOrientation', 'wifiEnabled'];
try {
  let data = atomicService.getSystemSetting(stateArray);
  hilog.info(0x0000, 'testTag', 'succeeded in getting system setting info');
  let bluetoothEnabled: boolean | undefined = data.bluetoothEnabled;
  let locationEnabled: boolean | undefined = data.locationEnabled;
  let deviceOrientation: string | undefined = data.deviceOrientation;
  let wifiEnabled: boolean | undefined = data.wifiEnabled;
} catch (error) {
  hilog.error(0x0001, 'testTag', 'failReason: %{public}d %{public}s', error.code, error.message);
}
```

---
*Updated: 2026-04-20 01:51:37*
