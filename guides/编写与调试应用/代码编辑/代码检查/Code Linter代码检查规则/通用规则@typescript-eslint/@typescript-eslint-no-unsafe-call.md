# @typescript-eslint/no-unsafe-call

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-unsafe-call`  |  **DocID**: `6b7a643e16084cad8cedc12686e1b4c6`  |  **NodeID**: `00020177579012255858312ad2439480`

---

# @typescript-eslint/no-unsafe-call

 禁止调用“any”类型的表达式。

 该规则仅支持对.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-unsafe-call": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
declare const typedVar: () => void;
declare const typedNested: { prop: { a: () => void } };

typedVar();
typedNested.prop.a();

((): void => {
  console.info('hello');
})();

new Map();

export const raw = String.raw`foo`;
```
  #### 反例

```
declare const anyVar: any;
declare const nestedAny: { prop: any };
// anyVar为any类型，禁止调用
anyVar();
anyVar.a.b();
// nestedAny中的prop属性为any类型，禁止调用
nestedAny.prop();
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
