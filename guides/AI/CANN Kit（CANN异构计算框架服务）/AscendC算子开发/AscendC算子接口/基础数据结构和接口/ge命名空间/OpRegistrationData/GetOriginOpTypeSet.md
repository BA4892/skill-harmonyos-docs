# GetOriginOpTypeSet

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getoriginoptypeset`  |  **DocID**: `0030ea8de1804e29b89c066150dcb12d`  |  **NodeID**: `000201775795449800997861a84e5e26`

---

# GetOriginOpTypeSet

  #### 函数功能

获取原始模型的算子类型集合。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
std::set<std::string> GetOriginOpTypeSet () const;
Status GetOriginOpTypeSet(std::set<ge::AscendString> &ori_op_type) const;
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | ori_op_type  | 输出  | 原始模型的算子类型集合。  
  

    #### 约束说明

无

---
*Updated: 2026-04-20 01:44:02*
