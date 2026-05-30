# @typescript-eslint/no-useless-constructor

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-useless-constructor`  |  **DocID**: `8d0f94b1ce554927a851346d6e493982`  |  **NodeID**: `0002017757901225585908dfd0825853`

---

# @typescript-eslint/no-useless-constructor

 禁止不必要的构造函数。

 不必要的构造函数包括：空的构造函数，或者构造函数中直接执行父类构造函数的逻辑。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-useless-constructor": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
class A {
  public name: string = 'hello';
}

export class B {
  public name: string = 'name';

  public constructor() {
    console.info('hello');
  }
}

export class C extends A {
  public constructor() {
    super();
    console.info('hello');
  }
}
```
  #### 反例

```
class A {
  public name: string = 'name';

  constructor() {

  }
}

export class B extends A {
  public name: string = 'name';

  constructor() {
    super();
  }
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
