# ArkUI_CoastingAxisEvent

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-nativemodule-arkui-coastingaxisevent`

**DocID**: `1e733d4385c14e25953bd9d41afa177d`

**NodeID**: `000201775796216197406176d43ec270`

---

ArkUI_CoastingAxisEvent

typedef struct ArkUI_CoastingAxisEvent ArkUI_CoastingAxisEvent

概述

定义惯性滚动轴事件。

当用户在触控板上用双指滑动时，系统会根据手指抬起时的速度，按照一定的衰减曲线构造滑动事件。可以监听此类事件，以便在常规轴事件之后立即处理抛滑效果。

仅当用户在触控板上双指抛滑，且指针位置下存在通过
registerNodeEvent
注册了
NODE_ON_COASTING_AXIS_EVENT
事件的组件时，才能接收到此事件。

起始版本：
 22

相关模块：

ArkUI_EventModule

所在头文件：

ui_input_event.h

---
*2026-04-22T15:55:02.327Z*