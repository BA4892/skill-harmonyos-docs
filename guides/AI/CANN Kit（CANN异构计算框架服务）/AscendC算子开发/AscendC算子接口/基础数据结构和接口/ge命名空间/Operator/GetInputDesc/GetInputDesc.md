# GetInputDesc

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-operator-getinputdesc`  |  **DocID**: `12761330a2964b9ea721db3433bb67de`  |  **NodeID**: `000201775795449800998363c54ae4cd`

---

# GetInputDesc

  #### 函数功能

根据算子Input名称或Input索引获取算子Input的TensorDesc。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
TensorDesc GetInputDesc(const std::string &name) const;
TensorDesc GetInputDescByName(const char_t *name) const;
TensorDesc GetInputDesc(uint32_t index) const;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | name  | 输入  算子Input名称。

 当无此算子Input名称时，则返回TensorDesc默认构造的对象，其中，主要设置[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)为DT_FLOAT（表示float类型），[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)为FORMAT_NCHW（表示NCHW）。

  
 | index  | 输入  算子Input索引。

 当无此算子Input索引时，则返回TensorDesc默认构造的对象，其中，主要设置[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)为DT_FLOAT（表示float类型），[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)为FORMAT_NCHW（表示NCHW）。

  
  

    #### 返回值

 
| 类型  | 描述  
  | [TensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-construction-and-destructor)  | 算子Input的TensorDesc。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:02*
