# Class (PromptAction)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-uicontext-promptaction`

**DocID**: `ec199ff4e92f434b9d1215c55628679f`

**NodeID**: `00020177579621619771890764d6b25d`

---

Class (PromptAction)

创建并显示即时反馈、对话框、操作菜单以及自定义弹窗。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Class首批接口从API version 10开始支持。

以下API需先使用UIContext中的
getPromptAction()
方法获取到PromptAction对象，再通过该对象调用对应方法。

getTopOrder
18+

getTopOrder(): LevelOrder

返回最顶层显示的弹窗的顺序。

获取最顶层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

返回值：

类型

说明

LevelOrder

返回弹窗层级信息。

示例：

该示例通过调用getTopOrder接口，展示了获取最顶层显示弹窗顺序的功能。

import { ComponentContent, PromptAction, LevelOrder, promptAction, UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class Params {
 text: string = "";
 constructor(text: string) {
 this.text = text;
 }
}

@Builder
function buildText(params: Params) {
 Column({ space: 20 }) {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 }.backgroundColor('#FFF0F0F0')
}

@Entry
@Component
struct Index {
 @State message: string = '弹窗';
 private ctx: UIContext = this.getUIContext();
 private promptAction: PromptAction = this.ctx.getPromptAction();
 private contentNode: ComponentContent<Object> =
 new ComponentContent(this.ctx, wrapBuilder(buildText), new Params(this.message));

 private baseDialogOptions: promptAction.BaseDialogOptions = {
 showInSubWindow: false,
 levelOrder: LevelOrder.clamp(30.1),
 };

 build() {
 Row() {
 Column({ space: 10 }) {
 Button('openCustomDialog弹窗')
 .fontSize(20)
 .onClick(() => {
 this.promptAction.openCustomDialog(this.contentNode, this.baseDialogOptions)
 .catch((err: BusinessError) => {
 console.error("openCustomDialog error: " + err.code + " " + err.message);
 })
 .then(() => {
 let topOrder: LevelOrder = this.promptAction.getTopOrder();
 if (topOrder !== undefined) {
 console.error('topOrder: ' + topOrder.getOrder());
 }
 })
 })
 }.width('100%')
 }.height('100%')
 }
}

getBottomOrder
18+

getBottomOrder(): LevelOrder

获取最底层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

返回值：

类型

说明

LevelOrder

返回弹窗层级信息。

示例：

该示例通过调用getBottomOrder接口，展示了获取最底层显示弹窗顺序的功能。

import { ComponentContent, PromptAction, LevelOrder, promptAction, UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

class Params {
 text: string = "";
 constructor(text: string) {
 this.text = text;
 }
}

@Builder
function buildText(params: Params) {
 Column({ space: 20 }) {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 }.backgroundColor('#FFF0F0F0')
}

@Entry
@Component
struct Index {
 @State message: string = '弹窗';
 private ctx: UIContext = this.getUIContext();
 private promptAction: PromptAction = this.ctx.getPromptAction();
 private contentNode: ComponentContent<Object> =
 new ComponentContent(this.ctx, wrapBuilder(buildText), new Params(this.message));

 private baseDialogOptions: promptAction.BaseDialogOptions = {
 showInSubWindow: false,
 levelOrder: LevelOrder.clamp(30.1),
 };

 build() {
 Row() {
 Column({ space: 10 }) {
 Button('openCustomDialog弹窗')
 .fontSize(20)
 .onClick(() => {
 this.promptAction.openCustomDialog(this.contentNode, this.baseDialogOptions)
 .catch((err: BusinessError) => {
 console.error("openCustomDialog error: " + err.code + " " + err.message);
 })
 .then(() => {
 let bottomOrder: LevelOrder = this.promptAction.getBottomOrder();
 if (bottomOrder !== undefined) {
 console.error('bottomOrder: ' + bottomOrder.getOrder());
 }
 })
 })
 }.width('100%')
 }.height('100%')
 }
}

openToast
18+

openToast(options: promptAction.ShowToastOptions): Promise<number>

显示即时反馈。使用Promise异步回调返回即时反馈的id，可供closeToast使用。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

options

promptAction.ShowToastOptions

是

Toast选项。

返回值

类型

说明

Promise<number>

Promise对象。返回即时反馈的id，可供closeToast使用。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用openToast和closeToast接口，展示了弹出以及关闭Toast的功能。

import { PromptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 @State toastId: number = 0;
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('OpenToast')
 .height(100)
 .onClick(() => {
 this.promptAction.openToast({
 message: 'Toast Message',
 duration: 10000,
 }).then((toastId: number) => {
 this.toastId = toastId;
 })
 .catch((error: BusinessError) => {
 console.error(`openToast error code is ${error.code}, message is ${error.message}`);
 })
 })
 Blank().height(50)
 Button('Close Toast')
 .height(100)
 .onClick(() => {
 try {
 this.promptAction.closeToast(this.toastId);
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`CloseToast error code is ${code}, message is ${message}`);
 };
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

closeToast
18+

closeToast(toastId: number): void

关闭即时反馈。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数

参数名

类型

必填

说明

toastId

number

是

openToast返回的id。

错误码：

以下错误码的详细介绍请参见
通用错误码
、
弹窗错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

103401

Cannot find the toast.

示例：

请参考
openToast18
的示例。

showToast

showToast(options: promptAction.ShowToastOptions): void

创建并显示即时反馈。

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

promptAction.ShowToastOptions

是

Toast选项。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用showToast接口，创建并显示即时反馈。

import { PromptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showToast')
 .onClick(() => {
 try {
 this.promptAction.showToast({
 message: 'Message Info',
 duration: 2000
 });
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`showToast args error code is ${code}, message is ${message}`);
 };
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

showDialog

showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void

创建并显示对话框，对话框响应结果使用callback异步回调返回。

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

promptAction.ShowDialogOptions

是

页面显示对话框信息描述。

callback

AsyncCallback<
promptAction.ShowDialogSuccessResponse
>

是

回调函数。弹出对话框成功，err为undefined，data为获取到的对话框响应结果，否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用showDialog接口，展示了弹出对话框以及返回对话框响应结果的功能。

import { PromptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showDialog')
 .onClick(() => {
 try {
 this.promptAction.showDialog({
 title: 'showDialog Title Info',
 message: 'Message Info',
 buttons: [
 {
 text: 'button1',
 color: '#000000'
 },
 {
 text: 'button2',
 color: '#000000'
 }
 ]
 }, (err, data) => {
 if (err) {
 console.error('showDialog err: ' + err);
 return;
 }
 console.info('showDialog success callback, click button: ' + data.index);
 });
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`showDialog args error code is ${code}, message is ${message}`);
 };
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

showDialog

showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>

创建并显示对话框，使用Promise异步回调获取对话框的响应结果。

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

promptAction.ShowDialogOptions

是

对话框选项。

返回值：

类型

说明

Promise<
promptAction.ShowDialogSuccessResponse
>

Promise对象，返回对话框的响应结果。

错误码：

以下错误码的详细介绍请参见
 通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用showDialog接口，展示了弹出对话框以及通过Promise获取对话框响应结果的功能。

import { PromptAction } from '@kit.ArkUI';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showDialog')
 .onClick(() => {
 this.promptAction.showDialog({
 title: 'Title Info',
 message: 'Message Info',
 buttons: [
 {
 text: 'button1',
 color: '#000000'
 },
 {
 text: 'button2',
 color: '#000000'
 }
 ],
 })
 .then(data => {
 console.info('showDialog success, click button: ' + data.index);
 })
 .catch((err: Error) => {
 console.error('showDialog error: ' + err);
 })
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

showActionMenu
11+

showActionMenu(options: promptAction.ActionMenuOptions, callback: AsyncCallback<
promptAction.ActionMenuSuccessResponse
>): void

创建并显示操作菜单，菜单响应结果使用callback异步回调返回。

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

promptAction.ActionMenuOptions

是

操作菜单选项。

callback

AsyncCallback<
promptAction.ActionMenuSuccessResponse
>

是

回调函数。弹出操作菜单成功，err为undefined，data为获取到的操作菜单响应结果，否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

import { PromptAction, promptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showActionMenu')
 .onClick(() => {
 try {
 this.promptAction.showActionMenu({
 title: 'Title Info',
 buttons: [
 {
 text: 'item1',
 color: '#666666'
 },
 {
 text: 'item2',
 color: '#000000'
 }
 ]
 }, (err: BusinessError, data: promptAction.ActionMenuSuccessResponse) => {
 if (err) {
 console.error('showActionMenu err: ' + err);
 return;
 }
 console.info('showActionMenu success callback, click button: ' + data.index);
 });
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`showActionMenu args error code is ${code}, message is ${message}`);
 };
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

showActionMenu

showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>

创建并显示操作菜单，通过Promise异步回调获取菜单的响应结果。

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

promptAction.ActionMenuOptions

是

操作菜单选项。

返回值：

类型

说明

Promise<
promptAction.ActionMenuSuccessResponse
>

Promise对象，返回菜单的响应结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用showActionMenu接口，展示了弹出操作菜单以及通过Promise获取操作菜单响应结果的功能。

import { PromptAction } from '@kit.ArkUI';
@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showActionMenu')
 .onClick(() => {
 this.promptAction.showActionMenu({
 title: 'showActionMenu Title Info',
 buttons: [
 {
 text: 'item1',
 color: '#666666'
 },
 {
 text: 'item2',
 color: '#000000'
 },
 ]
 })
 .then(data => {
 console.info('showActionMenu success, click button: ' + data.index);
 })
 .catch((err: Error) => {
 console.error('showActionMenu error: ' + err);
 })
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

openCustomDialog
12+

openCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options?: promptAction.BaseDialogOptions): Promise<void>

创建并弹出dialogContent对应的自定义弹窗，使用Promise异步回调。通过该接口弹出的弹窗内容样式完全按照dialogContent中设置的样式显示，即相当于customDialog设置customStyle为true时的显示效果。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

dialogContent

ComponentContent<T>

是

自定义弹窗中显示的组件内容。

options

promptAction.BaseDialogOptions

否

弹窗样式。

说明：
 如果BaseDialogOptions中的
isModal
与
showInSubWindow
同���设置为true，则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

Dialog content error. The ComponentContent is incorrect.

103302

Dialog content already exist. The ComponentContent has already been opened.

示例：

该示例通过监听
系统环境信息
（系统语言、深浅色等）的变化，调用
ComponentContent<T>
 的
update
和
updateConfiguration
实现自定义弹窗的数据更新及节点的全量刷新。

import { ComponentContent } from '@kit.ArkUI';
import { AbilityConstant, Configuration, EnvironmentCallback, ConfigurationConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';

class Params {
 text: string = "";
 colorMode: resourceManager.ColorMode = resourceManager.ColorMode.LIGHT

 constructor(text: string, colorMode: resourceManager.ColorMode) {
 this.text = text
 this.colorMode = colorMode
 }
}

@Builder
function BuilderDialog(params: Params) {
 Column() {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 }.backgroundColor(params.colorMode == resourceManager.ColorMode.LIGHT ? "#D5D5D5" : "#004AAF")
}

@Entry
@Component
struct Index {
 @State message: string = "hello";
 contentNode: ComponentContent<Params> | null = null;
 callbackId: number | undefined = 0;

 aboutToAppear(): void {
 let environmentCallback: EnvironmentCallback = {
 onMemoryLevel: (level: AbilityConstant.MemoryLevel): void => {
 },
 onConfigurationUpdated: (config: Configuration): void => {
 console.info(`onConfigurationUpdated ${config}`);
 this.getUIContext().getHostContext()?.getApplicationContext().resourceManager.getConfiguration((err,
 config) => {
 // 调用ComponentContent的update更新colorMode信息
 this.contentNode?.update(new Params(this.message, config.colorMode))
 setTimeout(() => {
 // 调用ComponentContent的updateConfiguration，触发节点的全量更新
 this.contentNode?.updateConfiguration()
 })
 })
 }
 }
 // 注册监听系统环境变化监听器
 this.callbackId =
 this.getUIContext().getHostContext()?.getApplicationContext().on('environment', environmentCallback)
 // 设置应用深浅色跟随系统
 this.getUIContext()
 .getHostContext()?.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET)
 }

 aboutToDisappear() {
 // 解注册监听系统环境变化的回调
 this.getUIContext().getHostContext()?.getApplicationContext().off('environment', this.callbackId)
 this.contentNode?.dispose()
 }

 build() {
 Row() {
 Column() {
 Button("click me")
 .onClick(() => {
 let uiContext = this.getUIContext();
 let promptAction = uiContext.getPromptAction();
 if (this.contentNode == null && uiContext.getHostContext() != undefined) {
 this.contentNode = new ComponentContent(uiContext, wrapBuilder(BuilderDialog), new Params(this.message,
 uiContext.getHostContext()!!.getApplicationContext().resourceManager.getConfigurationSync().colorMode))
 }
 if (this.contentNode == null) {
 return
 }
 promptAction.closeCustomDialog(this.contentNode)
 promptAction.openCustomDialog(this.contentNode).then(() => {
 console.info("succeeded")
 }).catch((error: BusinessError) => {
 console.error(`OpenCustomDialog args error code is ${error.code}, message is ${error.message}`);
 })
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

openCustomDialog
12+

openCustomDialog(options: promptAction.CustomDialogOptions): Promise<number>

创建并弹出自定义弹窗。使用Promise异步回调返回对话框的id，可供closeCustomDialog使用。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

options

promptAction.CustomDialogOptions

是

自定义弹窗的内容。

说明：
 如果BaseDialogOptions中的
isModal
与
showInSubWindow
同时设置为true，则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。

返回值：

类型

说明

Promise<number>

Promise对象。返回对话框id，可供closeCustomDialog使用。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 private customDialogComponentId: number = 0;

 @Builder
 customDialogComponent() {
 Column() {
 Text('打开了一个弹窗').fontSize(20)
 Row({ space: 10 }) {
 Button('取消').onClick(() => {
 try {
 this.getUIContext().getPromptAction().closeCustomDialog(this.customDialogComponentId)
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`closeCustomDialog error code is ${code}, message is ${message}`);
 }
 }).width(100).backgroundColor('#d5d5d5').fontColor('#707070')
 Button('确定').onClick(() => {
 try {
 this.getUIContext().getPromptAction().closeCustomDialog(this.customDialogComponentId)
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`closeCustomDialog error code is ${code}, message is ${message}`);
 }
 }).width(100)
 }
 }.height(150).padding(20).justifyContent(FlexAlign.SpaceBetween)
 }

 build() {
 Row() {
 Column({ space: 20 }) {
 Button('Click Me')
 .fontSize(30)
 .onClick(() => {
 this.getUIContext()
 .getPromptAction()
 .openCustomDialog({
 builder: () => {
 this.customDialogComponent()
 },
 onWillDismiss: (dismissDialogAction: DismissDialogAction) => {
 console.info('reason' + JSON.stringify(dismissDialogAction.reason));
 console.info('dialog onWillDismiss');
 if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {
 dismissDialogAction.dismiss();
 }
 if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {
 dismissDialogAction.dismiss();
 }
 }
 })
 .then((dialogId: number) => {
 this.customDialogComponentId = dialogId;
 })
 .catch((error: BusinessError) => {
 console.error(`openCustomDialog error code is ${error.code}, message is ${error.message}`);
 })
 })
 }
 .width('100%')
 }
 .height('100%')
 }
}

openCustomDialogWithController
18+

openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>, controller: promptAction.DialogController, options?: promptAction.BaseDialogOptions): Promise<void>

创建并弹出dialogContent对应的自定义弹窗，使用Promise异步回调。支持传入弹窗控制器与自定义弹窗绑定，后续可以通过控制器控制自定义弹窗。

通过该接口弹出的弹窗内容样式完全按照dialogContent中设置的样式显示，即相当于customDialog设置customStyle为true时的显示效果。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

dialogContent

ComponentContent<T>

是

自定义弹窗中显示的组件内容。

controller

promptAction.DialogController

是

自定义弹窗的控制器。

options

promptAction.BaseDialogOptions

否

自定义弹窗的样式。

说明：
 如果BaseDialogOptions中的
isModal
与
showInSubWindow
同时设置为true，则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

Dialog content error. The ComponentContent is incorrect.

103302

Dialog content already exist. The ComponentContent has already been opened.

示例：

该示例通过调用openCustomDialog接口，展示了支持传入弹窗控制器与自定义弹窗绑定的功能。

import { BusinessError } from '@kit.BasicServicesKit';
import { ComponentContent, promptAction } from '@kit.ArkUI';

class Params {
 text: string = "";
 dialogController: promptAction.DialogController = new promptAction.DialogController();

 constructor(text: string, dialogController: promptAction.DialogController) {
 this.text = text;
 this.dialogController = dialogController;
 }
}

@Builder
function buildText(params: Params) {
 Column() {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 Button('点我关闭弹窗：通过外部传递的DialogController')
 .onClick(() => {
 if (params.dialogController != undefined) {
 params.dialogController.close();
 }
 })
 }.backgroundColor('#FFF0F0F0')
}

@Entry
@ComponentV2
struct Index {
 @Local message: string = "hello";
 private dialogController: promptAction.DialogController = new promptAction.DialogController();

 build() {
 Row() {
 Column() {
 Button("click me")
 .onClick(() => {
 let uiContext = this.getUIContext();
 let promptAction = uiContext.getPromptAction();
 let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText),
 new Params(this.message, this.dialogController));
 promptAction.openCustomDialogWithController(contentNode, this.dialogController)
 .then(() => {
 console.info('succeeded');
 })
 .catch((error: BusinessError) => {
 console.error(`OpenCustomDialogWithController args error code is ${error.code}, message is ${error.message}`);
 })
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

updateCustomDialog
12+

updateCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options: promptAction.BaseDialogOptions): Promise<void>

更新已弹出的dialogContent对应的自定义弹窗的样式，使用Promise异步回调。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

dialogContent

ComponentContent<T>

是

自定义弹窗中显示的组件内容。

options

promptAction.BaseDialogOptions

是

弹窗样式，目前仅支持更新alignment、offset、autoCancel、maskColor。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

Dialog content error. The ComponentContent is incorrect.

103303

Dialog content not found. The ComponentContent cannot be found.

示例：

该示例通过调用updateCustomDialog接口，动态调整已弹出自定义弹窗的位置。

import { BusinessError } from '@kit.BasicServicesKit';
import { ComponentContent } from '@kit.ArkUI';

class Params {
 text: string = "";

 constructor(text: string) {
 this.text = text;
 }
}

@Builder
function buildText(params: Params) {
 Column() {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 }.backgroundColor('#FFF0F0F0')
}

@Entry
@Component
struct Index {
 @State message: string = "hello";

 build() {
 Row() {
 Column() {
 Button("click me")
 .onClick(() => {
 let uiContext = this.getUIContext();
 let promptAction = uiContext.getPromptAction();
 let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));
 promptAction.openCustomDialog(contentNode)
 .then(() => {
 console.info('succeeded');
 })
 .catch((error: BusinessError) => {
 console.error(`updateCustomDialog args error code is ${error.code}, message is ${error.message}`);
 })

 setTimeout(() => {
 promptAction.updateCustomDialog(contentNode, { alignment: DialogAlignment.CenterEnd })
 .then(() => {
 console.info('succeeded');
 })
 .catch((error: BusinessError) => {
 console.error(`updateCustomDialog args error code is ${error.code}, message is ${error.message}`);
 })
 }, 2000); //2秒后自动更新弹窗位置
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

closeCustomDialog
12+

closeCustomDialog<T extends Object>(dialogContent: ComponentContent<T>): Promise<void>

关闭已弹出的dialogContent对应的自定义弹窗，使用Promise异步回调。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

dialogContent

ComponentContent<T>

是

自定义弹窗中显示的组件内容。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

Dialog content error. The ComponentContent is incorrect.

103303

Dialog content not found. The ComponentContent cannot be found.

示例：

该示例通过调用closeCustomDialog接口，关闭已弹出的dialogContent对应的自定义弹窗。

import { BusinessError } from '@kit.BasicServicesKit';
import { ComponentContent } from '@kit.ArkUI';

class Params {
 text: string = "";

 constructor(text: string) {
 this.text = text;
 }
}

@Builder
function buildText(params: Params) {
 Column() {
 Text(params.text)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .margin({ bottom: 36 })
 }.backgroundColor('#FFF0F0F0')
}

@Entry
@Component
struct Index {
 @State message: string = "hello";

 build() {
 Row() {
 Column() {
 Button("click me")
 .onClick(() => {
 let uiContext = this.getUIContext();
 let promptAction = uiContext.getPromptAction();
 let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));
 promptAction.openCustomDialog(contentNode)
 .then(() => {
 console.info('succeeded');
 })
 .catch((error: BusinessError) => {
 console.error(`OpenCustomDialog args error code is ${error.code}, message is ${error.message}`);
 })
 setTimeout(() => {
 promptAction.closeCustomDialog(contentNode)
 .then(() => {
 console.info('succeeded');
 })
 .catch((error: BusinessError) => {
 console.error(`OpenCustomDialog args error code is ${error.code}, message is ${error.message}`);
 })
 }, 2000); //2秒后自动关闭
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

closeCustomDialog
12+

closeCustomDialog(dialogId: number): void

关闭自定义弹窗。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

dialogId

number

是

openCustomDialog返回的对话框id。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

import { PromptAction } from '@kit.ArkUI';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();
 private customDialogComponentId: number = 0;

 @Builder
 customDialogComponent() {
 Column() {
 Text('弹窗').fontSize(30)
 Row({ space: 50 }) {
 Button("确认").onClick(() => {
 this.promptAction.closeCustomDialog(this.customDialogComponentId);
 })
 Button("取消").onClick(() => {
 this.promptAction.closeCustomDialog(this.customDialogComponentId);
 })
 }
 }.height(200).padding(5).justifyContent(FlexAlign.SpaceBetween)
 }

 build() {
 Row() {
 Column() {
 Button("click me")
 .onClick(() => {
 this.promptAction.openCustomDialog({
 builder: () => {
 this.customDialogComponent()
 },
 onWillDismiss: (dismissDialogAction: DismissDialogAction) => {
 console.info(`reason ${dismissDialogAction.reason}`);
 console.info('dialog onWillDismiss');
 if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {
 dismissDialogAction.dismiss();
 }
 if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {
 dismissDialogAction.dismiss();
 }
 }
 }).then((dialogId: number) => {
 this.customDialogComponentId = dialogId;
 })
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

presentCustomDialog
18+

presentCustomDialog(builder: CustomBuilder | CustomBuilderWithId, controller?: promptAction.DialogController, options?: promptAction.DialogOptions): Promise<number>

创建并弹出自定义弹窗。使用Promise异步回调返回对话框的id，可供closeCustomDialog使用。

支持在自定义弹窗内容中持有弹窗ID进行对应操作。支持传入弹窗控制器与自定义弹窗绑定，后续可以通过控制器控制自定义弹窗。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

builder

CustomBuilder
 | 
CustomBuilderWithId

是

自定义弹窗的内容。

controller

promptAction.DialogController

否

自定义弹窗的控制器。

options

promptAction.DialogOptions

否

自定义弹窗的样式。

说明：
 如果BaseDialogOptions中的
isModal
与
showInSubWindow
同时设置为true，则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。

返回值：

类型

说明

Promise<number>

Promise对象。返回自定义弹窗ID。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

import { BusinessError } from '@kit.BasicServicesKit';
import { PromptAction, promptAction } from '@kit.ArkUI';

@Entry
@ComponentV2
struct Index {
 @Local message: string = "hello";
 private ctx: UIContext = this.getUIContext();
 private promptAction: PromptAction = this.ctx.getPromptAction();
 private dialogController: promptAction.DialogController = new promptAction.DialogController();

 private customDialogComponentId: number = 0;
 @Builder customDialogComponent() {
 Column() {
 Text(this.message).fontSize(30)
 Row({ space: 10 }) {
 Button("通过DialogId关闭").onClick(() => {
 this.promptAction.closeCustomDialog(this.customDialogComponentId);
 })
 Button("通过DialogController关闭").onClick(() => {
 this.dialogController.close();
 })
 }
 }.height(200).padding(5).justifyContent(FlexAlign.SpaceBetween)
 }

 @Builder customDialogComponentWithId(dialogId: number) {
 Column() {
 Text(this.message).fontSize(30)
 Row({ space: 10 }) {
 Button("通过DialogId关闭").onClick(() => {
 this.promptAction.closeCustomDialog(dialogId);
 })
 Button("通过DialogController关闭").onClick(() => {
 this.dialogController.close();
 })
 }
 }.height(200).padding(5).justifyContent(FlexAlign.SpaceBetween)
 }

 build() {
 Row() {
 Column({ space: 10 }) {
 Button('presentCustomDialog')
 .fontSize(20)
 .onClick(() => {
 this.promptAction.presentCustomDialog(() => {
 this.customDialogComponent()
 }, this.dialogController)
 .then((dialogId: number) => {
 this.customDialogComponentId = dialogId;
 })
 .catch((err: BusinessError) => {
 console.error("presentCustomDialog error: " + err.code + " " + err.message);
 })
 })
 Button('presentCustomDialog with id')
 .fontSize(20)
 .onClick(() => {
 this.promptAction.presentCustomDialog((dialogId: number) => {
 this.customDialogComponentWithId(dialogId)
 }, this.dialogController)
 .catch((err: BusinessError) => {
 console.error("presentCustomDialog with id error: " + err.code + " " + err.message);
 })
 })
 }
 .width('100%')
 .height('100%')
 }
 .height('100%')
 }
}

openPopup
18+

openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: PopupCommonOptions): Promise<void>

创建并弹出以content作为内容的Popup弹窗，使用Promise异步回调。

使用该接口时，若未传入有效的target，则无法弹出popup弹窗。

由于
updatePopup
和
closePopup
依赖content去更新或者关闭指定的popup弹窗，开发者需自行维护传入的content。

如果在wrapBuilder中包含其他组件（例如：
Popup
、
Chip
组件），则
ComponentContent
应采用带有四个参数的构造函数constructor，其中options参数应传递{ nestingBuilderSupported: true }。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

popup弹窗中显示的组件内容。

target

TargetInfo

是

需要绑定组件的信息。

options

PopupCommonOptions

否

popup弹窗样式。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103302

The ComponentContent already exists.

103304

The targetId does not exist.

103305

The node of targetId is not in the component tree.

示例：

该示例通过调用openPopup、updatePopup和closePopup接口，展示了弹出、更新以及关闭Popup的功能。

import { ComponentContent, FrameNode } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

interface PopupParam {
 updateFunc?: () => void;
 closeFunc?: () => void;
}

export function showPopup(context: UIContext, uniqueId: number, contentNode: ComponentContent<PopupParam>,
 popupParam: PopupParam) {
 const promptAction = context.getPromptAction();
 let frameNode: FrameNode | null = context.getFrameNodeByUniqueId(uniqueId);
 let targetId = frameNode?.getFirstChild()?.getUniqueId();
 promptAction.openPopup(contentNode, { id: targetId }, {
 radius: 16,
 mask: { color: Color.Pink },
 enableArrow: true,
 })
 .then(() => {
 console.info('openPopup success');
 })
 .catch((err: BusinessError) => {
 console.error('openPopup error: ' + err.code + ' ' + err.message);
 })
 popupParam.updateFunc = () => {
 promptAction.updatePopup(contentNode, {
 enableArrow: false
 }, true)
 .then(() => {
 console.info('updatePopup success');
 })
 .catch((err: BusinessError) => {
 console.error('updatePopup error: ' + err.code + ' ' + err.message);
 })
 }
 popupParam.closeFunc = () => {
 promptAction.closePopup(contentNode)
 .then(() => {
 console.info('closePopup success');
 })
 .catch((err: BusinessError) => {
 console.error('closePopup error: ' + err.code + ' ' + err.message);
 })
 }
}

@Builder
function buildText(param?: PopupParam) {
 Column() {
 Text('popup')
 Button('Update Popup')
 .fontSize(20)
 .onClick(() => {
 param?.updateFunc?.();
 })
 Button('Close Popup')
 .fontSize(20)
 .onClick(() => {
 param?.closeFunc?.();
 })
 }
}

@Entry
@Component
struct Index {
 build() {
 Column() {
 Button('Open Popup')
 .fontSize(20)
 .onClick(() => {
 let context = this.getUIContext();
 const popupParam: PopupParam = {};
 const contentNode = new ComponentContent(context, wrapBuilder(buildText), popupParam);
 showPopup(context, this.getUniqueId(), contentNode, popupParam);
 })
 }
 }
}

updatePopup
18+

updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions, partialUpdate?: boolean ): Promise<void>

更新content对应的Popup弹窗的样式，使用Promise异步回调。

不支持更新showInSubWindow、focusable、onStateChange、onWillDismiss、transition。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

popup弹窗中显示的组件内容。

options

PopupCommonOptions

是

popup弹窗样式。

说明：

不支持更新showInSubWindow、focusable、onStateChange、onWillDismiss、transition。

partialUpdate

boolean

否

popup弹窗更新方式，默认值为false。

说明：

true：增量更新，此时更新options中的指定属性，其它属性保留当前值。options中传入的属性为异常值或undefined时，不会对该属性进行更新。

false：全量更新，此时更新options中的指定属性，并且其他属性恢复默认值。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103303

The ComponentContent cannot be found.

示例：

请参考
openPopup
示例。

closePopup
18+

closePopup<T extends Object>(content: ComponentContent<T>): Promise<void>

关闭content对应的Popup弹窗，使用Promise异步回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

popup弹窗中显示的组件内容。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
���窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103303

The ComponentContent cannot be found.

示例：

请参考
openPopup
示例。

openMenu
18+

openMenu<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: MenuOptions): Promise<void>

创建并弹出以content作为内容的Menu弹窗。使用Promise异步回调。

使用该接口时，若未传入有效的target，则无法弹出menu弹窗。

由于
updateMenu
和
closeMenu
依赖content去更新或者关闭指定的menu弹窗，开发者需自行维护传入的content。

如果在wrapBuilder中包含其他组件（例如：
Popup
、
Chip
组件），则
ComponentContent
应采用带有四个参数的构造函数constructor，其中options参数应传递{ nestingBuilderSupported: true }。

子窗弹窗里不能再弹出子窗弹窗，例如
openMenu
设置了showInSubWindow为true时，则不能再弹出另一个设置了showInSubWindow为true的弹窗。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

menu弹窗中显示的组件内容。

target

TargetInfo

是

需要绑定组件的信息。

options

MenuOptions

否

menu弹窗样式。

说明：

title属性不生效。

preview参数仅支持设置MenuPreviewMode类型。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103302

The ComponentContent already exists.

103304

The targetId does not exist.

103305

The node of targetId is not in the component tree.

示例：

该示例通过调用openMenu接口，展示了弹出Menu的功能。

import { ComponentContent, FrameNode } from '@kit.ArkUI';

export function doSomething(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 showMenu(context, uniqueId, contentNode);
}

@Builder
function MyMenu() {
 Column() {
 Menu() {
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项1" })
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项2" })
 }
 }
 .width('80%')
 .padding('20lpx')
}

export function showMenu(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 const promptAction = context.getPromptAction();
 let frameNode: FrameNode | null = context.getFrameNodeByUniqueId(uniqueId);
 let frameNodeTarget = frameNode?.getFirstChild();
 frameNodeTarget = frameNodeTarget?.getChild(0);
 let targetId = frameNodeTarget?.getUniqueId();
 promptAction.openMenu(contentNode, { id: targetId }, {
 enableArrow: true,
 });
}

@Entry
@Component
struct Index {
 build() {
 Column() {
 Button('OpenMenu', { type: ButtonType.Normal, stateEffect: true })
 .borderRadius('16lpx')
 .width('80%')
 .margin(10)
 .onClick(() => {
 let context = this.getUIContext();
 const contentNode = new ComponentContent(context, wrapBuilder(MyMenu));
 doSomething(context, this.getUniqueId(), contentNode);
 })
 }
 }
}

updateMenu
18+

updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions, partialUpdate?: boolean ): Promise<void>

更新content对应的Menu弹窗的样式。使用Promise异步回调。

不支持更新showInSubWindow、preview、previewAnimationOptions、transition、onAppear、aboutToAppear、onDisappear、aboutToDisappear、onWillAppear、onDidAppear、onWillDisappear和onDidDisappear。

支持mask通过设置
MenuMaskType
实现更新蒙层样式，不支持mask通过设置boolean实现蒙层从无到有或者从有到无的更新。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

menu弹窗中显示的组件内容。

options

MenuOptions

是

menu弹窗样式。

说明：

1. 不支持更新showInSubWindow、preview、previewAnimationOptions、transition、onAppear、aboutToAppear、onDisappear、aboutToDisappear、onWillAppear、onDidAppear、onWillDisappear和onDidDisappear。

2. 支持mask通过设置
MenuMaskType
实现更新蒙层样式，不支持mask通过设置boolean实现蒙层从无到有或者从有到无的更新。

partialUpdate

boolean

否

menu弹窗更新方式，默认值为false。

说明：

1. true为增量更新，保留当前值，更新options中的指定属性。

2. false为全量更新，除options中的指定属性，其他属性恢复默认值。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103303

The ComponentContent cannot be found.

示例：

该示例通过调用updateMenu接口，展示了更新Menu箭头样式的功能。

import { ComponentContent, FrameNode } from '@kit.ArkUI';

export function doSomething(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 showMenu(context, uniqueId, contentNode);
}

@Builder
function MyMenu() {
 Column() {
 Menu() {
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项1" })
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项2" })
 }
 }
 .width('80%')
 .padding('20lpx')
}

export function showMenu(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 const promptAction = context.getPromptAction();
 let frameNode: FrameNode | null = context.getFrameNodeByUniqueId(uniqueId);
 let frameNodeTarget = frameNode?.getFirstChild();
 frameNodeTarget = frameNodeTarget?.getChild(0);
 let targetId = frameNodeTarget?.getUniqueId();
 promptAction.openMenu(contentNode, { id: targetId }, {
 enableArrow: true,
 });
 setTimeout(() => {
 promptAction.updateMenu(contentNode, {
 enableArrow: false,
 });
 }, 2000);
}

@Entry
@Component
struct Index {
 build() {
 Column() {
 Button('OpenMenu', { type: ButtonType.Normal, stateEffect: true })
 .borderRadius('16lpx')
 .width('80%')
 .margin(10)
 .onClick(() => {
 let context = this.getUIContext();
 const contentNode = new ComponentContent(context, wrapBuilder(MyMenu));
 doSomething(context, this.getUniqueId(), contentNode);
 })
 }
 }
}

closeMenu
18+

closeMenu<T extends Object>(content: ComponentContent<T>): Promise<void>

关闭content对应的Menu弹窗。使用Promise异步回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

content

ComponentContent<T>

是

menu弹窗中显示的组件内容。

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
弹窗错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

103301

The ComponentContent is incorrect.

103303

The ComponentContent cannot be found.

示例：

该示例通过调用closeMenu接口，展示了关闭Menu的功能。

import { ComponentContent, FrameNode } from '@kit.ArkUI';

export function doSomething(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 showMenu(context, uniqueId, contentNode);
}

@Builder
function MyMenu() {
 Column() {
 Menu() {
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项1" })
 MenuItem({ startIcon: $r("app.media.startIcon"), content: "菜单选项2" })
 }
 }
 .width('80%')
 .padding('20lpx')
}

export function showMenu(context: UIContext, uniqueId: number, contentNode: ComponentContent<Object>) {
 const promptAction = context.getPromptAction();
 let frameNode: FrameNode | null = context.getFrameNodeByUniqueId(uniqueId);
 let frameNodeTarget = frameNode?.getFirstChild();
 frameNodeTarget = frameNodeTarget?.getChild(0);
 let targetId = frameNodeTarget?.getUniqueId();
 promptAction.openMenu(contentNode, { id: targetId }, {
 enableArrow: true,
 });
 setTimeout(() => {
 promptAction.closeMenu(contentNode);
 }, 2000);
}

@Entry
@Component
struct Index {
 build() {
 Column() {
 Button('OpenMenu', { type: ButtonType.Normal, stateEffect: true })
 .borderRadius('16lpx')
 .width('80%')
 .margin(10)
 .onClick(() => {
 let context = this.getUIContext();
 const contentNode = new ComponentContent(context, wrapBuilder(MyMenu));
 doSomething(context, this.getUniqueId(), contentNode);
 })
 }
 }
}

showActionMenu
(deprecated)

showActionMenu(options: promptAction.ActionMenuOptions, callback: 
promptAction.ActionMenuSuccessResponse
): void

创建并显示操作菜单，菜单响应结果使用callback异步回调返回。

从API version 10开始支持，从API version 11开始废弃，建议使用
showActionMenu
替代。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full。

参数：

参数名

类型

必填

说明

options

promptAction.ActionMenuOptions

是

操作菜单选项。

callback

promptAction.ActionMenuSuccessResponse

是

回调函数，返回菜单的响应结果。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
接口调用异常错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed.

100001

Internal error.

示例：

该示例通过调用showActionMenu接口，展示了弹出操作菜单以及返回菜单响应结果的功能。

import { PromptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 promptAction: PromptAction = this.getUIContext().getPromptAction();

 build() {
 Column() {
 Button('showActionMenu')
 .onClick(() => {
 try {
 this.promptAction.showActionMenu({
 title: 'Title Info',
 buttons: [
 {
 text: 'item1',
 color: '#666666'
 },
 {
 text: 'item2',
 color: '#000000'
 }
 ]
 }, { index: 0 });
 } catch (error) {
 let message = (error as BusinessError).message;
 let code = (error as BusinessError).code;
 console.error(`showActionMenu args error code is ${code}, message is ${message}`);
 }
 ;
 })
 }.height('100%').width('100%').justifyContent(FlexAlign.Center)
 }
}

---
*2026-04-22T15:55:01.661Z*