# GetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensordesc-getdatatype`  |  **DocID**: `bfeeecae132243c99cb8dd8aa1ba550b`  |  **NodeID**: `000201775795449800707ec7499ed661`

---

# GetDataType

  #### 函数功能

获取TensorDesc所描述Tensor的数据类型。

   #### 函数原型

```
DataType GetDataType() const;
```
   #### 参数说明

无

   #### 返回值

 
| 类型  | 描述  
  | [DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)  | TensorDesc所描述的Tensor的数据类型。  
  

    #### 异常处理

无

   #### 约束说明

由于返回的DataType信息为值拷贝，因此修改返回的DataType信息，不影响TensorDesc中已有的DataType信息。

---
*Updated: 2026-04-20 01:43:55*
