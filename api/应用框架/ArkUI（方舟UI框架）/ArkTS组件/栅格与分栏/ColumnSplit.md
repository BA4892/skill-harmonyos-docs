# ColumnSplit

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ts-container-columnsplit`

**DocID**: `7f8c33f8162e4bb38d3c925a74b0afcc`

**NodeID**: `00020177579621619669783bd8bc9d8a`

---

ColumnSplit

将子组件纵向布局，并在每个子组件之间插入横向分割线。

该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

子组件

可以包含子组件。

ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。初始化后，动态修改子组件的高度不生效，分割线位置保持不变，可通过拖动相邻分割线改变子组件高度。

初始化后，动态修改
margin
、
border
、
padding
通用属性导致子组件尺寸大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的高度。

接口

ColumnSplit()

带分割线的子组件纵向布局。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

属性

除支持
通用属性
外，还支持以下属性：

ColumnSplit组件
形状裁剪
的默认值为true。

[h2]resizeable

resizeable(value: boolean)

设置分割线是否可拖拽。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

value

boolean

是

分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。

默认值：false 

非法值：按默认值处理。

[h2]divider
10+

divider(value: ColumnSplitDividerStyle | null)

设置分割线的margin。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

value

ColumnSplitDividerStyle
 | null

是

分割线的margin，即设置分割线与子组件的距离。

默认值：null。当设置为null时，分割线与子组件的距离为0vp。

非法值：按默认值处理。

ColumnSplitDividerStyle
10+
对象说明

设置子组件与上下分割线的距离。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

类型

只读

可选

说明

startMargin

Dimension

否

是

子组件与其上方分割线的距离。

默认值：0vp 

非法值：按默认值处理，此时
getInspectorByKey()
接口获取到的属性值为undefined。

endMargin

Dimension

否

是

子组件与其下方分割线的距离。

默认值：0vp 

非法值：按默认值处理，此时
getInspectorByKey()
接口获取到的属性值为undefined。

与
RowSplit
相同，ColumnSplit的分割线可调整上下两侧子组件的高度，子组件的高度调整范围受其最大最小高度限制。

支持
clip
、
margin
等通用属性，未设置clip属性时，其默认值为true。

事件

支持
通用事件
。

示例

[h2]示例1（设置可拖动的ColumnSplit组件）

本示例展示如何设置可拖动的ColumnSplit组件及其效果。

// xxx.ets
@Entry
@Component
struct ColumnSplitExample {
 build() {
 Column() {
 Text('The dividing line can be dragged').fontSize(9).fontColor(0xCCCCCC).width('90%')
 ColumnSplit() {
 Text('1').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 Text('2').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)
 Text('3').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 Text('4').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)
 Text('5').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 }
 .borderWidth(1)
 .resizeable(true) // 可拖动
 .width('90%').height('60%')
 }.width('100%')
 }
}

[h2]示例2（设置带有间隔的ColumnSplit组件）

本示例展示如何设置带有间隔的ColumnSplit组件及其效果。

// xxx.ets
@Entry
@Component
struct ColumnSplitDividerExample {
 build() {
 Column() {
 Text('The dividing line can be dragged').fontSize(9).fontColor(0xCCCCCC).width('90%')
 ColumnSplit() {
 Text('1').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 Text('2').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)
 Text('3').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 Text('4').width('100%').height(50).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)
 Text('5').width('100%').height(50).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)
 }
 .borderWidth(1)
 .divider({ startMargin: 5, endMargin: 5 }) // 设置间隔
 .width('90%')
 .height('60%')
 }.width('100%')
 }
}

---
*2026-04-22T15:55:01.867Z*