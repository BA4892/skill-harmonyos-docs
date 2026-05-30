# @performance/object-creation-check（已下线）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-object-creation-check`  |  **DocID**: `5e0695d9dd2244fba5622d344e7647fe`  |  **NodeID**: `000201775790122558558412451258db`

---

# @performance/object-creation-check（已下线）

 建议使用字面量进行对象创建。仅支持检查ts文件，暂不支持ets文件检查。该规则已于5.0.3.500版本下线。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/object-creation-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
// Test.ts
// 创建一个array
let arr: number[] = [];
// 创建一个普通对象
let obj = {};          
// 创建一个正则对象
let reg = /../; 
```
  #### 反例

```
// Test.ts
// 创建一个array
let arr: number[] = new Array(); 
// 创建一个普通对象
let obj = new Object();          
// 创建一个正则对象
let reg = new RegExp('..');    
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
