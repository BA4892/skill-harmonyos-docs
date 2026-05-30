# @hw-stylistic/quotes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-quotes-stylistic`  |  **DocID**: `e0ff9951b25f4f6798ace35040ad0cb7`  |  **NodeID**: `000201775790122558453a80f28e80f3`

---

# @hw-stylistic/quotes

 强制字符串使用单引号。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/quotes": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export {a, b};

const a = 'hello';
const b = `hello`;
```
  #### 反例

```
// Strings must use single quotes.
export const a = "hello";
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
