# @performance/dark-color-mode-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-dark-color-mode-check`  |  **DocID**: `83f09d6dbbfb4201ac9117b65e9fdc6a`  |  **NodeID**: `000201775790122558405883f45c7b5b`

---

# @performance/dark-color-mode-check

 通过启用深色模式，可以进一步实现能耗的降低。应用需要根据当前设备状态来适配深色模式。

  
- 在检查整个工程时，该规则才生效。
- code-linter.json5配置文件中的[overrides](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)和[ignore](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)字段对该规则不生效。
- 若想关闭该规则检查，可将code-linter.json5配置文件中[rules](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)字段设置为off。

  #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/dark-color-mode-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
src
├── main  
│   ├── ets    
│   └── resources
│       └── dark    
│           └── element
│               └── color.json     
│           
├── mock
│   └── mock-config.json5
```
  #### 反例

```
src
├── main  
│   ├── ets    
│   └── resources
│       └── dark    
│           └── element
│           
├── mock
│   └── mock-config.json5
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
