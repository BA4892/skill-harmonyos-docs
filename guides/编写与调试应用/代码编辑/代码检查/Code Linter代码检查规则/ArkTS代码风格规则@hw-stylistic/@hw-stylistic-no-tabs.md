# @hw-stylistic/no-tabs

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-tabs`  |  **DocID**: `8c6753fb283a4346a81c2ea4d289f959`  |  **NodeID**: `000201775790122558434965bb5a4a91`

---

# @hw-stylistic/no-tabs

 禁止使用tab作为缩进，推荐使用空格。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/no-tabs": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export const message: string = 'Hello World';
```
  #### 反例

```
export	const	message:	string = 'Hello World';
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:42*
