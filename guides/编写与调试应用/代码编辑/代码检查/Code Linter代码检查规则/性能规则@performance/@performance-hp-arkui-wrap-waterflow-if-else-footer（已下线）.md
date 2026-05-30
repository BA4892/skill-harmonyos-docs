# @performance/hp-arkui-wrap-waterflow-if-else-footer（已下线）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-hp-arkui-wrap-waterflow-if-else-footer`  |  **DocID**: `b41e2f35139445b0904030001aa1f800`  |  **NodeID**: `00020177579012255852611a2577f349`

---

# @performance/hp-arkui-wrap-waterflow-if-else-footer（已下线）

 建议使用容器包裹waterflow中footer的if-else逻辑。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-wrap-waterflow-if-else-footer": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';

@Entry
@Component
struct MyComponent{
  private datasource: MyDataSource = new MyDataSource();
  private showFooterStatus = 2;

  aboutToAppear() {
    for (let i = 0; i <= 20; i++) {
      this.datasource.pushData(i)
    }
  }

  build() {
    Column({ space: 2 }) {
      WaterFlow({ footer: (): void => this.itemFoot() }) {
        LazyForEach(this.datasource, (item: number) => {
          FlowItem() {
            ReusableFlowItem({ item: item })

          }.onAppear(() => {
            if (item + 20 == this.datasource.totalCount()) {
              for (let i = 0; i < 100; i++) {
                this.datasource.addLastItem()
              }
            }
          })

          .width('100%')
        }, (item: string) => item)
      }
      .columnsTemplate('1fr 1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(5)
      .width('100%')
      .height('50%')
    }
  }

  @Builder
  itemFoot() {
    //  外层加了一个column容器控制
    Column() {
      if (this.showFooterStatus == 1) {
        // Code to show try again
      } else if (this.showFooterStatus == 2) {
        // Code to show end
      } else {
        // Code to show footer loading
      }
    }
  }
}

@Component
@Reusable
struct ReusableFlowItem {
  @State item: number = 0

  aboutToReuse(params: Record<string, ESObject>) {
    this.item = params.item;
  }

  build() {
    Column() {
      Text('N' + this.item)
        .fontSize(12)
        .height('16')
      Image('res/waterFlowTest (' + this.item % 5 + ').jpg')
        .objectFit(ImageFit.Fill)
        .width('100%')
        .layoutWeight(1)
    }
  }
}
```
  #### 反例

```
// 源码文件，请以工程实际为准
import { MyDataSource } from './MyDataSource';

@Entry
@Component
struct MyComponent{
  private datasource: MyDataSource = new MyDataSource();
  private showFooterStatus = 2;

  aboutToAppear() {
    for (let i = 0; i <= 20; i++) {
      this.datasource.pushData(i)
    }
  }

  build() {
    Column({ space: 2 }) {
      WaterFlow({ footer: (): void => this.itemFoot() }) {
        LazyForEach(this.datasource, (item: number) => {
          FlowItem() {
            ReusableFlowItem({ item: item })

          }.onAppear(() => {
            if (item + 20 == this.datasource.totalCount()) {
              for (let i = 0; i < 100; i++) {
                this.datasource.addLastItem()
              }
            }
          })

          .width('100%')
        }, (item: string) => item)
      }
      .columnsTemplate('1fr 1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(5)
      .width('100%')
      .height('50%')
    }
  }

  @Builder
  itemFoot() {
    //  这个作为footer的build的逻辑里有if逻辑，应该在外层加一个容器控制
    if (this.showFooterStatus == 1) {
      // Code to show try again
    } else if (this.showFooterStatus == 2) {
      // Code to show end
    } else {
      // Code to show footer loading
    }
  }
}

@Component
@Reusable
struct ReusableFlowItem {
  @State item: number = 0

  aboutToReuse(params: Record<string, ESObject>) {
    this.item = params.item;
  }

  build() {
    Column() {
      Text('N' + this.item)
        .fontSize(12)
        .height('16')
      Image('res/waterFlowTest (' + this.item % 5 + ').jpg')
        .objectFit(ImageFit.Fill)
        .width('100%')
        .layoutWeight(1)
    }
  }
}
```
  #### 规则集

plugin:@performance/all  Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
