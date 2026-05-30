# AppendDim

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-appenddim`  |  **DocID**: `4bbf3e0f143442a698355588507f78e7`  |  **NodeID**: `0002017757954498009526b835653ec6`

---

# AppendDim

  #### 函数功能

向后扩展一个dim值，如果扩展的dim数量超出Shape的最大限制，那么本函数不做任何事情。

   #### 函数原型

```
Shape& AppendDim(const int64_t value)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | value  | 输入  | 扩展的dim值。  
  

    #### 返回值

this引用。

   #### 约束说明

无

   #### 调用示例

```
Shape shape0({3, 256, 256});
shape0.AppendDim(1024); // 3,256,256,1024
```

---
*Updated: 2026-04-20 01:44:00*
