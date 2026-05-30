# @security/no-commented-code

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-commented-code`  |  **DocID**: `2e0df59dd22f4d2991ce0a40f47ea486`  |  **NodeID**: `000201775790122558378458cf62694a`

---

# @security/no-commented-code

 不使用的代码段建议直接删除，不允许通过注释的方式保留。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-commented-code": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// this is a comment
```
  #### 反例

```
// console.log('info')
```
  #### 规则集

```
plugin:@security/recommended
plugin:@security/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
