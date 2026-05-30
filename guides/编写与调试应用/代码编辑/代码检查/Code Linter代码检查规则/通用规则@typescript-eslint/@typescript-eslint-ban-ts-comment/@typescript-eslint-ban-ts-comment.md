# @typescript-eslint/ban-ts-comment

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_ban-ts-comment`  |  **DocID**: `2bab9edccb374e70855af38c1078e53b`  |  **NodeID**: `00020177579012255839867f27959a71`

---

# @typescript-eslint/ban-ts-comment

 不允许使用`@ts-<directional>`格式的注释，或要求在注释后进行补充说明。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/ban-ts-comment": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/ban-ts-comment选项](https://typescript-eslint.nodejs.cn/rules/ban-ts-comment/#options)。

  #### 正例

```
console.log('hello');
```
  #### 反例

```
// @ts-expect-error
console.log('hello');

/* @ts-expect-error */
console.log('hello');
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
