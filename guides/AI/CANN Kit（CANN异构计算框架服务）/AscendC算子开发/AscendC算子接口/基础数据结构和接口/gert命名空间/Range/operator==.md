# operator==

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-range-operator`  |  **DocID**: `c3ba319e730a42639e29f14c3f3041af`  |  **NodeID**: `0002017757954498007287309608cff3`

---

# operator==

  #### 函数功能

判断与另外一个range对象是否相等，如果两个range的上下界的地址相同，或者上下界的值相同，这两个对象相等。

   #### 函数原型

```
bool operator==(const Range<T>&rht) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | rht  | 输入  | 另一个Range对象。  
  

    #### 返回值

true：相等。

 false：不相等。

   #### 约束说明

无

   #### 调用示例

```
int min = 0;
int max = 1024;
int max2 = 1024;
Range<int> range1(&min, &max); // 上界为1024Bytes，下界为0
Range<int> range2(&min, &max); // 上界为1024Bytes，下界为0
Range<int> range3(&min, &max2); // 上界为1024Bytes，下界为0
 
auto ret1 = range1 == range2; // true
auto ret2 = range1 == range3; // true
```

---
*Updated: 2026-04-20 01:43:54*
