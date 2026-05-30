# SetDataType

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-setdatatype`  |  **DocID**: `863e9936091a456b95e734667aff873f`  |  **NodeID**: `0002017757954498009081698ba947f3`

---

# SetDataType

  #### 函数功能

设置Tensor的数据类型。

   #### 函数原型

```
void SetDataType(const ge::DataType data_type)
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | data_type  | 输入  需要设置的Tensor的数据类型。

 关于ge::DataType的定义，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。

  
  

    #### 返回值

无

   #### 约束说明

无

   #### 调用示例

```
StorageShape sh({1, 2, 3}, {1, 2, 3});
Tensor t = {sh, {}, {}, ge::DT_FLOAT, nullptr};
t.SetDataType(ge::DT_DOUBLE);
```

---
*Updated: 2026-04-20 01:43:59*
