# GetDynamicOutputDesc

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getdynamicoutputdesc`  |  **DocID**: `e7b6c560303040e1acf1bb28631d30f0`  |  **NodeID**: `000201775795449800942a9abf2a6d91`

---

# GetDynamicOutputDesc

  #### 函数功能

根据name和index的组合获取算子动态Output的TensorDesc。

   #### 函数原型

  数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

   ```
TensorDesc GetDynamicOutputDesc(const std::string &name, uint32_t index) const;
TensorDesc GetDynamicOutputDesc(const char_t *name, uint32_t index) const;
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | name  | 输入  | 算子动态Output的名称。  
 | index  | 输入  | 算子动态Output编号，编号起始值从1开始。  
  

    #### 返回值

 
| 类型  | 描述  
  | [TensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-construction-and-destructor)  | 获取TensorDesc成功，则返回算子动态Output的TensorDesc；获取失败，则返回TensorDesc默认构造的对象，其中，主要设置DataType为DT_FLOAT（表示float类型），Format为FORMAT_NCHW（表示NCHW）。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:00*
