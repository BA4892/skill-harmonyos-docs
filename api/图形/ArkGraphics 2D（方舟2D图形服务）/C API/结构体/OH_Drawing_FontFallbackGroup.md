# OH_Drawing_FontFallbackGroup

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-fontfallbackgroup`

**DocID**: `58adcf9d82144decb0d2279679c7b9cd`

**NodeID**: `00020177579587492014927a14af2536`

---

OH_Drawing_FontFallbackGroup

typedef struct OH_Drawing_FontFallbackGroup {...} OH_Drawing_FontFallbackGroup

概述

备用字体集信息结构体。

起始版本：
 12

相关模块：

Drawing

所在头文件：

drawing_text_typography.h

汇总

[h2]成员变量

名称

描述

char* groupName

备用字体集所对应的字体集名称，如果值为空，表示可以使用备用字体集列表集所有的字体。

size_t fallbackInfoSize

备用字体集数量。

OH_Drawing_FontFallbackInfo
* fallbackInfoSet

备用字体字体集列表。

---
*2026-04-22T15:55:03.906Z*