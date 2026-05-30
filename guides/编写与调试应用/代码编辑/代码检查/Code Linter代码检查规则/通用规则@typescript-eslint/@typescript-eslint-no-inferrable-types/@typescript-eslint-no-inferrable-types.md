# @typescript-eslint/no-inferrable-types

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-inferrable-types`  |  **DocID**: `85904d38b609467bb55aeaa6666558b9`  |  **NodeID**: `000201775790122558529c0cc744ce86`

---

# @typescript-eslint/no-inferrable-types

 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。

 变量或者参数如果在初始化时定义为布尔、数字或者字符串类型，Typescript可以推断出其类型，不用显式声明其类型。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-inferrable-types": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-inferrable-types选项](https://typescript-eslint.io/rules/no-inferrable-types/#options)。

  #### 正例

```
const num = 10;
export const a1 = 10n;
export const a2 = BigInt(num);
export const a3 = !num;
export const a4 = Boolean(null);
export const a5 = true;
export const a6 = null;

export class Foo {
  public prop = num;
}

export function fn(a = num, b = true): void {
  console.info(`${a}${b}`);
}
```
  #### 反例

```
const num: number = 10;
export const a1: bigint = 10n;
export const a2: bigint = BigInt(num);
export const a3: boolean = !num;
export const a4: boolean = Boolean(null);
export const a5: boolean = true;
export const a6: null = null;

export class Foo {
  public prop: number = num;
}

export function fn(a: number = num, b: boolean = true): void {
  console.info(`${a}${b}`);
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
