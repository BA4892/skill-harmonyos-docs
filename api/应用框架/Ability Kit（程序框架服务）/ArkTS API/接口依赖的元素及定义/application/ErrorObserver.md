# ErrorObserver

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-errorobserver`

**DocID**: `29d173509a0c46f5be273bc55cce8598`

**NodeID**: `000201775796216197711d602b68db70`

---

ErrorObserver

定义异常监听，可以作为
ErrorManager.on
的入参监听当前应用发生的异常。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { errorManager } from '@kit.AbilityKit';

ErrorObserver.onUnhandledException

onUnhandledException(errMsg: string): void

应用产生未捕获的异常时的回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

errMsg

string

是

有关异常的消息和错误堆栈跟踪。

示例：

import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: errorManager.ErrorObserver = {
 onUnhandledException(errorMsg) {
 console.error('onUnhandledException, errorMsg: ', errorMsg);
 }
};

try {
 errorManager.on('error', observer);
} catch (error) {
 console.error(`registerErrorObserver failed, error.code: ${(error as BusinessError).code}, error.message: ${(error as BusinessError).message}`);
}

ErrorObserver.onException
10+

onException?(errObject: Error): void

应用产生异常，上报js层时的回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

errObject

Error

是

有关异常事件名字、消息和错误堆栈信息的对象。

示例：

import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: errorManager.ErrorObserver = {
 onUnhandledException(errorMsg) {
 console.error('onUnhandledException, errorMsg: ', errorMsg);
 },
 onException(errorObj) {
 console.error('onException, name: ', errorObj.name);
 console.error('onException, message: ', errorObj.message);
 if (typeof (errorObj.stack) === 'string') {
 console.error('onException, stack: ', errorObj.stack);
 }
 }
};

try {
 errorManager.on('error', observer);
} catch (error) {
 console.error(`registerErrorObserver failed, error.code: ${(error as BusinessError).code}, error.message: ${(error as BusinessError).message}`);
}

---
*2026-04-22T15:55:01.391Z*