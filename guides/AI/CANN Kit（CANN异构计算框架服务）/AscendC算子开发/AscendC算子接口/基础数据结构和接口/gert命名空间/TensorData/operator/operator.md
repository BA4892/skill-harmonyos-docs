# operator

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-operator`  |  **DocID**: `0fe6051532834d0abeb0caabaded914e`  |  **NodeID**: `0002017757954498006781ae93f9de4a`

---

# operator

  #### 函数功能

禁用拷贝赋值函数。

 使用移动赋值函数。

   #### 函数原型

```
TensorData& operator= (const TensorData &other)=delete
TensorData& operator= (TensorData &&other) noexcept
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | other  | 输入  | 另一个TensorData对象。  
  

    #### 返回值

返回一个持有other对象资源的新TensorData对象。

   #### 约束说明

无

   #### 调用示例

```
auto addr = reinterpret_cast<void *>(0x10);
TensorData td(addr, HostAddrManager, 100U, kOnHost);
TensorData new_td = std::move(td);
```

---
*Updated: 2026-04-20 01:43:53*
