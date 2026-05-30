# operator==

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-storageformat-operatora`  |  **DocID**: `1ec6b034142a4ddba5da83d041932f65`  |  **NodeID**: `0002017757954498008939a409e50850`

---

# operator==

  #### 函数功能

判断格式是否相等。

   #### 函数原型

```
bool operator==(const StorageFormat &other) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | other  | 输入  | 另一种格式。  
  

    #### 返回值

true代表相等。

 false代表不等。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
StorageFormat another_format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_NC, dim_type);
bool is_same_fmt = format == another_format; // false
```

---
*Updated: 2026-04-20 01:43:59*
