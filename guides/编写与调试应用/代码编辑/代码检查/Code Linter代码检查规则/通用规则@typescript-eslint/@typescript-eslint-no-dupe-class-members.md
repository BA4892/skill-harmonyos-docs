# @typescript-eslint/no-dupe-class-members

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-dupe-class-members`  |  **DocID**: `6f1a471ec3f7423687abcb884b595cad`  |  **NodeID**: `000201775790122558501f22de8f2815`

---

# @typescript-eslint/no-dupe-class-members

 不允许重复的类成员。如果类成员中有同名的声明，最后一个声明会覆盖其他声明，可能会导致意外行为。

 编译器会自动校验该规则检查的代码问题，新建项目时可以不开启此规则。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-dupe-class-members": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
/*eslint no-dupe-class-members: "error"*/
export class A {
  public bar() {
    console.info('bar');
  }

  public qux() {
    console.info('qux');
  }
}

export class B {
  private name: string = 'bar';

  public get bar() {
    return this.name;
  }

  public set bar(value) {
    this.name = value;
  }
}

export class E {
  public static bar() {
    console.info('static bar');
  }

  public bar() {
    console.info('method bar');
  }
}
```
  #### 反例

```
/*eslint no-dupe-class-members: "error"*/
export class A {
  public bar() {
    console.info('bar');
  }

  public bar() {
    console.info('bar');
  }
}

export class B {
  private readonly name: string = 'bar';

  public get bar() {
    return this.name;
  }

  public bar() {
    return this.name;
  }
}

export class E {
  public static bar() {
    console.info('static bar');
  }

  public static bar() {
    console.info('static bar');
  }
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:43*
