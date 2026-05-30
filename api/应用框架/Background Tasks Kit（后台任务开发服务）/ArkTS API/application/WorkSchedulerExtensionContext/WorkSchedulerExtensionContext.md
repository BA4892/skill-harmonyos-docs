# WorkSchedulerExtensionContext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-workschedulerextensioncontext`

**DocID**: `a769240431c64d68a73874a3b18fb94b`

**NodeID**: `000201775796216196485b0d9e2bf6be`

---

WorkSchedulerExtensionContext

WorkSchedulerExtensionContext是WorkSchedulerExtensionAbility的上下文环境，继承自
ExtensionContext
。

WorkSchedulerExtensionContext可直接作为WorkSchedulerExtension的上下文环境，提供允许访问特定于WorkSchedulerExtensionAbility的资源的能力。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

使用说明

通过WorkSchedulerExtensionAbility子类实例来获取。

import { WorkSchedulerExtensionAbility, workScheduler } from '@kit.BackgroundTasksKit';

class MyWorkSchedulerExtensionAbility extends WorkSchedulerExtensionAbility {
 onWorkStart(workInfo: workScheduler.WorkInfo) {
 let WorkSchedulerExtensionContext = this.context; // 获取WorkSchedulerExtensionContext
 }
}

WorkSchedulerExtensionContext

WorkSchedulerExtensionContext是WorkSchedulerExtensionAbility的上下文环境。

系统能力：
 SystemCapability.ResourceSchedule.WorkScheduler

模型约束：
 本模块接口仅可在Stage模型下使用。

---
*2026-04-22T15:53:58.786Z*