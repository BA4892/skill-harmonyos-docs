# @typescript-eslint/space-infix-ops

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_space-infix-ops`  |  **DocID**: `f76857eada574b09a6fa7daebd7979e2`  |  **NodeID**: `0002017757901225586155259360d34c`

---

# @typescript-eslint/space-infix-ops

 运算符前后要求有空格。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/space-infix-ops": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/space-infix-ops选项](https://eslint.nodejs.cn/docs/rules/space-infix-ops#选项)。

  #### 正例

```
declare const a: number;
declare const b: number;
export const c = a + b;
```
  #### 反例

```
declare const a: number;
declare const b: number;
export const c = a+b;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
