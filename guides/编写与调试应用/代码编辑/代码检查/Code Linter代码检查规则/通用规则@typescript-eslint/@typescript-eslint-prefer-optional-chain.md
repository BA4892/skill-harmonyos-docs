# @typescript-eslint/prefer-optional-chain

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_prefer-optional-chain`  |  **DocID**: `f7f0ce34182d4fdaac5168acaab4a9f3`  |  **NodeID**: `000201775790122558599298a05891a3`

---

# @typescript-eslint/prefer-optional-chain

 强制使用链式可选表达式，而不是链式逻辑与、否定逻辑或、或空对象。

 

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/prefer-optional-chain": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/prefer-optional-chain选项](https://typescript-eslint.nodejs.cn/rules/prefer-optional-chain/#options)。

  #### 正例

```
class Foo {
  public a?: Foo = new Foo();

  public b?: Foo = new Foo();

  public c?: Foo = new Foo();

  public method?(): void {
    console.info('method');
  }
}

const foo = new Foo();
export const c = foo.a?.b?.c;
foo.a?.b?.method?.();
```
  #### 反例

```
class Foo {
  public a?: Foo = new Foo();

  public b?: Foo = new Foo();

  public c?: Foo = new Foo();

  public method?(): void {
    console.info('method');
  }
}

const foo = new Foo();
let c = foo.a;
c = c && c.b;
c = c && c.c;
export { c };
if (foo.a && foo.a.b && foo.a.b.method) {
  foo.a.b.method();
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
