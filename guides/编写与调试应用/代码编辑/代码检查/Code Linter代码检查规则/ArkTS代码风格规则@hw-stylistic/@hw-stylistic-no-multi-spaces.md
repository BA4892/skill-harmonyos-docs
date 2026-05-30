# @hw-stylistic/no-multi-spaces

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-multi-spaces`  |  **DocID**: `ebecb933d4e44e10b5c24659b0ee09c3`  |  **NodeID**: `0002017757901225584260549598e7d8`

---

# @hw-stylistic/no-multi-spaces

 不允许出现连续多个空格，除非是换行。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/no-multi-spaces": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export const message: string = 'Hello World';
```
  #### 反例

```
// Multiple spaces found before 'message'.
// Multiple spaces found before 'string'.
// Multiple spaces found before '='.
// Multiple spaces found before 'Hello World'.
export const   message:  string  =  'Hello World';
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
