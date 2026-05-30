# SetInferenceContext

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setinferencecontext`  |  **DocID**: `32f7a20ed5ed4b8a8dfe78bedf3520ab`  |  **NodeID**: `00020177579544980105783e8220a9ff`

---

# SetInferenceContext

  #### 函数功能

向当前算子传递InferShape推导所需要的关联信息，比如前面算子的shape和DataType信息。

   #### 函数原型

```
void SetInferenceContext(const InferenceContextPtr &inference_context);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | inference_context  | 输入  当前operator的推理上下文。

 InferenceContextPtr是指向InferenceContext类的指针的别名：

 using InferenceContextPtr = std::shared_ptr<InferenceContext>;

  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:04*
