# @performance/custom-node-memory-leak-check

> **分区**: Guides  |  **Slug**: `ide-custom-node-memory-leak-check`  |  **DocID**: `fa5e45a6328e49e58ee73d4be5354dcf`  |  **NodeID**: `00020177699411121379606a056e95f9`

---

# @performance/custom-node-memory-leak-check

 建议在Component中新建自定义节点时主动释放节点，避免因未释放节点导致的内存泄露。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/custom-node-memory-leak-check": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { BuilderNode } from '@kit.ArkUI';

@Entry
@Component
struct BuilderNodeDisposeExample {
  private builder: BuilderNode<[]> | null = null
  build() {
    Column({ space: 20 }) {
      Button('open dialog')
        .onClick(() => {
          const uiContext = this.getUIContext()
          this.builder = new BuilderNode(uiContext) // 创建 BuilderNode
        })

      Button('close dialog')
        .onClick(() => {
          if (this.builder) {
            this.builder.dispose() // 释放构建出的节点
            this.builder = null
          }
        })
    }
    .width('100%')
    .height('100%')
    .padding(20)
    .backgroundColor(Color.Grey)
  }
}
```
  #### 反例

```
import { BuilderNode } from '@kit.ArkUI';

@Entry
@Component
struct LeakyBuilderExample {
  private builder: BuilderNode<[]> | null = null
  build() {
    Column({ space: 20 }) {
      Button('create dialog')
        .onClick(() => {
          const context = this.getUIContext();

          // 没有释放旧 builder，直接创建新 builder
          this.builder = new BuilderNode(context)

        })
    }
    .width('100%')
    .height('100%')
    .padding(20)
    .backgroundColor(Color.Grey)
  }
}
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-24 01:28:25*
