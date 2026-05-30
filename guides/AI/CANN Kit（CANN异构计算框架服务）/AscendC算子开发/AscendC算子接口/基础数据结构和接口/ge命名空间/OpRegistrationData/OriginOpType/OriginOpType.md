# OriginOpType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-originoptype`  |  **DocID**: `2e78af05c9b44ecfaf36aa22fff6b5a2`  |  **NodeID**: `0002017757954498008089cbc898e000`

---

# OriginOpType

  #### 函数功能

设置原始模型的算子类型或算子类型列表。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
OpRegistrationData &OriginOpType(const std::vector<ge::AscendString> &ori_op_type_list);
OpRegistrationData &OriginOpType(const char_t *ori_op_type);
OpRegistrationData &OriginOpType(const std::initializer_list<std::string> &ori_optype_list);
OpRegistrationData &OriginOpType(const std::string &ori_optype);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ori_op_type_list/ori_optype_list  | 输入  | 原始模型算子类型列表  
 | ori_op_type/ori_optype  | 输入  | 原始模型算子类型

---
*Updated: 2026-04-20 01:43:57*
