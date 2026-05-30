# FormatToSerialString

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-formattoserialstring`  |  **DocID**: `45f3e1fb0687496497b030f686dc728f`  |  **NodeID**: `0002017757954498008584e4247d4a6b`

---

# FormatToSerialString

  #### 函数功能

将Format类型值转化为字符串表达。

 从GCC 5.1版本开始，libstdc++为了更好的实现C++11规范，更改了std::string和std::list的一些接口，导致新老版本ABI不兼容。所以推荐使用[FormatToAscendString](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-formattoascendstring)替代本接口。

 使用该接口需要包含type_utils.h头文件。

 ```
#include "graph/utils/type_utils.h"
```
   #### 函数原型

```
std::string FormatToSerialString(const Format format);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | format  | 输入  | 待转换的Format，支持的Format请参考[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。  
  

    #### 返回值

转换后的Format字符串。

   #### 约束说明

无

   #### 调用示例

```
ge::Format format = ge::Format::FORMAT_NHWC;
auto format_str = FormatToSerialString(format); // "NHWC"
```

---
*Updated: 2026-04-20 01:43:58*
