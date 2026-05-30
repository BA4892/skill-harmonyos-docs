# @ohos.graphics.sendableColorSpaceManager (可共享的色彩管理)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-sendablecolorspacemanager`

**DocID**: `0f56d7249b1d43d896f26bf459a73c94`

**NodeID**: `0002017757958749200540f06bc375a4`

---

@ohos.graphics.sendableColorSpaceManager (可共享的色彩管理)

本模块提供管理抽象化色域对象的一些基础能力，包括可共享的色彩管理的创建与可共享的色域基础属性的获取等。

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { sendableColorSpaceManager } from '@kit.ArkGraphics2D';

ISendable

type ISendable = lang.ISendable

ISendable是所有Sendable类型（除null和undefined）的父类型。自身没有任何必须的方法和属性。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

类型

说明

lang.ISendable

所有Sendable类型的父类型。

sendableColorSpaceManager.create

create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager

创建标准可共享的色彩管理。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

参数：

参数名

类型

必填

说明

colorSpaceName

colorSpaceManager.ColorSpace

是

标准色域类型枚举值。

UNKNOWN与CUSTOM不可用于直接创建色域对象。

返回值：

类型

说明

ColorSpaceManager

返回当前创建的可共享的色彩管理实例。

该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考
Sendable使用场景
。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
色彩管理错误码
。

错误码ID

错误信息

401

Parameter error. Possible cause: 1.Incorrect parameter type. 2.Parameter verification failed.

18600001

The parameter value is abnormal.

示例：

import { colorSpaceManager, sendableColorSpaceManager } from '@kit.ArkGraphics2D';
let colorSpace: sendableColorSpaceManager.ColorSpaceManager;
colorSpace = sendableColorSpaceManager.create(colorSpaceManager.ColorSpace.SRGB);

sendableColorSpaceManager.create

create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager

创建用户自定义可共享的色彩管理实例。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

参数：

参数名

类型

必填

说明

primaries

colorSpaceManager.ColorSpacePrimaries

是

色域标准三原色。

gamma

number

是

色域gamma值，取值为大于0的浮点数。

返回值：

类型

说明

ColorSpaceManager

返回当前创建的可共享的色彩管理实例。

色域类型定义为
colorSpaceManager.ColorSpace
枚举值CUSTOM。

该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考
Sendable使用场景
。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
色彩管理错误码
。

错误码ID

错误信息

401

Parameter error. Possible cause: 1.Incorrect parameter type. 2.Parameter verification failed.

18600001

The parameter value is abnormal.

示例：

import { colorSpaceManager, sendableColorSpaceManager } from '@kit.ArkGraphics2D';
let colorSpace: sendableColorSpaceManager.ColorSpaceManager;
let primaries: colorSpaceManager.ColorSpacePrimaries = {
 redX: 0.1,
 redY: 0.1,
 greenX: 0.2,
 greenY: 0.2,
 blueX: 0.3,
 blueY: 0.3,
 whitePointX: 0.4,
 whitePointY: 0.4
};
let gamma: number = 2.2;
colorSpace = sendableColorSpaceManager.create(primaries, gamma);

ColorSpaceManager

当前可共享的色彩管理实例。

下列API示例中都需先使用
create()
获取到ColorSpaceManager实例，再通过此实例调用对应方法。

[h2]getColorSpaceName

getColorSpaceName(): colorSpaceManager.ColorSpace

获取色域类型。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

返回值：

类型

说明

colorSpaceManager.ColorSpace

返回色域类型枚举值。

错误码：

以下错误码的详细介绍请参见
色彩管理错误码
。

错误码ID

错误信息

18600001

The parameter value is abnormal.

示例：

let spaceName: colorSpaceManager.ColorSpace = colorSpace.getColorSpaceName();

[h2]getWhitePoint

getWhitePoint(): collections.Array<number>

获取色域白点值。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

返回值：

类型

说明

collections.Array<number>

返回色域白点值[x, y]。

错误码：

以下错误码的详细介绍请参见
色彩管理错误码
。

错误码ID

错误信息

18600001

The parameter value is abnormal.

示例：

import { collections } from '@kit.ArkTS';
let point: collections.Array<number> = colorSpace.getWhitePoint();

[h2]getGamma

getGamma(): number

获取色域gamma值。

系统能力：
 SystemCapability.Graphic.Graphic2D.ColorManager.Core

返回值：

类型

说明

number

返回色域gamma值。

错误码：

以下错误码的详细介绍请参见
色彩管理错误码
。

错误码ID

错误信息

18600001

The parameter value is abnormal.

示例：

let gamma: number = colorSpace.getGamma();

---
*2026-04-22T15:55:03.814Z*