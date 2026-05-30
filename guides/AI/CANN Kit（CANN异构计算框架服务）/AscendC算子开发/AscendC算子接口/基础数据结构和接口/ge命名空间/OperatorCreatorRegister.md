# OperatorCreatorRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-operatorcreatorregister`  |  **DocID**: `8a8a03152bbd4352bf8bf4aa820d4d04`  |  **NodeID**: `000201775795449800534dc9576f6ca7`

---

# OperatorCreatorRegister

  #### 函数功能

OperatorCreatorRegister构造函数和析构函数。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
OperatorCreatorRegister(const std::string &operator_type, OpCreator const &op_creator);
OperatorCreatorRegister(const char_t *const operator_type, OpCreatorV2 const &op_creator);
~OperatorCreatorRegister() = default;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | operator_type  | 输入  | 算子类型。  
 | op_creator  | 输入  | 算子构造函数。  
  

    #### 返回值

OperatorCreatorRegister构造函数返回OperatorCreatorRegister类型的对象。

   #### 约束说明

算子注册接口，注册一个算子原型，此接口被其他头文件引用，一般不用由算子开发者直接调用。

---
*Updated: 2026-04-20 01:43:49*
