# OH_AVScreenCaptureHighlightConfig

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `-avscreencapture-oh-avscreencapturehighlightconfig`

**DocID**: `523180fbd13447188e0cb387479dbca7`

**NodeID**: `000201775795910761383d969b245905`

---

OH_AVScreenCaptureHighlightConfig

typedef struct OH_AVScreenCaptureHighlightConfig {...} OH_AVScreenCaptureHighlightConfig

概述

表示高亮边框的样式，包括高亮边框的模式、边框宽度和边框颜色。

起始版本：
 22

相关模块：

AVScreenCapture

所在头文件：

native_avscreen_capture_base.h

汇总

[h2]成员变量

名称

描述

OH_ScreenCaptureHighlightMode
 mode

高亮边框的模式，不设置默认为方形全包边框。

uint32_t lineThickness

高亮边框的宽度，不设置默认不显示线宽，宽度有效值范围在1vp-8vp。

uint32_t lineColor

高亮边框的颜色，不设置默认为黑色，颜色有效值为RGB（0-0xffffff）格式和非透明的ARGB（0xff000000-0xffffffff）格式。

---
*2026-04-22T15:55:03.748Z*