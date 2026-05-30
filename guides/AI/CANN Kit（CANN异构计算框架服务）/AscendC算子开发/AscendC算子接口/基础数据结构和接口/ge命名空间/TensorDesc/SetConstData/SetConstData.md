# SetConstData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setconstdata`  |  **DocID**: `ab5ce4c0e15341cd9b915e3f4dedbfcc`  |  **NodeID**: `000201775795449800967153db6d1692`

---

# SetConstData

  #### 函数功能

如果TensorDesc是常量节点的描述，向TensorDesc中设置权重值。

   #### 函数原型

```
void SetConstData(std::unique_ptr<uint8_t[]> const_data_buffer, const size_t &const_data_len);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | const_data_buffer  | 输入  | 权重地址。  
 | const_data_len  | 输入  | 权重长度。  
  

    #### 返回值

无

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:01*
