# GetSizeByDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-getsizebydatatype`  |  **DocID**: `89fe1282a2654dd78b22faf4aaecc6e2`  |  **NodeID**: `0002017757954498005693d42afa2864`

---

# GetSizeByDataType

  #### 函数功能

根据传入的data_type，获取该data_type所占用的内存大小。

   #### 函数原型

```
inline int GetSizeByDataType(DataType data_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | data_type  | 输入  | 数据类型，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。  
  

    #### 返回值

该data_type所占用的内存大小（单位为bytes），如果传入非法值或不支持的数据类型，返回-1。

   #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:43:50*
