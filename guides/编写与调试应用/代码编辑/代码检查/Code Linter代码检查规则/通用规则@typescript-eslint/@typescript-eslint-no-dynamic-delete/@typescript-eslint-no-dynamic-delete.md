# @typescript-eslint/no-dynamic-delete

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-dynamic-delete`  |  **DocID**: `c297978fa6d14597b15d7f26d1a40490`  |  **NodeID**: `000201775790122558505ca5d20e19c0`

---

# @typescript-eslint/no-dynamic-delete

 不允许在computed key表达式上使用“delete”运算符。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-dynamic-delete": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
const container: Record<string, number> = {
  /* ... */
};

// Constant runtime lookups by string index
delete container.aaa;

// Constants that must be accessed by []
delete container['7'];
// '-Infinity' is number.  
delete container['-Infinity'];
```
  #### 反例

```
const container: Record<string, number> = {
  /* ... */
};

// Can be replaced with the constant equivalents, such as container.aaa
delete container['aaa'];
// 'Infinity' may be a string constant
delete container['Infinity'];

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete container[name];
delete container[name.toUpperCase()];
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
