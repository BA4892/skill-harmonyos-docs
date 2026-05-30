# @ohos.application.testRunner (TestRunner)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-application-testrunner`

**DocID**: `4fbd6b93967f4ffa9091f224f7a72694`

**NodeID**: `00020177579634168447873786e423f5`

---

@ohos.application.testRunner (TestRunner)

TestRunner模块提供了框架测试的能力。包括准备单元测试环境、运行测试用例。

如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。

本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在
单元测试框架
中使用。

导入模块

import { TestRunner } from '@kit.TestKit';

TestRunner.onPrepare

onPrepare(): void

为运行测试用例准备单元测试环境。

系统能力：
 SystemCapability.Ability.AbilityRuntime.Core

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

示例：

import { TestRunner } from '@kit.TestKit';

export default class UserTestRunner implements TestRunner {
 onPrepare() {
 console.info('Trigger onPrepare');
 }

 onRun() {
 }
}

TestRunner.onRun

onRun(): void

运行测试用例。

系统能力：
 SystemCapability.Ability.AbilityRuntime.Core

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

示例：

import { TestRunner } from '@kit.TestKit';

export default class UserTestRunner implements TestRunner {
 onPrepare() {
 }

 onRun() {
 console.info('Trigger onRun');
 }
}

---
*2026-04-22T15:53:59.584Z*