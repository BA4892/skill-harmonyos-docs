# drawing_image_filter.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-image-filter-h`

**DocID**: `ec74b06c147b4e3abe27dd34f62a7fd2`

**NodeID**: `00020177579587492014639b05941c9e`

---

drawing_image_filter.h

概述

声明与绘图模块中的图像滤波器对象相关的函数。

引用文件：
 <native_drawing/drawing_image_filter.h>

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

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateBlur(float sigmaX, float sigmaY, OH_Drawing_TileMode tileMode,OH_Drawing_ImageFilter* imageFilter)

创建具有模糊效果的图像滤波器。

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateBlurWithCrop(float sigmaX, float sigmaY,OH_Drawing_TileMode tileMode, OH_Drawing_ImageFilter* input, const OH_Drawing_Rect* rect)

创建具有模糊效果的图像滤波器。

 支持传入裁剪矩形，用于限制模糊效果仅在图像的指定矩形区域内生效。​

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateFromColorFilter(OH_Drawing_ColorFilter* colorFilter,OH_Drawing_ImageFilter* imageFilter)

创建具有颜色变换效果的图像滤波器。本接口会产生错误码，可以通过
OH_Drawing_ErrorCodeGet
查看错误码的取值。colorFilter为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateOffset(float x, float y, OH_Drawing_ImageFilter* imageFilter)

创建一个偏移滤波器，将输入的滤波器按照指定向量进行平移。

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateFromShaderEffect(OH_Drawing_ShaderEffect* shaderEffect)

基于着色器创建一个图像滤波器。

void OH_Drawing_ImageFilterDestroy(OH_Drawing_ImageFilter* imageFilter)

销毁图像滤波器对象并回收该对象占有内存。

函数说明

[h2]OH_Drawing_ImageFilterCreateBlur()

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateBlur(float sigmaX, float sigmaY, OH_Drawing_TileMode tileMode,OH_Drawing_ImageFilter* imageFilter)

描述

创建具有模糊效果的图像滤波器。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

float sigmaX

表示沿x轴方向上高斯模糊的标准差，必须大于0。

float sigmaY

表示沿y轴方向上高斯模糊的标准差，必须大于0。

OH_Drawing_TileMode
 tileMode

图像滤波器效果平铺模式类型，支持可选的具体模式可见
OH_Drawing_TileMode
枚举。

OH_Drawing_ImageFilter
* imageFilter

表示将要和当前图像滤波器叠加的输入滤波器, 如果为NULL，表示直接将当前图像滤波器作用于原始图像。

返回：

类型

说明

OH_Drawing_ImageFilter
*

函数会返回一个指针，指针指向创建的图像滤波器对象
OH_Drawing_ImageFilter
。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空。

[h2]OH_Drawing_ImageFilterCreateBlurWithCrop()

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateBlurWithCrop(float sigmaX, float sigmaY, OH_Drawing_TileMode tileMode, OH_Drawing_ImageFilter* input, const OH_Drawing_Rect* rect)

描述

创建具有模糊效果的图像滤波器。

支持传入裁剪矩形，用于限制模糊效果仅在图像的指定矩形区域内生效。​

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 20

参数：

参数项

描述

float sigmaX

表示沿x轴方向上高斯模糊的标准差，必须大于0.0。

float sigmaY

表示沿y轴方向上高斯模糊的标准差，必须大于0.0。

OH_Drawing_TileMode
 tileMode

图像滤波器效果平铺模式类型，支持可选的具体模式可见
OH_Drawing_TileMode
枚举。

OH_Drawing_ImageFilter
* input

表示将要和当前图像滤波器叠加的输入滤波器, 如果为NULL，表示直接将当前图像滤波器作用于原始图像。

const OH_Drawing_Rect
* rect

表示裁剪的矩形区域，如果为NULL，表示直接将模糊效果作用于整个图像。

返回：

类型

说明

OH_Drawing_ImageFilter*

函数会返回一个指针，指针指向创建的图像滤波器对象
OH_Drawing_ImageFilter
。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空。

[h2]OH_Drawing_ImageFilterCreateFromColorFilter()

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateFromColorFilter(OH_Drawing_ColorFilter* colorFilter,OH_Drawing_ImageFilter* imageFilter)

描述

创建具有颜色变换效果的图像滤波器。本接口会产生错误码，可以通过
OH_Drawing_ErrorCodeGet
查看错误码的取值。colorFilter为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

OH_Drawing_ColorFilter
* colorFilter

指向具有颜色变换效果的颜色滤波器对象
OH_Drawing_ColorFilter
。

OH_Drawing_ImageFilter
* imageFilter

表示将要和当前图像滤波器叠加的输入滤波器, 如果为NULL，表示直接将当前图像滤波器作用于原始图像。

返回：

类型

说明

OH_Drawing_ImageFilter
*

函数会返回一个指针，指针指向创建的图像滤波器对象
OH_Drawing_ImageFilter
。如果对象返回NULL，表示创建失败；可能的原因是可用内存为空，或者是colorFilter为NULL。

[h2]OH_Drawing_ImageFilterCreateOffset()

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateOffset(float x, float y, OH_Drawing_ImageFilter* imageFilter)

描述

创建一个偏移滤波器，将输入的滤波器按照指定向量进行平移。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 20

参数：

参数项

描述

float x

水平方向的平移距离。

float y

竖直方向的平移距离。

OH_Drawing_ImageFilter
* imageFilter

需进行平移的滤波器，如果为空，则将无滤波效果的绘制结果进行平移。

返回：

类型

说明

OH_Drawing_ImageFilter
*

函数会返回一个指针，指针指向创建的图像滤波器对象
OH_Drawing_ImageFilter
。如果对象返回NULL，表示创建失败，可能原因为可用内存为空。

[h2]OH_Drawing_ImageFilterCreateFromShaderEffect()

OH_Drawing_ImageFilter* OH_Drawing_ImageFilterCreateFromShaderEffect(OH_Drawing_ShaderEffect* shaderEffect)

描述

基于着色器创建一个图像滤波器。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 20

参数：

参数项

描述

OH_Drawing_ShaderEffect
* shaderEffect

表示要应用于图像的着色器效果。

返回：

类型

说明

OH_Drawing_ImageFilter
*

函数会返回一个指针，指针指向创建的图像滤波器对象
OH_Drawing_ImageFilter
。如果结果返回NULL，表示创建失败，可能原因为可用内存为空。

[h2]OH_Drawing_ImageFilterDestroy()

void OH_Drawing_ImageFilterDestroy(OH_Drawing_ImageFilter* imageFilter)

描述

销毁图像滤波器对象并回收该对象占有内存。

系统能力：
 SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本：
 12

参数：

参数项

描述

OH_Drawing_ImageFilter
* imageFilter

指向图像滤波器对象
OH_Drawing_ImageFilter
的指针。

---
*2026-04-22T15:55:03.859Z*