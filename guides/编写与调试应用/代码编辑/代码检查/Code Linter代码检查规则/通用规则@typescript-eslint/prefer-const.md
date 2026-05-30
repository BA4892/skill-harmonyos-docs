# prefer-const

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-const`  |  **DocID**: `5a5d78d8714c4edb851053845e76ce36`  |  **NodeID**: `00020177579012255862301c6905f612`

---

# prefer-const

 推荐声明后未修改值的变量用const关键字来声明。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "prefer-const": "error"
  }
}
```
  #### 选项

详情请参考[eslint/prefer-const选项](https://eslint.nodejs.cn/docs/latest/rules/prefer-const#选项)。

  #### 正例

```
const a = 'hello';
console.log(a);
```
  #### 反例

```
// 变量a声明以后未重新赋值，建议用const关键字来声明
let a = 'hello';
console.log(a);
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
