# FormatToAscendString

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `cannkit-formattoascendstring`  |  **DocID**: `e0d51d88163548fbbdcdebd870d7aa5f`  |  **NodeID**: `000201775795449800717f3026e1732f`

---

# FormatToAscendString

  #### 函数功能

将Format类型值转化为字符串表达。

 使用该接口需要包含type_utils.h头文件。

 ```
#include "graph/utils/type_utils.h"
```
   #### 函数原型

```
static AscendString FormatToAscendString(const Format &format);
```
   #### 参数说明

 
| 参数  | 输入/输出  | 说明  
  | format  | 输入  | 待转换的Format，支持的Format请参考[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)。  
  

    #### 返回值

转换后的Format字符串，[AscendString](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ascendstring-construction-and-destructor)类型。

   #### 约束说明

无

   #### 调用示例

```
ge::Format format = ge::Format::FORMAT_NHWC;
auto format_str = FormatToAscendString(format); // "NHWC"
const char *ptr = format_str.GetString();  // 获取char*指针
```

---
*Updated: 2026-04-20 01:43:55*
