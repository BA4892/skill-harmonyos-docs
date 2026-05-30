# DRM_MediaKeySystemInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-mediakeysysteminfo`

**DocID**: `d65e3e17713945a580a51377068e1194`

**NodeID**: `0002017757959107611742626f662e28`

---

DRM_MediaKeySystemInfo

typedef struct DRM_MediaKeySystemInfo {...} DRM_MediaKeySystemInfo

概述

加密媒体内容的DRM信息。

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

uint32_t psshCount

PSSH计数。

DRM_PsshInfo
 psshInfo[MAX_PSSH_INFO_COUNT]

PSSH信息。

---
*2026-04-22T15:53:59.793Z*