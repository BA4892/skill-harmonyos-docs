# HasSubFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-hassubformat`  |  **DocID**: `0eecb9f69ad94b66a76fa56c0985ecb3`  |  **NodeID**: `0002017757954498005739c96994af14`

---

# HasSubFormat

  #### 函数功能

判断实际format中是否包含子format。

   #### 函数原型

```
inline bool HasSubFormat(int32_t format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | format  | 输入  | 实际format（4字节大小，第1个字节的高四位为预留字段，低四位为c0 format，第2-3字节为子format信息，第4字节为主format信息）。  
  

    #### 返回值

true：实际format中包含子format。

  false：实际format中不包含子format。

  
   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:50*
