# @ohos.sendableResourceManager (资源管理)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-sendable-resource-manager`

**DocID**: `f8c2b89984df42cd9b87e9fff643fe26`

**NodeID**: `00020177579621619635908a79e3e24a`

---

@ohos.sendableResourceManager (资源管理)

资源管理导入sendableResourceManager模块，通过调用
resourceToSendableResource
和
sendableResourceToResource
方法可以将
Resource
对象和
SendableResource
对象进行互转。

Resource对象通过转换为SendableResource对象后，可以被
Sendable类
持有。Sendable类在跨线程传输后，取出持有的SendableResource对象转为Resource对象，作为参数获取资源。

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { sendableResourceManager } from '@kit.LocalizationKit';

sendableResourceManager.resourceToSendableResource

resourceToSendableResource(resource: Resource): SendableResource

将Resource对象转换为SendableResource对象。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Global.ResourceManager

参数：

参数名

类型

必填

说明

resource

Resource

是

Resource对象。

返回值：

类型

说明

SendableResource

转换后的SendableResource对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed.

示例：

// 资源文件路径: src/main/resources/base/element/string.json
{
 "string": [
 {
 "name": "test",
 "value": "I'm a test string resource."
 }
 ]
}

import { sendableResourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let sendableResource: sendableResourceManager.SendableResource = sendableResourceManager.resourceToSendableResource($r('app.string.test'));
} catch (error) {
 let code = (error as BusinessError).code;
 let message = (error as BusinessError).message;
 console.error(`resourceToSendableResource failed, error code: ${code}, message: ${message}.`);
}

sendableResourceManager.sendableResourceToResource

sendableResourceToResource(resource: SendableResource): Resource

将SendableResource对象转换为Resource对象。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Global.ResourceManager

参数：

参数名

类型

必填

说明

resource

SendableResource

是

SendableResource对象。

返回值：

类型

说明

Resource

转换后的Resource对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed.

示例：

// 资源文件路径: src/main/resources/base/element/string.json
{
 "string": [
 {
 "name": "test",
 "value": "I'm a test string resource."
 }
 ]
}

import { sendableResourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let resource: sendableResourceManager.Resource = sendableResourceManager.sendableResourceToResource(sendableResourceManager.resourceToSendableResource($r('app.string.test')));
} catch (error) {
 let code = (error as BusinessError).code;
 let message = (error as BusinessError).message;
 console.error(`sendableResourceToResource failed, error code: ${code}, message: ${message}.`);
}

Resource

type Resource = _Resource

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Global.ResourceManager

类型

说明

_Resource

表示Resource资源信息。

SendableResource

type SendableResource = _SendableResource

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Global.ResourceManager

类型

说明

_SendableResource

表示SendableResource资源信息。

---
*2026-04-22T15:55:02.572Z*