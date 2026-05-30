# @performance/no-use-any-import

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-no-use-any-import`  |  **DocID**: `1621161d977b4ea6a6ec092240993969`  |  **NodeID**: `0002017757901225585511bbee252c04`

---

# @performance/no-use-any-import

 使用import的方式引入对应的模块时，建议按需引用使用到的变量代替“import *”的方式，以减少.ets文件的执行耗时和文件中所有export变量的初始化过程。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/no-use-any-import": "warn",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// Index.ets
import { hilog } from '@kit.PerformanceAnalysisKit';
import { One } from '../utils/Numbers'; // It is recommended to reference variables on demand
hilog.info(0x0000, 'testTag', '%{public}d', One); // Only the variable One is used here
// Numbers.ets
export const One: number = 1;
export const Two: number = 2;
```
  #### 反例

```
// Index.ets
import { hilog } from '@kit.PerformanceAnalysisKit';
import * as nm from '../utils/Numbers'; // The import * method is not recommended
hilog.info(0x0000, 'testTag', '%{public}d', nm.One); // Only the variable One is used here
// Numbers.ets
export const One: number = 1;
export const Two: number = 2;
```
  #### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
