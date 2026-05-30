# @cross-device-app-dev/immersive-effect-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-immersive-effect-check`  |  **DocID**: `db354f5bae5b4f7397567bd45f1db5cb`  |  **NodeID**: `0002017757901225584442d5656fd8a2`

---

# @cross-device-app-dev/immersive-effect-check

 若应用通过[setWindowLayoutFullScreen()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowlayoutfullscreen9)接口设置窗口布局，建议调用[getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#getwindowavoidarea9)和[on('avoidAreaChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onavoidareachange9)获取和动态监听避让区域的变更信息，使页面布局根据避让区域信息进行动态调整。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@cross-device-app-dev/immersive-effect-check": "suggestion"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// EntryAbility.ets
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        return;
      }
      let windowClass: window.Window = windowStage.getMainWindowSync(); // Obtain the main window of the application.
      // 1. 设置窗口全屏.
      let isLayoutFullScreen = true;
      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {
        console.info('Succeeded in setting the window layout to full-screen mode.');
      }).catch((err: BusinessError) => {
        console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));
      });

      // 2. 获取避让区域.
      let type = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR; // Here a navigation bar is used as an example.
      let avoidArea = windowClass.getWindowAvoidArea(type);
      let bottomRectHeight = avoidArea.bottomRect.height; // Obtain the height of the navigation area.
      AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);
      type = window.AvoidAreaType.TYPE_SYSTEM; // The status bar is used as an example.
      avoidArea = windowClass.getWindowAvoidArea(type);
      let topRectHeight = avoidArea.topRect.height; // Obtain the height of the status bar area.
      AppStorage.setOrCreate('topRectHeight', topRectHeight);
      // 3. Register a listening function to dynamically obtain the data of the avoid area.
      windowClass.on('avoidAreaChange', (data) => {
        if (data.type === window.AvoidAreaType.TYPE_SYSTEM) {
          let topRectHeight = data.area.topRect.height;
          AppStorage.setOrCreate('topRectHeight', topRectHeight);
        } else if (data.type == window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {
          let bottomRectHeight = data.area.bottomRect.height;
          AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);
        }
      });
    });
  }
}
```
  #### 反例

```
// EntryAbility.ets
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        return;
      }
      let windowClass: window.Window = windowStage.getMainWindowSync(); // Obtain the main window of the application.
      // 只设置窗口全屏.
      let isLayoutFullScreen = true;
      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {
        console.info('Succeeded in setting the window layout to full-screen mode.');
      }).catch((err: BusinessError) => {
        console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));
      });
    });
  }
}
```
  #### 规则集

plugin:@cross-device-app-dev/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
