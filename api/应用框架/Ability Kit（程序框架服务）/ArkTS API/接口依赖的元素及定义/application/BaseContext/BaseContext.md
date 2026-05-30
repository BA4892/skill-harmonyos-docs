# BaseContext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-basecontext`

**DocID**: `ec25493d9db444f8be386e419dc3e4a5`

**NodeID**: `000201775796216197690786bd78d401`

---

BaseContext

BaseContext抽象类用于表示继承的子类Context是Stage模型还是FA模型，是所有Context类型的父类。

本模块首批接口从API version 8 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { common } from '@kit.AbilityKit';

属性

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

stageMode

boolean

否

否

表示是否Stage模型。

true：
Stage模型
。

false：
FA模型
。

示例：

以Stage模型为例，用户可通过UIAbilityContext访问stageMode字段。

import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';

class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
 // EntryAbility onCreate, isStageMode: true
 console.info(`EntryAbility onCreate, isStageMode: ${this.context.stageMode}`);
 }
}

---
*2026-04-22T15:53:57.916Z*