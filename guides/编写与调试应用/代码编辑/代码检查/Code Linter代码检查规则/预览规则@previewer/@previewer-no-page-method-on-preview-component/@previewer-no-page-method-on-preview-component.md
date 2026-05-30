# @previewer/no-page-method-on-preview-component

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-page-method-on-preview-component`  |  **DocID**: `4ec33ecc96eb4844be00d43f81b17ae4`  |  **NodeID**: `00020177579012255838760ae0b77dab`

---

# @previewer/no-page-method-on-preview-component

 禁止在非路由组件上实例化onPageShow、onPageHide、onBackPress等页面级方法。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@previewer/no-page-method-on-preview-component": "warn"
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
  @State message: string = 'Hello World';
  onPageShow(): void {}
  onPageHide(): void {}
  onBackPress(): void {}
  build() {
    Row() {
      Column() {
        Text(this.message)
      }
    }
  }
}
```
  #### 反例

```
@Preview
@Component
struct Index {
  @State message: string = 'Hello World';
  onPageShow(): void {}
  onPageHide(): void {}
  onBackPress(): void {}
  build() {
    Column() {
      Text(this.message)
    }
  }
}
```
  #### 规则集

```
plugin:@previewer/recommended
plugin:@previewer/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
