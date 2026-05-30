# @ohos.app.ability.common (Ability公共模块)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-app-ability-common`

**DocID**: `a31a2308bdd54990a8065f910dad3ed1`

**NodeID**: `0002017757962161970886cdd0fe4549`

---

@ohos.app.ability.common (Ability公共模块)

本模块提供Ability Kit中常用公共能力的纯类型定义，包含各类上下文对象、回调接口和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { common } from '@kit.AbilityKit';

UIAbilityContext

type UIAbilityContext = _UIAbilityContext.default

UIAbility
组件上下文，继承自Context。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_UIAbilityContext.default

UIAbilityContext组件上下文。

AbilityStageContext

type AbilityStageContext = _AbilityStageContext.default

AbilityStage
组件上下文，继承自Context。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_AbilityStageContext.default

AbilityStage组件上下文。

ApplicationContext

type ApplicationContext = _ApplicationContext.default

应用上下文，继承自Context。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_ApplicationContext.default

应用上下文。

BaseContext

type BaseContext = _BaseContext.default

所有Context类型的父类。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_BaseContext.default

所有Context的父类。

Context

type Context = _Context.default

Stage模型
的上下文基类。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_Context.default

Stage模型的上下文基类。

ExtensionContext

type ExtensionContext = _ExtensionContext.default

ExtensionAbility
组件上下文，继承自Context。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_ExtensionContext.default

ExtensionAbility组件上下文。

FormExtensionContext

type FormExtensionContext = _FormExtensionContext.default

FormExtensionAbility
组件上下文，继承自
ExtensionContext
。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_FormExtensionContext.default

FormExtensionAbility组件上下文。

VpnExtensionContext
11+

type VpnExtensionContext = _VpnExtensionContext.default

VpnExtensionAbility
组件上下文，继承自Context。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_VpnExtensionContext.default

VpnExtensionAbility组件上下文。

EventHub

type EventHub = _EventHub.default

EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_EventHub.default

系统提供的基于发布-订阅模式实现的事件通信机制。

PacMap

type PacMap = _PacMap

存储基础数据类型的容器。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

类型

说明

_PacMap

存储基础数据类型的容器。

AbilityResult

type AbilityResult = _AbilityResult

定义Ability被拉起并退出后返回的结果码和数据。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_AbilityResult

定义Ability被拉起并退出后返回的结果码和数据。

AbilityStartCallback
11+

type AbilityStartCallback = _AbilityStartCallback

定义了拉起UIExtensionAbility的回调结果，通常作为
UIAbilityContext.startAbilityByType
/
UIExtensionContext.startAbilityByType
的入参传入。

元服务API
：从API version 11开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_AbilityStartCallback

定义拉起UIExtensionAbility的回调结果。

ConnectOptions

type ConnectOptions = _ConnectOptions

在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_ConnectOptions

在连接指定的后台服务时作为入参，用于接收与后台服务的连接状态。

UIExtensionContext
10+

type UIExtensionContext = _UIExtensionContext.default

UIExtensionAbility
组件上下文，继承自Context。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_UIExtensionContext.default

UIExtensionAbility组件上下文。

EmbeddableUIAbilityContext
12+

type EmbeddableUIAbilityContext = _EmbeddableUIAbilityContext.default

EmbeddableUIAbility
组件上下文，继承自Context。

元服务API
：从API version 12开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_EmbeddableUIAbilityContext.default

EmbeddableUIAbility组件上下文。

PhotoEditorExtensionContext
12+

type PhotoEditorExtensionContext = _PhotoEditorExtensionContext.default

PhotoEditorExtensionAbility
组件上下文，继承自Context。

系统能力
：SystemCapability.Ability.AppExtension.PhotoEditorExtension

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_PhotoEditorExtensionContext.default

PhotoEditorExtensionAbility组件上下文。

UIServiceProxy
14+

type UIServiceProxy = _UIServiceProxy.default

UIServiceProxy提供了与UIServiceExtensionAbility服务端数据通信的能力。UIServiceExtensionAbility是一类特殊的ExtensionAbility组件，这类组件由系统提供，通常用于提供浮窗组件相关扩展能力。

元服务API
：从API version 14开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_UIServiceProxy.default

提供与UIServiceExtensionAbility服务端数据通信的能力。

UIServiceExtensionConnectCallback
14+

type UIServiceExtensionConnectCallback = _UIServiceExtensionConnectCallback.default

在连接指定的UIServiceExtensionAbility服务时作为入参，用于提供UIServiceExtensionAbility连接回调数据能力。

元服务API
：从API version 14开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_UIServiceExtensionConnectCallback.default

提供UIServiceExtensionAbility连接回调数据能力。

AppServiceExtensionContext
20+

type AppServiceExtensionContext = _AppServiceExtensionContext.default

AppServiceExtensionAbility
组件上下文，继承自Context。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_AppServiceExtensionContext.default

AppServiceExtensionAbility组件上下文。

FormEditExtensionContext
22+

type FormEditExtensionContext = _FormEditExtensionContext.default

FormEditExtensionAbility
组件上下文，继承自
UIExtensionContext
。

元服务API
：从API version 22开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.Form

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_FormEditExtensionContext.default

FormEditExtensionAbility组件上下文。

LiveFormExtensionContext
22+

type LiveFormExtensionContext = _LiveFormExtensionContext.default

LiveFormExtensionAbility
组件上下文，继承自
ExtensionContext
。

元服务API
：从API version 22开始，该接口支持在元服务中使用。

系统能力
：SystemCapability.Ability.Form

模型约束
：此接口仅可在Stage模型下使用。

类型

说明

_LiveFormExtensionContext.default

LiveFormExtensionAbility组件上下文。

示例：

import { common } from '@kit.AbilityKit';

let uiAbilityContext: common.UIAbilityContext;
let abilityStageContext: common.AbilityStageContext;
let applicationContext: common.ApplicationContext;
let baseContext: common.BaseContext;
let context: common.Context;
let uiExtensionContext: common.UIExtensionContext;
let extensionContext: common.ExtensionContext;
let formExtensionContext: common.FormExtensionContext;
let vpnExtensionContext: common.VpnExtensionContext;
let eventHub: common.EventHub;
let pacMap: common.PacMap;
let abilityResult: common.AbilityResult;
let abilityStartCallback: common.AbilityStartCallback;
let connectOptions: common.ConnectOptions;
let embeddableUIAbilityContext: common.EmbeddableUIAbilityContext;
let photoEditorExtensionContext: common.PhotoEditorExtensionContext;
let uiServiceProxy : common.UIServiceProxy;
let uiServiceExtensionConnectCallback : common.UIServiceExtensionConnectCallback;
let appServiceExtensionContext : common.AppServiceExtensionContext;
let formEditExtensionContext : common.FormEditExtensionContext;
let liveFormExtensionContext : common.LiveFormExtensionContext;

---
*2026-04-22T15:55:01.327Z*