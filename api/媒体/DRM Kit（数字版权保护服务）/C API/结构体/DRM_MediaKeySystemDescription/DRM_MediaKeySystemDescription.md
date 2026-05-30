# DRM_MediaKeySystemDescription

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-mediakeysystemdescription`

**DocID**: `041478e57b384c7cb6d5f5bfa0caccc5`

**NodeID**: `000201775795910761193c033657e05e`

---

DRM_MediaKeySystemDescription

typedef struct DRM_MediaKeySystemDescription {...} DRM_MediaKeySystemDescription

概述

DRM解决方案名称及其UUID的列表。

起始版本：
 12

相关模块：

Drm

所在头文件：

native_drm_common.h

汇总

[h2]成员变量

名称

描述

char name[MAX_MEDIA_KEY_SYSTEM_NAME_LEN]

DRM插件的名称。

uint8_t uuid[DRM_UUID_LEN]

UUID。

---
*2026-04-22T15:53:59.794Z*