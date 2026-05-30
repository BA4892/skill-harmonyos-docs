# DRM_MediaKeyRequest

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-mediakeyrequest`

**DocID**: `113f06d8b5084480a17d2359fb7435e6`

**NodeID**: `000201775795910761025a01f8329f47`

---

DRM_MediaKeyRequest

typedef struct DRM_MediaKeyRequest {...} DRM_MediaKeyRequest

概述

媒体密钥请求。

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

DRM_MediaKeyRequestType
 type

媒体密钥请求类型。

int32_t dataLen

媒体密钥请求数据长度。

uint8_t data[MAX_MEDIA_KEY_REQUEST_DATA_LEN]

发送到媒体密钥服务器的媒体密钥请求数据。

char defaultUrl[MAX_DEFAULT_URL_LEN]

媒体密钥服务器URL。

---
*2026-04-22T15:53:59.790Z*