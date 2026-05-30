# GetSizeInBytes

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getsizeinbytes`  |  **DocID**: `b3cdcb2a82544207ab0cabd520b86594`  |  **NodeID**: `0002017757954498005700ca240559f9`

---

# GetSizeInBytes

  #### 函数功能

根据传入的element_count和data_type，获取element_count个该data_type所占用的内存总大小。

   #### 函数原型

```
int64_t GetSizeInBytes(int64_t element_count, DataType data_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | element_count  | 输入  | 用于标识多少个data_type。  
 | data_type  | 输入  | 数据类型，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。  
  

    #### 返回值

如果传入个数为非法值或传入不支持的数据类型，返回-1。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:50*
