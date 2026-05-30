# OH_Drawing_FontConfigInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-fontconfiginfo`

**DocID**: `c0f522ff91b4426c967e5918ce491aa0`

**NodeID**: `000201775795874920161a56bd87d258`

---

OH_Drawing_FontConfigInfo

typedef struct OH_Drawing_FontConfigInfo {...} OH_Drawing_FontConfigInfo

概述

系统字体配置信息结构体。

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

size_t fontDirSize

系统字体文件路径数量。

size_t fontGenericInfoSize

通用字体集列表数量。

size_t fallbackGroupSize

备用字体集列表数量。

char** fontDirSet

系统字体文件路径列表。

OH_Drawing_FontGenericInfo
* fontGenericInfoSet

通用字体集列表。

OH_Drawing_FontFallbackGroup
* fallbackGroupSet

备用字体集列表。

---
*2026-04-22T15:55:03.909Z*