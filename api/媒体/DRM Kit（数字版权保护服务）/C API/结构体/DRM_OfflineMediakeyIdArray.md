# DRM_OfflineMediakeyIdArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-offlinemediakeyidarray`

**DocID**: `883fdd4a67d4478c98e9e95dd453f387`

**NodeID**: `0002017757959107610830a00c50edcd`

---

DRM_OfflineMediakeyIdArray

typedef struct DRM_OfflineMediakeyIdArray {...} DRM_OfflineMediakeyIdArray

概述

离线媒体密钥ID数组。

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

uint32_t idsCount

ID计数。

int32_t idsLen[MAX_OFFLINE_MEDIA_KEY_ID_COUNT]

ID长度集合。

uint8_t ids[MAX_OFFLINE_MEDIA_KEY_ID_COUNT][MAX_OFFLINE_MEDIA_KEY_ID_LEN]

ID数据集合。

---
*2026-04-22T15:55:03.595Z*