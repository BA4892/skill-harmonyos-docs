# @typescript-eslint/require-await

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_require-await`  |  **DocID**: `e93487c85c7d4659ba63386e82caca83`  |  **NodeID**: `000201775790122558609bed855d35ec`

---

# @typescript-eslint/require-await

 异步函数必须包含“await”。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/require-await": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
async function doSomething(): Promise<void> {
  return Promise.resolve();
}

export async function foo() {
  await doSomething();
}

export function baz() {
  doSomething().catch(() => {
    console.info('error');
  });
}
```
  #### 反例

```
async function doSomething(): Promise<void> {
  return Promise.resolve();
}

export async function foo() {
  doSomething();
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:46*
