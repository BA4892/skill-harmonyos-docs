# Print_PrinterCapability

> **分区**: API参考  |  **Slug**: `capi-oh-print-print-printercapability`  |  **DocID**: `4f42c6bf2e0449a7a9ddeadd96debbc0`

---

# Print_PrinterCapability

 ```
typedef struct {...} Print_PrinterCapability
```
  #### 概述

表示打印机能力。

 **起始版本：** 12

 **相关模块：** [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

 **所在头文件：** [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Print_ColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_colormode) *supportedColorModes 支持的色彩模式数组。  uint32_t supportedColorModesCount 支持的色彩模式数量。  [Print_DuplexMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_duplexmode) *supportedDuplexModes 支持的双面打印模式数组。  uint32_t supportedDuplexModesCount 支持的双面打印模式数量。  [Print_PageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-pagesize) *supportedPageSizes 支持的打印纸张尺寸数组。  uint32_t supportedPageSizesCount 支持的打印纸张尺寸数量。  char *supportedMediaTypes JSON 字符串数组格式的支持的打印介质类型。  [Print_Quality](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_quality) *supportedQualities 支持的打印质量数组。  uint32_t supportedQualitiesCount 支持的打印质量数量。  char *supportedPaperSources JSON 字符串数组格式的支持的纸张来源。  uint32_t supportedCopies 支持的份数。  [Print_Resolution](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-resolution) *supportedResolutions 支持的打印机分辨率数组。  uint32_t supportedResolutionsCount 支持的打印机分辨率数量。  [Print_OrientationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_orientationmode) *supportedOrientations 支持的方向数组。  uint32_t supportedOrientationsCount 支持的方向数量。  char *advancedCapability JSON 格式的高级能力。

---
*Updated: 2026-04-22 06:49:02*
