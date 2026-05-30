# @typescript-eslint/semi

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_semi`  |  **DocID**: `ab7cdfe226744272ba37caad65e24bc1`  |  **NodeID**: `0002017757901225586138be3c1bc838`

---

# @typescript-eslint/semi

 要求或不允许使用分号。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/semi": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/semi选项](https://eslint.nodejs.cn/docs/rules/semi#选项)。

  #### 正例

```
export const name = 'ESLint';

export class Foo {
  public bar = '1';
}
```
  #### 反例

```
// 默认在语句末尾需要加分号
export const name = 'ESLint'

export class Foo {
  // 默认在语句末尾需要加分号
  public bar = '1'
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
