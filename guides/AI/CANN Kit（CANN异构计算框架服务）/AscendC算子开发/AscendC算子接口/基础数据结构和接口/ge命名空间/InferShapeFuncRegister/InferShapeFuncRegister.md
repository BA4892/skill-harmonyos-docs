# InferShapeFuncRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infershapefuncregister`  |  **DocID**: `30750e38196a48c3afac8963bfe0277b`  |  **NodeID**: `0002017757954498005248db056926cf`

---

# InferShapeFuncRegister

  #### 函数功能

InferShapeFuncRegister构造函数和析构函数。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
InferShapeFuncRegister (const std::string &operator_type, const InferShapeFunc &infer_shape_func);
InferShapeFuncRegister(const char *const operator_type, const InferShapeFunc &infer_shape_func);
~ InferShapeFuncRegister()
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | operator_type  | 输入  | 算子类型。  
 | infer_shape_func  | 输入  | 算子InferShape函数。  
  

    #### 返回值

InferShapeFuncRegister构造函数返回InferShapeFuncRegister类型的对象。

   #### 约束说明

算子InferShape函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。

---
*Updated: 2026-04-20 01:43:49*
