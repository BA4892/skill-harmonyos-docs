# WindowManager_WindowSnapshotConfig

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `i-windowmanager-windowmanager-windowsnapshotconfig`

**DocID**: `021d137fddad494eafd049ebdfae3910`

**NodeID**: `0002017757962161973795b1d148ed70`

---

WindowManager_WindowSnapshotConfig

typedef struct {...} WindowManager_WindowSnapshotConfig

概述

主窗口截图的配置项。

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

bool useCache

是否使用主窗口的已有截图。默认值为true。 true表示使用主窗口的已有截图，若主窗口无保存的截图，则使用主窗口的最新截图。false表示使用主窗口的最新截图。

---
*2026-04-22T15:53:58.669Z*