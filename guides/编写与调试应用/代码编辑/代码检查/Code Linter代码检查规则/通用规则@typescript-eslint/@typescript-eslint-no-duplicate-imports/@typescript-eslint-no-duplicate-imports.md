# @typescript-eslint/no-duplicate-imports

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-duplicate-imports`  |  **DocID**: `de50cec7ecad487dbf54704163d4a4f3`  |  **NodeID**: `00020177579012255850213b31e2574f`

---

# @typescript-eslint/no-duplicate-imports

 禁止重复的模块导入。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-duplicate-imports": "error"
  }
}
```
  #### 选项

详情请参考[eslint/no-duplicate-imports选项](https://eslint.nodejs.cn/docs/latest/rules/no-duplicate-imports#选项)。

  #### 正例

```
// foo和bar代表两个文件
import { foo } from './foo';
import bar from './bar';
```
  #### 反例

```
// foo代表文件
import { foo } from './foo';
import { bar } from './foo';
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
