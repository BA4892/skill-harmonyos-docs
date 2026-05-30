# @performance/hp-performance-no-dynamic-cls-func

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_hp-performance-no-dynamic-cls-func`  |  **DocID**: `44386199b42f4b77b142e4db16f8b7e0`  |  **NodeID**: `0002017757901225585349700407a1c7`

---

# @performance/hp-performance-no-dynamic-cls-func

 避免动态声明function与class，仅适用于js/ts。

 根据[ArkTS编程规范](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-high-performance-programming)，建议修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-performance-no-dynamic-cls-func": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
function foo(f: boolean, a: number, b: number): number {
  if (f) {
    return add(a, b);
  } else {
    return sub(a, b);
  }
}
function add(c: number, d: number): number {
  return c + d;
}
function sub(e: number, g: number): number {
  return e - g;
}
```
  #### 反例

```
function foo(f: boolean, a: number, b: number): number {
  if (f) {
    function add(c: number, d: number): number {
      return c + d;
    }
    return add(a, b);
  } else {
    function sub(e: number, g: number): number {
      return e - g;
    }
    return sub(a, b);
  }
}
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
