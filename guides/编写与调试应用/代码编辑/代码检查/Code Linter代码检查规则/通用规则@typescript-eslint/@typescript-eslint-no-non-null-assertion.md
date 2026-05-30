# @typescript-eslint/no-non-null-assertion

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-non-null-assertion`  |  **DocID**: `a2959c7d45e24d77880029413be1b59b`  |  **NodeID**: `000201775790122558549d7b8dd8c867`

---

# @typescript-eslint/no-non-null-assertion

 禁止以感叹号作为后缀的方式使用非空断言。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-non-null-assertion": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
interface Example {
  property?: string;
}

declare const example: Example;
export const includesBaz = example.property?.includes('baz') ?? false;
```
  #### 反例

```
interface Example {
  property?: string;
}

declare const example: Example;
// 禁止使用"example.property!"的方式来进行非空断言
export const includesBaz = example.property!.includes('baz');
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
