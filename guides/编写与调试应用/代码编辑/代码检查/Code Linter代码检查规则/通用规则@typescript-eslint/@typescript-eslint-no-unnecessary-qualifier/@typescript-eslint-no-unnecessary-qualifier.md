# @typescript-eslint/no-unnecessary-qualifier

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unnecessary-qualifier`  |  **DocID**: `a3014812d58a4af28fca31637271f431`  |  **NodeID**: `0002017757901225585701aa23dfc3e2`

---

# @typescript-eslint/no-unnecessary-qualifier

 禁止不必要的命名空间限定符。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unnecessary-qualifier": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export enum A {
  b = 'x',
  c = b
}

export namespace B {
  export type C = number;
  export const x: C = 3;
}
```
  #### 反例

```
export enum A {
  b = 'x',
  c = A.b
}

export namespace B {
  export type C = number;
  export const x: B.C = 3;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
