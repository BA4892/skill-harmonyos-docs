# @typescript-eslint/array-type

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_array-type`  |  **DocID**: `5055f3205e6a4853b288626b54724b30`  |  **NodeID**: `000201775790122558383e23577a99da`

---

# @typescript-eslint/array-type

 定义数组类型时，建议使用相同的样式。比如都使用T[]或者都使用Array<T>。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/array-type": "error"
  }
}
```
  #### 选项

详情请参考[typescript/array-type 选项](https://typescript-eslint.nodejs.cn/rules/array-type#options)。

  #### 正例

```
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];

export { x, y };
```
  #### 反例

```
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];

export { x, y };
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
