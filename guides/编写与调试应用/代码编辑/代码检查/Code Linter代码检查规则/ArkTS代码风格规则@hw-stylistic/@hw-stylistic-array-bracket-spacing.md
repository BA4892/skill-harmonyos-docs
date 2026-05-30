# @hw-stylistic/array-bracket-spacing

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_array-bracket-spacing`  |  **DocID**: `7330608c287741ec9def29d8cb4d988f`  |  **NodeID**: `0002017757901225583770d2a4db7220`

---

# @hw-stylistic/array-bracket-spacing

 强制数组“[”之后和“]”之前不加空格。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/array-bracket-spacing": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export const arr = ['a', 'b'];
```
  #### 反例

```
// There should be no space after '['.
// There should be no space before ']'.
export const arr = [ 'a', 'b' ];
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
