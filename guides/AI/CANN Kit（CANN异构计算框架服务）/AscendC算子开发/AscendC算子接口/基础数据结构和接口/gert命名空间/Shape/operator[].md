# operator==

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-operatorc`  |  **DocID**: `da8ef443e92b4a18aeda4b25a72f2fea`  |  **NodeID**: `0002017757954498008091b368d331ed`

---

# operator==

  #### 函数功能

判断与另外一个shape对象是否相等，如果两个shape的dim num相等，并且dim num内每个dim的值都相等，则认为两个shape相等。

   #### 函数原型

```
bool operator==(const Shape &rht) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | rht  | 输入  | 另一个Shape对象。  
  

    #### 返回值

true：相等。

 false：不相等。

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
Shape shape1({1, 3, 256, 256});
auto is_same_shape = shape0 == shape1; // 返回值为false，不相等
```

---
*Updated: 2026-04-20 01:43:54*
