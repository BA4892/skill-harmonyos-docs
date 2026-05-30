# @typescript-eslint/restrict-template-expressions

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_restrict-template-expressions`  |  **DocID**: `c7dd6eac1e6349ddbfdc0003dc62c10e`  |  **NodeID**: `000201775790122558611191bf044c8b`

---

# @typescript-eslint/restrict-template-expressions

 要求模板表达式中的变量为“string”类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/restrict-template-expressions": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/restrict-template-expressions选项](https://typescript-eslint.nodejs.cn/rules/restrict-template-expressions/#options)。

  #### 正例

```
const arg: string | undefined = 'foo';
export const msg1 = `arg = ${arg}`;
export const msg2 = `arg = ${arg || 'default'}`;
```
  #### 反例

```
const arg1 = ['1', '2'];
export const msg1 = `arg1 = ${arg1}`;

interface GeneratedObjectLiteralInterface {
  name: string;
}

const arg2: GeneratedObjectLiteralInterface = { name: 'Foo' };
export const msg2 = `arg2 = ${arg2 || null}`;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
