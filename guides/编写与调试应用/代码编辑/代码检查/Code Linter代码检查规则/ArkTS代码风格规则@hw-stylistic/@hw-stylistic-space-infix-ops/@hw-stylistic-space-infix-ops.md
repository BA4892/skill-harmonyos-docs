# @hw-stylistic/space-infix-ops

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-space-infix-ops-stylistic`  |  **DocID**: `de03a38c13864ce8b52d8c24f5d8d016`  |  **NodeID**: `00020177579012255847093d4177b780`

---

# @hw-stylistic/space-infix-ops

 强制运算符前后都加空格。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/space-infix-ops": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export function test(size: number) {
  for (let i = 0; i < size; i++) {
    console.info(`${i}`);
  }
}

export function test1(a: boolean, b: boolean, c: boolean) {
  return a || (b && c);
}
```
  #### 反例

```
export function test(size: number) {
  // Operator '=' must be spaced.
  // Operator '<' must be spaced.
  for (let i=0; i<size; i++) {
    console.info(`${i}`);
  }
}

export function test1(a: boolean, b: boolean, c: boolean) {
  // Operator '||' must be spaced.
  // Operator '&&' must be spaced.
  return a||b&&c;
}
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
