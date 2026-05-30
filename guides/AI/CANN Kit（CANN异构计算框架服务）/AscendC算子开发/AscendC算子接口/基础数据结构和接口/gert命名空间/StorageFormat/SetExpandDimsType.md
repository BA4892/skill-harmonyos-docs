# SetExpandDimsType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setexpanddimstype`  |  **DocID**: `ea370bbef0f6464d82b28c3a5aa27eb0`  |  **NodeID**: `000201775795449800865f0009155f5b`

---

# SetExpandDimsType

  #### 函数功能

设置补维规则。

   #### 函数原型

```
void SetExpandDimsType(const ExpandDimsType &expand_dims_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | expand_dims_type  | 输入  | 补维规则。  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
ExpandDimsType dim_type("1100");
StorageFormat format(ge::Format::FORMAT_NCHW, ge::Format::FORMAT_C1HWNC0, dim_type);
ExpandDimsType new_dim_type("1010");
format.SetExpandDimsType(new_dim_type);
```

---
*Updated: 2026-04-20 01:43:58*
