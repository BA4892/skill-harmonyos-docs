# 动态SymbolGlyphModifier属性设置

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `universal-attributes-attribute-symbolglyphmodifier`

**DocID**: `3a5605d653a244fdac39193a0b95044b`

**NodeID**: `0002017757962161976066646c8a271a`

---

动态SymbolGlyphModifier属性设置

SymbolGlyphModifier用于动态设置SymbolGlyph组件的属性和样式，支持使用if/else语句进行设置。
SymbolGlyph
是一个用于展示图标符号的组件。

 从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

SymbolGlyphModifier

定义SymbolGlyphModifier。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]constructor

constructor(src?: Resource)

SymbolGlyphModifier的构造函数。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

src

Resource

否

资源信息。

[h2]applyNormalAttribute

applyNormalAttribute?(instance: SymbolGlyphAttribute): void

组件普通状态时的样式。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

instance

SymbolGlyphAttribute

是

动态设置SymbolGlyph组件的属性。

示例

该示例通过
SymbolGlyphModifier
和TextInput组件的
cancelButton
属性展示了自定义右侧symbol类型清除按钮样式的效果。

import { SymbolGlyphModifier } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct Index {
 @State text: string = '';
 symbolModifier: SymbolGlyphModifier =
 new SymbolGlyphModifier($r('sys.symbol.trash')).fontColor([Color.Red]).fontSize(16).fontWeight(FontWeight.Regular);

 build() {
 Column() {
 TextInput({ text: this.text, placeholder: 'input your word...' })
 .height(50)
 .cancelButton({
 style: CancelButtonStyle.CONSTANT,
 icon: this.symbolModifier // 从API version 18开始支持symbol类型
 })
 }.margin(10)
 }
}

---
*2026-04-22T15:53:58.238Z*