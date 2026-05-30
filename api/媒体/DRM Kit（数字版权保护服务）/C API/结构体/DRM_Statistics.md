# DRM_Statistics

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-statistics`

**DocID**: `f26ef3e54f1d4cd09125ae1a1a47e08d`

**NodeID**: `000201775795910761043f747fa6371d`

---

DRM_Statistics

typedef struct DRM_Statistics {...} DRM_Statistics

概述

MediaKeySystem的度量信息。

起始版本：
 11

相关模块：

Drm

所在头文件：

native_drm_common.h

汇总

[h2]成员变量

名称

描述

uint32_t statisticsCount

度量计数。

char statisticsName[MAX_STATISTICS_COUNT][MAX_STATISTICS_NAME_LEN]

度量信息名称集合。

char statisticsDescription[MAX_STATISTICS_COUNT][MAX_STATISTICS_BUFFER_LEN]

度量信息描述集合。

---
*2026-04-22T15:55:03.594Z*