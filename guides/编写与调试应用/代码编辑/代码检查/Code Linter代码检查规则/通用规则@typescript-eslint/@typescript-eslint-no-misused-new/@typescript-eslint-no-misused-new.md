# @typescript-eslint/no-misused-new

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-misused-new`  |  **DocID**: `61dddb1a3315445995cfadb536a5a52d`  |  **NodeID**: `000201775790122558540ac73098d5f9`

---

# @typescript-eslint/no-misused-new

 要求正确地定义“new”和“constructor”。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-misused-new": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export declare class C {
  public name: string;

  public constructor();
}
```
  #### 反例

```
export declare class C {
  // 应该定义为constructor(): C
  public new(): C;
}

export interface I {
  // 不应该定义constructor
  constructor(): void;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
