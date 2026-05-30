# @typescript-eslint/adjacent-overload-signatures

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_adjacent-overload-signatures`  |  **DocID**: `a439782a63ed4098a3e8f9b64a8d64bf`  |  **NodeID**: `000201775790122558375713ca1c21e0`

---

# @typescript-eslint/adjacent-overload-signatures

 建议函数重载的签名保持连续。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export declare function bar(): void;
export declare function foo(a: string): void;
export declare function foo(a: number, b: number): void;
export declare function foo(a: number, b: string, c?: string): void;
```
  #### 反例

```
export declare function foo(a: string): void;
export declare function bar(): void;
export declare function foo(a: number, b: number): void;
export declare function foo(a: number, b: string, c?: string): void;
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
