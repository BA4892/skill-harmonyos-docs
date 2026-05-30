# 选择器（Picker）公共接口

> **分区**: API参考  |  **Slug**: `ts-picker-common`  |  **DocID**: `de97bf362a6540d685f3c1008f051fe7`

---

# 选择器（Picker）公共接口

 选择器组件公共接口。

    从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

    #### PickerTextStyle对象说明

选择器组件的文本样式。

 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.ArkUI.ArkUI.Full

  名称 类型 只读 可选 说明   color [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 文本颜色。  font [Font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#font) 否 是 文本样式。       #### PickerDialogButtonStyle12+对象说明

选择器弹窗的按钮样式。

 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.ArkUI.ArkUI.Full

  名称 类型 只读 可选 说明   type [ButtonType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttontype枚举说明) 否 是 按钮显示样式。  style [ButtonStyleMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonstylemode11枚举说明) 否 是 按钮的样式和重要程度。  role [ButtonRole](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonrole12枚举说明) 否 是 Button组件的角色。  fontSize [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) 否 是 文本显示字号。  fontColor [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 文本显示颜色。  fontWeight [FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontweight) | number | string 否 是 文本的字体粗细。number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"200"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。  fontStyle [FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontstyle) 否 是 文本的字体样式。  fontFamily [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | string 否 是 字体列表。默认字体'HarmonyOS Sans'，当前支持'HarmonyOS Sans'字体和[注册自定义字体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-font)。  backgroundColor [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 按钮背景色。  borderRadius [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | [BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#borderradiuses9) 否 是 圆角半径。  primary boolean 否 是 弹出弹窗后，未使用Tab键切换焦点时，Enter键是否默认由该按钮响应。

 true：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键会触发该按钮绑定的事件。

 false：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键不会触发该按钮绑定的事件。

 默认值：false

        #### DateRange19+对象说明

日期区间，用于描述起止日期区间。

 **元服务API：** 从API version 19开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.ArkUI.ArkUI.Full

  名称 类型 只读 可选 说明   start Date 否 是 设置日期区间的开始日期。  end Date 否 是 设置日期区间的结束日期。

---
*Updated: 2026-04-22 06:44:53*
