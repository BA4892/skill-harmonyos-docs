# SetAddr

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setaddr`  |  **DocID**: `52492a676c184e4187eb33d339f30c09`  |  **NodeID**: `000201775795449800902210935d561c`

---

# SetAddr

  #### 函数功能

设置tensor地址。

   #### 函数原型

```
ge::graphStatus SetAddr(const ConstTensorAddressPtr addr, TensorAddrManager manager)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | addr  | 输入  tensor地址。

 using ConstTensorAddressPtr = const void *;

  
 | manager  | 输入  | tensor的管理函数。  
  

    #### 返回值

成功时返回ge::GRAPH_SUCCESS；失败时返回manager管理函数中定义的错误码。

   #### 约束说明

无

   #### 调用示例

```
auto addr = reinterpret_cast<void *>(0x10);
TensorData td(addr, nullptr);
td.SetAddr(addr, HostAddrManager);
```

---
*Updated: 2026-04-20 01:43:59*
