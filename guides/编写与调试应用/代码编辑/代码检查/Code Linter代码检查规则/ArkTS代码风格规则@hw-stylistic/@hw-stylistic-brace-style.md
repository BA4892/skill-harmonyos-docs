# @hw-stylistic/brace-style

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-brace-style-stylistic`  |  **DocID**: `416b781e1db344928bf4f59376f0fcf3`  |  **NodeID**: `0002017757901225583847b4d699b59d`

---

# @hw-stylistic/brace-style

 强制大括号和语句位于同一行。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/brace-style": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
try {
  // doSomething
} catch (e) {
  // doSomething
} finally {
  // doSomething
}
```
  #### 反例

```
try
// Opening curly brace does not appear on the same line as statement before.
{

// Closing curly brace does not appear on the same line as statement after.
}
catch (e)
// Opening curly brace does not appear on the same line as statement before.
{

// Closing curly brace does not appear on the same line as statement after.
}
finally
// Opening curly brace does not appear on the same line as statement before.
{

}
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
