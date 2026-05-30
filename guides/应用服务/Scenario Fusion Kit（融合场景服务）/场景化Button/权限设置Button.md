# 权限设置Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-permissiononsetting`  |  **DocID**: `0e3f0dc7fa654dd98e935fccf8837116`  |  **NodeID**: `00020177579564908615920aec422a52`

---

# 权限设置Button

                 #### 场景介绍

     权限设置Button可以帮助开发者调用对应Button组件，二次拉起权限设置弹框。

     运行示例代码单击“请求用户授权”按钮触发首次权限设置弹框，选择“不允许”后，单击“权限设置”按钮拉起二次授权页面。

                  #### 约束与限制

     权限设置Button支持Phone、Tablet和2in1设备，并且从5.1.0(18)版本开始，新增支持TV设备。

                         仅支持UIAbility/UIExtensionAbility。

       在调用此接口前，应用需要先调用[requestPermissionsFromUser](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)，如果用户在首次权限设置弹框时已授权，调用当前接口将无法拉起二次授权页面。

                             #### 前提条件

     
             调用[requestPermissionsFromUser](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)接口，用户在首次权限设置弹框时拒绝授权。

             参见[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-preparations)。

     
                  #### 开发步骤

     
             导入Scenario Fusion Kit模块以及相关公共模块。

       ```
import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { abilityAccessCtrl, common, PermissionRequestResult } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             在容器中声明FunctionalButton，指定Button的openType，并设置对应的回调函数，代码如下：

       ```
@Entry
@Component
struct Index {
  build() {
    Row() {
      Column({ space: 3 }) {
        // 调用requestPermissionsFromUser接口Button。
        Button('请求用户授权')
          .fontSize(20)
          .onClick(() => {
            let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
            let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
            try {
              // 在module.json5文件中添加ohos.permission.READ_CALENDAR、ohos.permission.WRITE_CALENDAR权限。
              atManager.requestPermissionsFromUser(context,
                ['ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR'],
                (err: BusinessError, data: PermissionRequestResult) => {
                  if (err) {
                    hilog.error(0x0000, "testTag", "failed in requesting Permissions from user : %{public}d %{public}s",
                      err.code, err.message);
                  } else {
                    hilog.info(0x0000, "testTag", 'data permissions: %{public}s', data.permissions?.join(','));
                    hilog.info(0x0000, "testTag", 'data authResults: %{public}s', data.authResults?.join(','));
                    hilog.info(0x0000, "testTag", 'data dialogShownResults: %{public}s', data.dialogShownResults?.join(','));
                  }
                })
            } catch (err) {
              hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
            }
          })

        // 构建FunctionalButton组件实例。
        FunctionalButton({
          params: {
            // OpenType.PERMISSION_SETTING表示该按钮用于设置权限。
            openType: functionalButtonComponentManager.OpenType.PERMISSION_SETTING,
            label: '权限设置',
            permissionListParam: ['ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR'],
            // 调整按钮样式。
            styleOption: {
              styleConfig: new functionalButtonComponentManager.ButtonConfig()
                .fontSize(20)
            },
          },
          // 当OpenType设置为PERMISSION_SETTING时，回调必须为onPermissionSetting。
          controller: new functionalButtonComponentManager.FunctionalButtonController().onPermissionSetting((err,
            data) => {
            if (err) {
              // 错误日志处理。
              hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
              return;
            }
            // 成功日志处理。
            hilog.info(0x0000, "testTag", "succeeded in setting permission ");
            let result = data.permissionResult;
            result.forEach(res => {
              hilog.info(0x0000, "testTag", "data: %{public}s", String(res));
            })
          })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.PERMISSION_SETTING"指定Button为权限设置类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onPermissionSetting"。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

           其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:52:12*
