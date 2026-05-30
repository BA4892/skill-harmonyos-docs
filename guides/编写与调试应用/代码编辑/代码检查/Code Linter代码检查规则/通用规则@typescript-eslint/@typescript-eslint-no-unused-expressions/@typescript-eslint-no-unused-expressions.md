# @typescript-eslint/no-unused-expressions

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unused-expressions`  |  **DocID**: `2c78d3d073b74c4d86f4df1c86e23f5c`  |  **NodeID**: `00020177579012255858773299784eba`

---

# @typescript-eslint/no-unused-expressions

 代码中禁止包含未使用的表达式。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unused-expressions": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-unused-expressions选项](https://eslint.nodejs.cn/docs/rules/no-unused-expressions#选项)。

  #### 正例

```
export const v1 = Number.MAX_VALUE;

if ('hello'.length === v1) {
  console.info('hello');
}

{
  const v2 = '0';
  console.info(v2);
}
```
  #### 反例

```
Number.MAX_VALUE;

if ('0') '0';

{'0';}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
