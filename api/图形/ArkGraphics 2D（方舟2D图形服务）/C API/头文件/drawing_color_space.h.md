# drawing_color_space.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-color-space-h`

**DocID**: `0e4d2ffba23f4843858b51d546ebf6b3`

**NodeID**: `000201775795874920122d5e10d89f13`

---

drawing_color_space.h

概述

文件中定义了与颜色空间相关的功能函数。

引用文件：
 <native_drawing/drawing_color_space.h>

库：
 libnative_drawing.so

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

相关模块：

Drawing

汇总

[h2]函数

名称

描述

OH_Drawing_ColorSpace* OH_Drawing_ColorSpaceCreateSrgb(void)

创建一个标准颜色空间。

OH_Drawing_ColorSpace* OH_Drawing_ColorSpaceCreateSrgbLinear(void)

创建一个Gamma 1.0空间上的颜色空间。

void OH_Drawing_ColorSpaceDestroy(OH_Drawing_ColorSpace* colorSpace)

销毁颜色空间对象，并回收该对象占用内存。

函数说明

[h2]OH_Drawing_ColorSpaceCreateSrgb()

OH_Drawing_ColorSpace* OH_Drawing_ColorSpaceCreateSrgb(void)

描述

创建一个标准颜色空间。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

返回：

类型

说明

OH_Drawing_ColorSpace
*

函数返回一个指针，指针指向创建的颜色空间对象
OH_Drawing_ColorSpace
。

[h2]OH_Drawing_ColorSpaceCreateSrgbLinear()

OH_Drawing_ColorSpace* OH_Drawing_ColorSpaceCreateSrgbLinear(void)

描述

创建一个Gamma 1.0空间上的颜色空间。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

返回：

类型

说明

OH_Drawing_ColorSpace
*

函数返回一个指针，指针指向创建的颜色空间对象
OH_Drawing_ColorSpace
。

[h2]OH_Drawing_ColorSpaceDestroy()

void OH_Drawing_ColorSpaceDestroy(OH_Drawing_ColorSpace* colorSpace)

描述

销毁颜色空间对象，并回收该对象占用的内存。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

OH_Drawing_ColorSpace
* colorSpace

指向颜色空间对象
OH_Drawing_ColorSpace
的指针。

---
*2026-04-22T15:55:03.853Z*