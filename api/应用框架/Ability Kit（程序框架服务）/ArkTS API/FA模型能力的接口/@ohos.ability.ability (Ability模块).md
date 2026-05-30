# @ohos.ability.ability (Ability模块)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-ability-ability`

**DocID**: `f5ff63b21c4d404c8bfa16ae301c6dc3`

**NodeID**: `000201775796216196537dda836f1e11`

---

@ohos.ability.ability (Ability模块)

Ability模块将二级模块API组织在一起方便开发者进行导出。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { ability } from '@kit.AbilityKit';

DataAbilityHelper

type DataAbilityHelper = _DataAbilityHelper

DataAbilityHelper二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.FAModel

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_DataAbilityHelper

DataAbilityHelper二级模块。

PacMap

type PacMap = _PacMap

PacMap二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.FAModel

类型

说明

_PacMap

DataAbilityHelper二级模块。

DataAbilityOperation

type DataAbilityOperation = _DataAbilityOperation

DataAbilityOperation二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.FAModel

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_DataAbilityOperation

DataAbilityOperation二级模块。

DataAbilityResult

type DataAbilityResult = _DataAbilityResult

DataAbilityResult二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.FAModel

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_DataAbilityResult

DataAbilityResult二级模块。

AbilityResult

type AbilityResult = _AbilityResult

AbilityResult二级模块。

系统能力
：SystemCapability.Ability.AbilityBase

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_AbilityResult

AbilityResult二级模块。

ConnectOptions

type ConnectOptions = _ConnectOptions

ConnectOptions二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_ConnectOptions

ConnectOptions二级模块。

StartAbilityParameter

type StartAbilityParameter = _StartAbilityParameter

StartAbilityParameter二级模块。

系统能力
：SystemCapability.Ability.AbilityRuntime.FAModel

模型约束
：此接口仅可在FA模型下使用。

类型

说明

_StartAbilityParameter

StartAbilityParameter二级模块。

示例：

import { ability } from '@kit.AbilityKit';

let dataAbilityHelper: ability.DataAbilityHelper;
let pacMap: ability.PacMap;
let dataAbilityOperation: ability.DataAbilityOperation;
let dataAbilityResult: ability.DataAbilityResult;
let abilityResult: ability.AbilityResult;
let connectOptions: ability.ConnectOptions;
let startAbilityParameter: ability.StartAbilityParameter;

---
*2026-04-22T15:55:01.354Z*