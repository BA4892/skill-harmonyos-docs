# @typescript-eslint/no-unnecessary-type-assertion

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unnecessary-type-assertion`  |  **DocID**: `cd5fd2e6c2c5438dba234c165eb0a59c`  |  **NodeID**: `0002017757901225585750116c759bb5`

---

# @typescript-eslint/no-unnecessary-type-assertion

 禁止不必要的类型断言。

 如果类型断言没有更改表达式的类型，也就没有必要使用。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unnecessary-type-assertion": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-unnecessary-type-assertion选项](https://typescript-eslint.nodejs.cn/rules/no-unnecessary-type-assertion/#options)。

  #### 正例

```
const num = 3;
export const foo2 = num as number;
export const foo3 = 'foo' as string;
```
  #### 反例

```
const num = 3;
export const foo = num;
export const bar = foo!;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
