# HdsListItem

> **分区**: API参考  |  **Slug**: `ui-design-hdslistitem`  |  **DocID**: `ec0811300c8b49bcb63c67e07f4bc396`

---

# HdsListItem

 该组件可设置ListItem的横滑动效，可以承载HdsListItemCard组件。

 **起始版本：** 6.0.0(20)

  #### 导入模块

```
import { HdsListItem } from '@kit.UIDesignKit';
```
   #### 接口

HdsListItem({customItemBuilder?: CustomBuilder, hdsListItemCard?: HdsListItemCardOptions, swipeActionOptions?: HdsSwipeActionOptions | SwipeActionOptions, listItemModifier?: ListItemModifier, menuStyle?: MenuStyle, menuBuilder?: CustomBuilder, isSelected?: boolean})

 提供了一个列表组件。

 **装饰器类型：** @Component

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **设备行为异常：** 该接口在TV中与ux规范不一致（获焦态和悬停态组件未放大，获焦态背板颜色未变化，Button内部的text默认颜色等），在其他设备类型中可正常使用。

 **起始版本：** 6.0.0(20)

  参数名 类型 必填 装饰器类型 说明   customItemBuilder [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) 否 @BuilderParam 自定义列表卡片项内容。  hdsListItemCard [HdsListItemCardOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitemcard#hdslistitemcardoptions) 否 - 列表卡片项内容。  swipeActionOptions [HdsSwipeActionOptions](#hdsswipeactionoptions) | [SwipeActionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeactionoptions9对象说明) 否 - 动效横滑内容展示。

 HdsSwipeActionOptions是HdsListItem封装后的横滑动效类型，SwipeActionOptions支持用户自定义使用ListItem的横滑动效类型。

   listItemModifier [ListItemModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#自定义modifier) 否 - ListItem属性样式修改器。

 **起始版本：** 6.0.1(21)

   menuStyle [MenuStyle](#menustyle) 否 @Prop ListItem预览菜单样式。

 **起始版本：** 6.1.0(23)

   menuBuilder [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) 否 @BuilderParam 自定义弹出菜单内容。

 **起始版本：** 6.1.0(23)

   isSelected boolean 否 @Prop ListItem是否被选中。

 true：被选中。

 false：未选中。

 默认值：false。

 **起始版本：** 6.1.0(23)

        
该接口中customItemBuilder优先级高于hdsListItemCard。当同时设置customItemBuilder和hdsListItemCard时，customItemBuilder生效。

  当设置了menuBuilder时，menuStyle生效。

  当在listItemModifier中设置了selectable为false时，不要配置isSelected为true。

  
     #### HdsSwipeActionOptions

设置横滑按钮的样式。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

  名称 类型 只读 可选 说明   icons Array<[SwipeIconConfigurations](#swipeiconconfigurations)> 否 是 配置除删除按钮之外其他三个按钮样式。  deleteIconOptions [DeleteIconOptions](#deleteiconoptions) 否 是 配置删除按钮样式。  fullDeleteOptions [FullDeleteOptions](#fulldeleteoptions) 否 是 配置滑动距离超过划出组件大小后的行为。  deleteTriggerType [SwipeDeleteTriggerType](#swipedeletetriggertype) 否 是 配置横滑删除的触发类型。

 默认值：SwipeDeleteTriggerType.NORMAL_TRIGGER。

 **起始版本：** 6.1.0(23)

   onStateChange [OnStateChangeCallback](#onstatechangecallback) 否 是 列表滑出状态变化回调。

 **起始版本：** 6.1.0(23)

        #### IconOptions

设置图标的可用性和无障碍等属性。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

  名称 类型 只读 可选 说明   enable boolean 否 是 图标是否被启用。

 true：图标被启用。

 false：图标被禁用。

 默认值：true。

   accessibilityText [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) 否 是 图标的无障碍文本属性。

 当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。

 默认值：""。

   accessibilityDescription [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) 否 是 图标的无障碍描述。

 此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。

 默认值：“单指双击即可执行”。

   accessibilityLevel string 否 是 图标的无障碍重要性，用于控制当前项是否可被无障碍辅助服务所识别。

 支持的值为：

 "auto"：当前组件会转换"yes"。

 "yes"：当前组件可被无障碍辅助服务所识别。

 "no"：当前组件不可被无障碍辅助服务所识别。

 "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。

 默认值："auto"。

   accessibilityRole [AccessibilityRoleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilityroletype18枚举说明) 否 是 图标的无障碍组件类型。

 可以根据应用诉求，修改组件类型，用于控制无障碍模式下对组件的朗读方式和朗读内容。

 默认值：AccessibilityRoleType.ROLE_NONE。

 **起始版本：** 6.1.0(23)

        #### SwipeIconConfigurations

设置除删除图标外的横滑图标样式和功能。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

  名称 类型 只读 可选 说明   icon [SwipeIconType](#swipeicontype) 否 否 图标资源，可支持symbol或image类型。  iconOptions [IconOptions](#iconoptions) 否 是 图标的能力选项。  backgroundColor [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 图标背景色。  onAction [SwipeActionCallback](#swipeactioncallback) 否 是 点击回调。       #### DeleteIconOptions

设置删除图标属性。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

  名称 类型 只读 可选 说明   backgroundColor [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 删除按钮图标背景色。  iconColor [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) 否 是 删除按钮图标颜色。  iconOptions [IconOptions](#iconoptions) 否 是 删除按钮图标的能力选项。  onAction [SwipeActionCallback](#swipeactioncallback) 否 是 点击回调。       #### FullDeleteOptions

设置整个列表项的横滑删除属性。

 **需要权限：** ohos.permission.VIBRATE（当enableVibration为true时需要申请该权限。若不申请，不会报错，仅无法响应振动）

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

  名称 类型 只读 可选 说明   isFullDelete boolean 否 是 横滑之后再次滑动是否删除整个列表项。

 - true：横滑之后再次滑动删除该列表项。

 - false：横滑之后再次滑动不删除该列表项。

 默认值：false。

   onFullDeleteAction [SwipeActionCallback](#swipeactioncallback) 否 是 列表项删除的回调。  enableVibration boolean 否 是 横滑删除整个列表项时，是否启用振动。

 - true：启用振动。

 - false：不启用振动。

 默认值：true。

 **起始版本：** 6.1.0(23)

        #### SwipeIconType

type SwipeIconType = SymbolGlyphModifier | ImageOptions

 横滑图标资源类型。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

 **返回值**:

  类型 说明   [SymbolGlyphModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#自定义modifier) symbol资源类型。  [ImageOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdslistitemcard#accessibilitygroupoptions) image资源类型。       #### MenuStyle

设置列表项的预览菜单样式。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.1.0(23)

  名称 类型 只读 可选 说明   responseType [ResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#responsetype8) 否 是 预览菜单响应类型。  menuOptions [ContextMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#contextmenuoptions10) 否 是 预览菜单选项信息。       #### SwipeActionCallback

type SwipeActionCallback = () => void

 列表滑动事件触发的回调函数。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.0.0(20)

   #### OnStateChangeCallback

type OnStateChangeCallback = (state: SwipeActionState) => void

 列表滑出状态变化触发的回调函数。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.1.0(23)

 **参数：**

  参数名 类型 必填 说明   state [SwipeActionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeactionstate11枚举说明) 是 列表项滑动的状态。

 - state为SwipeActionState.COLLAPSED时，表示收起状态，此时操作项处于隐藏状态。

 - state为SwipeActionState.EXPANDED时，表示展开状态，此时操作项处于显示状态。

 - state为SwipeActionState.ACTIONING时，表示长距离状态，当HdsListItem进入长距删除区后，删除HdsListItem的状态。

        #### SwipeDeleteTriggerType

列表横滑删除触发类型枚举。

 **模型约束：** 此接口仅可在Stage模型下使用。

 **系统能力：** SystemCapability.UIDesign.HDSPattern.Standard

 **起始版本：** 6.1.0(23)

  名称 值 说明   NORMAL_TRIGGER 0 列表横滑删除触发类型：正常触发。

 正常触发长横滑删除。

 触发阈值：图标宽度+50%剩余list宽度。

   EASY_TRIGGER 1 列表横滑删除触发类型：容易触发。

 触发删除需要的滑动距离更短，更容易触发长横滑删除。

 触发阈值：90%图标宽度+30%剩余list宽度。

   NO_TRIGGER 2 列表横滑删除触发类型：无法触发。

 不响应长横滑删除。

        #### 示例

设置一个带横滑效果的列表：

 ```
import { promptAction, SymbolGlyphModifier, TextModifier } from '@kit.ArkUI';
import { HdsListItem } from '@kit.UIDesignKit';

@Entry
@Component
struct HdsListItemExample {
  @State dataSource: LazyDataSource<Item> = new LazyDataSource();
  @State dataArr: Array<Item> = [];
  @State EndOffset: number = 0;
  private scroller: Scroller = new Scroller();

  build() {
    Column() {
      List({ space: 10, scroller: this.scroller }) {
        LazyForEach(this.dataSource, (item: Item) => {
          HdsListItem({
            hdsListItemCard: {
              textItem: {
                primaryText: {
                  text: 'Primary Text',
                  modifier: new TextModifier().fontColor(Color.Orange).fontSize(16),
                }
              }
            },
            swipeActionOptions: {
              icons: [
                {
                  icon: new SymbolGlyphModifier($r('sys.symbol.share')).fontColor([Color.Red]).fontSize(16),
                  backgroundColor: Color.Green,
                  onAction: () => {
                    promptAction.openToast({ message: '点击share按钮', duration: 100 });
                  },
                },
                {
                  icon: new SymbolGlyphModifier($r('sys.symbol.plus_square_on_square')),
                  backgroundColor: Color.Orange,
                  onAction: () => {
                    promptAction.openToast({ message: '点击copy按钮', duration: 100 });
                  },
                },
                {
                  icon: new SymbolGlyphModifier($r('sys.symbol.plus_square_dashed_on_square'))
                          .symbolEffect(new BounceSymbolEffect(), true),
                  onAction: () => {
                    promptAction.openToast({ message: '点击paste按钮', duration: 100 });
                  },
                },
              ],
              deleteIconOptions: {
                backgroundColor: Color.Red, //  ---修改背景色
                iconColor: Color.Gray, //  ---- 修改垃圾桶的颜色
                onAction: () => {
                  promptAction.openToast({ message: '点击删除按钮', duration: 100 });
                }, //   --点击回调
              },
              fullDeleteOptions: {
                isFullDelete: true, // --- 划动距离超过划出组件大小后自动触发删除，默认是false
                onFullDeleteAction: () => {
                  promptAction.openToast({ message: '触发自动删除', duration: 100 });
                  this.getUIContext()?.animateTo({
                    duration: 350,
                  }, () => {
                    this.dataSource.deleteItem(item)
                  });
                }, //   -- 触发删除时的回调
              },
            }
          })
        }, (item: Item) => item.data)
      }
      .scrollBar(BarState.Off)
      .onDidScroll((scrollOffset: number) => {
        this.EndOffset = scrollOffset
      })
      .margin(10)
      .width('100%')
      .height('100%')
    }
    .backgroundColor('#0D182431')
    .width('100%')
    .height('100%')
  }

  aboutToAppear() {
    for (let i = 0; i < 2; i++) {
      this.dataSource.pushItem(new Item(i + ''));
      this.dataArr.push(new Item(i + ''));
    }
  }
}

class Item {
  constructor(data: string) {
    this.data = data;
  }

  public data: string = '';
}

export class LazyDataSource<T> implements IDataSource {
  private elements: T[];
  private listeners: Set<DataChangeListener>;

  constructor(elements: T[] = []) {
    this.elements = elements;
    this.listeners = new Set();
  }

  public totalCount(): number {
    return this.elements.length;
  }

  public getData(index: number): T {
    return this.elements[index];
  }

  public indexOf(item: T): number {
    return this.elements.indexOf(item);
  }

  public pinItem(item: T, index: number): void {
    this.elements.splice(index, 1);
    this.elements.unshift(item);
    this.listeners.forEach(listener => listener.onDataReloaded());
  }

  public pushItem(item: T) {
    this.elements.push(item);
    this.listeners.forEach(listener => listener.onDataAdd(this.elements.length - 1));
  }

  public deleteItem(item: T): void {
    const index = this.elements.indexOf(item);
    if (index < 0) {
      return;
    }
    this.elements.splice(index, 1);
    this.listeners.forEach(listener => listener.onDataDelete(index));
  }

  public deleteItemByIndex(index: number): void {
    this.elements.splice(index, 1);
    this.listeners.forEach(listener => listener.onDataDelete(index));
  }

  public registerDataChangeListener(listener: DataChangeListener): void {
    this.listeners.add(listener);
  }

  public unregisterDataChangeListener(listener: DataChangeListener): void {
    this.listeners.delete(listener);
  }
}
```
 效果图：

---
*Updated: 2026-04-22 06:42:30*
