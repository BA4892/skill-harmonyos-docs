# INFER_FORMAT_FUNC_REG

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-infer-format-func-reg`  |  **DocID**: `2f36abe9949a43d2bc3c2e9fa61cdbc7`  |  **NodeID**: `0002017757954498005853efd95cb116`

---

# INFER_FORMAT_FUNC_REG

  #### 函数功能

注册算子的InferFormat实现。

 GE会在整图的Shape与Dtype推导前后分别调用一次整图的InferFormat，过程中会分别调用各个算子的InferFormat函数。如果算子没有注册InferFormat函数，GE将使用默认的推导函数，即输出的Format等于输入的Format。

   #### 函数原型

```
#define INFER_FORMAT_FUNC_REG(op_name, x) \
__INFER_FORMAT_FUNC_REG_IMPL__(op_name, INFER_FORMAT_FUNC(op_name, x), __COUNTER__)
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | op_name  | 输入  | 算子类型。  
 | x  | 输入  | inferFormat函数名，使用IMPLEMT_INFERFORMAT_FUNC中的func_name  
  

    #### 返回值

无

   #### 约束说明

无

   #### 客户是否可用

是

   #### 调用示例

```
INFER_FORMAT_FUNC_REG(Transpose, TransposeInferFormat);
```

---
*Updated: 2026-04-20 01:43:50*
