# AbilityRunningInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-abilityrunninginfo`

**DocID**: `aa0ca37d805e410294a74a1e4be0ce25`

**NodeID**: `000201775796216197477dfc92ab58bb`

---

AbilityRunningInfo

AbilityRunningInfo是记录Ability运行信息和状态的数据结构，通过
getAbilityRunningInfos
方法获取。

本模块首批接口从API version 14开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { abilityManager } from '@kit.AbilityKit';

AbilityRunningInfo

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

ability

ElementName

否

否

Ability的ElementName信息。

pid

number

否

否

进程ID。

uid

number

否

否

所属应用程序的UID。

processName

string

否

否

进程的名称。

startTime

number

否

否

Ability的启动时间。

abilityState

abilityManager.AbilityState

否

否

Ability的状态。

示例：

import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 abilityManager.getAbilityRunningInfos()
 .then((data: abilityManager.AbilityRunningInfo[]) => {
 for (let i = 0; i < data.length; i++) {
 let abilityInfo = data[i];
 console.info(`getAbilityRunningInfos success, data: ${JSON.stringify(abilityInfo)}`);
 }
 })
 .catch((error: BusinessError) => {
 console.error(`getAbilityRunningInfos fail, error code: ${JSON.stringify(error.code)}, error msg: ${JSON.stringify(error.message)}`);
 })
} catch (e) {
 let code = (e as BusinessError).code;
 let msg = (e as BusinessError).message;
 console.error(`getAbilityRunningInfos fail, error code: ${JSON.stringify(code)}, error msg: ${JSON.stringify(msg)}`);
}

---
*2026-04-22T15:55:01.383Z*