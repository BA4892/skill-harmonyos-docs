# SetStorageFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setstorageformat`  |  **DocID**: `f03048170f844d42ac36039fdb98f167`  |  **NodeID**: `0002017757954498007743fbb4f8b8dd`

---

# SetStorageFormat

  #### 函数功能

设置运行时format。

   #### 函数原型

```
void SetStorageFormat(const ge::Format storage_format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | storage_format  | 输入  | 运行时format。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
format.SetStorageFormat(ge::Format::FORMAT_NC);
```

---
*Updated: 2026-04-20 01:43:57*
