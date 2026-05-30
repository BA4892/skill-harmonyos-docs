# @performance/sparse-array-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-sparse-array-check`  |  **DocID**: `649dcc0552444833bde5bf0367f60a57`  |  **NodeID**: `00020177579012255856956cc5aa164a`

---

# @performance/sparse-array-check

 建议避免使用稀疏数组。

 根据[ArkTS高性能编程实践](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/sparse-array-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
let index = 3;
let result: number[] = [];
result[index] = 0;
```
  #### 反例

```
let count = 100000;
let arr1: number[] = new Array(count);
let arr2 = new Array<number>();
arr2[9999] = 0;
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
