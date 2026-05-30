# @previewer/no-unallowed-decorator-on-root-component

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unallowed-decorator-on-root-component`  |  **DocID**: `d4e65a50843145049dabb458c6f5382b`  |  **NodeID**: `00020177579012255839413084bc618e`

---

# @previewer/no-unallowed-decorator-on-root-component

 

 不允许直接预览包含@Consume、@Link、@ObjectLink、@Prop等装饰器的子组件；

 建议使用一个定义了完整的、合法的、不依赖运行时的默认值的父组件，并预览此父组件来查看子组件的预览效果。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@previewer/no-unallowed-decorator-on-root-component": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
@Entry
@Component
struct LinkSampleContainer {
  @State message: string = 'Hello World';
  build() {
    Row() {
      LinkSample({message: this.message})
    }
  }
}
@Component
struct LinkSample {
  @Link message: string;
  build() {
    Row() {
      Text(this.message)
    }
  }
}
```
  #### 反例

```
@Preview
@Component
struct LinkSample {
  @Link message: string;
  build() {
    Row() {
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
