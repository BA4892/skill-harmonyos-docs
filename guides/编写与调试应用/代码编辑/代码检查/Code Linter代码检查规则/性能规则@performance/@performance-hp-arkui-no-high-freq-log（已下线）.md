# @performance/hp-arkui-no-high-freq-log（已下线）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-hp-arkui-no-high-freq-log`  |  **DocID**: `a2ca90d7bffc469d806360ee72541a15`  |  **NodeID**: `0002017757901225584658dd05f74449`

---

# @performance/hp-arkui-no-high-freq-log（已下线）

 建议在正式发布的版本中，注释掉或删除日志打印代码。该规则已于5.0.3.403版本下线。

 #### 正例

```
import hilog from '@ohos.hilog';
@Entry
@Component
struct MyComponent{
  build() {
    Column() {
      Scroll()
        .onScroll(() => {
          //正例
          //hilog.info(1001, 'Index', 'onScroll')
          // do something
        })
    }
  }
}
```
  #### 反例

```
import hilog from '@ohos.hilog';
@Entry
@Component
struct MyComponent{
  build() {
    Column() {
      Scroll()
        .onScroll(() => {
          // 高频操作中不建议写日志
          hilog.info(1001, 'Index', 'onScroll')
          // do something
        })
    }
  }
}
```
  Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
