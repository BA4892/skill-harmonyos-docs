# @typescript-eslint/no-unsafe-return

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-return`  |  **DocID**: `1af1608caa054607b3e66b8c5a42bf27`  |  **NodeID**: `000201775790122558586365ae336f3b`

---

# @typescript-eslint/no-unsafe-return

 函数禁止返回类型为“any”的值。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unsafe-return": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export function foo1(): string {
  return '1';
}

export function foo2(): object {
  return Object.create(null) as Record<string, unknown>;
}

export const foo3 = (): object[] => [];
export const foo4 = (): string[] => ['a'];

export function assignability1(): Set<string> {
  return new Set<string>(['foo']);
}
```
  #### 反例

```
export function foo1(): string {
  return '1' as any;
}

export function foo2(): string {
  return Object.create(null) as any;
}

export const foo3 = (): object[] => [] as any;
export const foo4 = (): string[] => ['a'] as any;

export function assignability1(): Set<string> {
  return new Set<string>(['foo']) as any;
}
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
