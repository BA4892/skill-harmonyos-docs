# @typescript-eslint/no-unsafe-assignment

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-assignment`  |  **DocID**: `9eb4c8ba833042e19601373760dad9b2`  |  **NodeID**: `00020177579012255858137572624cef`

---

# @typescript-eslint/no-unsafe-assignment

 禁止将“any”类型的值赋值给变量和属性。

 该规则仅支持对.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unsafe-assignment": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
let [x] = ['1'];
[x] = ['1'] as [string];
console.info([x].toString());

// generic position examples
export const a1: Set<string> = new Set<string>();
export const a2: Map<string, string> = new Map<string, string>();
export const a3: Set<string[]> = new Set<string[]>();
export const a4: Set<Set<Set<string>>> = new Set<Set<Set<string>>>();
```
  #### 反例

```
let [x] = ['1'];
[x] = ['1'] as [any];
[x] = '1' as any;
console.info([x].toString());

// generic position examples
export const a1: Set<string> = new Set<any>();
export const a2: Map<string, string> = new Map<any, string>();
export const a3: Set<string[]> = new Set<any[]>();
export const a4: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
