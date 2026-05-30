# Tabs选项卡常见开发场景

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-development-scenarios-for-tabs`  |  **DocID**: `613717c3051d4213bb0b6e680c4923ff`  |  **NodeID**: `00020177554681964917518a60f1df56`

---

# Tabs选项卡常见开发场景

 #### 概述

 在日常开发中，开发者经常遇到使用Tabs作为导航的场景，包括多层嵌套的Tabs、自定义Tabs样式、Tabs数据加载和动态变更显示的Tabs等。

 开发者在实际开发中往往需要处理多个功能点的配合，以及与其他组件或数据的互动。为了帮助开发者更直观和全面地理解Tabs组件，本文通过将这些场景整合到一个应用首页的具体实例中，展示Tabs组件的各项功能及其协同效果，以及与其他组件或数据的联动。

 本文将从以下几个方面进行介绍。

 
- [Tabs显示排版](#section166991845192018)
- [Tabs滑动](#section16601444172310)
- [Tabs页签加载/更新](#section1731618032613)
- [Tabs切换动效](#section595454372613)

 #### Tabs显示排版

在Tabs组件的应用场景中，开发者通常会自定义Tabs的布局和样式。本章节将介绍Tabs组件提供的几种常用的布局和样式功能。

  #### [h2]Tabs导航样式

 常见的应用页签导航效果包括底部导航、顶部导航和侧边导航。

 

 底部导航栏通常用于应用的主导航，其标签数量相对固定，不涉及TabBar滑动。作为应用的主导航，开发者通常会自定义TabBar的样式。底部导航栏可通过设置Tabs的barPosition参数来实现，需将barPosition设置为BarPosition.End。

 ```
Tabs({
  barPosition: BarPosition.End,
  // ...
}) {
  // ...
}
```
 顶部导航栏主要用于主栏目的二级导航。由于二级导航可能包含较多的页签项，其TabBar通常设计为可滚动显示，并能动态调整所显示的页签。同样地，顶部导航栏通过将Tabs的barPosition参数设置为BarPosition.Start来实现。

 ```
Tabs({
  barPosition: BarPosition.Start,
  // ...
}) {
  // ...
}
```
 侧边导航栏常见于横屏界面的导航。由于横屏界面尺寸规格的差异，导航条的页签需要适配宽度和高度，以确保更佳的显示效果。侧边导航栏的实现方式有所不同，需要将Tabs的vertical属性设置为true，而Tabs的barPosition参数则用于控制导航栏显示在左侧或右侧。

 ```
Tabs({
  // ...
}) {
  // ...
}
.vertical(false) // true to make the tab bar in side
```
 详情请参见[选项卡 (Tabs)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs)。

 #### [h2]页签对齐方式

 当页签数量不足，无法铺满屏幕宽度或高度，或者铺满后影响到UI美观时，Tabs提供了自定义导航条页签对齐方式的API。例如，在应用的二级导航中，如果页签较少，可以考虑将页签居左对齐。

 

 **实现原理**

 通过[barModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabsoptions15)属性设置tabBar的align参数，可以实现页签对齐布局效果。类似于文本对齐，开发者可以自行设置居中、居上、居下、居左或者居右对齐。

  
- 只有在TabBar的barMode为BarMode.Scrollable时，这些设置才会生效。除此之外，还可以通过barModifier参数设置一系列的通用属性，具体参考：[TabsOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabsoptions15)。
- 居上居下对齐仅在侧边导航栏中生效。若要控制顶部和底部导航栏中页签与顶部的距离，同样可以使用barModifier设置padding属性，以保持页签与TabBar顶部的特定间距。

  **开发步骤**

 定义tabBarModifier属性，并将其作为参数构造Tabs，然后通过tabBarModifier设置对齐方式。

 ```
@Component
export default struct InTabsComponent {
  // ...
  @State tabBarModifier: CommonModifier = new CommonModifier();
  // ...
  async aboutToAppear() {
    // ...
    this.tabBarModifier.margin({ right: 56 }).align(Alignment.Start);
    // ...
  }
  // ...
  build() {
    // ...
            Tabs({
              // ...
              barModifier: this.tabBarModifier
            }) {
              // ...
            }
            // ...
  }
}
```
 #### [h2]自定义页签

 对于底部导航栏，通常用于应用主页面的功能区分。为了更好的用户体验，开发者通常会自定义页签样式。开发者可以使用Tabs组件提供的定制页签样式的API，将页签自定义为图标加文字标题的形式，并且在选中和非选中的状态下，提供不同的样式。

 

 **实现原理**

 Tabs组件的[tabBar()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#tabbar)方法接受联合类型的参数，可以将由@Builder修饰的UI构建函数作为参数传入，以自定义TabBar的样式。因此，开发者可以定义一个UI构建函数tabBuilder()，作为参数传递给[tabBar()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#tabbar)方法。由于选中的页签和未选中的页签需要不同的样式，还需定义一个由@State修饰的数值型变量currentIndex，用于在tabBuilder()函数中判断当前页签是否被选中。当currentIndex发生变化时，能够触发tabBar样式的更新。最后，注册Tabs组件的onchange函数，在该函数中更新currentIndex的值。

 **开发步骤**

 
定义currentIndex属性。```
@Component
export default struct OutTabsComponent {
  @State currentIndex: number = 0;
  // ...
}
```
 定义@Builder装饰器修饰的自定义样式构建方法tabBuilder()。```
@Builder
tabBuilder(index: number, name: string | Resource, icon: Resource) {
  Column() {
    // set special styles if selected

    SymbolGlyph(icon).fontColor([this.currentIndex === index
      ? $r('app.color.out_tab_bar_font_active_color')
      : $r('app.color.out_tab_bar_font_inactive_color')])
      .fontSize(25)

    Text(name)
      .margin({ top: 4 })
      .fontSize(10)
      .fontColor(this.currentIndex === index
        ? $r('app.color.out_tab_bar_font_active_color')
        : $r('app.color.out_tab_bar_font_inactive_color'))
  }
  .justifyContent(FlexAlign.Center)
  .height(Constants.FULL_HEIGHT)
  .width(Constants.FULL_WIDTH)
  .padding({ bottom: 60 })
  // .backgroundColor($r('app.color.out_tab_bar_background_color'))
}
```
 将tabBuilder()方法传入Tabs，并在Tabs注册onChange()函数，并在其中更新currentIndex属性。```
Tabs({
  // ...
}) {
  TabContent() {
    InTabsComponent({ switchNext: this.switchNext })
  }.tabBar(this.tabBuilder(0, $r('app.string.out_bar_text_home'), $r('sys.symbol.house')))
  // ...
}
// ...
.onChange((index: number) => {
  this.currentIndex = index;
})
```
 
 #### [h2]Tabs吸顶

 在一些二级导航栏页面中，二级页签的内容上方通常会放置一些banner位或其他优先级较高的内容，并且在向上滑动时会退出显示区域。为了提供更好的用户体验，建议在上划的过程中，导航条能够吸附在顶部，便于用户进行内容切换。

 

 **实现原理**

 开发者可以通过设置滑动组件的属性[nestedScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#nestedscroll10)来控制父子组件的滑动顺序，从而实现吸顶效果。具体而言，需确保TabContent内容是可滑动的，并且Tabs的上层父组件也必须是可滑动的。为内容组件添加[nestedScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#nestedscroll10)属性，设置为当向上滑动时父组件先动，而向下滑动时自己先动，从而实现滑动吸顶效果。

 **开发步骤**

 在Tabs父组件上嵌套Scroll组件，TabContent中的List组件显示内容，List组件本身是可滑动的，仅需设置其滑动触发行为即可。```
Scroll() {
  Column() {
    BannerComponent()

    Stack({ alignContent: Alignment.TopEnd }) {
      // ...
      Column() {
        Tabs({
          // ...
        }) {
          // bind selected tabs to ui
          ForEach(this.selectTabsViewModel.selectedTabs, (tab: TabItemViewModel, index: number) => {
            if (index === this.selectTabsViewModel.selectedTabs.length - 1) {
              TabContent() {
                List({ space: 10 }) {
                  // ...
                }
                // ...
                // set the sliding behavior to move up parent first, and move down self first
                .nestedScroll({
                  scrollForward: NestedScrollMode.PARENT_FIRST,
                  scrollBackward: NestedScrollMode.SELF_FIRST
                })
              }
              // ...
            } else {
              // ...
            }
          }, (tab: TabItemViewModel, index: number) => index + '_' + JSON.stringify(tab))
        }
        // ...
      }
      .width(Constants.FULL_WIDTH)
      .height(Constants.FULL_HEIGHT)
      .backgroundColor($r('app.color.out_tab_bar_background_color'))
    }
  }
}
```
  #### [h2]TabsBar显示效果

 在某些UI设计风格中，可能需要为TabBar采用特殊样式，比如首页导航栏的毛玻璃背景效果等。

 
通过设置Tabs组件的[barOverlap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#baroverlap10)属性，可以实现TabBar变模糊并叠加在TabContent之上，并且配合[barBackgroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barbackgroundblurstyle11)属性实现毛玻璃效果。详情请参见[TabBar背景模糊效果](https://developer.huawei.com/consumer/cn/doc/architecture-guides/tab_bar_blur-0000002257193008)。```
Tabs({
  // ...
}) {
  // ...
}
// ...
.barOverlap(true)
.barBackgroundBlurStyle(BlurStyle.Thin)
```
 底部导航栏覆盖在内容上方，并具有毛玻璃效果。

 

 通过[barModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabsoptions15)设置tabBar的clip属性，实现页签超出tabBar区域显示效果。详情请参见[页签超出TabBar区域显示](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例15页签超出tabbar区域显示)。```
@Component
export default struct OutTabComponent {
  // ...
  private controller: TabsController = new TabsController();

  aboutToAppear(): void {
    this.tabBarModifier.clip(false);
  }

  // ...

  build() {
    Column() {
      Tabs({
        // ...
        barModifier: this.tabBarModifier
      }) {
        // ...
      }
      // ...

    }
    .width('100%')
    .height('calc(100% + 60vp)')
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])
  }
}
```
 底层导航栏图标可超出导航条范围。

 

 通过配置[fadingEdge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#fadingedge10)(true)实现TabBar边缘渐隐。详情请参见[设置TabBar渐隐](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例5设置tabbar渐隐)。```
Tabs({controller: this.subController}){
  // ...
}
.fadingEdge(this.isFadingEdge) // true set tab bar edge fade
```
 顶部导航栏页签靠近两侧会模糊化。

 

 通过TabsController的[setTabBarTranslate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#settabbartranslate13)、[setTabBarOpacity()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#settabbaropacity13)方法可以设置TabBar偏移量及透明度。详情请参见[设置TabBar平移距离和不透明度](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例12设置tabbar平移距离和不透明度)。```
@Component
export default struct InTabComponent {
  // ...
  private subController: TabsController = new TabsController();

  onDidBuild(): void {
    if (this.isSetTabBarTranslateAndOpacity) {
      this.subController.setTabBarTranslate({x:-20,y:30});
      this.subController.setTabBarOpacity(0.5);
    }
  }
  // ...

  build() {
    Tabs({controller: this.subController}){
      // ...
    }
    // ...
    .barMode(BarMode.Scrollable)
  }
}
```
 顶部导航栏位置向左下偏移，并且呈现半透明效果。

 

 
  在以下情况下，该设置无法生效：当显示内容过长时，通常会将其置于可滚动容器组件中，并在向上滑动时隐藏TabBar，向下滑动时显示。此时，会使用[bindTabsToScrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#bindtabstoscrollable13)或[bindTabsToNestedScrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#bindtabstonestedscrollable13)等接口将Tabs组件与可滚动容器组件绑定。由于TabBar的控制与滚动组件联动，通过setTabBarOpacity接口设置的TabBar偏移量和不透明度将不再生效。

  #### Tabs滑动

Tabs组件在用户交互方面提供了丰富的特性，其中与滑动动作相关的交互尤为常见。下文将介绍几种与Tabs和滑动动作相关的特性。

  #### [h2]双层Tabs嵌套滑动

 在应用开发中，开发者经常遇到多层Tabs嵌套使用的场景。如果父子Tabs组件均需滑动切换时，开发者需要对父子Tabs的滑动切换行为进行约束，以避免冲突。通常做法是，让滑动操作优先切换子Tabs页签，当子Tabs页签切换到最后一个后，再触发父Tabs的页签切换。

 

 **实现原理**

 可以通过[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)结合[TabsController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscontroller)的changeIndex()方法实现双层Tabs的切换。具体操作为：开启子Tabs的滑动切换功能，同时关闭父Tabs的滑动切换。在子Tabs的第一个或者最后一个页面上添加PanGesture事件处理函数，用于判断滑动方向，并根据滑动方向使用TabsController的changeIndex()方法切换到父Tabs的相应页签。这样一来，子Tabs的中间页签滑动时，仅会触发子Tabs页签的切换，而最后一个页签的滑动则会通过changeIndex()方法间接触发父Tabs页签的切换。

 

 **开发步骤**

 
外层Tabs组件中定义[TabsController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscontroller)属性，以及内层Tabs双向绑定的状态属性变量switchNext及其监听函数。当监听到需要切换页签时，利用TabsController切换到对应页签。因为本示例外层Tabs和内层Tabs封装到不同的自定义组件中了，所以需要@Link修饰的switchNext变量作为父子组件的交互媒介。```
@Component
export default struct OutTabsComponent {
  // ...
  @State @Watch('onchangeSwitchNext') switchNext: boolean = false;
  // ...
  onchangeSwitchNext() {
    if (this.switchNext) {
      this.switchNext = false;
      this.tabsController.changeIndex(1);
    }
  }
  // ...
  build() {
    Tabs({
      // ...
      controller: this.tabsController,
    }) {
      TabContent() {
        InTabsComponent({ switchNext: this.switchNext })
      }.tabBar(this.tabBuilder(0, $r('app.string.out_bar_text_home'), $r('sys.symbol.house')))
      // ...
    }
    // ...
  }
}
```
 内层Tabs组件在最后一个TabContent中注册滑动事件处理函数，监听向左滑动作，触发时修改switchNext变量值传递给外层Tabs组件触发切换。```
@Component
export default struct InTabsComponent {
  // ...
  @Link switchNext: boolean;
  // ...
  build() {
    // ...
            Tabs({
              // ...
            }) {
              // bind selected tabs to ui
              ForEach(this.selectTabsViewModel.selectedTabs, (tab: TabItemViewModel, index: number) => {
                if (index === this.selectTabsViewModel.selectedTabs.length - 1) {
                  TabContent() {
                    // ...
                  }
                  .tabBar(this.tabBuilder(index, tab))
                  .gesture(PanGesture(new PanGestureOptions({ direction: PanDirection.Left })).onActionStart(() => {
                    this.switchNext = true;
                  }))
                  // ...
                } else {
                  // ...
                }
              }, (tab: TabItemViewModel, index: number) => index + '_' + JSON.stringify(tab))
            }
            // ...
  }
}
```
 注意滑动切换在自定义切换动画场景下失效，故需要注释掉切换动画函数注册。```
Tabs({
  barPosition: BarPosition.Start,
  controller: this.subsController,
  barModifier: this.tabBarModifier
}) {
  // ...
}
// add animation function
.customContentTransition(this.customContentTransition) // comment out to slide to switch
```
 
 #### [h2]可滚动Tabs页签栏+更多按钮

 可滚动页签栏通常设置在顶部或侧边导航栏，当内容分类较多，屏幕显示区域无法完全展示所有分类页签时，该页签栏允许用户通过滚动来访问隐藏的页签内容。

 

 **实现原理**

 通过将Tabs组件的[barMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#barmode)属性设置为BarMode.Scrollable，可以实现可滚动的页签栏。若要实现添加更多按钮的效果，可以通过Stack布局结合[barModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabsoptions15)功能实现。具体做法是在Tabs组件的TabBar位置的末端上层利用Stack布局添加更多按钮，并且点击该按钮时可以弹出窗口，在弹窗中自定义需要显示的页签。

 **开发步骤**

 设置barMode属性为BarMode.Scrollable，并利用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout)布局在TabBar右上角添加更多按钮。

 ```
Stack({ alignContent: Alignment.TopEnd }) {
  Row() {
    Image($r('app.media.more'))
      // ...
      .onClick(() => {
        this.showSelectTabsComponent = !this.showSelectTabsComponent;
      })
  }
  // ...
  .zIndex(1)
  .bindSheet($$this.showSelectTabsComponent, this.sheetBuilder(), {
    detents: [SheetSize.MEDIUM, SheetSize.MEDIUM, 500],
    preferType: SheetType.BOTTOM,
    title: { title: $r('app.string.bind_sheet_title') },
    onWillDismiss: (dismissSheetAction: DismissSheetAction) => {
      // update tab when closing modal box
      this.selectTabsViewModel.updateSelectedTabs();
      if (this.selectTabsViewModel.selectedTabs.length > 0) {
        this.subsController.changeIndex(0);
      }
      dismissSheetAction.dismiss();
    }
  })
  Column() {
    Tabs({
      // ...
    }) {
      // ...
    }
    // ...
    .barMode(BarMode.Scrollable)
    // ...
  }
  .width(Constants.FULL_WIDTH)
  .height(Constants.FULL_HEIGHT)
  .backgroundColor($r('app.color.out_tab_bar_background_color'))
}
```
 #### [h2]禁用TabContent左右滑动

 默认情况下，导航栏支持滑动切换。当存在多级导航栏嵌套或导航栏中的其他组件需要占用滑动动作时，为避免滑动响应冲突，开发者可选择禁用Tabs组件的滑动切换功能。通过将Tabs组件的[scrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#scrollable)属性设置为false，可以禁止通过滑动TabContent来切换页签。同样，若想禁用边缘回弹效果，可将[edgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#edgeeffect12)的值设置为EdgeEffect.None。

 示例代码：

 ```
build() {
  Tabs({
    // ...
  }) {
    // ...
  }
  // ...
  .scrollable(true) // false to disable scroll to switch
  // .edgeEffect(EdgeEffect.None) // disables edge springback
  // ...
}
```
 #### Tabs页签加载/更新

在使用Tabs组件进行开发时，特别是当Tabs组件作为二级导航使用时，业务需求往往需要对Tabs的标签页进行更精细的控制。下文将介绍几种定制标签页显示逻辑的场景。

  #### [h2]显示指定页签与预加载

 Tabs组件的TabContent默认在首次切换到该标签页时加载。如果TabContent中的内容或初始化逻辑较为复杂，加载速度较慢，则会影响标签页切换的流畅性，进而影响用户体验。此时，如果应用能在切换前预加载相应的标签页，将显著提升使用流畅度。

 

 **实现原理**

 通过[TabController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscontroller)的[preloadItem()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#preloaditems12)方法可以预加载指定子节点。该方法参数为需要预加载的index数组，无参调用此方法时，会一次性加载所有指定的子节点。因此，为了性能考虑，建议分批加载子节点。代码示例这里做法是当切换到某页签时，预加载所选页签左右两侧的页签内容。

 **开发步骤**

 定义subsController属性，并在Tabs的onChange函数中调用[preloadItem()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#preloaditems12)预加载当前页签两侧页签。

 ```
@Component
export default struct InTabsComponent {
  // ...
  private subsController: TabsController = new TabsController();
  // ...
  build() {
    // ...
            Tabs({
              // ...
              controller: this.subsController,
              // ...
            }) {
              // ...
            }
            // ...
            .onChange((index: number) => {
              this.focusIndex = index;
              this.tabBarItemScroller.scrollToIndex(index, true, ScrollAlign.CENTER);
              // preload the left and right item
              let preloadItems: number[] = [];
              if (index - 1 >= 0) {
                preloadItems.push(index - 1);
              }
              if (index + 1 < this.selectTabsViewModel.selectedTabs.length) {
                preloadItems.push(index + 1);
              }
              this.subsController.preloadItems(preloadItems);
            })
            // ...
  }
}
```
 #### [h2]切换到指定页签

 Tabs组件除了自带的滑动切换和点击切换功能外，还提供了两种可编程方式来切换页签。第一种是通过调用TabsController的[changeIndex()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#changeindex)方法，切换到指定的index；第二种是定义一个由@State修饰的变量currentIndex，并将其绑定到Tabs，通过修改currentIndex的值来触发页签切换。

 

 **开发步骤**

 定义currentIndex变量和tabController属性，并绑定到Tabs。在按钮onClick函数中，调用tabController.changeIndex()或者直接修改currentIndex变量切换页签。

 ```
@Component
export default struct SwitchTabComponent {
  // ...
  @State currentIndex: number = 0;
  private tabController: TabsController = new TabsController();

  // ...

  build() {
    Column() {
      Row() {
        Button('Previous Tab')
          .onClick(() => {
            this.tabController.changeIndex((this.currentIndex + 3) % 4); // call tabController.changeIndex() to switch tab
          })
           // ...

        Button('Next Tab')
          .onClick(() => {
            this.currentIndex = (this.currentIndex + 1) % 4; // change currentIndex to switch tab
          })
           // ...
      }

      Tabs({
        controller: this.tabController,
        index: $$this.currentIndex // use $$ for two-way data binding
      }) {
        // ...
      }
    }

  }
}
```
 此外，Tabs可注册切换前的处理函数，进一步控制切换行为。详情请参见[切换至指定页签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs#切换至指定页签)。

 #### [h2]增删Tabs页签

 在日常的应用开发中，经常需要实现用户自定义选择频道的功能。通常，这些自定义选择的频道会通过Tabs组件来展示，因此需要动态地更新Tabs的页签。本示例设计了一对父子组件来演示这一功能。父组件负责显示页签及其内容，并在页签栏的最右侧设置一个“更多”按钮。点击此按钮会弹出一个窗口，供用户选择需要显示的页签。该弹窗内容由子组件提供，关闭弹窗后，父组件的页签将被更新。

 

 **实现原理**

 定义selectTabsViewModel对象，其中的数组allTabs表示所有可选择页签，数组selectedTabs表示选中的需要显示的页签，并通过[@Link](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-link)绑定到父组件InTabComponent和子组件SelectTabsComponent中。子组件SelectTabsComponent作为一个弹窗用于选择需要显示的页签。选择完成后，关闭弹窗并更新 selectTabsViewModel对象中的选中页签数组 selectedTabs，以触发父组件InTabComponent的页签更新。

 

 **开发步骤**

 
定义SelectTabsViewModel类，包含所有可选择页签数组allTabs属性，和需要显示的页签数组selectedTabs属性，及更新显示页签数组的方法updateSelectedTabs()。```
@Observed
class TabItemArray extends Array<TabItemViewModel> {
}

@Observed
export default class SelectTabsViewModel {
  allTabs: TabItemArray = new TabItemArray();
  selectedTabs: TabItemArray = new TabItemArray();
  // ...

  async loadTabs(ctx: Context) {
    // ...
  }

  // apply changes to the selected tabs
  updateSelectedTabs() {
    let tempTabs: TabItemViewModel[] = [];
    for (let tab of this.allTabs) {
      if (tab.isChecked) {
        tempTabs.push(tab);
      }
    }
    this.selectedTabs = tempTabs;
  }
}
```
 在InTabsComponent中定义selectTabsViewModel属性，并且在aboutToAppear()方法中初始化。```
@Component
export default struct InTabsComponent {
  @State selectTabsViewModel: SelectTabsViewModel = new SelectTabsViewModel();
  // ...
  async aboutToAppear() {
    // ...

    await this.selectTabsViewModel.loadTabs(this.ctx);
    // ...
  }
  // ...
}
```
 利用ForEach组件将selectTabsViewModel.selectedTabs属性绑定到Tabs的页签上。```
Tabs({
  // ...
}) {
  // bind selected tabs to ui
  ForEach(this.selectTabsViewModel.selectedTabs, (tab: TabItemViewModel, index: number) => {
    if (index === this.selectTabsViewModel.selectedTabs.length - 1) {
      TabContent() {
        // ...
      }
      .tabBar(this.tabBuilder(index, tab))
      // ...
    } else {
      // ...
    }
  }, (tab: TabItemViewModel, index: number) => index + '_' + JSON.stringify(tab))
}
```
 在更多按钮的弹窗中初始化SelectTabsComponent，并将selectTabsViewModel属性作为双向绑定属性传入。在关闭弹窗处理函数中调用selectTabsViewModel.updateSelectedTabs()方法，更新需要显示的组件。```
@Builder
sheetBuilder() {
  //select tabs to show
  SelectTabsComponent({ selectTabsViewModel: this.selectTabsViewModel })
}
build() {
  Scroll() {
    Column() {
      BannerComponent()

      Stack({ alignContent: Alignment.TopEnd }) {
        Row() {
          Image($r('app.media.more'))
            // ...
            .onClick(() => {
              this.showSelectTabsComponent = !this.showSelectTabsComponent;
            })
        }
        // ...
        .zIndex(1)
        .bindSheet($$this.showSelectTabsComponent, this.sheetBuilder(), {
          detents: [SheetSize.MEDIUM, SheetSize.MEDIUM, 500],
          preferType: SheetType.BOTTOM,
          title: { title: $r('app.string.bind_sheet_title') },
          onWillDismiss: (dismissSheetAction: DismissSheetAction) => {
            // update tab when closing modal box
            this.selectTabsViewModel.updateSelectedTabs();
            if (this.selectTabsViewModel.selectedTabs.length > 0) {
              this.subsController.changeIndex(0);
            }
            dismissSheetAction.dismiss();
          }
        })
        // ...
      }
    }
  }
  // ...
}
```
 在SelectTabsComponent中将selectTabsViewModel.allTabs属性渲染成toggle组件，并且注册toggle组件的切换处理函数onChange()，在其中修改该页签的选择状态isChecked属性，供更新显示页签方法selectTabsViewModel.updateSelectedTabs()使用。```
@Component
export default struct SelectTabsComponent {
  @State checkedChange: boolean = false;
  @Link selectTabsViewModel: SelectTabsViewModel;

  build() {
    Grid() {
      ForEach(this.selectTabsViewModel.allTabs, (tab: TabItemViewModel) => {
        GridItem() {
          Row() {
            Toggle({ type: ToggleType.Button, isOn: tab.isChecked }) {
              // ...
            }
            // ...
            .onChange((isOn: boolean) => {
              tab.isChecked = isOn;
              this.checkedChange = !this.checkedChange;
            })
          }
        }
      }, (tab: TabItemViewModel, index: number) => index + '_' + JSON.stringify(tab))
    }
    .columnsTemplate(('1fr 1fr 1fr 1fr') as string)
    .height(Constants.FULL_HEIGHT)
  }
}
```
 
 #### Tabs切换动效

 #### [h2]TabContent切换动画

 Tabs 自带的页签切换动画为平移动画。若开发者需实现更高级的动画效果，可通过Tabs提供的API实现自定义动画。

 

 **实现原理**

 使用[customContentTransition()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#customcontenttransition11)函数来自定义Tabs页面的切换动画。本场景采用属性动画实现，开发者可以定义由@State修饰的可动画属性，并在build()方法中将这些属性绑定到对应的页签上。这里，淡入淡出动画选用了TabContent的尺寸属性scale和透明度属性opacity作为生成动画属性。然后，在[customContentTransition()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#customcontenttransition11)函数中，设置动画的起始帧和结束帧对应的可动画属性值，系统将自动补全中间帧从而生成动画。关于属性动画详情可参考：[实现属性动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-animation-apis)。

 

  
- 使用自定义切换动画时，Tabs组件的默认切换动画将被禁用，且页面将无法通过手势滑动切换。
- 将customContentTransition设置为undefined表示不使用自定义切换动画，继续使用组件自带的默认切换动画。
- 当前自定义切换动画不支持中途打断。
- 目前，自定义切换动画仅支持以下两种触发场景：点击页签或通过调用TabsController.changeIndex()方法。

  **开发步骤**

 
定义动画所需用到的属性数组。```
@Component
export default struct InTabsComponent {
  // ...
  @State scaleList: number[] = [];
  @State opacityList: number[] = [];
  // ...
}
```
 将属性数组绑定到对应的页签上。```
Tabs({
  // ...
}) {
  // bind selected tabs to ui
  ForEach(this.selectTabsViewModel.selectedTabs, (tab: TabItemViewModel, index: number) => {
    if (index === this.selectTabsViewModel.selectedTabs.length - 1) {
      TabContent() {
        // ...
      }
      // ...
      // bind animation properties
      .opacity(this.opacityList[index])
      .scale({
        x: this.scaleList[index], y: this.scaleList[index]
      })
    } else {
      // ...
    }
  }, (tab: TabItemViewModel, index: number) => index + '_' + JSON.stringify(tab))
}
```
 定义Tabs的自定义转场函数。```
@Component
export default struct InTabsComponent {
  // ...
  @State scaleList: number[] = [];
  @State opacityList: number[] = [];
  // ...
  private animateDuration: number = 1000;
  private animateTimeout: number = 1000;
  private customContentTransition: (from: number, to: number) => TabContentAnimatedTransition =
    (from: number, to: number) => {
      let tabContentAnimatedTransition = {
        timeout: this.animateTimeout,
        transition: (proxy: TabContentTransitionProxy) => {
          // start frame
          this.scaleList[from] = 1.0;
          this.scaleList[to] = 0.5;
          this.opacityList[from] = 1.0;
          this.opacityList[to] = 0.5;
          this.getUIContext().animateTo({
            duration: this.animateDuration,
            onFinish: () => {
              proxy.finishTransition();
            }
          }, () => {
            // end frame
            this.scaleList[from] = 0.5;
            this.scaleList[to] = 1.0;
            this.opacityList[from] = 0.5;
            this.opacityList[to] = 1.0;
          });
        }
      } as TabContentAnimatedTransition;
      return tabContentAnimatedTransition;
    };

  // ...
}
```
 将转场函数作为参数传递给Tabs的customContentTransition()方法。```
Tabs({
  barPosition: BarPosition.Start,
  controller: this.subsController,
  barModifier: this.tabBarModifier
}) {
  // ...
}
// add animation function
.customContentTransition(this.customContentTransition) // comment out to slide to switch
```
 
 #### [h2]自定义Tabs页签切换联动

 在自定义页签样式中，页签的选中和非选中状态显示样式不同时，页签的样式依赖于Tabs组件的切换动作。这种情况下，需要实现Tabs页签的联动，页签切换时，页签样式自动变更。

 

 **实现原理**

 可以通过onChange事件，在切换页签时自定义TabBar和TabContent的联动效果。具体做法是定义一个由@State修饰的变量currentIndex，用于标识当前显示的页签索引。然后，利用onChange()方法注册处理函数，并在处理函数中更新currentIndex，确保其与当前选择的页签的索引一致。在页签样式的实现中，通过判断currentIndex变量与各页签索引是否相等来决定显示的样式，同时currentIndex属性的变化会触发页签样式的更新。

 **开发步骤**

 定义currentIndex属性，tabBuilder方法，并在onChange函数中更新currentIndex属性值。

 ```
@Component
export default struct OutTabsComponent {
  @State currentIndex: number = 0;
  // ...
  @Builder
  tabBuilder(index: number, name: string | Resource, icon: Resource) {
    Column() {
      // set special styles if selected

      SymbolGlyph(icon).fontColor([this.currentIndex === index
        ? $r('app.color.out_tab_bar_font_active_color')
        : $r('app.color.out_tab_bar_font_inactive_color')])
        .fontSize(25)

      Text(name)
        .margin({ top: 4 })
        .fontSize(10)
        .fontColor(this.currentIndex === index
          ? $r('app.color.out_tab_bar_font_active_color')
          : $r('app.color.out_tab_bar_font_inactive_color'))
    }
    // ...
  }
  build() {
    Tabs({
      // ...
    }) {
      // ...
    }
    // ...
    .onChange((index: number) => {
      this.currentIndex = index;
    })
    // ...
  }
}
```
 #### 常见问题

 #### [h2]如何实现页面懒加载效果

 Tabs页面不支持懒加载。 若要实现页面懒加载效果，可以通过自定义TabBar与[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-looping)组件结合[LazyForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)来实现页面的懒加载和释放。在使用Tabs组件时，仅保留TabBar，TabContent部分留空，用Swiper组件替代TabContent以显示内容。定义一个数值属性currentIndex，利用[TabsController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabscontroller)、[SwiperController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#swipercontroller)及onchange函数，使其同时绑定Tabs组件和Swiper组件，从而实现联动。这是因为Swiper组件内支持LazyForEach组件，而原生Tabs组件不支持。在Swiper中利用LazyForEach显示内容，以实现Tabs的懒加载效果。

 

 详情请参见[页面懒加载和释放](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例13页面懒加载和释放)。

 #### 示例代码

 
- [Tabs组件应用场景](https://gitcode.com/harmonyos_samples/PureTabs)

---
*Updated: 2026-04-10 09:38:48*
