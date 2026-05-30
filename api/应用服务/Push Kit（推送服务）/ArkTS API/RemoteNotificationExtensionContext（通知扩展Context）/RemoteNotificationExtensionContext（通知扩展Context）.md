# RemoteNotificationExtensionContext（通知扩展Context）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `push-remote-notification-extension-context`

**DocID**: `ee9132b7fd5f4495a155bfc547f69be2`

**NodeID**: `0002017757959462671794d0910c51ab`

---

RemoteNotificationExtensionContext（通知扩展Context）

RemoteNotificationExtensionContext是
RemoteNotificationExtensionAbility
的上下文环境，继承自
ExtensionContext
。

模型约束：
属性仅可在Stage模型下使用。

系统能力：
SystemCapability.Push.PushService

起始版本：
4.1.0(11)

导入模块

import { RemoteNotificationExtensionContext } from '@kit.PushKit';

RemoteNotificationExtensionContext

模型约束：
属性仅可在Stage模型下使用。

系统能力：
SystemCapability.Push.PushService

设备行为差异
：对于5.1.0(18)以前版本，该属性在Phone、Tablet、PC/2in1中可正常使用，在其他设备类型中无效果。对于5.1.0(18)及之后版本，该属性在Phone、Tablet、PC/2in1、Wearable中可正常使用，在其他设备类型中无效果。

起始版本：
4.1.0(11)

本类继承自
ExtensionContext
，未新增内容。

---
*2026-04-22T15:54:00.508Z*