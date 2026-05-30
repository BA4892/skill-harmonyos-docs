# DisplaySoloist_ExpectedRateRange

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ivedisplaysoloist-displaysoloist-expectedraterange`

**DocID**: `816c5e3da1614a9891c53daad2af88d7`

**NodeID**: `000201775795874920120c639215f777`

---

DisplaySoloist_ExpectedRateRange

typedef struct {...} DisplaySoloist_ExpectedRateRange

概述

提供期望帧率范围结构体。

起始版本：
 12

相关模块：

NativeDisplaySoloist

所在头文件：

native_display_soloist.h

汇总

[h2]成员变量

名称

描述

int32_t min

期望帧率范围最小值，取值范围为[0,120]。

int32_t max

期望帧率范围最大值，取值范围为[0,120]。

int32_t expected

期望帧率，取值范围为[0,120]。

---
*2026-04-22T15:55:03.899Z*