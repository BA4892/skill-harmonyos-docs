# GetMin

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getmin`  |  **DocID**: `2b6167db0a164cacbba0f4d362c08935`  |  **NodeID**: `00020177579544980083076cd57fbd1f`

---

# GetMin

  #### 函数功能

获取最小的T对象指针。

   #### 函数原型

```
const T *GetMin() const;
T *GetMin();
```
   #### 参数说明

无

   #### 返回值

返回最小的T对象指针。

   #### 约束说明

无

   #### 调用示例

```
int min = -1;
int max = 1024;
Range<int> range(&min,&max);
 
auto ret = range.GetMin(); // ret指针指向min
```

---
*Updated: 2026-04-20 01:43:57*
