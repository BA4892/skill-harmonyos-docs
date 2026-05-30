# @typescript-eslint/no-magic-numbers

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-magic-numbers`  |  **DocID**: `8e767308170841f1ba357614cb4ee927`  |  **NodeID**: `0002017757901225585384bedcedd72e`

---

# @typescript-eslint/no-magic-numbers

 禁止使用魔法数字。

 “魔法数字”是在代码中多次出现但没有明确含义的数字，最好将它们替换为常量。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-magic-numbers": "warn"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-magic-numbers选项](https://typescript-eslint.nodejs.cn/rules/no-magic-numbers#选项)。

  #### 正例

```
const TAX = 0.25;
const dutyFreePrice = 100;
export const finalPrice = dutyFreePrice + dutyFreePrice * TAX;
```
  #### 反例

```
export const finalPrice = 100 + 100 * 0.25;

const data = ['foo', 'bar', 'baz'];
export const dataLast = data[2];
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
