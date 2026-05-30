# @typescript-eslint/prefer-namespace-keyword

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-namespace-keyword`  |  **DocID**: `b67c8dd1c24e4b4ba54de0f6373fe150`  |  **NodeID**: `0002017757901225585973622bd175ef`

---

# @typescript-eslint/prefer-namespace-keyword

 推荐使用“namespace”关键字而不是“module”关键字来声明一个自定义的 TypeScript 模块。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-namespace-keyword": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export namespace Example {}
```
  #### 反例

```
export module Example {}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
