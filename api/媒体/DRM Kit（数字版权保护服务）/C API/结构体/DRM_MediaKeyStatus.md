# DRM_MediaKeyStatus

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-mediakeystatus`

**DocID**: `4c0c73aa7b6e47c59707d09c5d435d0f`

**NodeID**: `0002017757959107611205e89683d5cc`

---

DRM_MediaKeyStatus

typedef struct DRM_MediaKeyStatus {...} DRM_MediaKeyStatus

概述

媒体密钥状态。

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

uint32_t statusCount

状态计数。

char statusName[MAX_MEDIA_KEY_STATUS_COUNT][MAX_MEDIA_KEY_STATUS_NAME_LEN]

状态名数组。

char statusValue[MAX_MEDIA_KEY_STATUS_COUNT][MAX_MEDIA_KEY_STATUS_VALUE_LEN]

状态值数组。

---
*2026-04-22T15:55:03.596Z*