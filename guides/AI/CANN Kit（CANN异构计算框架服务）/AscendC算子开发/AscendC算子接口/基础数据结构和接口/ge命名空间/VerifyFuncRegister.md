# VerifyFuncRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-verifyfuncregister`  |  **DocID**: `1fc81fd4a8d24df99e1626b99b3f7564`  |  **NodeID**: `00020177579544980055970d9dee62de`

---

# VerifyFuncRegister

  #### 函数功能

VerifyFuncRegister构造函数和析构函数。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
VerifyFuncRegister(const std::string &operator_type, const VerifyFunc &verify_func);
VerifyFuncRegister(const char_t *const operator_type, const VerifyFunc &verify_func);
~VerifyFuncRegister() = default;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | operator_type  | 输入  | 算子类型。  
 | verify_func  | 输入  | 算子verify函数。  
  

    #### 返回值

VerifyFuncRegister构造函数返回VerifyFuncRegister类型的对象。

   #### 约束说明

算子verifyFunc函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。

---
*Updated: 2026-04-20 01:43:50*
