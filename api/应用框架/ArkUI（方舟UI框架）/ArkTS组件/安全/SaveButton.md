# SaveButton

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ts-security-components-savebutton`

**DocID**: `35f0b65484a64a6e809fa14c23a2f67c`

**NodeID**: `000201775796216196662230e912933a`

---

SaveButton

安全控件的保存控件。应用集成保存控件后，用户首次使用保存控件展示弹窗，在点击允许后自动授权，应用会在短时间内获取访问媒体库特权接口的授权。后续使用无需弹窗授权。在API version 19及之前的版本中，授权持续时间为10秒；在API version 20及之后的版本中，授权持续时间为1分钟。

该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

子组件

不支持。

接口

[h2]SaveButton

SaveButton()

默认创建带有图标、文本、背景的保存控件。

为避免控件样式不合法导致授权失败，请开发者先了解安全控件样式的
约束与限制
。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]SaveButton

SaveButton(options: SaveButtonOptions)

创建包含指定元素的保存控件。

为避免控件样式不合法导致授权失败，请开发者先了解安全控件样式的
约束与限制
。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

options

SaveButtonOptions

是

创建包含指定元素的保存控件。

SaveButtonOptions

用于指定保存控件的图标、文本等指定元素。

icon或text需至少传入一个。

如果icon、text都不传入，
SaveButton
中的options参数不生效，创建的SaveButton为默认样式，默认样式：

SaveIconStyle默认样式为FULL_FILLED；

SaveDescription默认样式为DOWNLOAD；

ButtonType默认样式为Capsule。

icon、text、buttonType不支持动态修改。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

类型

只读

可选

说明

icon

SaveIconStyle

否

是

设置保存控件的图标风格。

不传入该参数表示没有图标。

text

SaveDescription

否

是

设置保存控件的文本描述。

不传入该参数表示没有文字描述。

buttonType

ButtonType

否

是

设置保存控件的背景样式。

不传入该参数，系统默认提供Capsule类型按钮。

SaveIconStyle枚举说明

保存控件的图标风格。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

值

说明

FULL_FILLED

0

保存控件展示填充样式图标。

LINES

1

保存控件展示线条样式图标。

SaveDescription枚举说明

保存控件的文本描述。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

值

说明

DOWNLOAD

0

保存控件的文字描述为“下载”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

DOWNLOAD_FILE

1

保存控件的文字描述为“下载文件”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

SAVE

2

保存控件的文字描述为“保存”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

SAVE_IMAGE

3

保存控件的文字描述为“保存图片”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

SAVE_FILE

4

保存控件的文字描述为“保存文件”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

DOWNLOAD_AND_SHARE

5

保存控件的文字描述为“下载分享”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

RECEIVE

6

保存控件的文字描述为“接收”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

CONTINUE_TO_RECEIVE

7

保存控件的文字描述为“继续接收”。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

SAVE_TO_GALLERY
12+

8

保存控件的文字描述为“保存至图库”。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

EXPORT_TO_GALLERY
12+

9

保存控件的文字描述为“导出”。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

QUICK_SAVE_TO_GALLERY
12+

10

保存控件的文字描述为“快速保存图片”。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

RESAVE_TO_GALLERY
12+

11

保存控件的文字描述为“重新保存”。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

SAVE_ALL
18+

12

保存控件的文字描述为“全部保存”。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

SaveButtonOnClickResult枚举说明

保存控件点击后的授权结果。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

值

说明

SUCCESS

0

保存控件点击后权限授权成功。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

TEMPORARY_AUTHORIZATION_FAILED

1

保存控件点击后权限授权失败。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

CANCELED_BY_USER
21+

2

保存控件点击后弹窗用户取消授权。

元服务API：
 从API version 21开始，该接口支持在元服务中使用。

SaveButtonCallback
18+

type SaveButtonCallback = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void

点击保存控件触发该回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

event

ClickEvent

是

见ClickEvent对象说明。

result

SaveButtonOnClickResult

是

授权的结果。

error

BusinessError<void>

否

点击按钮时的错误码和错误信息。

错误码0表示点击保存控件授权成功或用户取消授权。

错误码1表示系统内部错误，包括但不限于：

1. ipc通信失败。

2. 安全控件弹窗失败。

错误码2表示属性设置错误，包括但不限于：

1. 字体或图标设置过小。

2. 字体或图标与背托颜色相近。

3. 字体或图标颜色过于透明。

4. padding为负值。

5. 按钮被其他组件或窗口遮挡。

6. 文本超出背托范围。

7. 按钮超出窗口或屏幕。

8. 按钮整体尺寸过大。

9. 按钮文本被截断，显示不全。

10. 相关属性设置影响安全控件显示。

SaveButtonAttribute

SaveButtonAttribute提供自定义图标（setIcon）、自定义文本（setText）、图标尺寸（iconSize）、图标圆角（iconBorderRadius），以及按压态效果（stateEffect）等属性设置的方法。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

[h2]setIcon
20+

setIcon(icon: Resource)

设置保存控件的图标。

需要权限
：ohos.permission.CUSTOMIZE_SAVE_BUTTON

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

icon

Resource

是

自定义图标资源信息，仅支持Resource类型的数据源。

可支持的图片格式：png、jpg、jpeg、bmp、svg、webp、gif和heif等，支持的图片格式范围见
Image
。当资源为非图片资源或不支持的格式时，图标显示为空白。

如果应用无ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则自定义图标设置不生效，保存控件保持默认样式。详见
SaveButtonOptions
说明。

[h2]setText
20+

setText(text: string | Resource)

设置保存控件的文本。

需要权限
：ohos.permission.CUSTOMIZE_SAVE_BUTTON

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

text

string | 
Resource

是

自定义文本信息。

如果应用无ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则自定义文本设置不生效，保存控件保持默认样式。详见
SaveButtonOptions
说明。

[h2]iconSize
20+

iconSize(size: Dimension | SizeOptions)

设置保存控件的图标尺寸。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

size

Dimension
 | 
SizeOptions

是

图标尺寸。宽高默认值均为16vp。

不支持设置百分比字符串。若设置Dimension类型入参的百分比字符串，则图标尺寸显示为默认值；若设置SizeOptions类型入参的width或height属性为百分比字符串，则图标尺寸显示为0。

对于保存控件提供的系统图标：

- 使用Dimension类型入参时，宽、高相等，均为设定值。

- 使用SizeOptions类型入参时，若宽、高设定值不一致，则宽、高相等取两者较小值；若仅设定其中一个值，则取该值作为宽、高值。

对于自定义图标：

- 使用Dimension类型入参时，宽、高相等，均为设定值。

- 使用SizeOptions类型入参时，建议同时设定宽和高，此时按照指定宽、高生效；若仅设定其中一个值，则宽高均显示为该设定值。

- 当设定的宽高与自定义图标的宽高比例不一致时，图片按
ImageFit.Cover
的方式填充显示区域。

[h2]iconBorderRadius
20+

iconBorderRadius(radius: Dimension | BorderRadiuses)

设置保存控件图标的边框圆角半径。

需要权限
：ohos.permission.CUSTOMIZE_SAVE_BUTTON

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

radius

Dimension
 | 
BorderRadiuses

是

保存控件图标的圆角半径，支持设置四个圆角。四个圆角默认值均为0vp。

如果应用无ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，则图标的圆角半径设置不生效。

[h2]stateEffect
20+

stateEffect(enabled: boolean)

设置保存控件的按压效果。

需要权限
：ohos.permission.CUSTOMIZE_SAVE_BUTTON

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

enabled

boolean

是

表示是否开启按压效果，true表示保存控件按压时显示按压效果，false表示保存控件按压时不显示按压效果。

默认值：true。

如果应用无ohos.permission.CUSTOMIZE_SAVE_BUTTON权限，按压效果设置不生效。

[h2]userCancelEvent
21+

userCancelEvent(enabled: boolean)

设置接收保存控件的用户取消授权事件。

元服务API：
 从API version 21开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

enabled

boolean

是

表示是否接收保存控件的用户取消授权事件，true表示接收保存控件的用户取消授权事件，false表示不接收保存控件的用户取消授权事件。

默认值：false。

属性

不支持通用属性，仅继承
安全控件通用属性
。

事件

不支持通用事件，仅支持以下事件：

[h2]onClick

onClick(event: SaveButtonCallback)

点击动作触发该回调。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

event

SaveButtonCallback

是

见SaveButtonCallback。

在API10-17时，参数类型为：(event: 
ClickEvent
, result: 
SaveButtonOnClickResult
) => void。

从API18开始，变更为SaveButtonCallback。

示例1

// xxx.ets
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 handleSaveButtonClick: SaveButtonCallback =
 async (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError) => {
 if (result === SaveButtonOnClickResult.SUCCESS) {
 try {
 const context = this.getUIContext().getHostContext();
 let helper = photoAccessHelper.getPhotoAccessHelper(context);
 let uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'png');
 // 使用uri打开文件，可以持续写入内容，写入过程不受时间限制。
 let file = await fileIo.open(uri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
 // 写入文件
 await fileIo.write(file.fd, "context");
 // 关闭文件
 await fileIo.close(file.fd);
 } catch (error) {
 console.error(`errCode: ${error.code}, errMessage: ${error.message}`);
 }
 } else if (result === SaveButtonOnClickResult.CANCELED_BY_USER) {
 console.info("errCode: " + error?.code);
 console.info("errMessage: " + error?.message);
 } else {
 console.error("errCode: " + error?.code);
 console.error("errMessage: " + error?.message);
 }
 };

 build() {
 Row() {
 Column({ space: 10 }) {
 // 默认参数下，图标、文字、背景都存在。
 SaveButton().onClick((this.handleSaveButtonClick))
 // 传入参数即表示元素存在，不传入的参数表示元素不存在，如果不传入buttonType，会默认添加ButtonType.Capsule配置，显示图标+背景。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED })
 // 只显示图标+背景，如果设置背景色高八位的α值低于0x1a，则会被系统强制调整为0xff。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, buttonType: ButtonType.Capsule })
 .backgroundColor(0x10007dff)
 // 图标、文字、背景都存在，如果设置背景色高八位的α值低于0x1a，则会被系统强制调整为0xff。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD, buttonType: ButtonType.Capsule })
 // 图标、文字、背景都存在，如果设置宽度小于当前属性组合下允许的最小宽度时，宽度仍为设置值，此时按钮文本信息会自动换行，以保证安全控件显示的完整性。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD, buttonType: ButtonType.Capsule })
 .fontSize(16)
 .width(30)
 // 图标、文字、背景都存在，如果设置宽度小于当前属性组合下允许的最小宽度时，宽度仍为设置值，此时按钮文本信息会自动换行，以保证安全控件显示的完整性。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD, buttonType: ButtonType.Capsule })
 .fontSize(16)
 .size({ width: 30, height: 30 })
 // 图标、文字、背景都存在，如果设置宽度小于当前属性组合下允许的最小宽度时，宽度仍为设置值，此时按钮文本信息会自动换行，以保证安全控件显示的完整性。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD, buttonType: ButtonType.Capsule })
 .fontSize(16)
 .constraintSize({
 minWidth: 0,
 maxWidth: 30,
 minHeight: 0,
 maxHeight: 30
 })
 // 设置保存控件接收用户取消授权事件。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .onClick((this.handleSaveButtonClick))
 .userCancelEvent(true)
 }.width('100%')
 }.height('100%')
 }
}

示例2

应用需要申请权限：ohos.permission.CUSTOMIZE_SAVE_BUTTON

// xxx.ets
@Entry
@Component
struct SetIcon {
 build() {
 Row() {
 Column({ space: 10 }) {
 // 设置图标为resource类型，有权限时显示设置的图标。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .setIcon($r('app.media.startIcon'))
 // 设置文本为string类型，有权限时显示设置的文本。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .setText("保存控件设置文本")
 // 设置文本为resource类型，有权限时显示设置的资源文本。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .setText($r('app.string.app_name'))
 // 设置保存控件图标大小，入参为Dimension类型。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .iconSize(28)
 // 设置保存控件的默认图标大小，入参为SizeOptions类型。将默认图标设置为宽高中的较小值。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .iconSize({ width: 20, height: 40 })
 // 设置保存控件的自定义图标大小，入参为SizeOptions类型。图片按设置的宽高显示。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .setIcon($r('app.media.startIcon'))
 .iconSize({ width: 30, height: 40 })
 // 设置保存控件的自定义图标大小，入参为SizeOptions类型且只设置一个值。图片宽高均显示为设置值。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .setIcon($r('app.media.startIcon'))
 .iconSize({ width: 40 })
 // 设置保存控件的图标圆角，入参为Dimension类型。图片四个圆角的半径均为入参大小。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .backgroundColor(Color.Orange)
 .setIcon($r('app.media.background'))
 .iconSize(30)
 .iconBorderRadius(6)
 // 设置正方形图标圆角大于边长一半时图标显示为圆形。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, buttonType: ButtonType.Circle })
 .backgroundColor(Color.Orange)
 .setIcon($r('app.media.foreground'))
 .iconSize(30)
 .iconBorderRadius(30)
 .padding(0)
 // 自定义图标通过iconBorderRadius设置为圆形，背托设置为透明色并设置边框。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, buttonType:ButtonType.Circle })
 .setIcon($r('app.media.background'))
 .backgroundColor(Color.Transparent)
 .iconSize(40)
 .iconBorderRadius(30)
 .borderWidth(1)
 .borderColor(Color.Black)
 .borderStyle(BorderStyle.Solid)
 .padding(10)
 // 设置保存控件的图标圆角，入参为BorderRadiuses类型。图片四个圆角的半径分别为对应入参大小，未设置的无圆角。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .backgroundColor(Color.Orange)
 .setIcon($r('app.media.background'))
 .iconSize(30)
 .iconBorderRadius({ topLeft: 10, topRight: 16, bottomRight: 20 })
 // 设置保存控件的按压特效为无按压特效。
 SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
 .stateEffect(false)
 }.width('100%')
 }.height('100%')
 }
}

---
*2026-04-22T15:55:01.995Z*