# GetAddr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-memblock-getaddr`  |  **DocID**: `b5660d1e112c4738b74d428d09a954cd`  |  **NodeID**: `00020177579544980066297f3d848a86`

---

# GetAddr

  #### 函数功能

获取只读的device内存地址。

  获取可读写的device内存地址。

  
   #### 函数原型

获取只读的device内存地址场景：

  const void *GetAddr() const  获取可读写的device内存地址场景：

  ```
void *GetAddr()
```
  
   #### 参数说明

无

   #### 返回值

获取只读的device内存地址场景：

   
| 类型  | 描述  
  | void*  | 只读的device内存地址。  
  

   获取可读写的device内存地址场景：

   
| 类型  | 描述  
  | void*  | 可读写的device内存地址。  
  

   
   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:53*
