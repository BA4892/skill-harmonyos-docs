# @hw-stylistic/one-var-declaration-per-line

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_one-var-declaration-per-line`  |  **DocID**: `d2cdf5df02da4a8c960512fb5b54a5d5`  |  **NodeID**: `0002017757901225584427781b39a60c`

---

# @hw-stylistic/one-var-declaration-per-line

 变量声明时，要求一次仅声明一个变量。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/one-var-declaration-per-line": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
let a: string = 'hello';
let b: string = 'world';
a += 'my';
b += 'my';

const c: string = 'hello';
const d: string = 'world';

console.info(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
```
  #### 反例

```
// Split 'const' declarations into multiple statements.
const a: string = 'hello', b: string = 'world';
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
