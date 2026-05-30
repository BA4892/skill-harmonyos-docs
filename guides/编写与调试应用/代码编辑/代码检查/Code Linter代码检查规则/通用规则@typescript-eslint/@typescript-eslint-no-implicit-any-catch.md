# @typescript-eslint/no-implicit-any-catch

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-implicit-any-catch`  |  **DocID**: `8e0a5821f090451592855701a4bdaaec`  |  **NodeID**: `000201775790122558524312bc35490b`

---

# @typescript-eslint/no-implicit-any-catch

 禁止在 catch 表达式中使用隐式“any”类型。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-implicit-any-catch": "error"
  }
}
```
  #### 选项

该规则默认不允许使用隐式any类型。但是可以接受{"allowExplicitAny": true}对象作为规则参数，以允许使用显式的any类型。

 示例：

 ```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-implicit-any-catch": ["error", {"allowExplicitAny": true}]
  }
}
```
 在配置{"allowExplicitAny": true}的条件下，以下代码不会产生告警：

 ```
try {
  // ...
} catch (e: any) {
  // ...
}
```
  #### 正例

```
try {
  // ...
} catch (e: unknown) {
  // ...
}
```
  #### 反例

```
try {
  // ...
// 默认不允许使用隐式any类型
} catch (e) {
  // ...
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
