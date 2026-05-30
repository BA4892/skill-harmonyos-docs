# @typescript-eslint/no-base-to-string

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-base-to-string`  |  **DocID**: `f50d3f442c4540bd980eeb37a362fb29`  |  **NodeID**: `00020177579012255849476782bc86bf`

---

# @typescript-eslint/no-base-to-string

 要求当一个对象在字符串化时提供了有用的信息，才能调用“toString()”方法。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-base-to-string": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-base-to-string选项](https://typescript-eslint.nodejs.cn/rules/no-base-to-string/#options)。

  #### 正例

```
// These types all have useful .toString()s
const num = 123;
export const v1 = 'Text' + true;
export const v2 = `Value: ${num}`;
(() => {
  console.info('arrow function');
}).toString();
```
  #### 反例

```
interface MyType {
  name: string;
}
// Passing an object or class instance to string concatenation:
const obj: MyType = {
  name: 'object'
};
export const v1 = '' + obj;

class MyClass {}
const value = new MyClass();
export const v2 = value + '';

// Interpolation and manual .toString() calls too:
export const v3 = `Value: ${value}`;
export const v4 = obj.toString();
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
