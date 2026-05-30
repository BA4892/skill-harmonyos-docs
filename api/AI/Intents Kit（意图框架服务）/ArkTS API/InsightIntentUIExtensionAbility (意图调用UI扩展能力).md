# InsightIntentUIExtensionAbility (意图调用UI扩展能力)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `intents-arkts-api-insightintent-uiextension`

**DocID**: `451282973a494267a6e0ebdf9b931bf2`

**NodeID**: `000201775795857640717092d65b50f7`

---

InsightIntentUIExtensionAbility (意图调用UI扩展能力)

InsightIntentUIExtensionAbility用于小艺对话过程中的意图调用时的信息展示，为意图调用UI扩展能力，应用可以声明一个或多个InsightIntentUI来展示其意图的窗口化界面，继承自
UIExtensionAbility
。

起始版本：
5.0.0(12)

导入模块

import { InsightIntentUIExtensionAbility } from '@kit.IntentsKit';

InsightIntentUIExtensionAbility

模型约束：
该类仅可在Stage模型下使用。

系统能力：
SystemCapability.AI.InsightIntent

起始版本：
5.0.0(12)

示例

import { InsightIntentUIExtensionAbility } from '@kit.IntentsKit';
import { UIExtensionContentSession, Want } from '@kit.AbilityKit';

// 此处以TestUiExtAbility继承InsightIntentUIExtensionAbility为例
export default class TestUiExtAbility extends InsightIntentUIExtensionAbility {
 onCreate() {
 }

 onForeground() {
 }

 onBackground() {
 }

 onDestroy() {
 }

 onSessionCreate(want: Want, session: UIExtensionContentSession) {
 }

 onSessionDestroy(session: UIExtensionContentSession) {
 }
}

---
*2026-04-22T15:55:04.492Z*