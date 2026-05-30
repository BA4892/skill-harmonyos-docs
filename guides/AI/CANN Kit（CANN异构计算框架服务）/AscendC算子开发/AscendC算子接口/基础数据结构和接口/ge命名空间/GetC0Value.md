# GetC0Value

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getc0value`  |  **DocID**: `c787e80506654b53b5fa068f9f07bb5f`  |  **NodeID**: `000201775795449800563f4adf755d92`

---

# GetC0Value

  #### 函数功能

从实际format中解析出c0 format信息。

   #### 函数原型

```
inline int64_t GetC0Value(int32_t format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | format  | 输入  | 实际format（4字节大小，第1个字节的高四位为预留字段，低四位为c0 format，第2-3字节为子format信息，第4字节为主format信息）。  
  

    #### 返回值

如果包含c0 format，返回实际format中包含的c0 format。

  如果不包含c0 format，返回-1。

  
   #### 异常处理

无

   #### 约束说明

设置实际format格式时，第一个字节低四位的c0 format的范围只支持x=(0001~1111)，实际获取的c0 value为2^x-1。

---
*Updated: 2026-04-20 01:43:50*
