# CreateCap

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-createcap`  |  **DocID**: `30ab701bd6be48e0bf817b21f30c3d70`  |  **NodeID**: `0002017757954498008447190142266a`

---

# CreateCap

  #### 函数功能

根据指定的最大容量创建一个TilingData类实例。

   #### 函数原型

```
static std::unique_ptr<uint8_t[]> CreateCap(const size_t cap_size);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | cap_size  | 输入  | 最大容量，单位为字节。  
  

    #### 返回值

TilingData的实例指针。

   #### 约束说明

无

   #### 调用示例

```
auto td_buf = TilingData::CreateCap(100U);
auto td = reinterpret_cast<TilingData *>(td_buf.get());
```

---
*Updated: 2026-04-20 01:43:58*
