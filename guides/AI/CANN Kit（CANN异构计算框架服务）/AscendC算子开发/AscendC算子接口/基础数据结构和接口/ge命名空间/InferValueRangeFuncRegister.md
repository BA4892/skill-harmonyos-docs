# InferValueRangeFuncRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infervaluerangefuncregister`  |  **DocID**: `1141d2f971a04cb99819f59bec4e7347`  |  **NodeID**: `00020177579544980052599f41e4128f`

---

# InferValueRangeFuncRegister

  #### 函数功能

InferValueRangeFuncRegister构造函数和析构函数。

   #### 函数原型

```
InferValueRangeFuncRegister(const char_t *const operator_type, const WHEN_CALL when_call,
const InferValueRangeFunc &infer_value_range_func);
InferValueRangeFuncRegister(const char_t *const operator_type);
~InferValueRangeFuncRegister() = default;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | operator_type  | 输入  | 算子类型。  
 | when_call  | 输入  | infer函数的调用场景。  
 | infer_value_range_func  | 输入  | 算子inferValueRange函数。  
  

    #### 返回值

InferValueRangeFuncRegister构造函数返回InferValueRangeFuncRegister类型的对象。

   #### 约束说明

算子InferValueRangeFuncRegister函数注册接口，此接口被其他头文件引用，一般不由算子开发者直接调用。

---
*Updated: 2026-04-20 01:43:49*
