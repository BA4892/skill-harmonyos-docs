# @param

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-arktsdoc-param`  |  **DocID**: `6e63c8c36dad43b2b88248cecb21b756`  |  **NodeID**: `0002017757901225583385fe734a256a`

---

# @param

 @param标签提供函数参数的描述信息。

 可以通过在描述之前插入一个连字符（-），使ArkTSDoc注释更具可读性。连字符前后需使用空格隔开。

 

 

 #### 语法

@param [<description>]

  #### 示例

 下面的示例演示如何在 @param 标签中包含描述信息。

 变量说明：

 ```
/**
 * @param somebody Somebody's name.
 */
export function sayHello(somebody: string): void {
  console.log('Hello ' + somebody);
}
```
 可以在变量说明前加个连字符（-），使之更加容易阅读：

 ```
/**
 * @param somebody - Somebody's name.
 */
export function sayHello(somebody: string): void {
  console.log('Hello ' + somebody);
}
```

---
*Updated: 2026-04-22 01:08:36*
