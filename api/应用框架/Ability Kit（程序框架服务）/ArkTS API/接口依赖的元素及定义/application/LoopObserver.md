# LoopObserver

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-loopobserver`

**DocID**: `03063664196c43e8bf3033a79cecfe65`

**NodeID**: `0002017757962161977273177994a662`

---

LoopObserver

定义异常监听，可以作为
ErrorManager.on
的入参监听当前应用主线程事件处理事件。

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { errorManager } from '@kit.AbilityKit';

LoopObserver.onLoopTimeOut

onLoopTimeOut?(timeout: number): void

将在js运行时应用主线程处理事件超时的回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

timeout

number

是

返回应用主线程消息实际执行时间。

示例：

import { errorManager } from '@kit.AbilityKit';

let observer: errorManager.LoopObserver = {
 onLoopTimeOut(timeout: number) {
 console.info('Duration timeout: ' + timeout);
 }
};

errorManager.on("loopObserver", 1, observer);

---
*2026-04-22T15:55:01.394Z*