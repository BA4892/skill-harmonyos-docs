# @ohos.app.ability.AbilityStage (AbilityStage组件管理器)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-app-ability-abilitystage`

**DocID**: `10d80e769c8d4a24a2e2206e0d99ff00`

**NodeID**: `0002017757962161967588f79a3651ed`

---

@ohos.app.ability.AbilityStage (AbilityStage组件管理器)

AbilityStage是一个
Module
级别的组件管理器，用于进行Module级别的资源预加载、线程创建等初始化操作，以及维护Module下的应用状态。AbilityStage与Module一一对应，即一个Module拥有一个AbilityStage。

应用的
HAP
/
HSP
在首次加载时会创建一个AbilityStage实例。当一个Module中存在AbilityStage和其他组件（UIAbility/ExtensionAbility组件），AbilityStage实例会早于其他组件实例创建。

AbilityStage拥有
onCreate()
、
onDestroy()
生命周期回调和
onAcceptWant()
、
onConfigurationUpdate()
、
onMemoryLevel()
事件回调等。

本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

导入模块

import { AbilityStage } from '@kit.AbilityKit';

AbilityStage

[h2]属性

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

名称

类型

只读

可选

说明

context

AbilityStageContext

否

否

AbilityStage上下文。

[h2]onCreate

onCreate(): void

在加载Module的第一个Ability实例前，系统会先创建对应的AbilityStage实例，并在AbilityStage创建完成后，自动触发该回调。

开发者可以在该回调中执行Module的初始化操作（如资源预加载、线程创建等）。同步接口，不支持异步回调。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

示例：

import { AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onCreate() {
 console.info('MyAbilityStage.onCreate is called');
 }
}

[h2]onAcceptWant

onAcceptWant(want: Want): string

当启动模式配置为
specified
的UIAbility被拉起时，会触发该回调，并返回一个string作为待启动的UIAbility实例的唯一标识。同步接口，不支持异步回调。

如果系统中已经有相同标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。

从API version 20开始，当
AbilityStage.onAcceptWantAsync
实现时，本回调函数将不会被触发。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

want

Want

是

Want类型参数，此处表示调用方传入的启动参数，如Ability名称，Bundle名称等。

返回值：

类型

说明

string

返回开发者自定义的UIAbility标识。如果已经启动了相同标识的UIAbility，则复用该UIAbility，否则创建新的实例并启动。

示例：

import { AbilityStage, Want } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onAcceptWant(want: Want) {
 console.info('MyAbilityStage.onAcceptWant called');
 return 'com.example.test';
 }
}

[h2]onNewProcessRequest
11+

onNewProcessRequest(want: Want): string

如果UIAbility配置了在独立进程中运行（即
module.json5配置文件
中UIAbility的isolationProcess字段取值为true），当该UIAbility被拉起时，会触发该回调，并返回一个string作为进程唯一标识。同步接口，不支持异步回调。

如果该应用已有相同标识的进程存在，则待启动的UIAbility运行在此进程中，否则创建新的进程。

如果开发者同时实现onNewProcessRequest和
onAcceptWant
，将先收到onNewProcessRequest回调，再收到onAcceptWant回调。

在API version 19及之前版本，仅支持在指定进程中启动UIAbility。

从API version 20开始，当
AbilityStage.onNewProcessRequestAsync
实现时，本回调函数将不执行。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

设备行为差异
：该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。

参数：

参数名

类型

必填

说明

want

Want

是

Want类型参数，此处表示调用方传入的启动参数，如UIAbility名称、Bundle名称等。

返回值：

类型

说明

string

返回一个由开发者自行决定的进程字符串标识，如果之前此标识对应的进程已被创建，就让ability在此进程中运行，否则创建新的进程。

示例：

import { AbilityStage, Want } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onNewProcessRequest(want: Want) {
 console.info('MyAbilityStage.onNewProcessRequest called');
 return 'com.example.test';
 }
}

[h2]onConfigurationUpdate

onConfigurationUpdate(newConfig: Configuration): void

当系统全局配置（例如系统语言、深浅色等）发生变更时，会触发该回调。配置项均定义在
Configuration
类中。同步接口，不支持异步回调。

该回调方法在实际触发时存在一定限制。例如如果开发者通过
setLanguage
接口设置应用的语言，即便系统语言发生变化，系统也不再触发onConfigurationUpdate回调。详见
使用场景
。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

newConfig

Configuration

是

发生全局配置变更时触发回调，当前全局配置包括系统语言、深浅色模式。

示例：

import { AbilityStage, Configuration } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onConfigurationUpdate(config: Configuration) {
 console.info(`MyAbilityStage.onConfigurationUpdate, language: ${config.language}`);
 }
}

[h2]onMemoryLevel

onMemoryLevel(level: AbilityConstant.MemoryLevel): void

该接口用于监听系统内存状态变化。当整机可用内存变化到指定程度时，系统会触发该回调。开发者可通过实现此接口，在收到内存紧张事件时，及时释放非必要资源（如缓存数据、临时对象等），以避免应用进程被系统强制终止。

同步接口，不支持异步回调。

onMemoryLevel回调运行在当前进程的主线程中，如果在该回调中做耗时的UI组件释放，会阻塞主线程任务，因此不建议在该回调中释放UI组件。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

level

AbilityConstant.MemoryLevel

是

整机可用内存级别，对应的触发场景详见
AbilityConstant.MemoryLevel
。

示例：

import { AbilityStage, AbilityConstant } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onMemoryLevel(level: AbilityConstant.MemoryLevel) {
 console.info(`MyAbilityStage.onMemoryLevel, level: ${JSON.stringify(level)}`);
 }
}

[h2]onDestroy
12+

onDestroy(): void

在对应Module的最后一个Ability实例退出后会触发该回调。此方法将在正常的调度生命周期中调用，当应用程序异常退出或被终止时，将不会调用此方法。同步接口，不支持异步回调。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

示例：

import { AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onDestroy() {
 console.info('MyAbilityStage.onDestroy is called');
 }
}

[h2]onPrepareTermination
15+

onPrepareTermination(): AbilityConstant.PrepareTermination

当应用被用户关闭时调用，可用于询问用户选择立即执行操作还是取消操作。同步接口，不支持异步回调。

仅当应用正常退出（例如，通过doc栏/托盘关闭应用，或者应用随设备关机而退出）时会调用该接口。如果应用被强制关闭，则不会调用该接口。

当
AbilityStage.onPrepareTerminationAsync
实现时，本回调函数将不执行。

需要权限
：ohos.permission.PREPARE_APP_TERMINATE

元服务API
：从API version 15开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

设备行为差异
：

从API version 15开始，该接口仅在2in1设备中可正常执行回调，在其他设备上不执行回调。

从API version 19开始，该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。

返回值：

类型

说明

AbilityConstant.PrepareTermination

用于返回用户的选择结果。

示例：

import { AbilityConstant, AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 onPrepareTermination(): AbilityConstant.PrepareTermination {
 console.info('MyAbilityStage.onPrepareTermination is called');
 return AbilityConstant.PrepareTermination.CANCEL;
 }
}

[h2]onPrepareTerminationAsync
15+

onPrepareTerminationAsync(): Promise<AbilityConstant.PrepareTermination>

当应用被用户关闭时调用，可用于询问用户选择立即执行操作还是取消操作。使用Promise异步回调。

仅当应用正常退出（例如，通过doc栏/托盘关闭应用，或者应用随设备关机而退出）时会调用该接口。如果应用被强制关闭，则不会调用该接口。

若异步回调内发生crash，按超时处理，执行等待超过10秒未响应，应用将被强制关闭。

需要权限
：ohos.permission.PREPARE_APP_TERMINATE

元服务API
：从API version 15开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

设备行为差异
：

从API version 15开始，该接口仅在2in1设备中可正常执行回调，在其他设备上不执行回调。

从API version 19开始，该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。

返回值：

类型

说明

Promise<
AbilityConstant.PrepareTermination
>

Promise对象，返回用户的选择结果。

示例：

import { AbilityConstant, AbilityStage } from '@kit.AbilityKit';

export default class MyAbilityStage extends AbilityStage {
 async onPrepareTerminationAsync(): Promise<AbilityConstant.PrepareTermination> {
 await new Promise<AbilityConstant.PrepareTermination>((res, rej) => {
 setTimeout(res, 3000); // 延时3秒后执行
 });
 return AbilityConstant.PrepareTermination.CANCEL;
 }
}

[h2]onAcceptWantAsync
20+

onAcceptWantAsync(want: Want): Promise<string>

当启动模式配置为
specified
的UIAbility被拉起时，会触发该回调，并返回一个string作为待启动的UIAbility实例的唯一标识。使用Promise异步回调。

如果系统中已经有相同标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。

元服务API
：从API version 20开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

参数：

参数名

类型

必填

说明

want

Want

是

Want类型参数，传入需要启动的UIAbility的信息，如UIAbility名称、Bundle名称等。

返回值：

类型

说明

Promise<string>

Promise对象，返回一个string作为待启动的UIAbility实例的唯一标识。如果系统中已经有该标识的UIAbility实例存在，则复用已有实例，否则创建新的实例。

示例：

import { AbilityStage } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {
 async onAcceptWantAsync(): Promise<string> {
 await new Promise<string>((res, rej) => {
 setTimeout(res, 1000); // 延时1秒后执行
 });
 return 'default';
 }
}

[h2]onNewProcessRequestAsync
20+

onNewProcessRequestAsync(want: Want): Promise<string>

如果UIAbility配置了在独立进程中运行（即
module.json5配置文件
中UIAbility的isolationProcess字段取值为true），当该UIAbility被拉起时，会触发该回调，并返回一个string作为进程唯一标识。使用Promise异步回调。

如果该应用已有相同标识的进程存在，则待启动的UIAbility运行在此进程中，否则创建新的进程。

元服务API
：从API version 20开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

设备行为差异
：该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。

参数：

参数名

类型

必填

说明

want

Want

是

Want类型参数，此处表示调用方传入的启动参数，如UIAbility名称、Bundle名称等。

返回值：

类型

说明

Promise<string>

Promise对象，返回一个由开发者自定义的进程字符串标识。如果该应用已有相同标识的进程存在，则UIAbility在此进程中运行，否则创建新的进程。

示例：

import { AbilityStage } from '@kit.AbilityKit';

class MyAbilityStage extends AbilityStage {
 async onNewProcessRequestAsync(): Promise<string> {
 await new Promise<string>((res, rej) => {
 setTimeout(res, 1000); // 延时1秒后执行
 });
 return '';
 }
}

---
*2026-04-22T15:55:01.318Z*