# SetOriginFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setoriginformat`  |  **DocID**: `a617e7c168664ad0abd4508dfe51cb70`  |  **NodeID**: `0002017757954498007010d960d2cc57`

---

# SetOriginFormat

  #### 函数功能

设置原始format。

   #### 函数原型

```
void SetOriginFormat(const ge::Format origin_format)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | origin_format  | 输入  | 原始format。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
format.SetOriginFormat(ge::Format::FORMAT_NC);
```

---
*Updated: 2026-04-20 01:43:54*
