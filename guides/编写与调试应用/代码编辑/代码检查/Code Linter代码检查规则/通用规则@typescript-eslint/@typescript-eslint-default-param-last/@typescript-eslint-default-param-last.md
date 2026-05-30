# @typescript-eslint/default-param-last

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_default-param-last`  |  **DocID**: `aa886b48f34a4869890a9d9c80176e06`  |  **NodeID**: `0002017757901225584561f06f9ba0b1`

---

# @typescript-eslint/default-param-last

 强制默认参数位于参数列表的最后一个。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/default-param-last": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
const defaultValue = 0;
export function f1(a = defaultValue) {
  return a;
}
export function f2(a: number, b = defaultValue) {
  return a + b;
}
export function f3(a: number, b?: number) {
  return b !== undefined ? a + b : a;
}
export function f4(a: number, b?: number, c = defaultValue) {
  return b !== undefined ? a + b + c : a + c;
}
export function f5(a: number, b = defaultValue, c?: number) {
  return c !== undefined ? a + c : a + b;
}
```
  #### 反例

```
const defaultValue = 0;
export function f2(b = defaultValue, a: number) {
  return a + b;
}
export function f3(b?: number, a: number) {
  return b !== undefined ? a + b : a;
}
export function f4(b?: number, a: number, c = defaultValue) {
  return b !== undefined ? a + b + c : a + c;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
