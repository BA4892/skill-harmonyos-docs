# NativeDisplayManager_CutoutInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-nativedisplaymanager-cutoutinfo`

**DocID**: `0eaec8e4719a465caca697f92ff0c58c`

**NodeID**: `0002017757962161973825db0a3fa480`

---

NativeDisplayManager_CutoutInfo

typedef struct {...} NativeDisplayManager_CutoutInfo

概述

挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。

起始版本：
 12

相关模块：

OH_DisplayManager

所在头文件：

oh_display_info.h

汇总

[h2]成员变量

名称

描述

int32_t boundingRectsLength

挖孔屏、刘海屏不可用屏幕区域长度。

NativeDisplayManager_Rect
* boundingRects

挖孔屏、刘海屏等区域的边界矩形。

NativeDisplayManager_WaterfallDisplayAreaRects
 waterfallDisplayAreaRects

瀑布屏曲面部分显示区域。

---
*2026-04-22T15:55:02.311Z*