# @typescript-eslint/require-array-sort-compare

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_require-array-sort-compare`  |  **DocID**: `043c2780e3a64e3097b21fa896f58314`  |  **NodeID**: `00020177579012255860807cfedfa94f`

---

# @typescript-eslint/require-array-sort-compare

 要求调用“Array#sort”时，始终提供“compareFunction”。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/require-array-sort-compare": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/require-array-sort-compare选项](https://typescript-eslint.nodejs.cn/rules/require-array-sort-compare/#options)。

  #### 正例

```
declare const array: string[];

array.sort((a, b) => a.length - b.length);
array.sort((a, b) => a.localeCompare(b));
```
  #### 反例

```
declare const array: number[];
declare const stringArray: object[];

array.sort();

// String arrays should be sorted using `String#localeCompare`.
stringArray.sort();
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
