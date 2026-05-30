# @performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_hp-arkui-use-reuseid-if-else-component`  |  **DocID**: `78c98a470634427fb393746fe649a998`  |  **NodeID**: `000201775790122558496668cac9d482`

---

# @performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component

 建议使用reuseId标记不同结构的组件构成。

 滑动丢帧场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';
import { ChartInfoEntry } from './data/DataEntry';
import { PublicChatItem } from './component/PublicChatItem';
import { ChatItem } from './component/ChatItem';

@Entry
@Component
struct MyComponent{
  private scroller: Scroller = new Scroller()
  private lazyChatList: MyDataSource = new MyDataSource();

  build() {
    Column() {
      List({ scroller: this.scroller }) {
        LazyForEach(this.lazyChatList, (item: ChartInfoEntry, index: number) => {
          ListItem() {
            // 使用reuseId进行组件复用的控制
            InnerRecentChat({ chatInfo: item }).reuseId(this.lazyChatList.getReuseIdByIndex(index))
          }
          .height(72)
        }, (item: ChartInfoEntry) => item.id)
      }
      .cachedCount(3)
      .width('100%')
      .height('100%')
    }
  }
}

@Reusable
@Component
struct InnerRecentChat {
  @State chatInfo: ChartInfoEntry = new ChartInfoEntry()

  aboutToReuse(params: Record<string, ESObject>): void {
    this.chatInfo = params.chatInfo as ChartInfoEntry
  }

  build() {
    Button({ type: ButtonType.Normal }) {
      Row() {
        if (this.chatInfo['isPublicChat']) {
          // 源码文件，请以工程实际为准
          PublicChatItem({ chatInfo: chatInfo as ChartInfoEntry })
        } else {
          // 源码文件，请以工程实际为准
          ChatItem({ chatInfo: this.chatInfo as ChatItem })
        }
      }.padding({ left: 16, right: 16 })
    }
    .type(ButtonType.Normal)
    .width('100%')
    .height('100%')
    .borderRadius(0)
  }
}
```
  #### 反例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';
import { ChartInfoEntry } from './data/DataEntry';
import { PublicChatItem } from './component/PublicChatItem';
import { ChatItem } from './component/ChatItem';

@Entry
@Component
struct MyComponent{
  private scroller: Scroller = new Scroller()
  private lazyChatList: MyDataSource = new MyDataSource();

  build() {
    Column() {
      List({ scroller: this.scroller }) {
        LazyForEach(this.lazyChatList, (item: ChartInfoEntry, index: number) => {
          ListItem() {
            // ListItem里有if-else并且直接在分支里使用了自定义复用组件
            Button({ type: ButtonType.Normal }) {
              Row() {
                if (item['isPublicChat']) {
                  // 源码文件，请以工程实际为准
                  PublicChatItem({ chatInfo: item as PublicChatItem })
                } else {
                  // 源码文件，请以工程实际为准
                  ChatItem({ chatInfo: item as ChatItem })
                }
              }.padding({ left: 16, right: 16 })
            }
            .type(ButtonType.Normal)
            .width('100%')
            .height('100%')
            .borderRadius(0)
          }
          .height(72)
        }, (item: ChartInfoEntry) => item.id)
      }
      .cachedCount(3)
      .width('100%')
      .height('100%')
    }
  }
}
```
  #### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
