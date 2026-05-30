# operator!=

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-storageshape-operatorb`  |  **DocID**: `5c3ad9a08a624a9f8627e561e8a1345b`  |  **NodeID**: `000201775795449800869a175a1b43b3`

---

# operator!=

  #### 函数功能

判断shape是否不相等。

   #### 函数原型

```
bool operator!=(const StorageShape &other) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | other  | 输入  | 另一个shape。  
  

    #### 返回值

true：不相等。

 false：相等。

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape0({3, 256, 256}, {256, 256, 3});
StorageShape shape1({3, 256, 256}, {3, 256, 256});
bool is_diff_shape = shape0 != shape1; // true
```

---
*Updated: 2026-04-20 01:43:59*
