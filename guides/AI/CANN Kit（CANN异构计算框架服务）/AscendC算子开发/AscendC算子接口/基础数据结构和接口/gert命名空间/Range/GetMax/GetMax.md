# GetMax

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getmax`  |  **DocID**: `9cbc1f247aef4e31af8385baa5112dc1`  |  **NodeID**: `000201775795449800859b37e7b83f53`

---

# GetMax

  #### 函数功能

获取最大的T对象指针。

   #### 函数原型

```
const T *GetMax() const;
T *GetMax();
```
   #### 参数说明

无

   #### 返回值

返回最大的T对象指针。

   #### 约束说明

无

   #### 调用示例

```
int min = -1;
int max = 1024;
Range<int> range(&min,&max);
 
auto ret = range.GetMax(); // ret指针指向max
```

---
*Updated: 2026-04-20 01:43:58*
