# MediaLibrary_RequestId

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-mediaassetmanager-medialibrary-requestid`

**DocID**: `d0dcba03f2284ab895e4c39750105b5e`

**NodeID**: `00020177579591076198307053885ea7`

---

MediaLibrary_RequestId

typedef struct MediaLibrary_RequestId {...} MediaLibrary_RequestId

概述

定义请求ID。

当请求媒体库资源时，会返回此类型。

请求ID可用于取消请求。

如果请求失败，值将全为零，如 "00000000-0000-0000-0000-000000000000"。

起始版本：
 12

相关模块：

MediaAssetManager

所在头文件：

media_asset_base_capi.h

汇总

[h2]成员变量

名称

描述

char requestId[UUID_STR_MAX_LENGTH]

请求ID。

---
*2026-04-22T15:53:59.962Z*