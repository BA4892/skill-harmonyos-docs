# @ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-app-ability-abilitylifecyclecallback`

**DocID**: `9a87c578062c47d188b55bfe569ca2ce`

**NodeID**: `0002017757962161966653917dc1a506`

---

@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)

UIAbility
从创建到销毁过程其生命周期是动态变化的。AbilityLifecycleCallback模块提供监听
UIAbility
生命周期变化的能力，可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。

本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

本模块接口只能监听进程内UIAbility生命周期变化。

使用说明

应用创建AbilityLifecycleCallback对象，并调用
ApplicationContext.on('abilityLifecycle')
接口注册UIAbility生命周期变化监听。

当UIAbility生命周期变化时，应用可以通过已注册的AbilityLifecycleCallback对象接收到UIAbility生命周期的变化通知。

当应用不需要监听UIAbility生命周期变化时，需要通过
ApplicationContext.off('abilityLifecycle')
接口取消监听。

导入模块

import { AbilityLifecycleCallback } from '@kit.AbilityKit';

AbilityLifecycleCallback

[h2]onAbilityCreate

onAbilityCreate(ability: UIAbility): void

在UIAbility的
onCreate
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageCreate

onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageCreate
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageActive

onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility主窗获焦时触发回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageInactive

onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility主窗失焦时触发回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageDestroy

onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageDestroy
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityDestroy

onAbilityDestroy(ability: UIAbility): void

在UIAbility的
onDestroy
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityForeground

onAbilityForeground(ability: UIAbility): void

在UIAbility的
onForeground
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityBackground

onAbilityBackground(ability: UIAbility): void

在UIAbility的
onBackground
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityContinue

onAbilityContinue(ability: UIAbility): void

在UIAbility的
onContinue
触发后回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillCreate
12+

onAbilityWillCreate?(ability: UIAbility): void

在UIAbility的
onCreate
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageWillCreate
12+

onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageCreate
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageWillDestroy
12+

onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageDestroy
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillForeground
12+

onAbilityWillForeground?(ability: UIAbility): void

在UIAbility的
onForeground
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillDestroy
12+

onAbilityWillDestroy?(ability: UIAbility): void

在UIAbility的
onDestroy
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillBackground
12+

onAbilityWillBackground?(ability: UIAbility): void

在UIAbility的
onBackground
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWillNewWant
12+

onWillNewWant?(ability: UIAbility): void

在UIAbility的
onNewWant
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onNewWant
12+

onNewWant?(ability: UIAbility): void

在UIAbility的
onNewWant
触发后回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillContinue
12+

onAbilityWillContinue?(ability: UIAbility): void

在UIAbility的
onContinue
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageWillRestore
12+

onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageRestore
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onWindowStageRestore
12+

onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void

在UIAbility的
onWindowStageRestore
触发后回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

windowStage

window.WindowStage

是

回调事件对应的UIAbility主窗管理器。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilityWillSaveState
12+

onAbilityWillSaveState?(ability: UIAbility): void

在UIAbility的
onSaveState
触发前回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]onAbilitySaveState
12+

onAbilitySaveState?(ability: UIAbility): void

在UIAbility的
onSaveState
触发后回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.AbilityCore

参数：

参数名

类型

必填

说明

ability

UIAbility

是

回调事件对应的UIAbility对象。

示例：

参见
AbilityLifecycleCallback使用示例
。

[h2]AbilityLifecycleCallback使用示例

本示例展示了生命周期监听机制的部分使用场景：

在
AbilityStage
创建时注册监听。

在
AbilityStage
销毁时注销监听。

监听到对应UIAbility创建时加载资源，监听到对应UIAbility销毁时释放资源。

在UIAbility创建、销毁及前后台状态切换时，记录事件并向外发送通知。

// 以MyStage.ets文件为例，使用AbilityLifecycleCallback监听UIAbility生命周期
import { AbilityLifecycleCallback, AbilityStage, application, UIAbility } from "@kit.AbilityKit";
import { hilog } from '@kit.PerformanceAnalysisKit';
import { JSON } from "@kit.ArkTS";
import { window } from "@kit.ArkUI";
import { BusinessError } from "@kit.BasicServicesKit";

const DOMAIN = 0x0000;
const TAG = 'testTag';

function loadContent() {
 // 加载数据
}

function releaseContent() {
 // 释放数据
}

function recordAbilityEvent(abilityName: string) {
 // 执行打点
}

function publishEvent() {
 // 对外发布通知
}

let abilityLifecycleCallback: AbilityLifecycleCallback = {
 onAbilityCreate(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'onAbilityCreate: ' + ability.context.abilityInfo.name);
 // UIAbility事件打点记录
 recordAbilityEvent(ability.context.abilityInfo.name);
 // 模拟入口UIAbility创建时，加载资源对外发布通知
 if (ability.context.abilityInfo.name === 'EntryAbility') {
 loadContent();
 publishEvent();
 }
 },
 onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageCreate.');
 },
 onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageActive.');
 },
 onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageInactive.');
 },
 onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageDestroy.');
 },
 onAbilityDestroy(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'onAbilityDestroy: ' + ability.context.abilityInfo.name);
 recordAbilityEvent(ability.context.abilityInfo.name);
 // 模拟入口UIAbility销毁时，释放资源
 if (ability.context.abilityInfo.name === 'EntryAbility') {
 releaseContent();
 publishEvent();
 }
 },
 onAbilityForeground(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityForeground.');
 recordAbilityEvent(ability.context.abilityInfo.name);
 if (ability.context.abilityInfo.name === 'EntryAbility') {
 publishEvent();
 }
 },
 onAbilityBackground(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityBackground.');
 recordAbilityEvent(ability.context.abilityInfo.name);
 if (ability.context.abilityInfo.name === 'EntryAbility') {
 publishEvent();
 }
 },
 onAbilityContinue(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityContinue.');
 },
 onNewWant(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onNewWant');
 },
 onWillNewWant(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWillNewWant');
 },
 onAbilityWillCreate(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillCreate');
 },
 onWindowStageWillCreate(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillCreate');
 },
 onWindowStageWillDestroy(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillDestroy');
 },
 onAbilityWillDestroy(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillDestroy');
 },
 onAbilityWillForeground(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillForeground');
 },
 onAbilityWillBackground(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillBackground');
 },
 onAbilityWillContinue(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillContinue.');
 },
 onWindowStageWillRestore(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillRestore.');
 },
 onWindowStageRestore(ability: UIAbility, windowStage: window.WindowStage) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageRestore.');
 },
 onAbilityWillSaveState(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillSaveState.');
 },
 onAbilitySaveState(ability: UIAbility) {
 hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilitySaveState.');
 }
};

let lifecycleId = -1; // 保存监听id

export default class MyStage extends AbilityStage {
 onCreate(): void {
 hilog.info(DOMAIN, TAG, 'AbilityStage onCreate')

 // AbilityStage创建时注册UIAbility生命周期监听，并把监听id保存起来
 try {
 let applicationContext = application.getApplicationContext();
 lifecycleId = applicationContext.on('abilityLifecycle', abilityLifecycleCallback);
 } catch (e) {
 hilog.error(DOMAIN, TAG, `register abilityLifecycle failed: ${JSON.stringify(e)}`);
 }
 }

 onDestroy(): void {
 // AbilityStage销毁时取消UIAbility生命周期监听注册
 let applicationContext = application.getApplicationContext();
 applicationContext.off('abilityLifecycle', lifecycleId).catch((e: BusinessError) => {
 hilog.error(DOMAIN, TAG, `unregister abilityLifecycle failed: ${JSON.stringify(e)}`);
 });
 }
}

// 以EntryAbility.ets为例，展示应用入口UIAbility
import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0000;
const TAG = 'testTag';

export default class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
 this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
 hilog.info(DOMAIN, TAG, 'EntryAbility onCreate');
 }

 onDestroy(): void {
 hilog.info(DOMAIN, TAG, 'EntryAbility onDestroy');
 }

 onWindowStageCreate(windowStage: window.WindowStage): void {
 // 主窗创建
 hilog.info(DOMAIN, TAG, 'EntryAbility onWindowStageCreate');

 windowStage.loadContent('pages/Index', (err) => {
 if (err.code) {
 hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
 return;
 }
 hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');
 });
 }

 onWindowStageDestroy(): void {
 // 主窗销毁
 hilog.info(DOMAIN, TAG, 'EntryAbility onWindowStageDestroy');
 }

 onForeground(): void {
 // UIAbility切换到前台
 hilog.info(DOMAIN, TAG, 'EntryAbility onForeground');
 }

 onBackground(): void {
 // UIAbility切换到后台
 hilog.info(DOMAIN, TAG, 'EntryAbility onBackground');
 }
}

---
*2026-04-22T15:55:01.317Z*