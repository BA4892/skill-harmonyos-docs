# SendableContext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-sendablecontext`

**DocID**: `48d9c179f3fe4f3ab77556f037acfb29`

**NodeID**: `000201775796216197755cb4bda5f813`

---

SendableContext

SendableContext符合
Sendable协议
，继承自
lang.ISendable
。

本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

导入模块

import { sendableContextManager } from '@kit.AbilityKit';

SendableContext

SendableContext符合
Sendable协议
，可以与Context对象相互转换，用于ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）的数据传递。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

元服务API
：从API version 12开始，该接口支持在元服务中使用。

---
*2026-04-22T15:53:57.928Z*