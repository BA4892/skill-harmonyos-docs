# @hw-stylistic/file-naming-convention

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-file-naming-convention`  |  **DocID**: `2a01edba855547ca909e6b45075cc76e`  |  **NodeID**: `000201775790122558407f76d4456c8c`

---

# @hw-stylistic/file-naming-convention

 强制代码文件和资源文件保持一致的命名风格。

 
- .js文件建议使用小驼峰，.ets/.ts建议使用大驼峰；
- 资源文件建议使用小驼峰或者小写字母加下划线的风格命名。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/file-naming-convention": "error"
  }
}
```
  #### 选项

该规则默认检查代码文件和资源文件的命名风格，也可以接受一个对象作为参数{selector: string}，来指定只检查代码文件或者资源文件。"selector"支持配置为"resources"或者"code"。

 示例：

 1.以下配置只检查代码文件命名风格：

 ```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/file-naming-convention": ["error", { "selector": "code" }]
  }
}
```
  2.以下配置只检查资源文件命名风格：

 ```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/file-naming-convention": ["error", { "selector": "resources" }]
  }
}
```
 #### 正例

```
// 代码文件名：Index.ets、EntryAbility.ets、index.js
// 资源文件名：color.json、background.png、main_pages.json
```
  #### 反例

```
// 代码文件名：index.ets、ability.ets、Index.js
// 资源文件名：String.json、BackGround.png
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
