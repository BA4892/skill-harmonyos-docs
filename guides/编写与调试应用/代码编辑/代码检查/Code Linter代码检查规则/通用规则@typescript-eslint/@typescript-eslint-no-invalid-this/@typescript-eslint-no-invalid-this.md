# @typescript-eslint/no-invalid-this

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-invalid-this`  |  **DocID**: `d8485dbd22ae418fa55285ec8e9eed0c`  |  **NodeID**: `0002017757901225585308d57571c409`

---

# @typescript-eslint/no-invalid-this

 禁止在this值为undefined的上下文中使用this。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-invalid-this": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-invalid-this选项](https://eslint.nodejs.cn/docs/rules/no-invalid-this#选项)。

  #### 正例

```
// ts代码文件中需要添加"use strict"
function baz(arg0: () => object) {
  return arg0;
}

export class Bar {
  public a: number;

  public constructor() {
    this.a = 0;
    baz(() => this);
  }
}
```
  #### 反例

```
// ts代码文件中需要添加"use strict"
function baz(arg0: () => object) {
  return arg0;
}

export function foo1() {
  this.a = 0;
  baz(() => this);
}

export const foo2 = () => {
  this.a = 0;
  baz(() => this);
};
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
