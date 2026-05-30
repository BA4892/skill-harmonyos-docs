# @typescript-eslint/quotes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_quotes`  |  **DocID**: `ae135946d8b5453892cc1529d86868e1`  |  **NodeID**: `0002017757901225586072c748d977e2`

---

# @typescript-eslint/quotes

 强制使用一致的反引号、双引号或单引号风格。

  
- 该规则默认检查字符串是否正确使用双引号。如需修改请参考[选项](#section182418564158)。
- 该规则建议在对.ts文件进行检查时使用。如需检查.ets文件，建议使用[@hw-stylistic/quotes](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quotes-stylistic)。

  #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/quotes": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/quotes选项](https://eslint.nodejs.cn/docs/latest/rules/quotes#选项)。

  #### 正例

```
export const double = "double";
export const foo = `back
tick`;  // backticks are allowed due to newline
```
  #### 反例

```
// 默认推荐使用双引号
export const single = 'single';
export const unescaped = 'a string containing "double" quotes';
export const backtick = `back\ntick`; // you can use \n in single or double quoted strings
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
