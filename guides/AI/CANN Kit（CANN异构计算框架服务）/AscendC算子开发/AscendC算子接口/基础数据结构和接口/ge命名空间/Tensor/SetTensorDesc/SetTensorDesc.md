# SetTensorDesc

> **分区**: Guides  |  **Slug**: `cannkit-settensordesc`  |  **DocID**: `b6862d9daf3c4984b03cf4fafad40a08`

---

# SetTensorDesc

  #### 函数功能

设置Tensor的描述符（TensorDesc）。

   #### 函数原型

```
graphStatus SetTensorDesc(const TensorDesc &tensor_desc);
```
   #### 参数说明

 参数名 输入/输出 描述   tensor_desc 输入 需设置的Tensor描述符。       #### 返回值

 类型 描述   graphStatus 设置成功返回GRAPH_SUCCESS，否则，返回GRAPH_FAILED。       #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-22 06:33:48*
