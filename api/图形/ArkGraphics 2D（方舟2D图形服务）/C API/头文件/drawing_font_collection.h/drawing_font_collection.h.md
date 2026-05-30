# drawing_font_collection.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-font-collection-h`

**DocID**: `98bd255e6dce4a29b2e0065672572a45`

**NodeID**: `000201775795874920132eeb2191176e`

---

drawing_font_collection.h

概述

定义绘制模块中与字体集合相关的函数。

引用文件：
 <native_drawing/drawing_font_collection.h>

库：
 libnative_drawing.so

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 8

相关模块：

Drawing

汇总

[h2]函数

名称

描述

OH_Drawing_FontCollection* OH_Drawing_CreateFontCollection(void)

创建字体集对象
OH_Drawing_FontCollection
。

void OH_Drawing_DestroyFontCollection(OH_Drawing_FontCollection* fontCollection)

释放被字体集对象占据的内存。

void OH_Drawing_DisableFontCollectionFallback(OH_Drawing_FontCollection* fontCollection)

禁用系统字体。

void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)

禁用系统字体。

OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)

创建可共享的字体集对象
OH_Drawing_FontCollection
。

void OH_Drawing_ClearFontCaches(OH_Drawing_FontCollection* fontCollection)

清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。

OH_Drawing_FontCollection* OH_Drawing_GetFontCollectionGlobalInstance(void)

获取全局字体集对象
OH_Drawing_FontCollection
，可感知主题字信息，禁止释放该对象。

函数说明

[h2]OH_Drawing_CreateFontCollection()

OH_Drawing_FontCollection* OH_Drawing_CreateFontCollection(void)

描述

创建字体集对象
OH_Drawing_FontCollection
。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 8

返回：

类型

说明

OH_Drawing_FontCollection
*

指向创建的字体集对象的指针。该函数创建的字体集指针对象OH_Drawing_FontCollection只能被一个
OH_Drawing_TypographyCreate
对象使用，无法被多个OH_Drawing_TypographyCreate对象共享使用。如需在多个OH_Drawing_TypographyCreate对象间共享同一个OH_Drawing_FontCollection，请使用
OH_Drawing_CreateSharedFontCollection
函数创建OH_Drawing_FontCollection对象。

[h2]OH_Drawing_DestroyFontCollection()

void OH_Drawing_DestroyFontCollection(OH_Drawing_FontCollection* fontCollection)

描述

释放被字体集对象占据的内存。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 8

参数：

参数项

描述

OH_Drawing_FontCollection
* fontCollection

指向字体集对象的指针。

[h2]OH_Drawing_DisableFontCollectionFallback()

void OH_Drawing_DisableFontCollectionFallback(OH_Drawing_FontCollection* fontCollection)

描述

禁用系统字体。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

废弃版本：
 18

替代接口：

OH_Drawing_DisableFontCollectionSystemFont()

参数：

参数项

描述

OH_Drawing_FontCollection
* fontCollection

指向字体集对象
OH_Drawing_FontCollection
的指针。

[h2]OH_Drawing_DisableFontCollectionSystemFont()

void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)

描述

禁用系统字体。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

OH_Drawing_FontCollection
* fontCollection

指向字体集对象
OH_Drawing_FontCollection
的指针。

[h2]OH_Drawing_CreateSharedFontCollection()

OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)

描述

创建可共享的字体集对象
OH_Drawing_FontCollection
。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

返回：

类型

说明

OH_Drawing_FontCollection
*

指向创建的字体集对象的指针。

[h2]OH_Drawing_ClearFontCaches()

void OH_Drawing_ClearFontCaches(OH_Drawing_FontCollection* fontCollection)

描述

清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

OH_Drawing_FontCollection
* fontCollection

指向字体集对象
OH_Drawing_FontCollection
的指针。

[h2]OH_Drawing_GetFontCollectionGlobalInstance()

OH_Drawing_FontCollection* OH_Drawing_GetFontCollectionGlobalInstance(void)

描述

获取全局字体集对象
OH_Drawing_FontCollection
，可感知主题字信息，禁止释放该对象。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 14

返回：

类型

说明

OH_Drawing_FontCollection
*

指向全局字体集对象的指针。

---
*2026-04-22T15:54:00.035Z*