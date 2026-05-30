# @typescript-eslint/consistent-type-assertions

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_consistent-type-assertions`  |  **DocID**: `4dd2b213551c47fc9ff9b581923da26a`  |  **NodeID**: `000201775790122558446be12d2ff1ab`

---

# @typescript-eslint/consistent-type-assertions

 强制使用一致的类型断言。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/consistent-type-assertions": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/consistent-type-assertions选项](https://typescript-eslint.nodejs.cn/rules/consistent-type-assertions/#options)。

  #### 正例

```
interface MyType {
  name: string;
}
export const x: MyType = {
  name: 'hello'
};
// 默认推荐使用 value as Type：始终优先选择const x = value as Type; 而不是const x = <Type>value;
export const y = x as object;
```
  #### 反例

```
interface MyType {
  name: string;
}
export const x: MyType = {
  name: 'hello'
};
// 默认推荐使用 value as Type：始终优先选择const x = value as Type; 而不是const x = <Type>value;
export const y = <object>x;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
