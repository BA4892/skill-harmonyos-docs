# Scan_PictureScanProgress

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-scan-scan-picturescanprogress`

**DocID**: `7608c1aaa8be45939921fa4349ee5f11`

**NodeID**: `0002017757963416850877121c02b820`

---

Scan_PictureScanProgress

typedef struct {...} Scan_PictureScanProgress

概述

表示扫描仪扫描图片的进度

起始版本：
 12

相关模块：

OH_Scan

所在头文件：

ohscan.h

汇总

[h2]成员变量

名称

描述

int32_t progress

图片的扫描进度，从0到100，单位：百分比。

int32_t fd

扫描仪文件句柄

bool isFinal

指示该图像是否为最后扫描的图像。true表示该图像是最后扫描的图像，false表示该图像不是最后扫描的图像。

---
*2026-04-22T15:55:03.129Z*