# ArkUI_TouchTestInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-nativemodule-arkui-touchtestinfo`

**DocID**: `b9aec85d140a404a906da82c28a15ebf`

**NodeID**: `000201775796216197410515fe5bb2b6`

---

ArkUI_TouchTestInfo

typedef struct ArkUI_TouchTestInfo ArkUI_TouchTestInfo

概述

定义触摸测试信息。

当用户通过
registerNodeEvent
注册了
NODE_ON_CHILD_TOUCH_TEST
事件时，才能接收到此事件。触摸测试信息包含触摸测试策略、命中测试过程中需要作用的子组件ID和触摸测试信息项的列表。

起始版本：
 22

相关模块：

ArkUI_EventModule

所在头文件：

ui_input_event.h

---
*2026-04-22T15:55:02.330Z*