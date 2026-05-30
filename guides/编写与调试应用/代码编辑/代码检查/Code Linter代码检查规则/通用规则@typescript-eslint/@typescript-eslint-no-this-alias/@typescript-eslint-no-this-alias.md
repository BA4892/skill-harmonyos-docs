# @typescript-eslint/no-this-alias

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide_no-this-alias`  |  **DocID**: `2fade6fd4c6b44e59652a58ac7d66ce4`  |  **NodeID**: `000201775790122558560f7701900ba0`

---

# @typescript-eslint/no-this-alias

 禁止将“this”赋值给一个变量。

 该规则仅支持对.js/.ts文件进行检查。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-this-alias": "error"
  }
}
```
  #### 选项

详情请参考[@typescript-eslint/no-this-alias选项](https://typescript-eslint.nodejs.cn/rules/no-this-alias/#options)。

  #### 正例

```
const time = 1000;
export class CC {
  public doWork(): void {
    console.info('work');
  }

  public init(): void {
    setTimeout(function () {
      this.doWork();
    });
  }
}    
```
  #### 反例

```
// 禁止将this赋值给一个变量
const self = this;

setTimeout(function () {
  self.doWork();
});
```
  #### 规则集

```
plugin:@typescript-eslint/recommended
plugin:@typescript-eslint/all
```
 Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
