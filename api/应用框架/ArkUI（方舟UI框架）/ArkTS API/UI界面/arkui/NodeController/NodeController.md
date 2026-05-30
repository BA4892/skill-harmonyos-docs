# NodeController

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-arkui-nodecontroller`

**DocID**: `3d8996c260574e3997299609296e9cb6`

**NodeID**: `000201775796216197596218eaf3f72c`

---

NodeController

NodeController用于实现自定义节点的创建、显示、更新等操作的管理，并负责将自定义节点挂载到
NodeContainer
上。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

NodeController对象不支持使用JSON序列化。

导入模块

import { NodeController } from '@kit.ArkUI';

NodeController

通常搭配
NodeContainer
进行使用。用于创建控制器管理绑定的
NodeContainer
组件。一个NodeController只允许与一个
NodeContainer
进行绑定。最佳实践请参考
组件动态创建-组件动态添加、更新和删除
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]makeNode

abstract makeNode(uiContext : UIContext): FrameNode | null

当实例绑定的
NodeContainer
创建的时候进行回调。回调方法将返回一个节点，将该节点挂载至
NodeContainer
。

或者可以通过NodeController的rebuild()方法进行回调的触发。

NodeContainer
不支持跨实例复用。如果出现跨实例复用
NodeContainer
，传入
NodeContainer
的
NodeController
触发
makeNode
回调方法时，入参中的
UIContext
对象可能为undefined，此时需要开发者判断入参中的
UIContext
对象是否为undefined，防止后续使用此入参时出现
UIContext无效的JS异常
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

uiContext

UIContext

是

回调该方法的时候，绑定
NodeContainer
的UI上下文。

返回值：

类型

说明

FrameNode
| null

一个FrameNode对象，返回的节点将被挂载至
NodeContainer
的占位节点上。若返回null对象，将清空对应
NodeContainer
的子节点。

[h2]aboutToAppear

aboutToAppear?(): void

当NodeController绑定的
NodeContainer
挂载显示后触发此回调。

回调时机参考
onAppear
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]aboutToDisappear

aboutToDisappear?(): void

当NodeController绑定的
NodeContainer
销毁时触发此回调。

回调时机参考
onDisAppear
。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]onAttach
18+

onAttach?(): void

当NodeController绑定的
NodeContainer
挂载至主节点树时触发此回调。

回调时机参考
onAttach
。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]onDetach
18+

onDetach?(): void

当NodeController绑定的
NodeContainer
从主节点树卸载时触发此回调。

回调时机参考
onDetach
。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]onWillBind
18+

onWillBind?(containerId: number): void

当NodeController与
NodeContainer
即将绑定前触发此回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

containerId

number

是

回调该方法时，NodeController与NodeContainerId对应的
NodeContainer
即将绑定。

[h2]onWillUnbind
18+

onWillUnbind?(containerId: number): void

当NodeController与
NodeContainer
即将解绑前触发此回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

containerId

number

是

回调该方法时，NodeController与NodeContainerId对应的
NodeContainer
即将解绑。

[h2]onBind
18+

onBind?(containerId: number): void

当NodeController与
NodeContainer
绑定后触发此回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

containerId

number

是

回调该方法时，NodeController与NodeContainerId对应的
NodeContainer
绑定完成。

[h2]onUnbind
18+

onUnbind?(containerId: number): void

当NodeController与
NodeContainer
解绑后触发此回调。

元服务API：
 从API version 18开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

containerId

number

是

回调该方法时，NodeController与NodeContainerId对应的
NodeContainer
解绑完成。

[h2]aboutToResize

aboutToResize?(size: Size): void

当NodeController绑定的
NodeContainer
布局的时候触发此回调。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

size

Size

是

用于返回组件布局大小的宽和高，单位为vp。

[h2]onTouchEvent

onTouchEvent?(event: TouchEvent): void

当NodeController绑定的
NodeContainer
收到Touch事件时触发此回调。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

event

TouchEvent

是

触摸事件。

[h2]rebuild

rebuild(): void

调用此接口通知
NodeContainer
组件重新回调
makeNode
方法，更改子节点。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

由于rebuild方法为应用主动调用的方法，且该操作与UI相关。需要开发者自行保证调用该接口时UI上下文有效，即与绑定的NodeContainer保持UI上下文一致。

监听回调等
UI上下文不明确
时，可以通过
UIContext
的
runScopedTask
方法明确调用时的UI上下文。

示例

[h2]示例1（添加节点布局、Touch、挂载和卸载时的生命周期回调）

该示例通过aboutToResize、onTouchEvent，实现了NodeContainer节点布局、收到Touch事件时的生命周期回调功能。

并通过aboutToAppear、aboutToDisappear接口，实现了NodeContainer节点挂载、卸载时的生命周期回调功能。

通过NodeController挂载BuilderNode节点。

import { NodeController, BuilderNode, Size, FrameNode, UIContext } from '@kit.ArkUI';

class Params {
 text: string = "this is a text"
}

@Builder
function buttonBuilder(params: Params) {
 Column() {
 Button(params.text)
 .fontSize(12)
 .borderRadius(8)
 .borderWidth(2)
 .backgroundColor(Color.Orange)
 }
}

class MyNodeController extends NodeController {
 private buttonNode: BuilderNode<[Params]> | null = null;
 private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);

 makeNode(uiContext: UIContext): FrameNode {
 if (this.buttonNode == null) {
 this.buttonNode = new BuilderNode(uiContext);
 this.buttonNode.build(this.wrapBuilder, { text: "This is a Button" })
 }
 return this.buttonNode!.getFrameNode()!;
 }

 aboutToResize(size: Size) {
 console.info(`aboutToResize width : ${size.width} height : ${size.height}`)
 }

 aboutToAppear() {
 console.info("aboutToAppear")
 }

 aboutToDisappear() {
 console.info("aboutToDisappear");
 }

 onTouchEvent(event: TouchEvent) {
 console.info("onTouchEvent");
 }
}

@Entry
@Component
struct Index {
 private myNodeController: MyNodeController = new MyNodeController();

 build() {
 Column() {
 NodeContainer(this.myNodeController)
 }
 .padding({ left: 35, right: 35, top: 35 })
 .width("100%")
 .height("100%")
 }
}

[h2]示例2（添加节点上下树和绑定解绑前后的生命周期回调）

该示例通过onAttach、onDetach接口，实现了NodeContainer节点上下主节点树的生命周期回调功能。

并通过onWillBind、onWillUnbind、onBind、onUnbind接口，实现了NodeContainer节点绑定和解绑前后的生命周期回调功能。

import { NodeController, BuilderNode, FrameNode, UIContext } from '@kit.ArkUI';

class Params {
 text: string = "this is a text"
}

@Builder
function buttonBuilder(params: Params) {
 Column() {
 Button(params.text)
 .fontSize(20)
 .borderRadius(8)
 .borderWidth(2)
 .backgroundColor(Color.Grey)
 }
}

class MyNodeController extends NodeController {
 private buttonNode: BuilderNode<[Params]> | null = null;
 private wrapBuilder: WrappedBuilder<[Params]> = wrapBuilder(buttonBuilder);

 makeNode(uiContext: UIContext): FrameNode {
 if (this.buttonNode == null) {
 this.buttonNode = new BuilderNode(uiContext);
 this.buttonNode.build(this.wrapBuilder, { text: "This is a Button" })
 }
 return this.buttonNode!.getFrameNode()!;
 }

 onAttach(): void {
 console.info("myButton on attach");
 }

 onDetach(): void {
 console.info("myButton on detach");
 }

 onWillBind(containerId: number): void {
 console.info(`myButton on WillBind${containerId}`);
 }

 onWillUnbind(containerId: number): void {
 console.info(`myButton on WillUnbind${containerId}`);
 }

 onBind(containerId: number): void {
 console.info(`myButton on bind: ${containerId}`);
 }

 onUnbind(containerId: number): void {
 console.info(`myButton on unbind: ${containerId}`);
 }
}

@Entry
@Component
struct Index {
 @State buttonShow: boolean = true
 @State buttonIndex: number = 0
 private buttonController: MyNodeController = new MyNodeController();
 private buttonNull: null = null;
 private buttonControllerArray: Array<MyNodeController | null> = [this.buttonController, this.buttonNull]

 build() {
 Column() {
 Row() {
 Button("Bind/Unbind")
 .onClick(() => {
 this.buttonIndex++;
 }).margin(5)
 Button("onAttach/onDetach")
 .onClick(() => {
 this.buttonShow = !this.buttonShow
 }).margin(5)
 }

 if (this.buttonShow) {
 NodeContainer(this.buttonControllerArray[this.buttonIndex % this.buttonControllerArray.length])
 }
 }
 .padding({ left: 35, right: 35 })
 .width("100%")
 .height("100%")
 }
}

---
*2026-04-22T15:53:58.159Z*