# SetDataSize

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setdatasize`  |  **DocID**: `c45f00bed1ae49819c5f9eb0d4e5270b`  |  **NodeID**: `0002017757954498007584c21582e26d`

---

# SetDataSize

  #### 函数功能

设置tiling data长度。

   #### 函数原型

```
void SetDataSize(const size_t size);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | size  | 输入  | tiling data长度。  
  

    #### 返回值

无

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
*Updated: 2026-04-20 01:43:56*
