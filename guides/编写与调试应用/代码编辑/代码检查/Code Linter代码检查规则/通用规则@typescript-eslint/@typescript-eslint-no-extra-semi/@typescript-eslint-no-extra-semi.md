# @typescript-eslint/no-extra-semi

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-extra-semi`  |  **DocID**: `3aaa57290bf1446aaa1ae69043fb4ea0`  |  **NodeID**: `000201775790122558518db7e1b03ccb`

---

# @typescript-eslint/no-extra-semi

 禁止使用不必要的分号。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-extra-semi": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
export const x = 5;

export function foo() {
  // code
}

export const bar = () => {
  // code
};

export class C {
  public field: string = 'field';

  static {
    // code
  }

  public method() {
    // code
  }
}
```
  #### 反例

```
export const x = 5;;

export function foo() {
  // code
};

export const bar = () => {
  // code
};;

export class C {
  public field: string = 'field';;

  static {
    // code
  };

  public method() {
    // code
  };
};
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:44*
