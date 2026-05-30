# @typescript-eslint/no-unnecessary-condition

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unnecessary-condition`  |  **DocID**: `0f69fb7c7a944a888e5a75c4654824d0`  |  **NodeID**: `000201775790122558568b0edaae400c`

---

# @typescript-eslint/no-unnecessary-condition

 不允许使用类型始终为真或始终为假的表达式作为判断条件。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unnecessary-condition": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-unnecessary-condition选项](https://typescript-eslint.nodejs.cn/rules/no-unnecessary-condition/#options)。

  #### 正例

```
const index = 0;
export function head(items: readonly string[]): string {
  // Necessary, since items.length might be 0
  if (items.length) {
    return items[index].toUpperCase();
  } else {
    return '';
  }
}

export function foo(arg: string): void {
  // Necessary, since foo might be ''.
  if (arg) {
  }
}

export function bar(arg?: string | null) {
  // Necessary, since arg might be nullish
  return arg?.length;
}
```
  #### 反例

```
const index = 0;
export function head(items: readonly string[]) {
  // items can never be nullable, so this is unnecessary
  if (items) {
    return items[index].toUpperCase();
  } else {
    return '';
  }
}

export function foo(arg: 'bar' | 'baz') {
  // arg is never nullable or empty string, so this is unnecessary
  if (arg) {
  }
}

export function bar(arg: string) {
  // arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
