# 选择头像Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-chooseavatar`  |  **DocID**: `39d85488126844038c34e0138aa6628f`  |  **NodeID**: `0002017757956490869338a8c0f69d61`

---

# 选择头像Button

                 #### 场景介绍

     选择头像Button功能可以帮助开发者调用对应Button组件快速拉起头像选择页面，供用户完成华为账号头像或其他头像的选择与展示。

     运行示例代码单击头像按钮，拉起选择头像页面来设置头像（完整场景可参考[获取头像昵称](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-avatar-nickname)）。

                  #### 前提条件

     参见[开发前提](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-avatar-nickname#开发前提)。

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
  // 将account.png文件添加到/resources/base/media/目录中。否则，将显示错误信息，提示找不到该文件。
  @State url: ResourceStr = $r('app.media.account');

  build() {
    Column() {
      // 构建FunctionalButton组件实例。
      FunctionalButton({
        params: {
          // OpenType.CHOOSE_AVATAR表示该按钮用于选择头像。
          openType: functionalButtonComponentManager.OpenType.CHOOSE_AVATAR,
          label: '',
          // 调整按钮样式。
          styleOption: {
            styleConfig: new functionalButtonComponentManager.ButtonConfig()
              .type(ButtonType.Normal)
              .backgroundImage(this.url)
              .backgroundImageSize(ImageSize.Cover)
              .width(80)
              .height(80)
              .backgroundColor('#E5E5E5')
          },
        },
        // 当OpenType设置为CHOOSE_AVATAR时，回调函数必须是onChooseAvatar。
        controller: new functionalButtonComponentManager.FunctionalButtonController().onChooseAvatar((err, data) => {
          if (err) {
            // 错误日志处理。
            hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
            return;
          }
          // 成功日志处理。
          hilog.info(0x0000, "testTag", "succeeded in choosing avatar");
          this.url = data.avatarUri!;
        })
      })
    }
    .padding({ top: 200 })
    .height('100%')
    .width('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.CHOOSE_AVATAR"指定Button为选择头像类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onChooseAvatar"。

                     若成功调用，可通过回调函数中的"avatarUri"获取头像图片的地址。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:51:27*
