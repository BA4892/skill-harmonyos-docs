# @typescript-eslint/restrict-plus-operands

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_restrict-plus-operands`  |  **DocID**: `77ed57ceee95416d9879cc6cbe4df6a2`  |  **NodeID**: `0002017757901225586107d2c677f91f`

---

# @typescript-eslint/restrict-plus-operands

 要求加法的两个操作数都是相同的类型，并且是“bigint”、“number”或“string”。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/restrict-plus-operands": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/restrict-plus-operands选项](https://typescript-eslint.nodejs.cn/rules/restrict-plus-operands/#options)。

  #### 正例

```
const num = 10;
const bigIntNum = 1n;
export const foo1 = parseInt('5.5', num) + num;
export const foo2 = bigIntNum + bigIntNum;
```
  #### 反例

```
const num = 10;
const bigIntNum = 1n;
export const foo2 = bigIntNum + num;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
