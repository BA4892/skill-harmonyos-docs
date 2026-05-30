# ConnectOptions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-ability-connectoptions`

**DocID**: `90d94aa2640d4320bcc43d2a4d8c1bc3`

**NodeID**: `000201775796216197469daa2fa10aa3`

---

ConnectOptions

在连接指定的后台服务时作为入参，用于接收连接过程中的状态变化，如作为
connectServiceExtensionAbility
的入参，连接指定的ServiceExtensionAbility。

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { common } from '@kit.AbilityKit';

ConnectOptions

[h2]onConnect

onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void

建立连接时的回调函数。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

elementName

ElementName

是

目标Ability的elementName。

remote

rpc.IRemoteObject

是

用于与目标Ability进行IPC通信的IRemoteObject实例。

示例：

import { UIAbility, common, Want, AbilityConstant } from '@kit.AbilityKit';
import { bundleManager } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connectWant: Want = {
 bundleName: 'com.example.myapp',
 abilityName: 'MyAbility'
};

let connectOptions: common.ConnectOptions = {
 onConnect(elementName: bundleManager.ElementName, remote: rpc.IRemoteObject) {
 console.info(`onConnect elementName: ${elementName}`);
 },
 onDisconnect(elementName: bundleManager.ElementName) {
 console.info(`onDisconnect elementName: ${elementName}`);
 },
 onFailed(code: number) {
 console.error(`onFailed code: ${code}`);
 }
};

class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
 let connection: number = this.context.connectServiceExtensionAbility(connectWant, connectOptions);
 }
}

[h2]onDisconnect

onDisconnect(elementName: ElementName): void

断开连接时的回调函数。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

elementName

ElementName

是

目标Ability的elementName。

示例：

import { UIAbility, common, Want, AbilityConstant } from '@kit.AbilityKit';
import { bundleManager } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connectWant: Want = {
 bundleName: 'com.example.myapp',
 abilityName: 'MyAbility'
};

let connectOptions: common.ConnectOptions = {
 onConnect(elementName: bundleManager.ElementName, remote: rpc.IRemoteObject) {
 console.info(`onConnect elementName: ${elementName}`);
 },
 onDisconnect(elementName: bundleManager.ElementName) {
 console.info(`onDisconnect elementName: ${elementName}`);
 },
 onFailed(code: number) {
 console.error(`onFailed code: ${code}`);
 }
};

class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
 let connection: number = this.context.connectServiceExtensionAbility(connectWant, connectOptions);
 }
}

[h2]onFailed

onFailed(code: number): void

连接失败时的回调函数。

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

连接指定Ability失败返回的错误码。

错误码详细介绍请参考
通用错误码
和
元能力子系统错误码
。

201 - The application does not have permission to call the interface.

16000001 - The specified ability does not exist.

16000002 - Incorrect ability type.

16000004 - Cannot start an invisible component.

16000005 - The specified process does not have the permission.

16000006 - Cross-user operations are not allowed.

16000008 - The crowdtesting application expires.

16000053 - The ability is not on the top of the UI.

16000055 - Installation-free timed out.

16000050 - Internal error.

示例：

import { UIAbility, common, Want, AbilityConstant } from '@kit.AbilityKit';
import { bundleManager } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';

let connectWant: Want = {
 bundleName: 'com.example.myapp',
 abilityName: 'MyAbility'
};

let connectOptions: common.ConnectOptions = {
 onConnect(elementName: bundleManager.ElementName, remote: rpc.IRemoteObject) {
 console.info(`onConnect elementName: ${elementName}`);
 },
 onDisconnect(elementName: bundleManager.ElementName) {
 console.info(`onDisconnect elementName: ${elementName}`);
 },
 onFailed(code: number) {
 console.error(`onFailed code: ${code}`);
 }
};

class EntryAbility extends UIAbility {
 onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
 let connection: number = this.context.connectServiceExtensionAbility(connectWant, connectOptions);
 }
}

---
*2026-04-22T15:53:57.908Z*