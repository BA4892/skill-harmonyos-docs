# 属性修改器 (AttributeModifier)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arkts-user-defined-extension-attributemodifier`  |  **DocID**: `b3f8e4bbcdc94db1968d922dfbea2977`  |  **NodeID**: `0002017757957888847516903b3d4cbd`

---

# 属性修改器 (AttributeModifier)

                 #### 概述

     声明式语法引入了[@Styles](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)和[@Extend](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend)两个装饰器，可以解决复用相同自定义样式的问题，但是存在以下受限场景：

     
      - @Styles和@Extend均是编译期处理，不支持跨文件的导出复用。
      - @Styles仅能支持通用属性、事件，不支持组件特有的属性。
      - @Styles虽然支持在多态样式下使用，但不支持传参，无法对外开放一些属性。
      - @Extend虽然能支持特定组件的私有属性、事件，但同样不支持跨文件导出复用。
      - @Styles、@Extend对于属性设置，无法支持业务逻辑编写，动态决定是否设置某些属性，只能通过三元表达式对所有可能设置的属性进行全量设置，设置大量属性时效率较低。
     
     为了解决上述问题，ArkUI引入了AttributeModifier机制，可以通过Modifier对象动态修改属性。能力对比如下：

           
                        | 能力          | @Styles          | @Extend          | AttributeModifier         
                               | 跨文件导出          | 不支持          | 不支持          | 支持         
                 | 通用属性设置          | 支持          | 支持          | 支持         
                 | 通用事件设置          | 支持          | 支持          | 部分支持         
                 | 组件特有属性设置          | 不支持          | 支持          | 部分支持         
                 | 组件特有事件设置          | 不支持          | 支持          | 部分支持         
                 | 参数传递          | 不支持          | 支持          | 支持         
                 | 多态样式          | 支持          | 不支持          | 支持         
                 | 业务逻辑          | 不支持          | 不支持          | 支持         
             

          可以看出，与@Styles和@Extend相比，AttributeModifier提供了更强的能力和灵活性，且在持续完善全量的属性和事件设置能力，因此推荐优先使用AttributeModifier。

                  #### 接口定义

     ```
declare interface AttributeModifier<T> {

  applyNormalAttribute?(instance: T): void;

  applyPressedAttribute?(instance: T): void;

  applyFocusedAttribute?(instance: T): void;

  applyDisabledAttribute?(instance: T): void;

  applySelectedAttribute?(instance: T): void;

}
```
     AttributeModifier是一个接口，开发者需要实现其中的applyXxxAttribute方法来实现对应场景的属性设置。Xxx表示多态的场景，支持默认态（Normal）、按压态（Pressed）、焦点态（Focused）、禁用态（Disabled）、选择态（Selected）。T是组件的属性类型，开发者可以在回调中获取到属性对象，通过该对象设置属性。

     ```
declare class CommonMethod<T> {
  attributeModifier(modifier: AttributeModifier<T>): T;
}
```
     组件的通用方法增加了attributeModifier方法，支持传入自定义的Modifier。由于组件在实例化时会明确T的类型，所以调用该方法时，T必须指定为组件对应的Attribute类型，或者是CommonAttribute。

                  #### 使用说明

     
      - 组件通用方法attributeModifier支持传入一个实现AttributeModifier<T>接口的实例，T必须指定为组件对应的Attribute类型，或者是CommonAttribute。
      - 在组件首次初始化或者关联的状态变量发生变化时，如果传入的实例实现了对应接口，会触发applyNormalAttribute。
      - 回调applyNormalAttribute时，会传入组件属性对象，通过该对象可以设置当前组件的属性/事件。
      - 暂未支持的属性/事件，执行时会抛异常。
      - 属性变化触发applyXxxAttribute函数时，该组件之前已设置的属性，在本次变化后未设置的属性会恢复为属性的默认值。
      - 可以通过该接口使用多态样式的功能，例如如果需要在组件进入按压态时设置某些属性，就可以通过自定义实现applyPressedAttribute方法完成。
      - 一个组件上同时使用属性方法和applyNormalAttribute设置相同的属性，遵循属性覆盖原则，即后设置的属性生效。
      - 一个Modifier实例对象可以在多个组件上使用。
      - 一个组件上多次使用applyNormalAttribute设置不同的Modifier实例，每次状态变量刷新均会按顺序执行这些实例的方法属性设置，同样遵循属性覆盖原则。
     
                  #### 设置和修改组件属性

     AttributeModifier可以分离UI与样式，支持参数传递及业务逻辑编写，并且通过状态变量触发刷新。

     ```
export class MyButtonModifier implements AttributeModifier<ButtonAttribute> {
  // 可以实现一个Modifier，定义私有的成员变量，外部可动态修改
  public isDark: boolean = false

  // 通过构造函数，创建时传参
  constructor(dark?: boolean) {
    this.isDark = dark ?? false
  }

  applyNormalAttribute(instance: ButtonAttribute): void {
    // instance为Button的属性对象，可以通过instance对象对属性进行修改
    if (this.isDark) { // 支持业务逻辑的编写
      // 属性变化触发apply函数时，变化前已设置并且变化后未设置的属性会恢复为默认值
      instance.backgroundColor('#707070')
    } else {
      // 支持属性的链式调用
      instance.backgroundColor('#17A98D')
        .borderColor('#707070')
        .borderWidth(2)
    }
  }
}
```
     ```
// pages/Button1.ets
import { MyButtonModifier } from '../Common/ButtonModifier01'

@Entry
@Component
struct Button1 {
  // 支持用状态装饰器修饰，行为和普通的对象一致
  @State modifier: MyButtonModifier = new MyButtonModifier(true);

  build() {
    Row() {
      Column() {
        Button('Button')
          .attributeModifier(this.modifier)
          .onClick(() => {
            // 对象的一层属性被修改时，会触发UI刷新，重新执行applyNormalAttribute
            this.modifier.isDark = !this.modifier.isDark
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
     

     当一个组件上同时使用属性方法和applyNormalAttribute设置相同的属性时，遵循属性覆盖原则，即后设置的属性生效。

     ```
export class MyButtonModifier implements AttributeModifier<ButtonAttribute> {
  // 可以实现一个Modifier，定义私有的成员变量，外部可动态修改
  public isDark: boolean = false

  // 通过构造函数，创建时传参
  constructor(dark?: boolean) {
    this.isDark = dark ?? false
  }

  applyNormalAttribute(instance: ButtonAttribute): void {
    // instance为Button的属性对象，可以通过instance对象对属性进行修改
    if (this.isDark) { // 支持业务逻辑的编写
      // 属性变化触发apply函数时，变化前已设置并且变化后未设置的属性会恢复为默认值
      instance.backgroundColor('#707070')
    } else {
      // 支持属性的链式调用
      instance.backgroundColor('#17A98D')
        .borderColor('#707070')
        .borderWidth(2)
    }
  }
}
```
     ```
// pages/Button2.ets
import { MyButtonModifier } from '../Common/ButtonModifier01'

@Entry
@Component
struct Button2 {
  @State modifier: MyButtonModifier = new MyButtonModifier(true);

  build() {
    Row() {
      Column() {
        // 先设置属性，后设置modifier，按钮颜色会跟随modifier的值改变
        Button('Button')
          .backgroundColor('#2787D9')
          .attributeModifier(this.modifier)
          .onClick(() => {
            this.modifier.isDark = !this.modifier.isDark
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
     

     当一个组件上多次使用applyNormalAttribute设置不同的Modifier实例时，每次状态变量刷新均会按顺序执行这些实例的方法属性设置，遵循属性覆盖原则，即后设置的属性生效。

     ```
export class MyButtonModifier2 implements AttributeModifier<ButtonAttribute> {
  public isDark: boolean = false

  constructor(dark?: boolean) {
    this.isDark = dark ?? false
  }

  applyNormalAttribute(instance: ButtonAttribute): void {
    if (this.isDark) {
      instance.backgroundColor(Color.Black)
        .width(200)
    } else {
      instance.backgroundColor(Color.Red)
        .width(100)
    }
  }
}
```
     ```
export class MyButtonModifier3 implements AttributeModifier<ButtonAttribute> {
  public isDark2: boolean = false

  constructor(dark?: boolean) {
    this.isDark2 = dark ? dark : false
  }

  applyNormalAttribute(instance: ButtonAttribute): void {
    if (this.isDark2) {
      instance.backgroundColor('#2787D9')
    } else {
      instance.backgroundColor('#707070')
    }
  }
}
```
     ```
// pages/Button3.ets
import { MyButtonModifier2 } from '../Common/ButtonModifier02';
import { MyButtonModifier3 } from '../Common/ButtonModifier03';

@Entry
@Component
struct Button3 {
  @State modifier: MyButtonModifier2 = new MyButtonModifier2(true);
  @State modifier2: MyButtonModifier3 = new MyButtonModifier3(true);

  build() {
    Row() {
      Column() {
        Button('Button')
          .attributeModifier(this.modifier)
          .attributeModifier(this.modifier2)
          .onClick(() => {
            this.modifier.isDark = !this.modifier.isDark
            this.modifier2.isDark2 = !this.modifier2.isDark2
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
     

                  #### 设置多态样式、事件

     使用AttributeModifier设置多态样式、事件，实现事件逻辑的复用，支持默认态（Normal）、按压态（Pressed）、焦点态（Focused）、禁用态（Disabled）、选择态（Selected）。例如如果需要在组件进入按压态时设置某些属性，就可以通过自定义实现applyPressedAttribute方法完成。

     ```
export class MyButtonModifier4 implements AttributeModifier<ButtonAttribute> {
  applyNormalAttribute(instance: ButtonAttribute): void {
    // instance为Button的属性对象，设置正常状态下属性值
    instance.backgroundColor('#17A98D')
      .borderColor('#707070')
      .borderWidth(2)
  }

  applyPressedAttribute(instance: ButtonAttribute): void {
    // instance为Button的属性对象，设置按压状态下属性值
    instance.backgroundColor('#2787D9')
      .borderColor('#FFC000')
      .borderWidth(5)
  }
}
```
     ```
// pages/Button4.ets
import { MyButtonModifier4 } from '../Common/ButtonModifier04'

@Entry
@Component
struct Button4 {
  @State modifier: MyButtonModifier4 = new MyButtonModifier4();

  build() {
    Row() {
      Column() {
        Button('Button')
          .attributeModifier(this.modifier)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
     

                  #### 属性或事件对attributeModifier的支持情况

     通过attributeModifier动态设置属性或事件的能力从API version 11开始支持。

                  #### [h2]属性或事件不支持attributeModifier的范围

     下表说明了当前不支持attributeModifier的属性或事件。若无特殊说明，属性或事件默认在首次开放时支持attributeModifier。

           
                        | 组件通用信息/系统组件的名称          | 属性/事件的名称          | 告警信息          | 说明         
                               | CommonAttribute          | [accessibilityText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitytext12)          | -          | -         
                 | CommonAttribute          | [accessibilityDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitydescription12)          | -          | -         
                 | CommonAttribute          | [animation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-animatorproperty#animation)          | Method not implemented.          | 不支持animation相关属性。         
                 | CommonAttribute          | [attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)          | -          | attributeModifier不支持嵌套使用，不生效。         
                 | CommonAttribute          | [backgroundFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#backgroundfilter)          | is not callable          | -         
                 | CommonAttribute          | [chainWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location#chainweight14)          | is not callable          | -         
                 | CommonAttribute          | [compositingFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#compositingfilter)          | is not callable          | -         
                 | CommonAttribute          | [drawModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-draw-modifier#drawmodifier)          | is not callable          | 不支持modifier相关的属性。         
                 | CommonAttribute          | [foregroundFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#foregroundfilter)          | is not callable          | -         
                 | CommonAttribute          | [freeze](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#freeze18)          | is not callable          | -         
                 | CommonAttribute          | [gesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings#gesture)          | Method not implemented.          | 不支持gesture相关的属性。         
                 | CommonAttribute          | [gestureModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-gesture-modifier#gesturemodifier)          | is not callable          | 不支持modifier相关的属性。         
                 | CommonAttribute          | [onAccessibilityHover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-accessibility-hover-event#onaccessibilityhover)          | is not callable          | -         
                 | CommonAttribute          | [onDigitalCrown](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-crown#ondigitalcrown)          | is not callable.          | -         
                 | CommonAttribute          | [parallelGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings#parallelgesture)          | Method not implemented.          | 不支持gesture相关的属性。         
                 | CommonAttribute          | [priorityGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-settings#prioritygesture)          | Method not implemented.          | 不支持gesture相关的属性。         
                 | CommonAttribute          | [reuseId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-reuse-id#reuseid)          | Method not implemented.          | -         
                 | CommonAttribute          | [stateStyles](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-polymorphic-style#statestyles)          | Method not implemented.          | 不支持stateStyles相关的属性。         
                 | CommonAttribute          | [useSizeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-grid#属性)          | Method not implemented.          | 不支持已废弃属性。         
                 | CommonAttribute          | [visualEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#visualeffect)          | is not callable          | -         
                 | CommonAttribute          | [bindContextMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindcontextmenu12)          | Method not implemented.          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [bindContentCover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition#bindcontentcover)          | Method not implemented.          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [bindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)          | Method not implemented.          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [dragPreview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-drag-drop#dragpreview15)          | Builder is not supported.          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)          | Method not implemented.          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [accessibilityVirtualNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilityvirtualnode11)          | is not callable          | 不支持入参为CustomBuilder。         
                 | CommonAttribute          | [chainWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location#chainweight14)          | -          | -         
                 | CheckboxGroup          | [contentModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup#contentmodifier21)          | -          | -         
                 | CommonAttribute          | [backgroundImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#backgroundimage18)          | -          | -         
                 | CommonAttribute          | [onClick](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-click#onclick12)          | -          | -         
                 | CommonAttribute          | [toolbar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-toolbar#toolbar)          | -          | -         
                 | CommonAttribute          | [accessibilityGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitygroup14)          | -          | -         
                 | CommonAttribute          | [reuse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-reuse#reuse)          | -          | -         
                 | CommonAttribute          | [onGestureRecognizerJudgeBegin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin13)          | -          | -         
                 | EmbeddedComponent          | [onError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-embedded-component#onerror)          | -          | -         
                 | EmbeddedComponent          | [onTerminated](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-embedded-component#onterminated)          | -          | -         
                 | NavDestination          | [backButtonIcon19+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#backbuttonicon19)          | -          | -         
                 | NavDestination          | [menus19+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#menus19)          | -          | -         
                 | NavDestination          | [customTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#customtransition15)          | -          | -         
                 | Navigation          | [backButtonIcon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#backbuttonicon19)          | -          | -         
                 | Navigation          | [menus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#menus19)          | -          | -         
                 | Repeat          | [each](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-repeat#each)          | -          | -         
                 | Repeat          | [key](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-repeat#key)          | -          | -         
                 | Repeat          | [virtualScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-repeat#virtualscroll)          | -          | -         
                 | Repeat          | [template](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-repeat#template)          | -          | -         
                 | Repeat          | [templateId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-repeat#templateid)          | -          | -         
                 | Search          | [customKeyboard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#customkeyboard10)          | -          | -         
                 | Search          | [onWillAttachIME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#onwillattachime20)          | -          | -         
                 | Select          | [menuItemContentModifier12+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#menuitemcontentmodifier12)          | -          | -         
                 | Select          | [menuItemContentModifier18+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#menuitemcontentmodifier18)          | -          | -         
                 | Select          | [textModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#textmodifier20)          | -          | -         
                 | Select          | [arrowModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#arrowmodifier20)          | -          | -         
                 | Select          | [optionTextModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#optiontextmodifier20)          | -          | -         
                 | Select          | [selectedOptionTextModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#selectedoptiontextmodifier20)          | -          | -         
                 | Slider          | [digitalCrownSensitivity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#digitalcrownsensitivity18)          | -          | -         
                 | Swiper          | [prevMargin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#prevmargin10)          | -          | -         
                 | Swiper          | [nextMargin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#nextmargin10)          | -          | -         
                 | TextArea          | [customKeyboard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#customkeyboard10)          | -          | -         
                 | Text          | [bindSelectionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#bindselectionmenu11)          | -          | -         
                 | TextInput          | [customKeyboard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#customkeyboard10)          | -          | -         
                 | TextInput          | [onWillAttachIME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#onwillattachime20)          | -          | -         
                 | TextPicker          | [onEnterSelectedArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textpicker#onenterselectedarea18)          | -          | -         
                 | TimePicker          | [onEnterSelectedArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#onenterselectedarea18)          | -          | -         
             

                       #### [h2]属性或事件的起始版本与支持attributeModifier版本不一致的范围

     下表说明了属性或事件的起始版本与默认支持attributeModifier版本不一致的情况。若无特殊说明，属性或事件默认在首次开放时支持attributeModifier。

           
                        | 组件通用信息/系统组件的名称          | 属性/事件的名称          | 属性/事件的起始版本          | 支持attributeModifier的版本         
                               | AlphabetIndexer          | [autoCollapse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer#autocollapse11)          | 11          | 12         
                 | Button          | [buttonStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonstyle11)          | 11          | 12         
                 | Button          | [controlSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#controlsize11)          | 11          | 12         
                 | CalendarPicker          | [onChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-calendarpicker#onchange18)          | 18          | 20         
                 | Canvas          | [enableAnalyzer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas#enableanalyzer12)          | 12          | 20         
                 | CommonAttribute          | [accessibilityTextHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitytexthint12)          | 12          | 20         
                 | CommonAttribute          | [accessibilityChecked](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitychecked13)          | 13          | 20         
                 | CommonAttribute          | [accessibilitySelected](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilityselected13)          | 13          | 20         
                 | CommonAttribute          | [background](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#background10)          | 10          | 20         
                 | CommonAttribute          | [visualEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#visualeffect)          | 12          | 20         
                 | CommonAttribute          | [onDragStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop#ondragstart)          | 8          | 13         
                 | CommonAttribute          | [onVisibleAreaApproximateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event#onvisibleareaapproximatechange17)          | 17          | 23         
                 | CommonAttribute          | [onVisibleAreaChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event#onvisibleareachange)          | 9          | 20         
                 | CommonAttribute          | [onTouchIntercept](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-on-touch-intercept#ontouchintercept)          | 12          | 20         
                 | CommonAttribute          | [onPreDrag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop#onpredrag12)          | 12          | 20         
                 | CommonAttribute          | [onChildTouchTest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-on-child-touch-test#onchildtouchtest11)          | 11          | 20         
                 | CommonAttribute          | [backgroundFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#backgroundfilter)          | 12          | 20         
                 | CommonAttribute          | [foregroundFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#foregroundfilter)          | 12          | 20         
                 | CommonAttribute          | [compositingFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-filter-effect#compositingfilter)          | 12          | 20         
                 | CommonAttribute          | [foregroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style#foregroundblurstyle)          | 10          | 18         
                 | CommonAttribute          | [freeze12+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#freeze12)          | 12          | 20         
                 | CommonAttribute          | [freeze18+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#freeze18)          | 18          | 20         
                 | CommonAttribute          | [dragPreviewOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-drag-drop#dragpreviewoptions11)          | 11          | 12         
                 | CommonAttribute          | [bindMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindmenu)          | 11          | 20         
                 | CommonAttribute          | [transition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-transition-animation-component#transition12)          | 12          | 20         
                 | CommonAttribute          | [safeAreaPadding](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size#safeareapadding14)          | 14          | 18         
                 | CommonAttribute          | [pixelRound](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-pixelroundforcomponent#pixelround)          | 11          | 12         
                 | ContainerSpan          | [textBackgroundStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-containerspan#textbackgroundstyle)          | 11          | 12         
                 | DatePicker          | [onDateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datepicker#ondatechange18)          | 18          | 20         
                 | FolderStack          | [alignContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack#aligncontent)          | 11          | 12         
                 | FolderStack          | [onFolderStateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack#onfolderstatechange)          | 11          | 20         
                 | FolderStack          | [onHoverStatusChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack#onhoverstatuschange12)          | 11          | 20         
                 | FolderStack          | [enableAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack#enableanimation)          | 11          | 12         
                 | FolderStack          | [autoHalfFold](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-folderstack#autohalffold)          | 11          | 12         
                 | Gauge          | [privacySensitive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-gauge#privacysensitive12)          | 12          | 20         
                 | Image          | [enableAnalyzer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#enableanalyzer11)          | 11          | 12         
                 | Image          | [resizable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#resizable11)          | 11          | 20         
                 | List          | [OnScrollVisibleContentChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#onscrollvisiblecontentchangecallback12)          | 12          | 14         
                 | List          | [onItemDragStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#onitemdragstart8)          | 8          | 14         
                 | NavDestination          | [title](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#title)          | 9          | 12         
                 | NavDestination          | [mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#mode11)          | 11          | 12         
                 | NavDestination          | [backButtonIcon11+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#backbuttonicon11)          | 11          | 12         
                 | NavDestination          | [menus12+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#menus12)          | 12          | 14         
                 | NavDestination          | [toolbarConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#toolbarconfiguration13)          | 13          | 20         
                 | NavDestination          | [onReady](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onready11)          | 11          | 20         
                 | NavDestination          | [onWillAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onwillappear12)          | 12          | 20         
                 | NavDestination          | [onWillDisappear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onwilldisappear12)          | 12          | 20         
                 | NavDestination          | [onWillShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onwillshow12)          | 12          | 20         
                 | NavDestination          | [onWillHide](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onwillhide12)          | 12          | 20         
                 | NavDestination          | [systemBarStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#systembarstyle12)          | 12          | 20         
                 | NavDestination          | [onResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onresult15)          | 15          | 22         
                 | NavDestination          | [bindToScrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#bindtoscrollable14)          | 14          | 22         
                 | NavDestination          | [bindToNestedScrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#bindtonestedscrollable14)          | 14          | 22         
                 | NavDestination          | [onActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onactive17)          | 17          | 22         
                 | NavDestination          | [onInactive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#oninactive17)          | 17          | 22         
                 | NavDestination          | [onNewParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onnewparam19)          | 19          | 22         
                 | Navigation          | [title](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#title)          | 8          | 12         
                 | Navigation          | [toolbarConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#toolbarconfiguration10)          | 10          | 20         
                 | Navigation          | [customNavContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#customnavcontenttransition11)          | 11          | 20         
                 | Navigation          | [systemBarStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#systembarstyle12)          | 12          | 20         
                 | Navigation          | [enableVisibilityLifecycleWithContentCover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#enablevisibilitylifecyclewithcontentcover21)          | 21          | 23         
                 | PatternLock          | [backgroundColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-patternlock#backgroundcolor)          | 9          | 20         
                 | PatternLock          | [onDotConnect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-patternlock#ondotconnect11)          | 11          | 20         
                 | Progress          | [privacySensitive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress#privacysensitive12)          | 12          | 20         
                 | Refresh          | [onOffsetChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh#onoffsetchange12)          | 12          | 20         
                 | RichEditor          | [customKeyboard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#customkeyboard)          | 10          | 23         
                 | RichEditor          | [onDidIMEInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#ondidimeinput12)          | 12          | 20         
                 | RichEditor          | [enablePreviewText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#enablepreviewtext12)          | 12          | 18         
                 | RichEditor          | [placeholder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#placeholder12)          | 12          | 18         
                 | RichEditor          | [onWillChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#onwillchange12)          | 12          | 18         
                 | RichEditor          | [onDidChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#ondidchange12)          | 12          | 18         
                 | RichEditor          | [editMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#editmenuoptions12)          | 12          | 18         
                 | RichEditor          | [enableKeyboardOnFocus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#enablekeyboardonfocus12)          | 12          | 18         
                 | RichEditor          | [enableHapticFeedback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#enablehapticfeedback13)          | 13          | 20         
                 | RichEditor          | [barState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#barstate13)          | 13          | 18         
                 | Select          | [menuBackgroundColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#menubackgroundcolor11)          | 11          | 12         
                 | Select          | [menuBackgroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select#menubackgroundblurstyle11)          | 11          | 12         
                 | Swiper          | [displayCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#displaycount8)          | 8          | 12         
                 | SymbolGlyph          | [fontSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#fontsize)          | 11          | 12         
                 | SymbolGlyph          | [fontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#fontcolor)          | 11          | 12         
                 | SymbolGlyph          | [fontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#fontweight)          | 11          | 12         
                 | SymbolGlyph          | [effectStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#effectstrategy)          | 11          | 12         
                 | SymbolGlyph          | [renderingStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolglyph#renderingstrategy)          | 11          | 12         
                 | SymbolSpan          | [fontSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontsize)          | 11          | 12         
                 | SymbolSpan          | [fontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontcolor)          | 11          | 12         
                 | SymbolSpan          | [fontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#fontweight)          | 11          | 12         
                 | SymbolSpan          | [effectStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#effectstrategy)          | 11          | 12         
                 | SymbolSpan          | [renderingStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-symbolspan#renderingstrategy)          | 11          | 12         
                 | ScrollableCommonAttribute          | [onWillScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#onwillscroll12)          | 12          | 14         
                 | ScrollableCommonAttribute          | [onDidScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#ondidscroll12)          | 12          | 14         
                 | TabContent          | [onWillShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#onwillshow12)          | 12          | 20         
                 | TabContent          | [onWillHide](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#onwillhide12)          | 12          | 20         
                 | Tabs          | [edgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#edgeeffect12)          | 12          | 17         
                 | Tabs          | [customContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#customcontenttransition11)          | 11          | 20         
                 | Tabs          | [onContentWillChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#oncontentwillchange12)          | 12          | 20         
                 | Tabs          | [barBackgroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barbackgroundblurstyle11)          | 11          | 12         
                 | TextArea          | [enterKeyType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea#enterkeytype11)          | 11          | 12         
                 | Text          | [enableHapticFeedback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#enablehapticfeedback13)          | 13          | 18         
                 | TextInput          | [showCounter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#showcounter11)          | 11          | 12         
                 | TextInput          | [onSecurityStateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#onsecuritystatechange12)          | 12          | 20         
                 | TextPicker          | [onScrollStop14+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textpicker#onscrollstop14)          | 14          | 20         
                 | TextPicker          | [onScrollStop18+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textpicker#onscrollstop18)          | 18          | 20         
                 | TextTimer          | [textShadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer#textshadow11)          | 11          | 12         
                 | TimePicker          | [enableHapticFeedback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#enablehapticfeedback12)          | 12          | 18         
                 | TimePicker          | [onChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#onchange18)          | 18          | 20         
                 | Video          | [enableAnalyzer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#enableanalyzer12)          | 12          | 20         
                 | Video          | [analyzerConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#analyzerconfig12)          | 12          | 20         
                 | Video          | [onError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#onerror)          | 7          | 20         
                 | WaterFlow          | [onScrollIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow#onscrollindex11)          | 11          | 20

---
*Updated: 2026-04-20 01:49:26*
