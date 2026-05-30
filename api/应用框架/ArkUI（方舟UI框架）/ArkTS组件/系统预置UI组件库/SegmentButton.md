# SegmentButton

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ohos-arkui-advanced-segmentbutton`

**DocID**: `0eefd550219244be8a45f71f2eabe1dc`

**NodeID**: `000201775796216197131aa341a4cf25`

---

SegmentButton

分段按钮组件包含页签类分段按钮、胶囊类单选分段按钮和胶囊类多选分段按钮。

该组件从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

导入模块

import { SegmentButton, SegmentButtonOptions, SegmentButtonItemOptionsArray } from '@kit.ArkUI';

子组件

无

属性

不支持
通用属性
。

事件

不支持
通用事件
。

SegmentButton

SegmentButton({ options: SegmentButtonOptions, selectedIndexes: number[], onItemClicked: Callback<number>, maxFontScale: number | Resource })

装饰器类型：
@Component

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

必填

装饰器类型

说明

options

SegmentButtonOptions

是

@ObjectLink

分段按钮选项。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedIndexes

number[]

是

@Link

分段按钮的选中项编号，第一项的编号为0，之后顺序增加。

说明：

selectedIndexes使用
@Link装饰器：父子双向同步
，仅支持有效的按钮编号（第一个按钮编号为0，之后按顺序累加），如没有选中项可传入空数组[]。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

onItemClicked
13+

Callback<number>

否

-

当分段按钮选项被点击时，触发的回调函数接收被点击的选项下标作为参数。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

maxFontScale
14+

number | 
Resource

是

@Prop

分段按钮选项文字的最大字体放大倍数。

取值范围：[1, 2]

当设置的值小于1时，按值为1处理，设置的值大于2时，按值为2处理。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

分段按钮不支持
通用属性
。分段按钮使用当前区域可使用的最大宽度作为组件宽度，并且根据按钮个数平均分配每个按钮宽度；分段按钮高度根据按钮内容（文本及图片）自动适应，其最小高度为28vp。

SegmentButtonOptions

不支持设置字体类型。

分段按钮选项类用于提供初始数据和自定义属性。

装饰器类型：
 @Observed

[h2]属性

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

type

"tab" |"capsule"

否

否

分段按钮组件的类型。

说明：

"tab"：页签类分段按钮，适用于页面或内容区域的切换场景。

"capsule"：胶囊类分段按钮，适用于单选或多选的选择场景。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

multiply

boolean

否

否

分段按钮组件是否可以多选。

true: 可多选；false: 不可多选。页签类分段按钮只支持单选，设置multiply为true不生效。

值为undefined时，分段按钮不支持多选。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

buttons

SegmentButtonItemOptionsArray

否

否

分段按钮组件的按钮信息，包括图标和文本信息。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

fontColor

ResourceColor

否

否

分段按钮组件的按钮未选中态的文本颜色。

值为undefined时，颜色为$r('sys.color.ohos_id_color_text_secondary')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontColor

ResourceColor

否

否

分段按钮组件的按钮选中态的文本颜色。

值为undefined时，type为"tab"时，颜色为$r('sys.color.ohos_id_color_text_primary')。

type为"capsule"时，颜色为$r('sys.color.ohos_id_color_foreground_contrary')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

fontSize

DimensionNoPercentage

否

否

分段按钮组件的按钮未选中态的字体大小，不支持百分比设置。

值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontSize

DimensionNoPercentage

否

否

分段按钮组件的按钮选中态的字体大小，不支持百分比设置。

值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

fontWeight

FontWeight

否

否

分段按钮组件的按钮未选中态的字体粗细。

值为undefined时，字体粗细为FontWeight.Regular。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontWeight

FontWeight

否

否

分段按钮组件的按钮选中态的字体粗细。

值为undefined时，字体粗细为FontWeight.Medium。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

backgroundColor

ResourceColor

否

否

分段按钮组件的背景板颜色。

值为undefined时，背景板颜色为$r('sys.color.ohos_id_color_button_normal')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedBackgroundColor

ResourceColor

否

否

分段按钮组件的按钮选中态背景板颜色。

值为undefined时，type为"tab"时，背景板颜色为$r('sys.color.segment_button_checked_foreground_color')。

type为"capsule"时，背景板颜色为$r('sys.color.ohos_id_color_emphasize')。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

imageSize

SizeOptions

否

否

分段按钮组件的图片尺寸。

值为undefined时，图片尺寸为{ width: 24, height: 24 }。

单位：vp

说明：

imageSize属性对仅图标按钮和图标+文本按钮生效，对仅文字按钮无效果。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

buttonPadding

Padding
 | 
Dimension

否

否

分段按钮组件的按钮内边距。

值为undefined时，仅图标按钮和仅文字按钮内边距：{ top: 4, right: 8, bottom: 4, left: 8 }

图标+文本按钮内边距：{ top: 6, right: 8, bottom: 6, left: 8 }

单位：vp

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

textPadding

Padding
 | 
Dimension

否

否

分段按钮组件的文本内边距。

值为undefined时，文本内边距为0。

单位：vp

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

localizedButtonPadding
12+

LocalizedPadding

否

是

分段按钮组件的按钮内边距。

默认值：

仅图标按钮和仅文字按钮默认值：{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }

图标+文本按钮默认值：{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

localizedTextPadding
12+

LocalizedPadding

否

是

文本内边距。

默认值：0

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

direction
12+

Direction

否

是

分段按钮组件的布局方向。

默认值：Direction.Auto

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

backgroundBlurStyle

BlurStyle

否

否

分段按钮组件的背景模糊材质。

值为undefined时，背景模糊材质为BlurStyle.NONE。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

borderRadiusMode
20+

BorderRadiusMode

否

是

边框圆角模式，用于控制圆角计算方式。

默认值：BorderRadiusMode.DEFAULT

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

backgroundBorderRadius
20+

LengthMetrics

否

是

分段按钮整体容器的边框圆角半径。

说明：

此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。

对于胶囊类多选按钮(type为"capsule"且multiply为true)，此属性不生效，需要用itemBorderRadius配置圆角。

圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。

默认值：$r('sys.float.segmentbutton_container_shape')

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

itemBorderRadius
20+

LengthMetrics

否

是

分段按钮中按钮项的边框圆角半径。

说明：

此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。

对于胶囊类多选按钮(type为"capsule"且multiply为true)，只能控制两端的选项圆角。

圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。

默认值：$r('sys.float.segmentbutton_selected_background_shape')

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

[h2]constructor

constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions)

构造函数。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数

参数名

类型

必填

说明

options

TabSegmentButtonOptions
 | 
CapsuleSegmentButtonOptions

是

页签类或者胶囊类分段按钮信息。

[h2]tab

static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions

创建SegmentButtonOptions类，用于定义页签。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数

参数名

类型

必填

说明

options

TabSegmentButtonConstructionOptions

是

页签类分段按钮信息。

返回值：

类型

说明

SegmentButtonOptions

分段按钮选项。

[h2]capsule

static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions

创建胶囊类的SegmentButtonOptions。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数

参数名

类型

必填

说明

options

CapsuleSegmentButtonConstructionOptions

是

胶囊类分段按钮信息。

返回值：

类型

说明

SegmentButtonOptions

分段按钮选项。

DimensionNoPercentage

type DimensionNoPercentage = PX | VP | FP | LPX | Resource

不支持百分比类型的长度联合类型。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

类型

说明

PX

长度类型，用于描述以px为单位的长度。

VP

长度类型，用于描述以vp为单位的长度。

FP

长度类型，用于描述以fp为单位的长度。

LPX

长度类型，用于描述以lpx为单位的长度。

Resource

资源引用类型，用于设置组件属性的值。

CommonSegmentButtonOptions

定义分段按钮组件的可自定义的属性。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

fontColor

ResourceColor

否

是

按钮未选中态的文本颜色。

默认值：$r('sys.color.ohos_id_color_text_secondary')

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontColor

ResourceColor

否

是

按钮选中态的文本颜色。

默认值：

type为"tab"时，默认值为$r('sys.color.ohos_id_color_text_primary')。

type为"capsule"时，默认值为$r('sys.color.ohos_id_color_foreground_contrary')。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

fontSize

DimensionNoPercentage

否

是

按钮未选中态的字体大小（不支持百分比设置）。

默认值：$r('sys.float.ohos_id_text_size_body2')

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontSize

DimensionNoPercentage

否

是

按钮选中态的字体大小（不支持百分比设置）。

默认值：$r('sys.float.ohos_id_text_size_body2')

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

fontWeight

FontWeight

否

是

按钮未选中态的字体粗细。

默认值：FontWeight.Regular

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedFontWeight

FontWeight

否

是

按钮选中态的字体粗细。

默认值：FontWeight.Medium

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

backgroundColor

ResourceColor

否

是

背景板颜色。

默认值：$r('sys.color.ohos_id_color_button_normal')

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedBackgroundColor

ResourceColor

否

是

按钮选中态的背景板颜色。

默认值：

type为"tab"时，默认值为$r('sys.color.segment_button_checked_foreground_color')。

type为"capsule"时，默认值为$r('sys.color.ohos_id_color_emphasize')。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

imageSize

SizeOptions

否

是

图片尺寸。

默认值：{ width: 24, height: 24 }

单位：vp

值为undefined时，按默认值处理。

说明：

imageSize属性仅对图标按钮和图标+文本按钮生效，对纯文本按钮无效果。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

buttonPadding

Padding
 | 
Dimension

否

是

按钮内边距。

默认值：

仅图标按钮和仅文字按钮默认值：{ top: 4, right: 8, bottom: 4, left: 8 }

图标+文本按钮默认值：{ top: 6, right: 8, bottom: 6, left: 8 }

单位：vp

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

textPadding

Padding
 | 
Dimension

否

是

文本内边距。

默认值：0

单位：vp

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

localizedButtonPadding
12+

LocalizedPadding

否

是

按钮内边距。

默认值：

仅图标按钮和仅文字按钮默认值：{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }

图标+文本按钮默认值：{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

localizedTextPadding
12+

LocalizedPadding

否

是

文本内边距。

默认值：0

单位：vp

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

direction
12+

Direction

否

是

布局方向。

默认值：Direction.Auto

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

backgroundBlurStyle

BlurStyle

否

是

背景模糊材质。

默认值：BlurStyle.NONE

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

borderRadiusMode
20+

BorderRadiusMode

否

是

边框圆角模式，用于控制圆角计算方式。

默认值：BorderRadiusMode.DEFAULT

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

backgroundBorderRadius
20+

LengthMetrics

否

是

分段按钮整体容器的边框圆角半径。

说明：

此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。

对于胶囊类多选按钮(type为"capsule"且multiply为true)，此属性不生效，需要用itemBorderRadius配置圆角。

圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。

默认值：$r('sys.float.segmentbutton_container_shape')

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

itemBorderRadius
20+

LengthMetrics

否

是

分段按钮中按钮项的边框圆角半径。

说明：

此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。

对于胶囊类多选按钮(type为"capsule"且multiply为true)，只能控制两端的选项圆角。

圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。

默认值：$r('sys.float.segmentbutton_selected_background_shape')

值为undefined时，按默认值处理。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

BorderRadiusMode
20+

边框圆角模式枚举，用于控制分段按钮的圆角计算方式。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

值

说明

DEFAULT

0

默认模式，框架自动计算边框圆角。

CUSTOM

1

自定义模式，开发者设置边框圆角。

TabSegmentButtonConstructionOptions

构建页签类的SegmentButtonOptions对象。

继承
CommonSegmentButtonOptions
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

buttons

ItemRestriction
<
SegmentButtonTextItem
>

否

否

按钮信息。

CapsuleSegmentButtonConstructionOptions

用于构建胶囊类的SegmentButtonOptions对象。

继承
CommonSegmentButtonOptions
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

buttons

SegmentButtonItemTuple

否

否

按钮信息。

multiply

boolean

否

是

是否可以多选。

默认值：false

值为undefined时，按默认值处理。

true表示可以多选，false表示不可以多选。

ItemRestriction

type ItemRestriction<T> = [T, T, T?, T?, T?]

保存按钮信息的元组类型。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

类型

说明

[T, T, T?, T?, T?]

表示包含2~5个相同类型元素的元组。

分段按钮组件仅支持2到5个按钮。

SegmentButtonItemTuple

type SegmentButtonItemTuple = ItemRestriction<SegmentButtonTextItem> | ItemRestriction<SegmentButtonIconItem> | ItemRestriction<SegmentButtonIconTextItem>

用于保存按钮信息的元组的联合类型。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

类型

说明

ItemRestriction
<
SegmentButtonTextItem
>

仅文本按钮信息的元组。

ItemRestriction
<
SegmentButtonIconItem
>

仅图标按钮信息的元组。

ItemRestriction
<
SegmentButtonIconTextItem
>

图标+文本按钮信息的元组。

SegmentButtonItemArray

type SegmentButtonItemArray = Array<SegmentButtonTextItem> | Array<SegmentButtonIconItem> | Array<SegmentButtonIconTextItem>

用于保存按钮信息的数组的联合类型。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

类型

说明

Array<
SegmentButtonTextItem
>

仅文本按钮信息的数组。

Array<
SegmentButtonIconItem
>

仅图标按钮信息的数组。

Array<
SegmentButtonIconTextItem
>

图标+文本按钮信息的数组。

SegmentButtonItemOptionsArray

用于保存按钮信息的数组。

装饰器类型：
 @Observed

SegmentButtonItemOptionsArray仅支持保存2到5个按钮信息元素。

[h2]constructor

constructor(elements: SegmentButtonItemTuple)

构造函数。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

elements

SegmentButtonItemTuple

是

按钮信息。

[h2]push

push(...items: SegmentButtonItemArray): number

在数组末尾添加新的元素，返回添加元素后数组的长度。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

items

SegmentButtonItemArray

否

被添加的按钮信息数组。

默认值：0个被添加的按钮信息数组。

返回值：

类型

说明

number

添加元素后数组的长度。

分段按钮组件数组仅支持保存2到5个按钮信息，若超过分段按钮组件数量个数的限制，添加按钮信息元素失败。

[h2]pop

pop(): SegmentButtonItemOptions | undefined

移除数组末尾最后一个元素，返回被移除的元素。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

返回值：

类型

说明

SegmentButtonItemOptions
 | undefined

被移除的元素。

分段按钮组件数组仅支持保存2到5个按钮信息，若移除后按钮组件数量不在个数限制范围内，移除按钮信息元素失败。

[h2]shift

shift(): SegmentButtonItemOptions | undefined

移除数组开头第一个元素，返回被移除的元素。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

返回值：

类型

说明

SegmentButtonItemOptions
 | undefined

被移除的元素。

分段按钮组件数组仅支持保存2到5个按钮信息，若移除后按钮组件数量不在个数限制范围内，移除按钮信息元素失败。

[h2]unshift

unshift(...items: SegmentButtonItemArray): number

在数组开头添加一个新的元素，返回添加元素后数组的长度。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

items

SegmentButtonItemArray

否

添加的按钮信息数组。

默认值：0个被添加的按钮信息数组。

返回值：

类型

说明

number

添加元素后数组的长度。

分段按钮组件数组仅支持保存2到5个按钮信息，若超过分段按钮组件数量个数的限制，添加按钮信息元素失败。

[h2]splice

splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[]

在数组中，删除从start位置开始的deleteCount数量的元素，并插入items中的元素，返回一个包含了被删除的元素的数组。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

start

number

是

删除元素的起始位置。

deleteCount

number

是

删除元素的数量。

items

SegmentButtonItemOptions
[]

否

从start开始要加入到数组中的元素。

默认值：不指定任何元素，将从数组中删除元素。

返回值：

类型

说明

SegmentButtonItemOptions
[]

返回包含了被删除的元素的数组。

分段按钮组件数组仅保存2到5个按钮信息，若超过分段按钮组件数量个数的限制，不再删除和替换按钮信息元素。

[h2]create

static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray

创建一个SegmentButtonItemOptionsArray对象。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

elements

SegmentButtonItemTuple

是

按钮信息。

返回值：

类型

说明

SegmentButtonItemOptionsArray

返回创建的SegmentButtonItemOptionsArray对象。

TabSegmentButtonOptions

页签类分段按钮选项。继承自
TabSegmentButtonConstructionOptions
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

type

"tab"

否

否

类型为页签类分段按钮。

CapsuleSegmentButtonOptions

胶囊类分段按钮选项。继承自
CapsuleSegmentButtonConstructionOptions
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

type

"capsule"

否

否

类型为胶囊类分段按钮。

SegmentButtonTextItem

文本按钮信息。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

text

ResourceStr

否

否

按钮文本。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

accessibilityLevel
13+

string

否

是

无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。

支持的值为:

"auto"：当前组件可被无障碍辅助服务所识别。

"yes"：当前组件可被无障碍辅助服务所识别。

"no"：当前组件不可被无障碍辅助服务所识别。

"no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

默认值："auto"

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityDescription
13+

ResourceStr

否

是

无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

SegmentButtonIconItem

图标按钮信息。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

icon

ResourceStr

否

否

未选中态的按钮图标。

值为undefined时，不显示图标。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

iconAccessibilityText
13+

ResourceStr

否

是

未选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

selectedIcon

ResourceStr

否

否

选中态的按钮图标。

值为undefined时，不显示图标。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedIconAccessibilityText
13+

ResourceStr

否

是

选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityLevel
13+

string

否

是

无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。

支持的值为:

"auto"：当前组件可被无障碍辅助服务所识别。

"yes"：当前组件可被无障碍辅助服务所识别。

"no"：当前组件不可被无障碍辅助服务所识别。

"no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

默认值："auto"

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityDescription
13+

ResourceStr

否

是

无障碍说明，用于为用户进一步说明当前组件，开发人员可为组件的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从组件本身属性与无障碍文本中了解到时。若组件既拥有文本属性又拥有无障碍说明属性，则组件被选中时，先播报组件的文本属性，再播报无障碍说明属性的内容。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

未选中态的图标icon和选中态的图标selectedIcon都需设置，单独设置无效。

SegmentButtonIconTextItem

图标与文本按钮信息。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

icon

ResourceStr

否

否

未选中态的按钮图标。

值为undefined时，不显示图标。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

iconAccessibilityText
13+

ResourceStr

否

是

未选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

selectedIcon

ResourceStr

否

否

选中态的按钮图标。

值为undefined时，不显示图标。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedIconAccessibilityText
13+

ResourceStr

否

是

选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

text

ResourceStr

否

否

按钮文本。

值为undefined时，不显示文本内容。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

accessibilityLevel
13+

string

否

是

无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。

支持的值为:

"auto"：当前组件可被无障碍辅助服务所识别。

"yes"：当前组件可被无障碍辅助服务所识别。

"no"：当前组件不可被无障碍辅助服务所识别。

"no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

默认值："auto"

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityDescription
13+

ResourceStr

否

是

无障碍说明，用于为用户进一步说明当前组件，开发人员可为组件的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从组件本身属性与无障碍文本中了解到时。若组件既拥有文本属性又拥有无障碍说明属性，则组件被选中时，先播报组件的文本属性，再播报无障碍说明属性的内容。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

未选中态的图标icon和选中态的图标selectedIcon都需设置，单独设置无效。

SegmentButtonItemOptions

分段按钮中的按钮选项。

装饰器类型：
 @Observed

[h2]属性

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

icon

ResourceStr

否

是

未选中态的按钮图标。

默认值：不显示未选中态的按钮图标。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

iconAccessibilityText
13+

ResourceStr

否

是

未选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

selectedIcon

ResourceStr

否

是

选中态的按钮图标。

默认值：不显示选中态按钮图标。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedIconAccessibilityText
13+

ResourceStr

否

是

选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

text

ResourceStr

否

是

按钮文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

accessibilityLevel
13+

string

否

是

无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。

支持的值为:

"auto"：当前组件可被无障碍辅助服务所识别。

"yes"：当前组件可被无障碍辅助服务所识别。

"no"：当前组件不可被无障碍辅助服务所识别。

"no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

默认值："auto"

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityDescription
13+

ResourceStr

否

是

无障碍说明，用于为用户进一步说明当前组件，开发人员可为组件的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从组件本身属性与无障碍文本中了解到时。若组件既拥有文本属性又拥有无障碍说明属性，则组件被选中时，先播报组件的文本属性，再播报无障碍说明属性的内容。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

[h2]constructor

constructor(options: SegmentButtonItemOptionsConstructorOptions)

构造函数。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

参数：

参数名

类型

必填

说明

options

SegmentButtonItemOptionsConstructorOptions

是

单个分段按钮的配置选项，包含图标、文本、无障碍属性等配置信息。

SegmentButtonItemOptionsConstructorOptions

构造参数用于SegmentButtonItemOptions。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

设备行为差异：
 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。

名称

类型

只读

可选

说明

icon

ResourceStr

否

是

未选中态的按钮图标。

默认值：不显示未选中态的按钮图标。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

iconAccessibilityText
13+

ResourceStr

否

是

未选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

selectedIcon

ResourceStr

否

是

选中态的按钮图标。

默认值：不显示选中态的按钮图标。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

selectedIconAccessibilityText
13+

ResourceStr

否

是

选中态按钮图标的无障碍文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

text

ResourceStr

否

是

按钮文本。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

accessibilityLevel
13+

string

否

是

无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。

支持的值为:

"auto"：当前组件可被无障碍辅助服务所识别。

"yes"：当前组件可被无障碍辅助服务所识别。

"no"：当前组件不可被无障碍辅助服务所识别。

"no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

默认值："auto"

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

accessibilityDescription
13+

ResourceStr

否

是

无障碍说明，用于为用户进一步说明当前组件，开发人员可为组件的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从组件本身属性与无障碍文本中了解到时。若组件既拥有文本属性又拥有无障碍说明属性，则组件被选中时，先播报组件的文本属性，再播报无障碍说明属性的内容。

默认值：空字符串。

值为undefined时，按默认值处理。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

示例

[h2]示例1（设置分段按钮的类型）

通过配置SegmentButtonOptions的tab和capsule，创建两种不同类型的分段按钮。

import {
 ItemRestriction,
 SegmentButton,
 SegmentButtonItemTuple,
 SegmentButtonOptions,
 SegmentButtonTextItem
} from '@kit.ArkUI';

@Entry
@Component
struct Index {
 // 页签类分段按钮数组。
 @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({
 buttons: [{ text: '页签按钮1' }, { text: '页签按钮2' }, {
 text: '页签按钮3'
 }] as ItemRestriction<SegmentButtonTextItem>,
 // 配置CommonSegmentButtonOptions，实现背景模糊样式。
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 // 胶囊类分段按钮数组。
 @State singleSelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '单选按钮1' }, { text: '单选按钮2' }, { text: '单选按钮3' }] as SegmentButtonItemTuple,
 multiply: false,
 // 配置CommonSegmentButtonOptions，实现背景模糊样式。
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 // 可多选胶囊类分段按钮数组。
 @State multiplySelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '多选按钮1' }, { text: '多选按钮2' }, { text: '多选按钮3' }] as SegmentButtonItemTuple,
 multiply: true
 });
 // 胶囊类分段按钮带选中非选中图标数组。
 @State iconCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ] as SegmentButtonItemTuple,
 multiply: false,
 // 配置CommonSegmentButtonOptions，实现背景模糊样式。
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 // 可多选胶囊类分段按钮带选中非选中图标数组。
 @State iconTextCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { text: '图标1', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标2', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标3', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标4', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标5', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ] as SegmentButtonItemTuple,
 multiply: true
 });
 @State tabSelectedIndexes: number[] = [1];
 @State singleSelectCapsuleSelectedIndexes: number[] = [0];
 @State multiplySelectCapsuleSelectedIndexes: number[] = [0, 1];
 @State singleSelectIconCapsuleSelectedIndexes: number[] = [3];
 @State multiplySelectIconTextCapsuleSelectedIndexes: number[] = [1, 2];

 build() {
 Row() {
 Column() {
 Column({ space: 25 }) {
 SegmentButton({
 options: this.tabOptions,
 selectedIndexes: $tabSelectedIndexes
 })
 SegmentButton({
 options: this.singleSelectCapsuleOptions,
 selectedIndexes: $singleSelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.multiplySelectCapsuleOptions,
 selectedIndexes: $multiplySelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconCapsuleOptions,
 selectedIndexes: $singleSelectIconCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconTextCapsuleOptions,
 selectedIndexes: $multiplySelectIconTextCapsuleSelectedIndexes
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

[h2]示例2（设置分段按钮样式）

通过配置CommonSegmentButtonOptions，实现自定义分段按钮的文本以及背板样式。

import {
 ItemRestriction,
 SegmentButton,
 SegmentButtonItemTuple,
 SegmentButtonOptions,
 SegmentButtonTextItem
} from '@kit.ArkUI';

@Entry
@Component
struct Index {
 @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({
 buttons: [{ text: '页签按钮1' }, { text: '页签按钮2' }, {
 text: '页签按钮3'
 }] as ItemRestriction<SegmentButtonTextItem>,
 backgroundColor: 'rgb(213,213,213)',
 selectedBackgroundColor: 'rgb(112,112,112)', // 配置CommonSegmentButtonOptions，实现选中背景色
 textPadding: {
 top: 10,
 right: 10,
 bottom: 10,
 left: 10
 }, // 配置CommonSegmentButtonOptions，实现文字内边距
 });
 @State singleSelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '单选按钮1' }, { text: '单选按钮2' }, { text: '单选按钮3' }] as SegmentButtonItemTuple,
 multiply: false,
 fontColor: 'rgb(0,74,175)', // 配置CommonSegmentButtonOptions，实现文字颜色
 selectedFontColor: 'rgb(247,247,247)', // 配置CommonSegmentButtonOptions，实现选中文字颜色
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK // 配置CommonSegmentButtonOptions，实现背景模糊样式
 });
 @State multiplySelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '多选按钮1' }, { text: '多选按钮2' }, { text: '多选按钮3' }] as SegmentButtonItemTuple,
 multiply: true,
 fontSize: 18,
 selectedFontSize: 18,
 fontWeight: FontWeight.Bolder, // 配置CommonSegmentButtonOptions，实现文字粗细
 selectedFontWeight: FontWeight.Lighter, // 配置CommonSegmentButtonOptions，实现选中文字粗细
 });
 @State iconCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ] as SegmentButtonItemTuple,
 multiply: false,
 imageSize: { width: 40, height: 40 },
 buttonPadding: {
 top: 6,
 right: 10,
 bottom: 6,
 left: 10
 },
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 @State iconTextCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { text: '图标1', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标2', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标3', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标4', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标5', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ] as SegmentButtonItemTuple,
 multiply: true,
 imageSize: { width: 10, height: 10 },
 });
 @State tabSelectedIndexes: number[] = [0];
 @State singleSelectCapsuleSelectedIndexes: number[] = [0];
 @State multiplySelectCapsuleSelectedIndexes: number[] = [0, 1];
 @State singleSelectIconCapsuleSelectedIndexes: number[] = [3];
 @State multiplySelectIconTextCapsuleSelectedIndexes: number[] = [1, 2];

 build() {
 Row() {
 Column() {
 Column({ space: 20 }) {
 SegmentButton({ options: this.tabOptions, selectedIndexes: $tabSelectedIndexes })
 SegmentButton({
 options: this.singleSelectCapsuleOptions,
 selectedIndexes: $singleSelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.multiplySelectCapsuleOptions,
 selectedIndexes: $multiplySelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconCapsuleOptions,
 selectedIndexes: $singleSelectIconCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconTextCapsuleOptions,
 selectedIndexes: $multiplySelectIconTextCapsuleSelectedIndexes
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

[h2]示例3（分段按钮数组处理）

该示例通过pop、shift、unshift等函数实现分段按钮数组的添加、移除等操作。

import {
 SegmentButton,
 SegmentButtonOptions,
 SegmentButtonItemOptionsArray,
 SegmentButtonItemTuple,
 SegmentButtonItemOptions
} from '@kit.ArkUI';

@Entry
@Component
struct Index {
 // 胶囊类分段按钮数组。
 @State singleSelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '1' }, { text: '2' }, { text: '3' },
 { text: '4' }, { text: '5' }] as SegmentButtonItemTuple,
 multiply: false,
 // 配置CommonSegmentButtonOptions，实现背景模糊样式。
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 @State capsuleSelectedIndexes: number[] = [0];

 build() {
 Row() {
 Column() {
 Column({ space: 10 }) {
 SegmentButton({
 options: this.singleSelectCapsuleOptions,
 selectedIndexes: $capsuleSelectedIndexes
 })
 // 点击’删除第一个按钮‘，第一个按钮会删除。
 Button('删除第一个按钮')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons.shift()
 })
 // 点击’删除最后一个按钮‘，最后一个按钮会删除。
 Button('删除最后一个按钮')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons.pop()
 })
 // 点击’末尾增加一个按钮push‘，在按钮末尾会增加一个按钮。
 Button('末尾增加一个按钮push')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons.push({ text: 'push' })
 })
 // 点击’开头增加一个按钮unshift‘，在按钮开头会增加一个按钮。
 Button('开头增加一个按钮unshift')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons.unshift(({ text: 'unshift' }))
 })
 // 点击’将按钮2、3替换为splice1、splice2‘，按钮2、3会被替换成splice1、splice2。
 Button('将按钮2、3替换为splice1、splice2')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons.splice(1, 2, new SegmentButtonItemOptions({
 text: 'splice1'
 }), new SegmentButtonItemOptions({ text: 'splice2' }))
 })
 // 点击’更改所有按钮文字‘，按钮会由1、2、3、4、5替换成a、b、c、d、e。
 Button('更改所有按钮文字')
 .onClick(() => {
 this.singleSelectCapsuleOptions.buttons =
 SegmentButtonItemOptionsArray.create([{ text: 'a' }, { text: 'b' },
 { text: 'c' }, { text: 'd' }, { text: 'e' }])
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

[h2]示例4（设置镜像效果）

该示例通过配置direction属性设置分段按钮的布局方向，实现镜像效果。

import { LengthMetrics, SegmentButton, SegmentButtonOptions } from '@kit.ArkUI';

@Entry
@Component
struct Index {
 // 页签类分段按钮数组。
 @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({
 buttons: [{ text: '页签按钮1' }, { text: '页签按钮2' }, {
 text: '页签按钮3'
 }],
 direction: Direction.Rtl, // 设置分段按钮的布局方向。
 backgroundColor: Color.Green, // 设置分段按钮的背景板颜色。
 selectedBackgroundColor: Color.Orange, // 设置分段按钮组件的按钮选中态背景板颜色。
 // 设置文本内边距。
 localizedTextPadding: {
 end: LengthMetrics.vp(10),
 start: LengthMetrics.vp(10)
 },
 });
 // 胶囊类分段按钮数组。
 @State singleSelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '单选按钮1' }, { text: '单选按钮2' }, { text: '单选按钮3' }],
 multiply: false, // 设置分段按钮组件是否可以多选。
 direction: Direction.Rtl, // 设置分段按钮的布局方向。
 fontColor: Color.Black, // 设置分段按钮组件的按钮未选中态的文本颜色。
 selectedFontColor: Color.Yellow, // 设置分段按钮组件的按钮选中态的文本颜色。
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK // 设置分段按钮组件的背景模糊材质。
 });
 // 胶囊类分段按钮数组。
 @State multiplySelectCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [{ text: '多选按钮1' }, { text: '多选按钮2' }, { text: '多选按钮3' }],
 multiply: true, // 设置分段按钮组件是否可以多选。
 direction: Direction.Rtl, // 设置分段按钮的布局方向。
 fontSize: 18, // 设置分段按钮组件的按钮未选中态的字体大小。
 selectedFontSize: 18, // 设置分段按钮组件的按钮选中态的字体大小。
 fontWeight: FontWeight.Bolder, // 设置分段按钮组件的按钮未选中态的字体粗细。
 selectedFontWeight: FontWeight.Lighter, // 设置分段按钮组件的按钮选中态的字体粗细。
 });
 // 胶囊类分段按钮数组。
 @State iconCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ],
 multiply: false, // 设置分段按钮组件是否可以多选。
 direction: Direction.Rtl, // 设置分段按钮的布局方向。
 imageSize: { width: 40, height: 40 }, // 设置分段按钮组件的图片尺寸。
 // 设置分段按钮组件的按钮内边距。
 localizedButtonPadding: {
 end: LengthMetrics.vp(10),
 start: LengthMetrics.vp(10)
 },
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK // 设置分段按钮组件的背景模糊材质。
 });
 @State iconTextCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 { text: '图标1', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标2', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标3', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标4', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') },
 { text: '图标5', icon: $r('sys.media.ohos_ic_public_email'), selectedIcon: $r('sys.media.ohos_ic_public_clock') }
 ],
 multiply: true, // 设置分段按钮组件是否可以多选。
 direction: Direction.Rtl, // 设置分段按钮的布局方向。
 imageSize: { width: 10, height: 10 }, // 设置分段按钮组件的图片尺寸。
 });
 @State tabSelectedIndexes: number[] = [0];
 @State singleSelectCapsuleSelectedIndexes: number[] = [0];
 @State multiplySelectCapsuleSelectedIndexes: number[] = [0, 1];
 @State singleSelectIconCapsuleSelectedIndexes: number[] = [3];
 @State multiplySelectIconTextCapsuleSelectedIndexes: number[] = [1, 2];

 build() {
 Row() {
 Column() {
 Column({ space: 20 }) {
 SegmentButton({ options: this.tabOptions, selectedIndexes: $tabSelectedIndexes })
 SegmentButton({
 options: this.singleSelectCapsuleOptions,
 selectedIndexes: $singleSelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.multiplySelectCapsuleOptions,
 selectedIndexes: $multiplySelectCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconCapsuleOptions,
 selectedIndexes: $singleSelectIconCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconTextCapsuleOptions,
 selectedIndexes: $multiplySelectIconTextCapsuleSelectedIndexes
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

[h2]示例5（设置无障碍朗读）

通过配置accessibilityLevel和selectedIconAccessibilityText等属性，实现了分段按钮的无障碍朗读功能。

import {
 ItemRestriction,
 SegmentButton,
 SegmentButtonItemTuple,
 SegmentButtonOptions,
 SegmentButtonTextItem,
 SegmentButtonItemOptions
} from '@kit.ArkUI';

@Entry
@Component
struct Index {
 @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({
 buttons: [{ text: '页签按钮1', accessibilityLevel: 'yes', accessibilityDescription: '页签按钮1 新手提醒' },
 { text: '页签按钮2', accessibilityLevel: 'yes', accessibilityDescription: '页签按钮2 新手提醒' },
 {
 text: '页签按钮3', accessibilityLevel: 'yes', accessibilityDescription: '页签按钮3 新手提醒'
 }] as ItemRestriction<SegmentButtonTextItem>,
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 @State iconCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 {
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconItem 新手提醒' // 无障碍说明。
 },
 {
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconItem 新手提醒' // 无障碍说明。
 },
 {
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconItem 新手提醒' // 无障碍说明。
 },
 {
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconItem 新手提醒' // 无障碍说明。
 }
 ] as SegmentButtonItemTuple,
 multiply: false,
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK
 });
 @State iconTextCapsuleOptions: SegmentButtonOptions = SegmentButtonOptions.capsule({
 buttons: [
 {
 text: '图标1',
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconTextItem 新手提醒' // 无障碍说明。
 },
 {
 text: '图标1',
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconTextItem 新手提醒' // 无障碍说明。
 },
 {
 text: '图标1',
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconTextItem 新手提醒' // 无障碍说明。
 },
 {
 text: '图标1',
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconTextItem 新手提醒' // 无障碍说明。
 }
 ] as SegmentButtonItemTuple,
 multiply: true
 });
 @State tabSelectedIndexes: number[] = [1];
 @State singleSelectIconCapsuleSelectedIndexes: number[] = [3];
 @State multiplySelectIconTextCapsuleSelectedIndexes: number[] = [1, 2];

 build() {
 Row() {
 Column() {
 Column({ space: 25 }) {
 SegmentButton({
 options: this.tabOptions,
 selectedIndexes: $tabSelectedIndexes
 })
 SegmentButton({
 options: this.iconCapsuleOptions,
 selectedIndexes: $singleSelectIconCapsuleSelectedIndexes
 })
 SegmentButton({
 options: this.iconTextCapsuleOptions,
 selectedIndexes: $multiplySelectIconTextCapsuleSelectedIndexes
 })
 Button('将按钮2、3替换为splice1、splice2')
 .onClick(() => {
 this.iconTextCapsuleOptions.buttons.splice(1, 2, new SegmentButtonItemOptions({
 text: 'splice1', accessibilityLevel: 'yes', accessibilityDescription: 'SegmentButtonItemOptions 新手提醒'
 }), new SegmentButtonItemOptions({
 text: 'splice2',
 icon: $r('sys.media.ohos_ic_public_email'),
 iconAccessibilityText: '未选中图标无障碍文本', // 未选中态按钮图标的无障碍文本。
 selectedIcon: $r('sys.media.ohos_ic_public_clock'),
 selectedIconAccessibilityText: '选中图标无障碍文本', // 选中态按钮图标的无障碍文本。
 accessibilityLevel: 'yes', // 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
 accessibilityDescription: 'SegmentButtonIconTextItem 新手提醒' // 无障碍说明。
 }))
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

[h2]示例6（设置自定义圆角）

该示例演示了如何为分段按钮组件设置自定义的边框圆角半径。

import {
 BorderRadiusMode,
 ItemRestriction,
 LengthMetrics,
 SegmentButton,
 SegmentButtonOptions,
 SegmentButtonTextItem
} from '@kit.ArkUI';

@Entry
@Component
struct Index {
 @State tabOptions: SegmentButtonOptions = SegmentButtonOptions.tab({
 buttons: [{ text: '页签按钮1' }, { text: '页签按钮2' }, {
 text: '页签按钮3'
 }] as ItemRestriction<SegmentButtonTextItem>,
 backgroundBlurStyle: BlurStyle.BACKGROUND_THICK,
 borderRadiusMode: BorderRadiusMode.CUSTOM, // 设置自定义的边框圆角半径
 backgroundBorderRadius: LengthMetrics.vp(8),
 itemBorderRadius: LengthMetrics.vp(6)
 });
 @State tabSelectedIndexes: number[] = [1];

 build() {
 Row() {
 Column() {
 Column({ space: 25 }) {
 SegmentButton({
 options: this.tabOptions,
 selectedIndexes: $tabSelectedIndexes,
 })
 }.width('90%')
 }.width('100%')
 }.height('100%')
 }
}

---
*2026-04-22T15:55:02.027Z*