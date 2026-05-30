# ArkUI_ExpectedFrameRateRange

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `pi-arkui-nativemodule-arkui-expectedframeraterange`

**DocID**: `657bbf0aed41412a834b518c2026ee83`

**NodeID**: `0002017757962161970111455c33730e`

---

ArkUI_ExpectedFrameRateRange

typedef struct {...} ArkUI_ExpectedFrameRateRange

概述

设置动画的期望帧率。

起始版本：
 12

相关模块：

ArkUI_NativeModule

所在头文件：

native_animate.h

汇总

[h2]成员变量

名称

描述

uint32_t min

期望的最小帧率，单位为帧/秒（fps）。

uint32_t max

期望的最大帧率，单位为帧/秒（fps）。

uint32_t expected

期望的最优帧率，单位为帧/秒（fps）。

---
*2026-04-22T15:55:02.224Z*