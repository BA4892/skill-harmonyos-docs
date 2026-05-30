# @typescript-eslint/space-before-function-paren

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_space-before-function-paren`  |  **DocID**: `bd1cc292968b4075a3396c03984fa4b1`  |  **NodeID**: `000201775790122558614a432b90df58`

---

# @typescript-eslint/space-before-function-paren

 强制在函数名和括号之间保持一致的空格风格。

  
- 该规则默认要求函数名和括号间有空格。如需修改请参考[选项](#section182418564158)。
- 该规则建议在对.ts文件进行检查时使用。如需检查.ets文件，建议使用[@hw-stylistic/space-before-function-paren](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-space-before-function-paren-stylistic)。

  #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/space-before-function-paren": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/space-before-function-paren选项](https://eslint.nodejs.cn/docs/rules/space-before-function-paren#选项)。

  #### 正例

```
// 默认foo和(之间需要一个空格
export function foo () {
  // ...
}
```
  #### 反例

```
// 默认foo和(之间需要一个空格
export function foo() {
  // ...
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
