# @hw-stylistic/space-before-function-paren

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-space-before-function-paren-stylistic`  |  **DocID**: `e06ae2182c4d41168a23741c4d59c347`  |  **NodeID**: `0002017757901225584642985c963ba7`

---

# @hw-stylistic/space-before-function-paren

 在函数名和“(”之间强制不加空格。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/space-before-function-paren": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
function bar() {
  // doSomething
}
bar();
```
  #### 反例

```
// Unexpected space before function parentheses.
function bar () {
  // doSomething
}
// Unexpected space before function parentheses.
bar  ();
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
