# WindowManager（窗口管理）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `speech-windowmanager`

**DocID**: `fae24a46da094fd4ac55870df57afeaa`

**NodeID**: `000201775795857640730fadbf0acbcd`

---

WindowManager（窗口管理）

朗读控件的窗口管理类。

起始版本：
5.0.0(12)

导入模块

import { WindowManager } from '@kit.SpeechKit';

setWindowStage

static setWindowStage(windowStage: window.WindowStage): void

设置窗口管理器，在EntryAbility的onWindowStageCreate方法中调用，否则调用
init
初始化朗读控件将会失败。更多和设置EntryAbility相关的内容，请见
UIAbility组件生命周期
。

元服务API：
 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.AI.Component.TextReader

设备行为差异：
该接口在PC/2in1中可正常调用，在其他设备类型中无效果。

起始版本：
5.0.0(12)

参数：

参数名

类型

必填

说明

windowStage

window.WindowStage

是

窗口管理器。管理各个基本窗口单元，即
Window
实例。

示例：

import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { WindowManager } from '@kit.SpeechKit';

export default class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
 hilog.info(0x0000, 'testTag', 'Ability onCreate');
 }

 onDestroy(): void {
 hilog.info(0x0000, 'testTag', 'Ability onDestroy');
 }

 onWindowStageCreate(windowStage: window.WindowStage): void {
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
 WindowManager.setWindowStage(windowStage);

 windowStage.loadContent('pages/Index', (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', `Failed to load the content. Code: ${err.code}, message: ${err.message}.`);
 return;
 }
 hilog.info(0x0000, 'testTag', `Succeeded in loading the content. Data: ${JSON.stringify(data)}.` );
 });
 }

 onWindowStageDestroy(): void {
 hilog.info(0x0000, 'testTag', 'Ability onWindowStageDestroy');
 }

 onForeground(): void {
 hilog.info(0x0000, 'testTag', 'Ability onForeground');
 }

 onBackground(): void {
 hilog.info(0x0000, 'testTag', 'Ability onBackground');
 }
}

getWindowStage

static getWindowStage(): window.WindowStage

获取窗口管理器。

元服务API：
 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.AI.Component.TextReader

起始版本：
5.0.0(12)

返回值：

类型

说明

window.WindowStage

窗口管理器。管理各个基本窗口单元，即
Window
实例。

示例：

import { WindowManager } from '@kit.SpeechKit';

try {
 let windowManager = WindowManager.getWindowStage()
 console.info(`TextReader succeeded in getting windowStage.`)
} catch (e) {
 console.error(`TextReader failed to get windowStage. Code: ${e.code}, message: ${e.message}.`)
}

---
*2026-04-22T15:54:00.616Z*