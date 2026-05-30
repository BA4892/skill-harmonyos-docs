# Region

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-nativewindow-region`

**DocID**: `c412054d74e44e5fb47905f2bd46e024`

**NodeID**: `00020177579587492018825fcdbcf280`

---

Region

typedef struct {...} Region

概述

表示本地窗口OHNativeWindow需要更新内容的矩形区域（脏区）。

起始版本：
 8

相关模块：

NativeWindow

所在头文件：

external_window.h

汇总

[h2]成员变量

名称

描述

* rects

如果rects是空指针nullptr，默认Buffer大小为脏区。

int32_t rectNumber

如果rectNumber为0，默认Buffer大小为脏区。

---
*2026-04-22T15:54:00.090Z*