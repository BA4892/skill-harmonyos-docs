# @ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)

> **分区**: API参考  |  **Slug**: `js-apis-app-ability-abilitydelegatorregistry`  |  **DocID**: `8cd95cee7c87423fb6add22fdfc31bf0`

---

# @ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)

       AbilityDelegatorRegistry是自动化测试框架使用指南模块，该模块用于获取[AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)和[AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象，其中[AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)对象提供添加用于监视指定ability的生命周期状态更改的[AbilityMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitymonitor#abilitymonitor-1)对象的能力，[AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象提供获取当前测试参数的能力。

                     本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

      本模块接口仅可在[单元测试框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unittest-guidelines)中使用。

                       #### 导入模块

     ```
import { abilityDelegatorRegistry } from '@kit.TestKit';
```
                  #### AbilityLifecycleState

     Ability生命周期状态，该类型为枚举，可配合[AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)的[getAbilityState(ability)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator#getabilitystate9)方法返回不同ability生命周期。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力** ：以下各项对应的系统能力均为SystemCapability.Ability.AbilityRuntime.Core

                                   名称         值         说明                                       UNINITIALIZED         0         表示Ability处于无效状态。                         CREATE         1         表示Ability处于已创建状态。                         FOREGROUND         2         表示Ability处于前台状态。                         BACKGROUND         3         表示Ability处于后台状态。                         DESTROY         4         表示Ability处于已销毁状态。                                            #### abilityDelegatorRegistry.getAbilityDelegator

     getAbilityDelegator(): AbilityDelegator

     获取应用程序的[AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)对象，该对象能够使用调度测试框架的相关功能。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

     **返回值：**

                                   类型         说明                                       [AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)         [AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)对象。可以用来调度测试框架相关功能。                               **示例：**

     ```
import { abilityDelegatorRegistry } from '@kit.TestKit';
import { Want } from '@kit.AbilityKit';

let abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
let want: Want = {
  bundleName: 'com.example.myapplication',
  abilityName: 'EntryAbility'
};

abilityDelegator.startAbility(want, (err) => {
  if (err) {
    console.error(`Failed start ability, error: ${JSON.stringify(err)}`);
  } else {
    console.info('Success start ability.');
  }
});
```
                  #### abilityDelegatorRegistry.getArguments

     getArguments(): AbilityDelegatorArgs

     获取单元测试参数[AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

     **返回值：**

                                   类型         说明                                       [AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)         [AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象。可以用来获取测试参数。                               **示例：**

     ```
import { abilityDelegatorRegistry } from '@kit.TestKit';

let args = abilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments parameters: ${JSON.stringify(args.parameters)}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);
```
                  #### AbilityDelegator

     type AbilityDelegator = _AbilityDelegator

     提供通过[AbilityMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitymonitor)实例来监听和管理[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)生命周期变化的能力。例如获取UIAbility当前状态（如是否已创建/是否在前台等）、查询当前获焦的UIAbility、等待UIAbility进入某个生命周期节点（如等待UIAbility进入onForeground）、启动指定UIAbility、设置超时机制等功能。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)         AbilityDelegator模块。                                            #### AbilityDelegatorArgs

     type AbilityDelegatorArgs = _AbilityDelegatorArgs

     提供在应用程序执行测试用例期间，获取测试用例参数AbilityDelegatorArgs对象的能力。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)         AbilityDelegatorArgs模块。                                            #### AbilityMonitor

     type AbilityMonitor = _AbilityMonitor

     提供作为abilityDelegator中的[addAbilityMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator#addabilitymonitor9)的入参来监听指定UIAbility的生命周期变化。

     **元服务API：** ��API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_AbilityMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitymonitor)         AbilityMonitor模块。                                            #### ShellCmdResult

     type ShellCmdResult = _ShellCmdResult

     提供Shell命令执行结果的能力。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_ShellCmdResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-shellcmdresult)         ShellCmdResult模块。                                            #### AbilityStageMonitor14+

     type AbilityStageMonitor = _AbilityStageMonitor

     提供监听指定[AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage)对象的能力。开发者可以将AbilityStageMonitor作为[abilityDelegator.waitAbilityStageMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator#waitabilitystagemonitor9)的入参来注册监听。

     **元服务API：** 从API version 14开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_AbilityStageMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitystagemonitor)         AbilityStageMonitor模块。

---
*Updated: 2026-04-22 06:47:08*
