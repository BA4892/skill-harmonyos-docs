# @typescript-eslint/no-array-constructor

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-array-constructor`  |  **DocID**: `4b376288bacf486bad9146c7aeeeca65`  |  **NodeID**: `000201775790122558493406fa1fb8f9`

---

# @typescript-eslint/no-array-constructor

 不允许使用“Array”构造函数。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-array-constructor": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
const length = 500;
Array(length);

export const newArr: number[] = new Array(['1'].length);

export const arr = ['0', '1', '2'];

export const createArray = (array: string) => new Array(array.length);
```
  #### 反例

```
Array();

Array('0', '1', '2');

new Array('0', '1', '2');
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
