# @typescript-eslint/brace-style

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_brace-style`  |  **DocID**: `994858967d1f4d5bb261c8c78500950a`  |  **NodeID**: `0002017757901225584158298bba031b`

---

# @typescript-eslint/brace-style

 对代码块强制执行一致的括号样式。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/brace-style": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/brace-style选项](https://eslint.nodejs.cn/docs/rules/brace-style#选项)。

  #### 正例

```
function foo(): boolean {
  return true;
}

class C {
  static {
    foo();
  }

  public meth() {
    foo();
  }
}

export { C };
```
  #### 反例

```
function foo(): boolean 
{
  return true;
}

class C {
  static 
  {
    foo();
  }

  public meth() 
  {
    foo();
  }
}

export { C };
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
