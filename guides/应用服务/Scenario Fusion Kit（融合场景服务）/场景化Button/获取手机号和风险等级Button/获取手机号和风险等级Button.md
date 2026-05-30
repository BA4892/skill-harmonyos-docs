# 获取手机号和风险等级Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-get-risklevel`  |  **DocID**: `6bf68595846b4b6382dd31037a17b83e`  |  **NodeID**: `00020177579564908617677214229dad`

---

# 获取手机号和风险等级Button

                 #### 场景介绍

     从6.0.2(22)开始，支持获取手机号和风险等级Button功能。

     开发者可通过“获取手机号和风险等级Button”获取授权码（Authorization Code），进而获取用户的手机号和风险等级信息，用于对恶意账号进行风险控制，进一步增强应用的安全性。风险等级完整场景详见[获取风险等级](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-on-demand-acquisition)。

                  #### 前提条件

     需要完成手机号的scope权限申请和【获取风险等级】权限申请，请见[申请账号权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-config-permissions)和[开发前提](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-on-demand-acquisition#开发前提)章节。

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
            // OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL表示该按钮用于获取手机号和风险等级。
            openType: functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL,
            label: '获取手机号和风险等级',
            // 调整按钮样式。
            styleOption: {
              styleConfig: new functionalButtonComponentManager.ButtonConfig()
                .fontSize(20)
            },
          },
          // 当OpenType为GET_PHONE_NUMBER_AND_RISK_LEVEL时，回调必须为onGetPhoneNumberAndRiskLevel。
          controller: new functionalButtonComponentManager.FunctionalButtonController()
            .onGetPhoneNumberAndRiskLevel((data) => {
              if (data?.errCode) {
                // 错误日志处理。
                hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", data?.errCode, data?.errMsg);
                return;
              }
              // 成功日志处理。
              hilog.info(0x0000, "testTag", "succeeded in authentication");
              // 授权码处理。
              let authorizationCode = data?.code;
            })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER_AND_RISK_LEVEL"指定Button为获取手机号和风险等级类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onGetPhoneNumberAndRiskLevel"。

                     若成功调用，可通过回调函数中的授权码（Authorization Code）获取用户的手机号和风险等级。风险等级完整场景详见[获取风险等级](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-risklevel-on-demand-acquisition)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:52:13*
