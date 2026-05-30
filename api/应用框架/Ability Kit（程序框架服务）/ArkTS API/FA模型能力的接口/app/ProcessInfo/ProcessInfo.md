# ProcessInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-app-processinfo`

**DocID**: `b9b11d99cc0b4c438330afa683c00b53`

**NodeID**: `00020177579621619753823fc3dad075`

---

ProcessInfo

定义进程信息，可以通过
getProcessInfo
获取当前Ability运行的进程信息。

本模块首批接口从API version 7开始支持，仅支持FA模型。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import featureAbility from '@ohos.ability.featureAbility';

属性

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

pid

number

否

否

进程ID。

processName

string

否

否

进程名称。

示例：

import featureAbility from '@ohos.ability.featureAbility';

let context = featureAbility.getContext();
context.getProcessInfo((error, data) => {
 if (error && error.code !== 0) {
 console.error(`getProcessInfo fail, error: ${JSON.stringify(error)}`);
 } else {
 console.info(`getProcessInfo success, data: ${JSON.stringify(data)}`);
 let pid = data.pid;
 let processName = data.processName;
 }
});

---
*2026-04-22T15:53:57.891Z*