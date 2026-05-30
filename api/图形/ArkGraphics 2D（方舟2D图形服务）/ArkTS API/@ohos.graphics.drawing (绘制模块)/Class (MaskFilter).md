# Class (MaskFilter)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-graphics-drawing-maskfilter`

**DocID**: `63df357c4f0d4d2b8f0a4ea83ec78fa6`

**NodeID**: `00020177579587492011394ca5687349`

---

Class (MaskFilter)

蒙版滤镜对象。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Class首批接口从API version 12开始支持。

本模块使用屏幕物理像素单位px。

本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

导入模块

import { drawing } from '@kit.ArkGraphics2D';

createBlurMaskFilter
12+

static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter

创建具有模糊效果的蒙版滤镜。

系统能力：
 SystemCapability.Graphics.Drawing

参数：

参数名

类型

必填

说明

blurType

BlurType

是

模糊类型。

sigma

number

是

高斯模糊的标准偏差，必须为大于0的浮点数。

返回值：

类型

说明

MaskFilter

返回创建的蒙版滤镜对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

Parameter error.Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types;3.Parameter verification failed.

示例：

import { RenderNode } from '@kit.ArkUI';
import { drawing } from '@kit.ArkGraphics2D';

class DrawingRenderNode extends RenderNode {
 draw(context : DrawContext) {
 const canvas = context.canvas;
 let maskFilter = drawing.MaskFilter.createBlurMaskFilter(drawing.BlurType.OUTER, 10);
 }
}

---
*2026-04-22T15:55:03.822Z*