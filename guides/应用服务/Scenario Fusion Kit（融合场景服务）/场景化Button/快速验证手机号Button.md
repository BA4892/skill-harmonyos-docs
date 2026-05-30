# 快速验证手机号Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-getphonenumber`  |  **DocID**: `8da7bcd844884c168ba9e6ceea69da38`  |  **NodeID**: `000201775795649086872bbc0ac94a3e`

---

# 快速验证手机号Button

                 #### 场景介绍

     快速验证手机号Button功能用于帮助开发者向用户发起手机号申请，应用在满足《[常见类型移动互联网应用程序必要个人信息范围规定](http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm)》（对第三方网站的内容，华为公司不承担任何责任）中使用手机号的必要业务场景，经用户同意后，应用可获取手机号，为用户提供相应服务（详见快速验证[场景介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-phonenumber#场景介绍)）。

     运行示例代码单击“快速验证手机号”按钮，拉起验证页面（完整场景可参考[快速验证](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-phonenumber)）。

                  #### 约束与限制

     快速验证手机号Button支持Phone、Tablet和2in1设备，并且从5.1.0(18)版本开始，新增支持TV设备。

                         应用/元服务仅在首次使用时需要用户进行授权，授权成功后，后续只验证授权手机号，不可修改。

                             #### 前提条件

     参见[开发前提](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-phonenumber#开发前提)。

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
            // OpenType.GET_PHONE_NUMBER表示该按钮用于快速验证手机号码。
            openType: functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER,
            label: '快速验证手机号',
            // 调整按钮样式。
            styleOption: {
              styleConfig: new functionalButtonComponentManager.ButtonConfig()
                .fontSize(20)
            },
          },
          // 当OpenType为GET_PHONE_NUMBER时，回调必须为onGetPhoneNumber。
          controller: new functionalButtonComponentManager.FunctionalButtonController()
            .onGetPhoneNumber((err, data) => {
              if (err) {
                // 错误日志处理。
                hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
                return;
              }
              // 成功日志处理。
              hilog.info(0x0000, "testTag", "succeeded in authenticating");
              // 授权码处理。
              let authorizationCode = data.code;
            })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER"指定Button为快速验证手机号类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onGetPhoneNumber"。

                     若成功调用，可通过回调函数中的临时登录凭证（Authorization Code）获取真实手机号，临时登录凭证时效5分钟，具体操作可参考[服务端开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-get-phonenumber#服务端开发)。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:51:11*
