# @typescript-eslint/consistent-type-imports

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_consistent-type-imports`  |  **DocID**: `682c51d12ae84487b2634434cb1951e1`  |  **NodeID**: `00020177579012255845136b4d8dbf23`

---

# @typescript-eslint/consistent-type-imports

 强制使用一致的类型导入风格。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/consistent-type-imports": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/consistent-type-imports选项](https://typescript-eslint.nodejs.cn/rules/consistent-type-imports/#options)。

  #### 正例

```
// 默认推荐使用import type Foo from '...'
import type { Foo } from 'Foo';
import type Bar from 'Bar';
export type T = Foo;
export const x: Bar = 1;
```
  #### 反例

```
// 默认推荐使用import type Foo from '...'
import { Foo } from 'Foo';
import Bar from 'Bar';
export type T = Foo;
export const x: Bar = 1;
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
