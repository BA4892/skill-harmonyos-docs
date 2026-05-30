# AbilityStartCallback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-abilitystartcallback`

**DocID**: `35f7c95c03fa4b7598ffbeafc4a78a52`

**NodeID**: `0002017757962161976056b9ebadc703`

---

AbilityStartCallback

定义拉起UIExtensionAbility执行结果的回调。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

从API version 11开始，本模块接口支持在元服务中使用。

导入模块

import { common } from '@kit.AbilityKit';

AbilityStartCallback

[h2]属性

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

completionHandler
21+

CompletionHandlerForAbilityStartCallback

否

是

用于返回拉起指定类型的Ability组件的回调结果。

元服务API
：从API version 21开始，该接口支持在元服务中使用。

[h2]onError

onError(code: number, name: string, message: string): void

拉起UIExtensionAbility执行失败的回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

code

number

是

拉起UIExtensionAbility执行失败时返回的结果码。

name

string

是

拉起UIExtensionAbility执行失败时返回的名称。

message

string

是

拉起UIExtensionAbility执行失败时返回的错误信息。

示例：

import { UIAbility, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
 onForeground() {
 let wantParam: Record<string, Object> = {
 'time': '2023-10-23 20:45',
 };
 let abilityStartCallback: common.AbilityStartCallback = {
 onError: (code: number, name: string, message: string) => {
 console.info(`code: ${code}, name: ${name}, message: ${message}`);
 },
 onResult: (abilityResult: common.AbilityResult) => {
 console.info(`resultCode: ${abilityResult.resultCode}, bundleName: ${abilityResult.want?.bundleName}`);
 }
 };

 this.context.startAbilityByType('photoEditor', wantParam, abilityStartCallback, (err: BusinessError) => {
 if (err) {
 console.error(`startAbilityByType fail, err: ${JSON.stringify(err)}`);
 } else {
 console.info(`success`);
 }
 });
 }
}

[h2]onResult
12+

onResult?(parameter: AbilityResult): void

拉起UIExtensionAbility终止时的回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

parameter

AbilityResult

是

当调用
terminateSelfWithResult
方法终止UIExtensionAbility时返回的结果。

示例：

import { UIAbility, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
 onForeground() {
 let wantParam: Record<string, Object> = {
 'time': '2023-10-23 20:45',
 };
 let abilityStartCallback: common.AbilityStartCallback = {
 onError: (code: number, name: string, message: string) => {
 console.info(`code:` + code + `name:` + name + `message:` + message);
 },
 onResult: (abilityResult: common.AbilityResult) => {
 console.info(`resultCode:` + abilityResult.resultCode + `bundleName:` + abilityResult.want?.bundleName);
 }
 };

 this.context.startAbilityByType('photoEditor', wantParam, abilityStartCallback, (err: BusinessError) => {
 if (err) {
 console.error(`startAbilityByType fail, err: ${JSON.stringify(err)}`);
 } else {
 console.info(`success`);
 }
 });
 }
}

---
*2026-04-22T15:55:01.385Z*