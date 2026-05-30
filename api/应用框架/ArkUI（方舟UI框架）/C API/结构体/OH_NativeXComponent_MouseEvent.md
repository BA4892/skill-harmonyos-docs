# OH_NativeXComponent_MouseEvent

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `t-native-xcomponent-oh-nativexcomponent-mouseevent`

**DocID**: `4566bbb9c28040ff840fc990311af839`

**NodeID**: `0002017757962161972999d0190574cb`

---

OH_NativeXComponent_MouseEvent

typedef struct {...} OH_NativeXComponent_MouseEvent

概述

鼠标事件。

起始版本：
 9

相关模块：

OH_NativeXComponent Native XComponent

所在头文件：

native_interface_xcomponent.h

汇总

[h2]成员变量

名称

描述

float x

点击触点相对于当前组件左上角的x轴坐标。单位：vp。

float y

点击触点相对于当前组件左上角的y轴坐标。单位：vp。

float screenX

点击触点相对于XComponent所在应用屏幕左上角的x轴坐标。单位：vp。

float screenY

点击触点相对于XComponent所在应用屏幕左上角的y轴坐标。单位：vp。

int64_t timestamp

当前鼠标事件的时间戳。触发事件时距离系统启动的时间间隔，单位纳秒。

OH_NativeXComponent_MouseEventAction
 action

当前鼠标事件动作。

OH_NativeXComponent_MouseEventButton
 button

鼠标事件按键。

---
*2026-04-22T15:55:02.257Z*