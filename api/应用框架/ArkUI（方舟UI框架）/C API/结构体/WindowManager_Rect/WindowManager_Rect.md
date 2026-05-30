# WindowManager_Rect

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-windowmanager-rect`

**DocID**: `65f3aab78d6f472d8b3ece7f512181f9`

**NodeID**: `0002017757962161973745f93452a604`

---

WindowManager_Rect

typedef struct {...} WindowManager_Rect

概述

定义窗口矩形结构体，包含窗口位置和宽高信息。

起始版本：
 15

相关模块：

WindowManager

所在头文件：

oh_window_comm.h

汇总

[h2]成员变量

名称

描述

int32_t posX

窗口的x轴，单位为px，该参数为整数。

int32_t posY

窗口的y轴，单位为px，该参数为整数。

uint32_t width

窗口的宽度，单位为px，该参数为整数。

uint32_t height

窗口的高度，单位为px，该参数为整数。

---
*2026-04-22T15:53:58.665Z*