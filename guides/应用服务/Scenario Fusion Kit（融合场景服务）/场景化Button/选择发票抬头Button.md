# 选择发票抬头Button

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `scenario-fusion-button-invoice-title`  |  **DocID**: `4cae589c2e6948908e030d1763d1a12c`  |  **NodeID**: `00020177579564908610146a6af0a2e5`

---

# 选择发票抬头Button

                 #### 场景介绍

     选择发票抬头Button功能可以帮助开发者调用对应Button组件跳转发票抬头选择页面，供用户完成已保存发票抬头的选择。

     运行示例代码单击“选择发票抬头”按钮，拉起选择发票抬头页面可选择已保存发票，也可单击“管理发票抬头”进入新增企业/个人发票抬头页面（完整场景请参考[获取发票抬头](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-select-invoice-title)）。

                  #### 前提条件

     参见[开发前提](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-select-invoice-title#开发前提)。

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
            // OpenType.CHOOSE_INVOICE_TITLE表示该按钮用于选择发票抬头。
            openType: functionalButtonComponentManager.OpenType.CHOOSE_INVOICE_TITLE,
            label: '选择发票抬头',
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
          // 当OpenType为CHOOSE_INVOICE_TITLE时，回调必须为onChooseInvoiceTitle。
          controller: new functionalButtonComponentManager.FunctionalButtonController()
            .onChooseInvoiceTitle((err, data) => {
              if (err) {
                // 错误日志处理。
                hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
                return;
              }
              // 成功日志处理。
              hilog.info(0x0000, "testTag", "succeeded in obtaining invoice title");
              // 获取发票信息。
              let type: string = data.type;
              let title: string = data.title;
              let taxNumber: string = data.taxNumber;
              let companyAddress: string | undefined = data.companyAddress;
              let telephone: string | undefined = data.telephone;
              let bankName: string | undefined = data.bankName;
              let bankAccount: string | undefined = data.bankAccount;
            })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
                                 
                     openType参数填写"functionalButtonComponentManager.OpenType.CHOOSE_INVOICE_TITLE"指定Button为选择发票抬头类型。

                     controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onChooseInvoiceTitle"。

                     可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

         
         其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。

---
*Updated: 2026-04-20 01:52:02*
