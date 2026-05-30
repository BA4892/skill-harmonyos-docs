# @typescript-eslint/prefer-includes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-includes`  |  **DocID**: `0dc0575832834925b971bd1e7a20bd8d`  |  **NodeID**: `00020177579012255859568ad4a2d0ae`

---

# @typescript-eslint/prefer-includes

 强制使用“includes”方法而不是“indexOf”方法。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-includes": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
const str: string = 'hello';
const array: string[] = ['hello'];
const readonlyArray: readonly string[] = ['hello'];

str.includes('h');
array.includes('h');
readonlyArray.includes('h');
```
  #### 反例

```
const str: string = 'hello';
const array: string[] = ['hello'];
const readonlyArray: readonly string[] = ['hello'];

const num = -1;
let vv = str.indexOf('h') !== num;
vv = vv && array.indexOf('h') !== num;
vv = vv && readonlyArray.indexOf('h') !== num;
export { vv };
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
