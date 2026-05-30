# OH_Drawing_StrutStyle

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-strutstyle`

**DocID**: `806b037463fd4323babb9bcec96d257a`

**NodeID**: `000201775795874920169b4f252dc100`

---

OH_Drawing_StrutStyle

typedef struct OH_Drawing_StrutStyle {...} OH_Drawing_StrutStyle

概述

用于描述支柱样式的结构体。支柱样式用于控制绘制文本时行之间的间距、基线对齐方式以及其他与行高相关的属性。

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

OH_Drawing_FontWeight
 weight

计算支柱时使用的字体粗细。

OH_Drawing_FontStyle
 style

计算支柱时使用的字体格式。

double size

逻辑像素中的上升加下降的大小。

double heightScale

行高缩放系数。

bool heightOverride

是否启用高度覆盖。true表示启用，false表示不启用。

bool halfLeading

半行距是否启用。true表示启用，false表示不启用。

double leading

以自定义行距应用于支柱的行距。

bool forceStrutHeight

是否所有行都将使用支柱的高度。true表示使用，false表示不使用。

size_t familiesSize

字体家族的数量。

char** families

计算支柱时使用的字体名称。

---
*2026-04-22T15:55:03.911Z*