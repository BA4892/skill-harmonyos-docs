# GetDataSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdatasize`  |  **DocID**: `fdb7f51a019c47f397c1845a0aad6ed8`  |  **NodeID**: `0002017757954498007257ab3365f08b`

---

# GetDataSize

  #### 函数功能

获取tiling data长度。

   #### 函数原型

```
size_t GetDataSize() const;
```
   #### 参数说明

无

   #### 返回值

tiling data长度。

   #### 约束说明

无

   #### 调用示例

```
auto td_buf = TilingData::CreateCap(100U);
auto td = reinterpret_cast<TilingData *>(td_buf.get());
size_t data_size = td->GetDataSize(); // 0
 
td->SetDataSize(100U);
data_size = td->GetDataSize(); // 100
```

---
*Updated: 2026-04-20 01:43:55*
