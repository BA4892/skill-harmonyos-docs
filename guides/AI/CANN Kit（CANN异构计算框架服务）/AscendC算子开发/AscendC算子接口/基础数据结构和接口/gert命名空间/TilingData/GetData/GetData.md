# GetData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tilingdata-getdata`  |  **DocID**: `9a8cff2bfefb480fac7b47e70b3b1939`  |  **NodeID**: `000201775795449800797f22802fe5b8`

---

# GetData

  #### 函数功能

获取TilingData的数据指针。

   #### 函数原型

```
void *GetData();
const void *GetData() const;
```
   #### 参数说明

无

   #### 返回值

data指针。

   #### 约束说明

无

   #### 调用示例

```
auto td_buf = TilingData::CreateCap(100U);
auto td = reinterpret_cast<TilingData *>(td_buf.get());
auto tiling_data_ptr = td->GetData(); // td_buf.get() + sizeof(TilingData)
```

---
*Updated: 2026-04-20 01:43:57*
