# DelInputWithOriginalType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-delinputwithoriginaltype`  |  **DocID**: `a40058249d5c4405b82912544f2dcc68`  |  **NodeID**: `00020177579544980097142c83a9fa69`

---

# DelInputWithOriginalType

  #### 函数功能

根据算子类型，删除算子指定输入边。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
OpRegistrationData &DelInputWithOriginalType(int32_t input_idx, const std::string &ori_type)
OpRegistrationData &DelInputWithOriginalType(int32_t input_idx, const char_t *ori_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | input_idx  | 输入  | 需要删除的输入边编号。  
 | ori_type  | 输入  | 删除节点的原始算子类型。  
  

    #### 约束说明

无

---
*Updated: 2026-04-20 01:44:01*
