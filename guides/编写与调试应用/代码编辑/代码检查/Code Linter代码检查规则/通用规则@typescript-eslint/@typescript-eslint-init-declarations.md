# @typescript-eslint/init-declarations

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_init-declarations`  |  **DocID**: `074779e399db4237b68224a8e6c26e72`  |  **NodeID**: `000201775790122558479b76b3711fe5`

---

# @typescript-eslint/init-declarations

 禁止或者要求在变量声明中进行初始化。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/init-declarations": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/init-declarations选项](https://eslint.nodejs.cn/docs/rules/init-declarations#选项)。

  #### 正例

```
// 默认变量必须在声明时初始化
export function foo() {
  console.info('hello');
}

export const bar = 1;
export const qux = 3;
```
  #### 反例

```
// 默认变量必须在声明时初始化
export function foo() {
  console.info('hello');
}

export let bar: string;
export let qux: number;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
