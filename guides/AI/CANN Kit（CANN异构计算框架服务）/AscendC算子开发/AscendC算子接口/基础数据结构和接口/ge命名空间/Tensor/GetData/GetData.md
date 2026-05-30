# GetData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-getdata`  |  **DocID**: `927dff1fdabb49e1a876b49053f3e968`  |  **NodeID**: `000201775795449800771604b56b1d05`

---

# GetData

  #### 函数功能

获取Tensor中的数据。

 const uint8_t* GetData() const返回的数据不可修改，uint8_t* GetData()返回的数据可修改。

   #### 函数原型

```
const uint8_t *GetData() const;
uint8_t *GetData();
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | const uint8_t  | Tensor中所存放的数据。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:56*
