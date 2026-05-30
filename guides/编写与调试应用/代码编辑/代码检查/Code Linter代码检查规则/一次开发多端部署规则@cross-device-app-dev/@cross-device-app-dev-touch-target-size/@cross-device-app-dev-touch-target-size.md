# @cross-device-app-dev/touch-target-size

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_touch-target-size`  |  **DocID**: `582fcb1452c04470bdf604df016a9d77`  |  **NodeID**: `000201775790122558432fb97c776af4`

---

# @cross-device-app-dev/touch-target-size

 组件通用属性responseRegion点击热区需满足最小尺寸要求。

 主要交互元素或控件的可点击热区至少为48vp×48vp（推荐），不得小于40vp×40vp。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@cross-device-app-dev/touch-target-size": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text('message').responseRegion({width: 60, height: 60})
    }
  }
}
```
  #### 反例

```
@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text('message').responseRegion({width: 27, height: 40})
    }
  }
}
```
  #### 规则集

```
plugin:@cross-device-app-dev/recommended
plugin:@cross-device-app-dev/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
