# @typescript-eslint/prefer-function-type

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-function-type`  |  **DocID**: `de93f910e5de4f4ca0fe2ee0e6ccb73c`  |  **NodeID**: `000201775790122558594727bc9fd0f0`

---

# @typescript-eslint/prefer-function-type

 强制使用函数类型而不是带有签名的对象类型。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-function-type": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export function foo(example: () => number): number {
  return example();
}

// returns the function itself, not the `this` argument.
export type ReturnsSelf = (arg: string) => ReturnsSelf;

export interface Foo {
  bar: string;
}
```
  #### 反例

```
interface GeneratedTypeLiteralInterface {
  (): number;
}

export function foo(example: GeneratedTypeLiteralInterface): number {
  return example();
}

export interface Foo {
  (bar: string): this;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
