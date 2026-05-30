# @ohos.inputMethodList (输入法切换列表控件)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inputmethodlist`

**DocID**: `e8a8acb6faa54aa3b28566a3191c0d0e`

**NodeID**: `0002017757962161964082ead18442b2`

---

@ohos.inputMethodList (输入法切换列表控件)

本模块主要面向系统应用和输入法应用，提供输入法切换列表控件，控件中显示默认输入法子类型和三方输入法应用列表，对于默认输入法应用，提供模式切换入口。

该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

导入模块

import { InputMethodListDialog } from '@kit.IMEKit';

子组件

无

属性

不支持
通用属性

InputMethodListDialog

InputMethodListDialog({controller: CustomDialogController, patternOptions?: PatternOptions})

输入法切换列表弹窗。

装饰器类型：
@CustomDialog

系统能力：
 SystemCapability.MiscServices.InputMethodFramework

参数：

名称

类型

必填

装饰器类型

说明

controller

CustomDialogController

是

-

输入法切换列表弹窗控制器。

patternOptions

PatternOptions

否

-

输入法模式选项（仅系统预置输入法支持）。

PatternOptions

系统能力：
 SystemCapability.MiscServices.InputMethodFramework

名称

类型

只读

可选

说明

defaultSelected

number

否

是

非必填。默认选择的模式。

patterns

Array<
Pattern
>

否

否

必填。模式选项的资源。

action

(index: number) => void

否

否

必填。模式选项改变时的回调。

Pattern

系统能力：
 SystemCapability.MiscServices.InputMethodFramework

名称

类型

只读

可选

说明

icon

Resource

否

否

必填。默认图片资源。

selectedIcon

Resource

否

否

必填。选中时的图片资源。

事件

不支持
通用事件

示例

import { Pattern, PatternOptions } from '@kit.IMEKit';

@Entry
// 设置组件
@Component
struct SettingsItem {
 @State defaultPattern: number = 1;
 private oneHandAction: PatternOptions = {
 defaultSelected: this.defaultPattern,
 patterns: [ // patterns中的图标需要在工程的resource中添加对应图标资源后使用
 {
 icon: $r('app.media.hand_icon'), // 此处为输入法模式选项的图标资源，例如单手模式图标
 selectedIcon: $r('app.media.hand_icon_selected') // 此处为输入法模式选项的图标资源选中状态，例如单手模式选中状态的图标
 },
 {
 icon: $r('app.media.hand_icon1'),
 selectedIcon: $r('app.media.hand_icon_selected1')
 },
 {
 icon: $r('app.media.hand_icon2'),
 selectedIcon: $r('app.media.hand_icon_selected2'),
 }],
 action:(index: number)=>{
 console.info(`pattern is changed, current is ${index}`);
 this.defaultPattern = index;
 }
 };
 private listController: CustomDialogController = new CustomDialogController({
 builder: InputMethodListDialog({ patternOptions: this.oneHandAction }),
 customStyle: true,
 maskColor: '#00000000'
 });

 build() {
 Column() {
 Flex({ direction: FlexDirection.Column,
 alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
 Text("输入法切换列表").fontSize(20)
 }
 }
 .width("13%")
 .id('bindInputMethod')
 .onClick((event?: ClickEvent) => {
 this.listController.open();
 })
 }
}

示例效果图：

---
*2026-04-22T15:53:58.859Z*