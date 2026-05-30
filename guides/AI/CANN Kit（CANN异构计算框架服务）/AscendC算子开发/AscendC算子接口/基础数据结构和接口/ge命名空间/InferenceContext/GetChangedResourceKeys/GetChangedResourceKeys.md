# GetChangedResourceKeys

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getchangedresourcekeys`  |  **DocID**: `d366841d23c64e0a9ce5b993f6760e43`  |  **NodeID**: `0002017757954498009654e58e62e85c`

---

# GetChangedResourceKeys

  #### 函数功能

一般由框架调用。

 在结束写类型算子的推导后，可以调用该接口获取变化的资源标识。

   #### 函数原型

```
const std::set<ge::AscendString>& GetChangedResourceKeys() const
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | std::set<ge::AscendString>  | 已变化的资源标识集合。  
  

    #### 约束说明

无

---
*Updated: 2026-04-20 01:44:01*
