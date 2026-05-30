# operator==

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-storageshape-operatora`  |  **DocID**: `53ee74095be84831812456628a78ceda`  |  **NodeID**: `0002017757954498008428922d2788db`

---

# operator==

  #### 函数功能

判断shape是否相等。

   #### 函数原型

```
bool operator==(const StorageShape &other) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | other  | 输入  | 另一个shape。  
  

    #### 返回值

true：相等。

 false：不相等。

   #### 约束说明

无

   #### 调用示例

```
StorageShape shape0({3, 256, 256}, {256, 256, 3});
StorageShape shape1({3, 256, 256}, {3, 256, 256});
bool is_same_shape = shape0 == shape1; // false
```

---
*Updated: 2026-04-20 01:43:58*
