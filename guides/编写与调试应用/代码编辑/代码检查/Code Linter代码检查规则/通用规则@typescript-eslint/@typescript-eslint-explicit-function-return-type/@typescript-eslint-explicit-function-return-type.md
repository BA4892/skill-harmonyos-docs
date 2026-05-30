# @typescript-eslint/explicit-function-return-type

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_explicit-function-return-type`  |  **DocID**: `41da6dda108240cfa531fd16dc3c4e6c`  |  **NodeID**: `000201775790122558466faa77c0bf62`

---

# @typescript-eslint/explicit-function-return-type

 函数和类方法需要显式的定义返回类型。

 该规则仅支持对.ts文件进行检查。通过配置选项，可以支持对.ets文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error"
  }
}
```
  #### 选项

该规则支持配置以下选项：

 ```
type Options = [
  {
    // 是否忽略.ets文件的检查，默认为false，不检查.ets文件
    allowArkTS?: boolean
  }
]
```
 配置示例：

 ```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/explicit-function-return-type": ["error", { "allowArkTS": true }]
  }
}
```
 其余配置详情请参考[@typescript-eslint/explicit-function-return-type选项](https://typescript-eslint.nodejs.cn/rules/explicit-function-return-type/#options)。

  #### 正例

```
// No return value should be expected (void)
function test(): void {
  return;
}

// A return value of type number
const fn = function (): number {
  return Number.MAX_VALUE;
};

// A return value of type string
const arrowFn = (): string => 'test';

class Test {
  // No return value should be expected (void)
  public method(): void {
    return;
  }
}

export { test, fn, arrowFn, Test };
```
  #### 反例

```
// Should indicate that no value is returned (void)
function test() {
  return;
}

// Should indicate that a number is returned
const fn = function () {
  return Number.MAX_VALUE;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

class Test {
  // Should indicate that no value is returned (void)
  public method() {
    return;
  }
}

export { test, fn, arrowFn, Test };
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
