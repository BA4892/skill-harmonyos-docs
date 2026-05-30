# @performance/hp-arkts-no-use-any-export-current

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-hp-arkts-no-use-any-export-current`  |  **DocID**: `3d182ae8298943f69e236b303a71d58a`  |  **NodeID**: `0002017757901225584763ec4f8ce002`

---

# @performance/hp-arkts-no-use-any-export-current

 避免使用export * 导出当前module中定义的类型和数据。

 冷启动完成时延场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkts-no-use-any-export-current": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export class User {
  id?: number;
  name?: string;
}
```
  #### 反例

```
class User {
  id?: number;
  name?: string;
}
// 当前文件 User.ets
export * from './User';
// 当前文件 User.ets
export * as XX from './User';
```
  #### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
