# @typescript-eslint/no-empty-interface

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-empty-interface`  |  **DocID**: `75b90546f09e4ec49c4645af644a2813`  |  **NodeID**: `000201775790122558508c557edf39c4`

---

# @typescript-eslint/no-empty-interface

 不允许声明空接口。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-empty-interface": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-empty-interface选项](https://typescript-eslint.nodejs.cn/rules/no-empty-interface/#options)。

  #### 正例

```
// an interface with any number of members
interface Foo {
  name: string;
}

interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of an intersection type.
export interface Baz extends Foo, Bar {}
```
  #### 反例

```
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
export interface Bar extends Foo {}

// an interface with an empty list of supertypes
export interface Baz {}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
