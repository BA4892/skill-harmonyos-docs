# @typescript-eslint/no-type-alias

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-type-alias`  |  **DocID**: `65bfe84db0434d8f8cabef509bb24cac`  |  **NodeID**: `0002017757901225585655fd549d3c1d`

---

# @typescript-eslint/no-type-alias

 禁止使用类型别名。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-type-alias": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-type-alias选项](https://typescript-eslint.nodejs.cn/rules/no-type-alias/#options)。

  #### 正例

```
interface Person {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
}

export function addPerson(person: Person): Person {
  return person;
}
```
  #### 反例

```
// 不允许使用类型别名，建议使用接口替代
type Person = {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
};

export function addPerson(person: Person): Person {
  return person;
}
```
  #### 规则集

plugin:@typescript-eslint/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
