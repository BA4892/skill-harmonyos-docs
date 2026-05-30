# @hw-stylistic/curly

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_curly`  |  **DocID**: `2071e5a0d61a408fb7226b779e912a99`  |  **NodeID**: `0002017757901225584004fef80aed25`

---

# @hw-stylistic/curly

 条件语句和循环语句的逻辑代码必须写在大括号中。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/curly": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export function test(a: number, b: number) {
  if (a > b) {
    console.info('doSomething');
  } else if (a === b) {
    console.info('doSomething');
  } else {
    console.info('doSomething');
  }

  while (a > b) {
    a--;
    console.info('doSomething');
  }

  console.info('doSomething');
}
```
  #### 反例

```
export function test(a: number, b: number) {
  if (a > b)
  // Expected { after 'if' condition.
    console.info('doSomething');
  else if (a === b)
  // Expected { after 'if' condition.
    console.info('doSomething');
  else
  // Expected { after 'else'.
    console.info('doSomething');
  console.info('doSomething');
}
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
