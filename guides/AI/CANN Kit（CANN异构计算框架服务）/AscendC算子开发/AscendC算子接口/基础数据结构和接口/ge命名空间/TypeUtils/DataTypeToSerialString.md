# DataTypeToSerialString

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-datatypetoserialstring`  |  **DocID**: `1727dd4eaf404054b28907dcd999f33f`  |  **NodeID**: `000201775795449800781f9e34ee5316`

---

# DataTypeToSerialString

  #### 函数功能

将DataType类型值转化为字符串表达。

 从GCC 5.1版本开始，libstdc++为了更好的实现C++11规范，更改了std::string和std::list的一些接口，导致新老版本ABI不兼容。所以推荐使用[DataTypeToAscendString](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-datatypetoascendstring)替代本接口。

 使用该接口需要包含type_utils.h头文件。

 ```
#include "graph/utils/type_utils.h"
```
   #### 函数原型

```
std::string DataTypeToSerialString(const DataType data_type);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | data_type  | 输入  | 待转换的DataType，支持的DataType请参考[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。  
  

    #### 返回值

转换后的DataType字符串。

   #### 约束说明

无

   #### 调用示例

```
DataType data_type = ge::DT_UINT32;
auto type_str = DataTypeToSerialString(data_type); // "DT_UINT32"
```

---
*Updated: 2026-04-20 01:43:57*
