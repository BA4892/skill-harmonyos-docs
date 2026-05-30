# @throws

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-arktsdoc-throws`  |  **DocID**: `0c6ce9fa0d264ba5a1d3ca54188ad94b`  |  **NodeID**: `00020177579012255835492b6885b1b5`

---

# @throws

 

 @throws标签用于函数，记录函数可能引发的错误。可以在一个ArkTSDoc注释中多次使用@throws标记。

 #### 语法

@throws description

  #### 示例

使用带有描述的 @throws 标记：

 ```
/**
 * @throws Will throw an error if the argument is null.
 */
export function bar(x: number) {
  throw new Error();
}
```

---
*Updated: 2026-04-22 01:08:38*
