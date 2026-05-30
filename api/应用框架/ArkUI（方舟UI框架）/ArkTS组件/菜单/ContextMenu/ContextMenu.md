# ContextMenu

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `ts-methods-menu`

**DocID**: `0ab48b30aa2f41c6b8977095bee4f01a`

**NodeID**: `0002017757962161967735c59cc04c32`

---

ContextMenu

在页面范围内关闭通过
bindContextMenu
属性绑定的菜单。

从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

ContextMenu.close
(deprecated)

static close()

可以通过该方法在页面范围内关闭通过
bindContextMenu
为组件绑定的菜单。

从API version 18开始废弃，建议使用
UIContext
中的
getContextMenuController
获取
ContextMenuController
实例，再通过此实例调用替代方法
close
。

从API version 12开始，可以通过使用
UIContext
中的
getContextMenuController
来明确UI的执行上下文。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

示例

该示例为ContextMenu.close关闭通过bindContextMenu属性绑定的菜单。

推荐通过使用
UIContext
中的
getContextMenuController
来明确UI的执行上下文。

// xxx.ets
@Entry
@Component
struct Index {
 @Builder MenuBuilder() {
 Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
 Button('ContextMenu1')
 Divider().strokeWidth(2).margin(5).color(Color.Black)
 Button('ContextMenu2')
 Divider().strokeWidth(2).margin(5).color(Color.Black)
 Button('ContextMenu3')
 }
 .width(200)
 .height(160)
 }

 build() {
 Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
 Column() {
 Text('Long press to show ContextMenu')
 .fontSize(20)
 .width('100%')
 .height(500)
 .backgroundColor(0xAFEEEE)
 .textAlign(TextAlign.Center)
 }
 .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)
 .onDragStart(()=>{
 // 拖拽时关闭菜单
 ContextMenu.close() // 建议使用 this.getUIContext().getContextMenuController().close()
 })
 }
 .width('100%')
 .height('100%')
 }
}

---
*2026-04-22T15:53:58.351Z*