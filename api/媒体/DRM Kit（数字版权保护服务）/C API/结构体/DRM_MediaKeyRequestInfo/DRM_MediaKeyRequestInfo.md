# DRM_MediaKeyRequestInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-mediakeyrequestinfo`

**DocID**: `ffe5fc4f675f476cbf975d12dd45e68b`

**NodeID**: `0002017757959107619827bbb5638746`

---

DRM_MediaKeyRequestInfo

typedef struct DRM_MediaKeyRequestInfo {...} DRM_MediaKeyRequestInfo

概述

媒体密钥请求信息。

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

DRM_MediaKeyType
 type

密钥类型。

int32_t initDataLen

初始数据长度。

uint8_t initData[MAX_INIT_DATA_LEN]

base64解码后格式为PSSH的初始数据。

char mimeType[MAX_MIMETYPE_LEN]

媒体上下文的MIME类型。

uint32_t optionsCount

选项数据计数。

char optionName[MAX_MEDIA_KEY_REQUEST_OPTION_COUNT][MAX_MEDIA_KEY_REQUEST_OPTION_NAME_LEN]

选项名称集合。

char optionData[MAX_MEDIA_KEY_REQUEST_OPTION_COUNT][MAX_MEDIA_KEY_REQUEST_OPTION_DATA_LEN]

选项数据集合。

---
*2026-04-22T15:53:59.789Z*