# GetSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getsize`  |  **DocID**: `cf27122541bf4dfd807e01191ea0337e`  |  **NodeID**: `000201775795449800754f217da4aa77`

---

# GetSize

  #### 函数功能

获取tensor数据的内存大小。

   #### 函数原型

```
size_t GetSize() const
```
   #### 参数说明

无

   #### 返回值

tensor所占内存大小，单位为字节。

   #### 约束说明

无

   #### 调用示例

```
auto addr = reinterpret_cast<void *>(0x10);
TensorData td(addr, HostAddrManager, 100U, kOnHost);
auto td_size = td.GetSize(); // 100U
```

---
*Updated: 2026-04-20 01:43:56*
