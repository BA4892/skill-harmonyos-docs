# 打开APP Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-launchapp`  |  **DocID**: `38d8814b0e1d4847ab313bea7fbbbc2b`  |  **NodeID**: `0002017757956490860472a3dd86a56c`

---

# 打开APP Button

                 #### 场景介绍

     打开APP功能可以帮助调用对应Button组件打开另一个应用。

     运行示例代码单击“打开APP”按钮，出现提示弹窗，单击“允许”，跳转至新的应用页面。

                         弹窗是否弹出以及弹窗效果与跳转目标APP相关。

                             #### 约束与限制

     打开APP Button支持Phone、Tablet和2in1设备，并且从5.1.0(18)版本开始，新增支持TV设备。

                  #### 开发步骤

     
             导入Scenario Fusion Kit模块以及相关公共模块。

       ```
import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             在容器中声明FunctionalButton，指定Button的openType，并设置对应的回调函数，代码如下：

       ```
@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        // 构建FunctionalButton组件实例。
        FunctionalButton({
          params: {
            // OpenType.LAUNCH_APP表示该按钮用于启动应用。
            openType: functionalButtonComponentManager.OpenType.LAUNCH_APP,
            label: '打开APP',
            // 当OpenType为functionButtonComponentManager.OpenType.LAUNCH_APP时，appParam为必填项。
            appParam: {
              bundleName: "xxx",
              abilityName: "xxx"
            },
            // 调整按钮样式。
            styleOption: {
              styleConfig: new functionalButtonComponentManager.ButtonConfig()
                .fontSize(20)
            },
          },
          // 当OpenType设置为LAUNCH_APP时，回调函数必须是onLaunchAPP。
          controller: new functionalButtonComponentManager.FunctionalButtonController().onLaunchApp((err) => {
            if (err) {
              // 错误日志处理。
              hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
              return;
            }
            // 处理成功。成功时不会返回任何值。
            hilog.info(0x0000, "testTag", "succeeded in launching app");
          })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.LAUNCH_APP"指定Button为打开APP类型。

                     openType为"functionalButtonComponentManager.OpenType.LAUNCH_APP"时，appParam参数必填。

                     "bundleName"为包名，"abilityName"为Ability名称。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onLaunchApp"。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:51:37*
