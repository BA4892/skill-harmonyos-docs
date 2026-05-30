# drawing_pixel_map.h

> **分区**: API参考  |  **Slug**: `capi-drawing-pixel-map-h`  |  **DocID**: `b61de60f92804b2e8d5118be2a0523ee`

---

# drawing_pixel_map.h

  #### 概述

声明与绘图模块中的像素图对象相关的函数。

 **引用文件：** <native_drawing/drawing_pixel_map.h>

 **库：** libnative_drawing.so

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **相关模块：** [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-) NativePixelMap_ 声明由图像框架定义的像素图对象。  [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative) OH_PixelmapNative 声明由图像框架定义的像素图对象。       #### [h2]函数

 名称 描述   [OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromNativePixelMap(NativePixelMap_* nativePixelMap)](#oh_drawing_pixelmapgetfromnativepixelmap) 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，需调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄露问题。  [OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromOhPixelMapNative(OH_PixelmapNative* pixelmapNative)](#oh_drawing_pixelmapgetfromohpixelmapnative) 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，需调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄露问题。  [void OH_Drawing_PixelMapDissolve(OH_Drawing_PixelMap* pixelMap)](#oh_drawing_pixelmapdissolve) 解除本模块定义的像素图对象和图像框架定义的像素图对象之间的关系，该关系通过调用[OH_Drawing_PixelMapGetFromNativePixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-pixel-map-h#oh_drawing_pixelmapgetfromnativepixelmap)或[OH_Drawing_PixelMapGetFromOhPixelMapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-pixel-map-h#oh_drawing_pixelmapgetfromohpixelmapnative)建立。       #### 函数说明

  #### [h2]OH_Drawing_PixelMapGetFromNativePixelMap()

OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromNativePixelMap(NativePixelMap_* nativePixelMap) **描述**

 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，需调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄露问题。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **参数：**

  参数项 描述   [NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-)* nativePixelMap 指向图像框架定义的像素图对象[NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-)的指针。     **返回：**

  类型 说明   [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* 函数会返回一个指向本模块定义的像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。如果对象返回NULL，表示创建失败；可能的原因是NativePixelMap_为NULL。       #### [h2]OH_Drawing_PixelMapGetFromOhPixelMapNative()

OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromOhPixelMapNative(OH_PixelmapNative* pixelmapNative) **描述**

 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，需调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄露问题。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative)* pixelmapNative 指向图像框架定义的像素图对象[OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative)的指针。     **返回：**

  类型 说明   [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* 函数会返回一个指向本模块定义的像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。如果对象返回NULL，表示创建失败；可能的原因是OH_PixelmapNative为NULL。       #### [h2]OH_Drawing_PixelMapDissolve()

void OH_Drawing_PixelMapDissolve(OH_Drawing_PixelMap* pixelMap) **描述**

 解除本模块定义的像素图对象和图像框架定义的像素图对象之间的关系，该关系通过调用[OH_Drawing_PixelMapGetFromNativePixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-pixel-map-h#oh_drawing_pixelmapgetfromnativepixelmap)或[OH_Drawing_PixelMapGetFromOhPixelMapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-pixel-map-h#oh_drawing_pixelmapgetfromohpixelmapnative)建立。

 **系统能力：** SystemCapability.Graphic.Graphic2D.NativeDrawing

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* pixelMap 指向像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。

---
*Updated: 2026-04-22 06:40:34*
