# @typescript-eslint/no-misused-promises

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-misused-promises`  |  **DocID**: `fc5ff38e40f049c392199e3e12e5d01e`  |  **NodeID**: `0002017757901225585429ab4b733b30`

---

# @typescript-eslint/no-misused-promises

 禁止在不正确的位置使用Promise。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-misused-promises": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-misused-promises选项](https://typescript-eslint.nodejs.cn/rules/no-misused-promises/#options)。

  #### 正例

```
export async function func(): Promise<void>{
  const promise = Promise.resolve('value');

  // Always `await` the Promise in a conditional
  if (await promise) {
    // Do something
  }

  const val = await promise ? '123' : '456';
  console.log(`${val}`);

  while (await promise) {
    // Do something
  }
}
```
  #### 反例

```
export async function func(): Promise<void>{
  const promise = Promise.resolve('value');
  // 默认条件语句中需要使用await Promise
  if (promise) {
    // Do something
  }

  // 默认条件语句中需要使用await Promise
  const val = promise ? '123' : '456';
  console.log(`${val}`);

  // 默认条件语句中需要使用await Promise
  while (promise) {
    // Do something
  }
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
