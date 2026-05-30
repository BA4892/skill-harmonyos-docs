# DynamicInputRegister

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-dynamicinputregister`  |  **DocID**: `9190f9d161194d70adf646c51b6f2744`  |  **NodeID**: `00020177579544980107090d8fa98c80`

---

# DynamicInputRegister

  #### 函数功能

算子动态输入注册。

   #### 函数原型

```
void DynamicInputRegister(const char_t *name, const uint32_t num, bool is_push_back = true);
void DynamicInputRegister(const char_t *name, const uint32_t num, const char_t *datatype_symbol, bool is_push_back = true);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | name  | 输入  | 算子的动态输入名。  
 | num  | 输入  | 添加的动态输入个数。  
 | datatype_symbol  | 输入  | 动态输入的数据类型。  
 | is_push_back  | 输入  - true表示在尾部追加动态输入。

 - false表示在头部追加动态输入。

  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:05*
