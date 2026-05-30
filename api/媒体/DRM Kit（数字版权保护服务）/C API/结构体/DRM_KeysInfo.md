# DRM_KeysInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-keysinfo`

**DocID**: `c7c12a9e47d649699d6fe3f006b7e79a`

**NodeID**: `0002017757959107611020a932fbc8b9`

---

DRM_KeysInfo

typedef struct DRM_KeysInfo {...} DRM_KeysInfo

概述

媒体密钥信息。

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

uint32_t keysInfoCount

密钥计数。

uint8_t keyId[MAX_KEY_INFO_COUNT][MAX_KEY_ID_LEN]

密钥ID集合。

char statusValue[MAX_KEY_INFO_COUNT][MAX_KEY_STATUS_VALUE_LEN]

密钥状态值。

---
*2026-04-22T15:55:03.596Z*