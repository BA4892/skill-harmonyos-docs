# GetOverHeadLength

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoverheadlength`  |  **DocID**: `149da99ed2544841b6c3910c5eebc69a`  |  **NodeID**: `000201775795449800838c77418da492`

---

# GetOverHeadLength

  #### 函数功能

获取数据描述信息的长度。

   #### 函数原型

```
static size_t GetOverHeadLength(const size_t capacity)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | capacity  | 输入  | 实例的最大容量。  
  

    #### 返回值

数据描述信息的长度。

   #### 约束说明

无

   #### 调用示例

```
size_t capacity = 100U;
auto length = ContinuousVectorVector::GetOverHeadLength(capacity);
```

---
*Updated: 2026-04-20 01:43:57*
