# DelInputWithCond

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-delinputwithcond`  |  **DocID**: `7af3c3a53eec43d8b3d4380d7d848d81`  |  **NodeID**: `000201775795449800960b46cb4b2e3a`

---

# DelInputWithCond

  #### 函数功能

根据算子属性，删除算子指定输入边。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
OpRegistrationData &DelInputWithCond(int32_t inputIdx, const std::string &attrName, bool attrValue);
OpRegistrationData &DelInputWithCond(int32_t input_idx, const char_t *attr_name, bool attr_value);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | inputIdx  | 输入  | 需要删除的输入边编号。  
 | attrName  | 输入  | 属性名字。  
 | attrValue  | 输入  | 属性的值。  
  

    #### 约束说明

无

---
*Updated: 2026-04-20 01:44:01*
