# @typescript-eslint/consistent-indexed-object-style

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_consistent-indexed-object-style`  |  **DocID**: `cd2488afe1f64183b483477d4cb92d9e`  |  **NodeID**: `000201775790122558437a1f89ab57b5`

---

# @typescript-eslint/consistent-indexed-object-style

 允许或禁止使用“Record”类型。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/consistent-indexed-object-style": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/consistent-indexed-object-style选项](https://typescript-eslint.nodejs.cn/rules/consistent-indexed-object-style/#options)。

  #### 正例

```
// 默认推荐使用Record 类型
export type Foo = Record<string, unknown>;
```
  #### 反例

```
export interface Foo1 {
  // 默认推荐使用Record 类型
  [key: string]: unknown;
}

export type Foo2 = {
  // 默认推荐使用Record 类型
  [key: string]: unknown;
};
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
