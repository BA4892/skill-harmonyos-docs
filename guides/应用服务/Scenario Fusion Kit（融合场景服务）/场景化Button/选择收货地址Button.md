# 选择收货地址Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-ship-to`  |  **DocID**: `23bfb3ed55b649ab8604f9777767317e`  |  **NodeID**: `000201775795649086086b45b6eb127b`

---

# 选择收货地址Button

                 #### 场景介绍

     选择收货地址Button功能可以帮助开发者调用对应Button组件快速拉起地址选择页面，并返回用户选择的收货地址。

     运行示例代码单击“选择收货地址”按钮，拉起选择地址页面选择已保存的地址，也可单击“管理/新增收货地址”进入添加收货地址页面（完整场景可参考[获取收货地址](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-choose-address-dev)）。

                  #### 前提条件

     参见[开发前提](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-choose-address-dev#开发前提)。

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
            // OpenType.CHOOSE_ADDRESS表示该按钮用于选择收货地址。
            openType: functionalButtonComponentManager.OpenType.CHOOSE_ADDRESS,
            label: '选择收货地址',
            // 调整按钮样式。
            styleOption: {
              bgColor: functionalButtonComponentManager.ColorType.DEFAULT,
              size: functionalButtonComponentManager.SizeType.DEFAULT,
              plain: false,
              disabled: false,
              loading: false,
              hoverClass: functionalButtonComponentManager.HoverClassType.HOVER_CLASS,
              hoverStartTime: 0,
              hoverStayTime: 0,
              styleConfig: new functionalButtonComponentManager.ButtonConfig()
                .fontSize(20)
            },
          },
          // 当OpenType设置为CHOOSE_ADDRESS时，回调必须为onChooseAddress。
          controller: new functionalButtonComponentManager.FunctionalButtonController()
            .onChooseAddress((err, data) => {
              if (err) {
                // 错误日志处理。
                hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
                return;
              }
              // 成功日志处理。
              hilog.info(0x0000, "testTag", "succeeded in choosing address");
              // 获取地址信息。
              let userName: string = data.userName;
              let mobileNumber: string = data.mobileNumber as string;
              let countryCode: string = data.countryCode as string;
              let provinceName: string = data.provinceName as string;
              let cityName: string = data.cityName as string;
              let districtName: string = data.districtName as string;
              let streetName: string = data.streetName as string;
              let detailedAddress: string = data.detailedAddress;
            })
        })
      }.width('100%')
    }.height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.CHOOSE_ADDRESS"指定Button为选择收货地址类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onChooseAddress"。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:51:55*
