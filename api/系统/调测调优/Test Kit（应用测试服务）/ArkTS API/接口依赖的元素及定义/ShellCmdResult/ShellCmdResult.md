# ShellCmdResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-shellcmdresult`

**DocID**: `5bd838bbfe6c4fa1a1e728630c7fd515`

**NodeID**: `000201775796341684841439aabce192`

---

ShellCmdResult

本模块提供Shell命令执行结果的能力。

本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在
单元测试框架
中使用。

导入模块

import { abilityDelegatorRegistry } from '@kit.TestKit';

ShellCmdResult

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

stdResult

string

否

否

Shell命令的标准输出内容。

exitCode

number

否

否

Shell命令的结果码。

使用说明

通过abilityDelegator中的
executeShellCommand
方法来获取。

示例：

import { abilityDelegatorRegistry } from '@kit.TestKit';
import { BusinessError } from '@kit.BasicServicesKit';

let abilityDelegator: abilityDelegatorRegistry.AbilityDelegator;
let cmd = 'cmd';

abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
abilityDelegator.executeShellCommand(cmd, (error: BusinessError, data) => {
 if (error) {
 console.error(`executeShellCommand fail, error: ${JSON.stringify(error)}`);
 } else {
 console.info(`executeShellCommand success, data: ${JSON.stringify(data)}`);
 }
});

---
*2026-04-22T15:53:59.592Z*