# @correctness/redundant-dependency-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-redundant-dependency-check`  |  **DocID**: `e0cc10667f5e4016b7b37270db5893b7`  |  **NodeID**: `000201775790122558429cf8954c0af7`

---

# @correctness/redundant-dependency-check

 建议删除冗余的依赖配置。冗余依赖会增加依赖加载和解析时间，影响代码质量。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/redundant-dependency-check": "suggestion"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

1. 在 entry 下的oh-package.json5文件中配置了a、b、c三个依赖，entry/src/main/ets中的文件中全部 import 导入。

 2. 在工程级的oh-package.json5文件中配置了a、b、c三个依赖，整个工程全部 import 导入。

  #### 反例

1. 在 entry 下的oh-package.json5文件中配置了a、b、c三个依赖，但entry/src/main/ets中的文件中只 import 导入了a,b两个依赖。

 2. 在工程级的oh-package.json5文件中配置了a、b、c三个依赖，但整个工程只 import 导入了a,b两个依赖。

  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
