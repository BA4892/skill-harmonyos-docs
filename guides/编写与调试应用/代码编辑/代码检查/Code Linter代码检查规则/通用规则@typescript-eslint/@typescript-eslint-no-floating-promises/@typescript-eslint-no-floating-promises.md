# @typescript-eslint/no-floating-promises

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-floating-promises`  |  **DocID**: `be9a0f3a70344b2e9965f43c4d29ae5e`  |  **NodeID**: `000201775790122558521792b703e5c5`

---

# @typescript-eslint/no-floating-promises

 要求正确处理Promise表达式。

 floating-promise是指在创建Promise时，没有使用任何代码来处理它可能引发的错误，这是一种不正确的使用方式。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-floating-promises": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-floating-promises选项](https://typescript-eslint.nodejs.cn/rules/no-floating-promises/#options)。

  #### 正例

```
export async function bar() {
  const promise = new Promise<string>(resolve => {
    resolve('value');
    return 'finish';
  });
  await promise;

  Promise.reject('value').catch(() => {
    console.error('error');
  });

  await Promise.reject('value').finally(() => {
    console.info('finally');
  });

  await Promise.all(['1', '2', '3'].map(x => x + '1'));
}
```
  #### 反例

```
export async function bar() {
  const promise = new Promise<string>(resolve => {
    resolve('value');
    return 'finish';
  });
  promise;

  Promise.reject('value').catch();

  await Promise.reject('value').finally();

  ['1', '2', '3'].map(async x => x + '1');
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
