# DRM_PsshInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-drm-psshinfo`

**DocID**: `fefbd8aa499d4099a57703b602ae961e`

**NodeID**: `000201775795910761140f368599bb2a`

---

DRM_PsshInfo

typedef struct DRM_PsshInfo {...} DRM_PsshInfo

概述

DRM内容保护系统专用头（Protection System Specific Header）信息。

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

uint8_t uuid[DRM_UUID_LEN]

UUID的PSSH信息。

int32_t dataLen

PSSH数据长度。

uint8_t data[MAX_PSSH_DATA_LEN]

PSSH数据。

---
*2026-04-22T15:55:03.597Z*