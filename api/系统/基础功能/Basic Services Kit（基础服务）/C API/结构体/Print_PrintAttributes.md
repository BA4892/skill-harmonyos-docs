# Print_PrintAttributes

> **分区**: API参考  |  **Slug**: `capi-oh-print-print-printattributes`  |  **DocID**: `162a8201914a430a8764b75f9d51f91b`

---

# Print_PrintAttributes

 ```
typedef struct {...} Print_PrintAttributes
```
  #### 概述

表示打印属性结构体。

 **起始版本：** 13

 **相关模块：** [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

 **所在头文件：** [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Print_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-range) pageRange 打印范围。  [Print_PageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-pagesize) pageSize 打印纸张尺寸。  [Print_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-margin) pageMargin 打印边距。  uint32_t copyNumber 份数。  uint32_t duplexMode 双面模式。  uint32_t colorMode 色彩模式。  bool isSequential 顺序打印。

 true表示顺序打印，false表示逆序打印。

   bool isLandscape 打印方向（是否横向）。

 true表示打印方式为横向，false表示打印方向为竖向。

   bool hasOption 打印选项标志。

 true表示有打印选项，false表示没有打印选项。

   char options[256] 打印选项。

---
*Updated: 2026-04-22 06:49:04*
