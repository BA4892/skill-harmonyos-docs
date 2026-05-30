# operator!=

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-storageformat-operatorb`  |  **DocID**: `0a5176bd30df46a186f37f4877baf4b4`  |  **NodeID**: `000201775795449800913615424b52d6`

---

# operator!=

  #### 函数功能

判断格式是否不相等。

   #### 函数原型

```
bool operator!=(const StorageFormat &other) const
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | other  | 输入  | 另一种格式。  
  

    #### 返回值

true表示格式不同。

 false表示格式相同。

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
StorageFormat another_format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_NC, dim_type);
bool is_diff_fmt = format != another_format; // true
```

---
*Updated: 2026-04-20 01:44:00*
