# OH_NativeXComponent_HistoricalPoint

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ive-xcomponent-oh-nativexcomponent-historicalpoint`

**DocID**: `828928c2d3504aa09a0616d702d3c454`

**NodeID**: `00020177579621619729657e1ee4eed4`

---

OH_NativeXComponent_HistoricalPoint

typedef struct {...} OH_NativeXComponent_HistoricalPoint

概述

历史接触点

起始版本：
 10

相关模块：

OH_NativeXComponent Native XComponent

所在头文件：

native_interface_xcomponent.h

汇总

[h2]成员变量

名称

描述

int32_t id

手指的唯一标识符。

float screenX

触摸点相对于XComponent所在应用窗口左上角的x坐标。

float screenY

触摸点相对于XComponent所在应用窗口左上角的y坐标。

float x

触摸点相对于XComponent组件左边缘的x坐标。

float y

触摸点相对于XComponent组件上边缘的y坐标。

OH_NativeXComponent_TouchEventType
 type

触摸事件的触摸类型。

double size

指垫和屏幕之间的接触面积。

float force

当前触摸事件的压力。

int64_t timeStamp

当前触摸事件的时间戳。触发事件时距离系统启动的时间间隔，单位纳秒。

float titlX

平面X-Y上的投影与当前触摸事件的Z轴之间的角度。

float titlY

当前触摸事件在平面Y-Z和轴Z上的投影之间的角度。

OH_NativeXComponent_TouchEvent_SourceTool
 sourceTool

当前触摸事件的源工具。

---
*2026-04-22T15:53:58.620Z*