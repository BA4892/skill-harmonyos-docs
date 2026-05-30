# OHExtDataHandle

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-nativewindow-ohextdatahandle`

**DocID**: `59b2bb0b092f416db65ff125ec8f54cd`

**NodeID**: `000201775795874920195be0f3f02876`

---

OHExtDataHandle

typedef struct OHExtDataHandle {...} OHExtDataHandle

概述

扩展数据句柄结构体定义。

起始版本：
 9

废弃版本：
 从API version 10开始废弃，不再提供替代接口。

相关模块：

NativeWindow

所在头文件：

external_window.h

汇总

[h2]成员变量

名称

描述

int32_t fd

句柄 Fd，-1代表不支持。

uint32_t reserveInts

Reserve数组的个数。

int32_t reserve[0]

Reserve数组。

---
*2026-04-22T15:54:00.092Z*