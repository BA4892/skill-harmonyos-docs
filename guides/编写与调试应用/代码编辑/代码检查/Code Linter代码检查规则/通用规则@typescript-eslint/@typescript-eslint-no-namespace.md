# @typescript-eslint/no-namespace

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-namespace`  |  **DocID**: `fdb79c57fdd74017b4d50e94ddf2be81`  |  **NodeID**: `0002017757901225585457943b773b7d`

---

# @typescript-eslint/no-namespace

 禁止使用 TypeScript语法中的命名空间。

 命名空间是一种过时的语法，推荐使用import/export。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-namespace": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-namespace选项](https://typescript-eslint.nodejs.cn/rules/no-namespace/#options)。

  #### 正例

```
// foo为模块名
declare module 'foo' {}
// anything inside a d.ts file
```
  #### 反例

```
module foo {}
namespace foo {}

declare module foo {}
declare namespace foo {}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
