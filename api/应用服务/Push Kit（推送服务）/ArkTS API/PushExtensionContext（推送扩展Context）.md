# PushExtensionContext（推送扩展Context）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `push-extension-context`

**DocID**: `8571adaf45b140ffb8eaea8886dd6639`

**NodeID**: `000201775795946267212965e343e0b5`

---

PushExtensionContext（推送扩展Context）

PushExtensionContext是
PushExtensionAbility
的上下文环境，继承自
ExtensionContext
。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.Push.PushService

起始版本：
4.0.0(10)

导入模块

import { PushExtensionContext } from '@kit.PushKit';

PushExtensionContext

模型约束：
属性仅可在Stage模型下使用。

系统能力：
SystemCapability.Push.PushService

设备行为差异
：对于5.1.0(18)以前版本，该属性在Phone、Tablet、PC/2in1中可正常使用，在其他设备类型中无效果。对于5.1.0(18)版本，该属性在Phone、Tablet、PC/2in1、Wearable中可正常使用，在其他设备类型中无效果。对于5.1.1(19)及之后版本，该属性在Phone、Tablet、PC/2in1、Wearable、TV中均可正常使用。

起始版本：
4.0.0(10)

本类继承自
ExtensionContext
，未新增内容。

---
*2026-04-22T15:55:04.411Z*