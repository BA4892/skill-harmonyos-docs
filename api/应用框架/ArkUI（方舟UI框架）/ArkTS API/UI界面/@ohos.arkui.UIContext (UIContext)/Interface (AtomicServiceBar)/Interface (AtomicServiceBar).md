# Interface (AtomicServiceBar)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-uicontext-atomicservicebar`

**DocID**: `c8555a41fc88404db5d5b51dca1b00ec`

**NodeID**: `000201775796216197744c2d581bba34`

---

Interface (AtomicServiceBar)

提供设置元服务menuBar的属性。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Interface首批接口从API version 11开始支持。

以下接口需要先使用UIContext中的
getAtomicServiceBar
方法获取到AtomicServiceBar对象，再通过该对象调用对应方法。

从API version 12开始元服务menuBar样式变更，以下接口将失效。

setVisible
11+

setVisible(visible: boolean): void

通过该方法设置元服务menuBar是否可见。

从API version 12开始元服务menuBar样式变更，menuBar默认隐藏，变为悬浮按钮，通过该接口无法改变menuBar的可见性。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

visible

boolean

是

元服务menuBar是否可见。true表示设置menuBar可见，false表示设置menuBar不可见。

示例：

import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
 onWindowStageCreate(windowStage: window.WindowStage) {
 // Main window is created, set main page for this ability
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 windowStage.loadContent('pages/Index', (err, data) => {
 let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
 let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (atomicServiceBar != undefined) {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
 atomicServiceBar.setVisible(false);
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 });
 }
}

setBackgroundColor
11+

setBackgroundColor(color:Nullable<Color | number | string>): void

通过该方法设置元服务menuBar的背景颜色。

从API version 12开始元服务menuBar样式变更，menuBar的背景默认隐藏，通过该接口无法改变menuBar的背景颜色。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

color

Nullable<
Color
 | number | string>

是

通过该方法设置元服务menuBar的背景颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。

示例：

import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
 onWindowStageCreate(windowStage: window.WindowStage) {
 // Main window is created, set main page for this ability
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 windowStage.loadContent('pages/Index', (err, data) => {
 let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
 let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (atomicServiceBar != undefined) {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
 atomicServiceBar.setBackgroundColor(0x88888888);
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 });
 }
}

setTitleContent
11+

setTitleContent(content:string): void

通过该方法设置元服务menuBar的标题内容。

从API version 12开始元服务menuBar样式变更，menuBar的标题默认隐藏，通过该接口无法改变menuBar的标题内容。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

string

是

元服务menuBar中的标题内容。

示例：

import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
 onWindowStageCreate(windowStage: window.WindowStage) {
 // Main window is created, set main page for this ability
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 windowStage.loadContent('pages/Index', (err, data) => {
 let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
 let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (atomicServiceBar != undefined) {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
 atomicServiceBar.setTitleContent('text2');
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 });
 }
}

setTitleFontStyle
11+

setTitleFontStyle(font:FontStyle):void

通过该方法设置元服务menuBar的字体样式。

从API version 12开始元服务menuBar样式变更，menuBar的标题默认隐藏，通过该接口无法改变menuBar的字体样式。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full。

参数：

参数名

类型

必填

说明

font

FontStyle

是

元服务menuBar中的字体样式。

示例：

import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
 onWindowStageCreate(windowStage: window.WindowStage) {
 // Main window is created, set main page for this ability
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 windowStage.loadContent('pages/Index', (err, data) => {
 let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
 let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (atomicServiceBar != undefined) {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
 atomicServiceBar.setTitleFontStyle(FontStyle.Normal);
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 });
 }
}

setIconColor
11+

setIconColor(color:Nullable<Color | number | string>): void

通过该方法设置元服务图标的颜色。

从API version 12开始元服务menuBar样式变更，menuBar默认隐藏，悬浮按钮图标不予用户设置，通过该接口无法改变menuBar的图标颜色。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

color

Nullable<
Color
 | number | string>

是

元服务图标的颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。

示例：

import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
 onWindowStageCreate(windowStage: window.WindowStage) {
 // Main window is created, set main page for this ability
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 windowStage.loadContent('pages/Index', (err, data) => {
 let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
 let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (atomicServiceBar != undefined) {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
 atomicServiceBar.setIconColor(0x12345678);
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 });
 }
}

getBarRect
15+

getBarRect(): Frame

获取元服务menuBar相对窗口的布局信息。

布局信息包含了元服务menuBar的左右margin。

元服务API：
 从API version 15开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

返回值：

类型

说明

Frame

元服务menuBar的大小和位置。

示例：

import { AtomicServiceBar } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
 build() {
 Button("getBarRect")
 .onClick(() => {
 let uiContext: UIContext = this.getUIContext();
 let currentBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
 if (currentBar != undefined) {
 let rect = currentBar.getBarRect();
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully. x:'
 + rect.x + ' y:' + rect.y + ' width:' + rect.width + ' height:' + rect.height);
 } else {
 hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
 }
 })
 }
}

---
*2026-04-22T15:53:58.141Z*