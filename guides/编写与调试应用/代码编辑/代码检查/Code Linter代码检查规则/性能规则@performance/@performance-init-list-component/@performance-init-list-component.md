# @performance/init-list-component

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-init-list-component`  |  **DocID**: `e196c918df1249a8a7b087e329d003ec`  |  **NodeID**: `000201775790122558537a39ade08d55`

---

# @performance/init-list-component

 List组件在使用时，建议同时定义width和height属性。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/init-list-component": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Component
struct Greeting {
  @Builder myBuilder() {
    List().width(10).height(10)
  }
  build() {
    List() {
    }.width(10).height(10);
  }
}

@Builder function globalBuilder() {
  List().width(10).height(10)
}
```
  #### 反例

```
@Component
struct Greeting {
  @Builder myBuilder() {
    // missing initialization of attribute 'height'
    List().width(10)
  }
  build() {
    // missing initialization of attribute 'width'
    List().height(10);
  }
}

@Builder function myBuilder() {
  // missing initialization of attribute 'height'
  List().width(10)
}
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
