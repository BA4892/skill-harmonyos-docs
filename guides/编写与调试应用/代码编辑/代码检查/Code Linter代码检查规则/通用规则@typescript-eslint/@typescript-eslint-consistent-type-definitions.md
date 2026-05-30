# @typescript-eslint/consistent-type-definitions

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_consistent-type-definitions`  |  **DocID**: `2a352db7d30d4bf8b1c95141c0ca04a6`  |  **NodeID**: `000201775790122558450a79904808a0`

---

# @typescript-eslint/consistent-type-definitions

 强制使用一致的类型声明样式，仅使用“interface”或者仅使用“type”。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/consistent-type-definitions选项](https://typescript-eslint.nodejs.cn/rules/consistent-type-definitions/#options)。

  #### 正例

```
// 基本类型的定义可以使用type
export type T1 = string;

// 默认推荐使用interface 进行对象类型定义
export interface T2 {
  x: number;
}

export type Foo = string | T2;
```
  #### 反例

```
// 默认推荐使用interface 进行对象类型定义
type T = { x: number };
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
