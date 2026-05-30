# SerialStringToFormat

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-serialstringtoformat`  |  **DocID**: `d6f5e58eeecb4d91835e477767cd0d25`  |  **NodeID**: `000201775795449800884591bc765fb8`

---

# SerialStringToFormat

  #### 函数功能

将字符串转化为Format类型值。

 从GCC 5.1版本开始，libstdc++为了更好的实现C++11规范，更改了std::string和std::list的一些接口，导致新老版本ABI不兼容。所以推荐使用[AscendStringToFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ascendstringtoformat)替代本接口。

 使用该接口需要包含type_utils.h头文件。

 ```
#include "graph/utils/type_utils.h"
```
   #### 函数原型

```
Format SerialStringToFormat(const std::string &str);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | str  | 输入  | 待转换的Format字符串形式。  
  

    #### 返回值

输入合法时，返回转换后的Format enum值，枚举定义请参考[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)；输入不合法时，返回FORMAT_RESERVED，并打印报错信息。

   #### 约束说明

无

   #### 调用示例

```
std::string format_str = "NHWC";
auto format = SerialStringToFormat(format_str); // 1
```

---
*Updated: 2026-04-20 01:43:59*
