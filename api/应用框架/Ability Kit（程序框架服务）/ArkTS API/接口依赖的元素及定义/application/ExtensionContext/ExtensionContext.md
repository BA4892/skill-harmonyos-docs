# ExtensionContext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-extensioncontext`

**DocID**: `2a3865d960f344ffb8e4457ad5b747d4`

**NodeID**: `000201775796216197719a324c252de2`

---

ExtensionContext

ExtensionContext是
ExtensionAbility
的上下文环境，继承自
Context
。

ExtensionContext模块提供访问特定
ExtensionAbility
的资源的能力。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

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

currentHapModuleInfo

HapModuleInfo

否

否

所属Hap包的信息。

config

Configuration

否

否

所属Module的配置信息。

extensionAbilityInfo

ExtensionAbilityInfo

否

否

所属
ExtensionAbility
的信息。

使用场景

ExtensionContext主要用于查询所属ExtensionAbility的信息、Module的配置信息以及HAP包的信息，开发者可根据自身业务需求使用对应的信息。

示例：

在扩展的
FormExtensionAbility
中获取上下文，查询该扩展的FormExtensionAbility所属HAP包等信息。

import { FormExtensionAbility, formBindingData } from '@kit.FormKit';
import { Want } from '@kit.AbilityKit';

export default class MyFormExtensionAbility extends FormExtensionAbility {
 onAddForm(want: Want) {
 console.info(`FormExtensionAbility onAddForm, want: ${want.abilityName}`);
 let extensionContext = this.context;
 let hapInfo = extensionContext.currentHapModuleInfo;
 console.info(`HAP name is: ${hapInfo.name}`);
 let dataObj1: Record<string, string> = {
 'temperature': '11c',
 'time': '11:00'
 };
 let obj1: formBindingData.FormBindingData = formBindingData.createFormBindingData(dataObj1);
 return obj1;
 }
};

---
*2026-04-22T15:53:57.920Z*