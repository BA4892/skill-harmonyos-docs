# Hid_EventProperties

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hidddk-hid-eventproperties`

**DocID**: `4f268244b0b046828bb7e838db822f96`

**NodeID**: `0002017757963416849868cee15ba3e8`

---

Hid_EventProperties

typedef struct Hid_EventProperties {...} Hid_EventProperties

概述

设备关注事件属性。

起始版本：
 11

相关模块：

HidDdk

所在头文件：

hid_ddk_types.h

汇总

[h2]成员变量

名称

描述

struct Hid_EventTypeArray hidEventTypes

事件类型属性编码数组

struct Hid_KeyCodeArray hidKeys

键值属性编码数组

struct Hid_AbsAxesArray hidAbs

绝对坐标属性编码数组

struct Hid_RelAxesArray hidRelBits

相对坐标属性编码数组

struct Hid_MscEventArray hidMiscellaneous

其它特殊事件属性编码数组

int32_t hidAbsMax[64]

绝对坐标属性最大值

int32_t hidAbsMin[64]

绝对坐标属性最小值

int32_t hidAbsFuzz[64]

绝对坐标属性模糊值

int32_t hidAbsFlat[64]

绝对坐标属性固定值

---
*2026-04-22T15:55:03.263Z*