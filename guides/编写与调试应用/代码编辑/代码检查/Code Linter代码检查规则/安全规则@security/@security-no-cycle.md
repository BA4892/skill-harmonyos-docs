# @security/no-cycle

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-cycle`  |  **DocID**: `f1ca7e056f654cfcb70e205b3efeea4d`  |  **NodeID**: `000201775790122558388144bc4dfe13`

---

# @security/no-cycle

 该规则禁止使用循环依赖。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-cycle": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './index';
```
  #### 反例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './foo';
```
  反例中foo.ets文件依赖了bar.ets文件，bar.ets文件同时依赖了foo.ets文件，造成了循环依赖。

   #### 规则集

plugin:@security/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
