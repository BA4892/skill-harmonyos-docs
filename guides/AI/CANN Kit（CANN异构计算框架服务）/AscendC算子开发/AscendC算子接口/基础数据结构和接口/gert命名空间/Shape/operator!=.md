# operator!=

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-operatorb`  |  **DocID**: `c7836595dd89476d8ad24413ce8ee7b9`  |  **NodeID**: `000201775795449800769bea683b437e`

---

# operator!=

  #### 函数功能

判断与另一个Shape对象是否不等。

   #### 函数原型

```
bool operator!=(const Shape &rht) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | rht  | 输入  | 另一个Shape对象。  
  

    #### 返回值

true：不相等。

 false：相等。

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
Shape shape1({1, 3, 256, 256});
auto is_diff_shape = shape0 != shape1; // 返回值为true，不相等
```

---
*Updated: 2026-04-20 01:43:55*
