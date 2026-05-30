# @typescript-eslint/prefer-nullish-coalescing

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-nullish-coalescing`  |  **DocID**: `06f3596cb7054c45bd526aaf300d7461`  |  **NodeID**: `0002017757901225585980c8c0b7975c`

---

# @typescript-eslint/prefer-nullish-coalescing

 强制使用空值合并运算符（??）而不是逻辑运算符。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-nullish-coalescing": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/prefer-nullish-coalescing选项](https://typescript-eslint.nodejs.cn/rules/prefer-nullish-coalescing/#options)。

  #### 正例

```
function getText1(): string | undefined {
  return 'bar';
}

function getText2(): string | null {
  return 'bar';
}

const foo1: string | undefined = getText1();
export const v1 = foo1 ?? 'a string';

const foo2: string | null = getText2();
export const v2 = foo2 ?? 'a string';
```
  #### 反例

```
declare const a: string | null;
declare const b: string | null;

export const c = a || b;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
