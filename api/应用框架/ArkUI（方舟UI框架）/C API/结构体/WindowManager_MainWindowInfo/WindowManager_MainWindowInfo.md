# WindowManager_MainWindowInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-windowmanager-windowmanager-mainwindowinfo`

**DocID**: `218de2b186c94996ac23d090512dc6e5`

**NodeID**: `000201775796216197378b1669f3bf70`

---

WindowManager_MainWindowInfo

typedef struct {...} WindowManager_MainWindowInfo

概述

主窗口信息。

起始版本：
 21

相关模块：

WindowManager

所在头文件：

oh_window_comm.h

汇总

[h2]成员变量

名称

描述

uint64_t displayId

主窗口所在的屏幕ID。

int32_t windowId

主窗口ID。

bool showing

主窗口的前后台状态。true表示主窗口在前台，false表示主窗口不在前台。

const char* label

主窗口任务名称。

---
*2026-04-22T15:53:58.668Z*