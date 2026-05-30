# AbilityStageMonitor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-abilitystagemonitor`

**DocID**: `da37afa68346468197aa4469c8d5b4dc`

**NodeID**: `000201775796216197547a8297a93e84`

---

AbilityStageMonitor

本模块提供监听指定
AbilityStage
对象的能力。开发者可以将AbilityStageMonitor作为
abilityDelegator.waitAbilityStageMonitor
的入参来注册监听。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

AbilityStageMonitor

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

moduleName

string

否

否

被监听的AbilityStage的模块名。

srcEntrance

string

否

否

被监听的AbilityStage的源路径。

示例：

import { abilityDelegatorRegistry } from '@kit.TestKit';

let monitor: abilityDelegatorRegistry.AbilityStageMonitor = {
 moduleName: 'feature_as1',
 srcEntrance: './ets/Application/MyAbilityStage.ts',
}

let abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
abilityDelegator.waitAbilityStageMonitor(monitor, (error, data) => {
 if (error) {
 console.error(`waitAbilityStageMonitor fail, error: ${JSON.stringify(error)}`);
 } else {
 console.info(`waitAbilityStageMonitor success, data: ${JSON.stringify(data)}`);
 }
});

---
*2026-04-22T15:55:01.384Z*