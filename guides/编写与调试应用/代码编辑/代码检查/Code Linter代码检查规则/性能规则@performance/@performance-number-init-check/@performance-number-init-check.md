# @performance/number-init-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-number-init-check`  |  **DocID**: `57b8023cbb2c4493a4f30d189c0be419`  |  **NodeID**: `00020177579012255855498a90318ceb`

---

# @performance/number-init-check

 该规则将检查number是否正确使用。

 根据[ArkTS高性能编程实践](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/number-init-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
let intNum = 1;
intNum = 2;
let floatNum = 1.3;
floatNum = 2.4;
```
  #### 反例

```
let intNum = 1;
// intNum is declared as int. Avoid changing it to float.
intNum = 1.1; 
let floatNum = 1.3;
// floatNum is declared as float. Avoid changing it to int.
floatNum = 2; 
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
