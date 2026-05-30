# GetConstData

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getconstdata`  |  **DocID**: `5044fe5f632f4dcfbe9eb2d7e2220967`  |  **NodeID**: `000201775795449800681d4e483c3008`

---

# GetConstData

  #### 函数功能

如果TensorDesc是常量节点的描述，获取TensorDesc中的权重值。

   #### 函数原型

```
bool GetConstData(uint8_t **const_data_buffer, size_t &const_data_len) const;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | const_data_buffer  | 输出  | 权重地址。  
 | const_data_len  | 输出  | 权重长度。  
  

    #### 返回值

获取成功，返回true。

 获取失败，返回false。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:54*
