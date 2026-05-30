# @typescript-eslint/no-empty-function

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-empty-function`  |  **DocID**: `dafccffbe60147f5afd79d584fb38d7e`  |  **NodeID**: `000201775790122558506d89e7125ce5`

---

# @typescript-eslint/no-empty-function

 不允许使用空函数。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-empty-function": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-empty-function选项](https://eslint.nodejs.cn/docs/rules/no-empty-function#选项)。

  #### 正例

该规则旨在消除空函数。如果函数包含注释，则不会将其视为问题。

 ```
/*eslint no-empty-function: "error"*/
function foo() {
  // do nothing.
}

const baz = () => {
  foo();
};

export class Bar {
  public meth1() {
    // do something
  }

  public meth2() {
    baz();
  }
}
```
  #### 反例

```
/*eslint no-empty-function: "error"*/
function foo() {

}

const baz = () => {

};

export class Bar {
  public meth1() {

  }

  public meth2() {

  }
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
