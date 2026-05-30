# StatusBarViewExtensionAbility（状态栏扩展Ability）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `statusbar-extension-ability`

**DocID**: `ad894bb6b1424e399de7086d484ccf42`

**NodeID**: `000201775796341684501a7a11f001a9`

---

StatusBarViewExtensionAbility（状态栏扩展Ability）

StatusBarViewExtensionAbility为状态栏扩展Ability，继承自
UIExtensionAbility
，用于给应用提供接入状态栏图标左键业务弹窗的能力。

本模块接口仅可在Stage模型下使用。

系统能力：
SystemCapability.PCService.StatusBarManager

起始版本：
5.0.0(12)

导入模块

import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';

示例：

import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';
import { UIExtensionContentSession, Want } from '@kit.AbilityKit';

let TAG = "MyStatusBarViewAbility";

export default class MyStatusBarViewAbility extends StatusBarViewExtensionAbility {
 onCreate() {
 console.info(TAG, `onCreate`);
 }

 onSessionCreate(want: Want, session: UIExtensionContentSession) {
 console.info(TAG, `onSessionCreate, want: ${want.abilityName}`);
 session.loadContent('pages/Index');
 }

 onForeground() {
 console.info(TAG, `onForeground`);
 }

 onBackground() {
 console.info(TAG, `onBackground`);
 }

 onSessionDestroy(session: UIExtensionContentSession) {
 console.info(TAG, `onSessionDestroy`);
 }

 onDestroy() {
 console.info(TAG, `onDestroy`);
 }
}

---
*2026-04-22T15:55:03.145Z*