# SetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-tensor-setdatatype`  |  **DocID**: `36218f84684649f7b6184aa990c80311`  |  **NodeID**: `00020177579544980099646cc6dd879a`

---

# SetDataType

  #### 函数功能

设置Tensor的Datatype。

   #### 函数原型

```
graphStatus SetDataType(const ge::DataType &dtype);
```
   #### 参数说明

 
| 参数名  | 输入/输出  | 描述  
  | dtype  | 输入  需设置的DataType值。

 关于DataType类型，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

  
  

    #### 返回值

 
| 类型  | 描述  
  | graphStatus  | 设置成功返回GRAPH_SUCCESS，否则，返回GRAPH_FAILED。  
  

    #### 异常处理

无

   #### 约束说明

无

---
*Updated: 2026-04-20 01:44:02*
