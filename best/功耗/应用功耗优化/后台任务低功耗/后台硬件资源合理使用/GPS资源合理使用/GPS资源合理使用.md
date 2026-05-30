# GPS资源合理使用

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-reasonable-gps-use`  |  **DocID**: `6b127a8fc8564c1297a0ae5193c30e9e`  |  **NodeID**: `00020177554712059803287bdb8bb88a`

---

# GPS资源合理使用 

 无长时间任务的应用退到后台时，禁止使用定位服务。

 #### 约束

未申请长时任务的应用退到后台后，系统会强制停止其定位请求。

  #### 示例

```
import { UIAbility } from '@kit.AbilityKit';
import { geoLocationManager } from '@kit.LocationKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

// ...

export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    // Create a location request based on service requirements at the foreground
    let requestInfo: geoLocationManager.LocationRequest = {
      'priority': geoLocationManager.LocationRequestPriority.ACCURACY,
      'timeInterval': 0,
      'distanceInterval': 0,
      'maxAccuracy': 0
    };
    let locationChange = (location: geoLocationManager.Location): void => {
      console.log('locationChanger:data:' + JSON.stringify(location));
    };
    try {
      //The change of the listening position
      geoLocationManager.on('locationChange', requestInfo, locationChange);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `geoLocationManager on failed, code=${err.code}, message=${err.message}`);
    }
  }

  onBackground(): void {
    try {
      //The backstage cancels the listening
      geoLocationManager.off('locationChange', locationChange);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `geoLocationManager off failed, code=${err.code}, message=${err.message}`);
    }
  }
}
```

---
*Updated: 2026-04-10 09:44:36*
