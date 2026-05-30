# Print_PrintJob

> **分区**: API参考  |  **Slug**: `capi-oh-print-print-printjob`  |  **DocID**: `e37e9fc621b84242b2ce077b8308e238`

---

# Print_PrintJob

 ```
typedef struct {...} Print_PrintJob
```
  #### 概述

表示打印任务结构体。

 **起始版本：** 12

 **相关模块：** [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

 **所在头文件：** [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char *jobName 任务名称。  uint32_t *fdList 待打印的文件描述符数组。  uint32_t fdListCount 待打印的文件描述符数量。  char *printerId 打印机 ID。  uint32_t copyNumber 打印份数。  char *paperSource 纸张来源。  char *mediaType 介质类型。  char *pageSizeId 纸张尺寸 ID。  [Print_ColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_colormode) colorMode 色彩模式。  [Print_DuplexMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_duplexmode) duplexMode 双面模式。  [Print_Resolution](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-resolution) resolution 以 dpi 为单位的打印分辨率。  [Print_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-margin) printMargin 打印边距。  bool borderless 无边距。  [Print_OrientationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_orientationmode) orientationMode 方向模式。  [Print_Quality](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_quality) printQuality 打印质量。  [Print_DocumentFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_documentformat) documentFormat 文档格式。  char *advancedOptions JSON 格式的高级选项。

 支持的键包括：

 - **isReverse**：布尔类型，表示是否逆序打印。

 - **isCollate**：布尔类型，表示是否逐份打印。

---
*Updated: 2026-04-22 06:49:03*
