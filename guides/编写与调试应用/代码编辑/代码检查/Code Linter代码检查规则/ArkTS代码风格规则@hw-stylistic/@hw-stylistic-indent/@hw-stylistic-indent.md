# @hw-stylistic/indent

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_indent`  |  **DocID**: `c6b5f39872b34896bb117d464244a007`  |  **NodeID**: `000201775790122558408bea1f34a945`

---

# @hw-stylistic/indent

 强制switch语句中的case和default缩进一层。该规则仅检查.ets文件类型。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/indent": "error"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
enum E {
  a = 'a',
  b = 'b',
  c = 'c'
}

export function test(e: E) {
  switch (e) {
    case E.a:
      console.info('doSomething');
      break;
    case E.b:
    case E.c:
      console.info('doSomething');
      break;
    default:
      console.info('doSomething');
  }
}
```
  #### 反例

```
enum E {
  a = 'a',
  b = 'b',
  c = 'c'
}

export function test(e: E) {
  switch (e) {
      // Expected indentation of 2 relative to switch.
      case E.a:
      // Expected indentation of 2 relative to case.
      console.info('hello');
      // Expected indentation of 2 relative to case.
      break;
    case E.b:
      console.info('hello');
      break;
    case E.c:
    // Expected indentation of 2 relative to case.
    console.info('hello');
      break;
    default:
    // Expected indentation of 2 relative to default.
    console.info('hello');
  }
}
```
  #### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
