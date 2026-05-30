# MediaKeySession_Callback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-mediakeysession-callback`

**DocID**: `df56a2bebeea4c4c944148424cf31ec1`

**NodeID**: `00020177579591076122777408ab0195`

---

MediaKeySession_Callback

typedef struct MediaKeySession_Callback {...} MediaKeySession_Callback

概述

MediaKeySession_Callback结构体，用于监听密钥过期、密钥更改等事件，不返回媒体密钥会话实例，适用于单媒体密钥会话解密场景。

起始版本：
 11

相关模块：

Drm

所在头文件：

native_mediakeysession.h

汇总

[h2]成员变量

名称

描述

MediaKeySession_EventCallback
 eventCallback

正常事件回调，如密钥过期等。

MediaKeySession_KeyChangeCallback
 keyChangeCallback

密钥更改事件的密钥更改回调。

---
*2026-04-22T15:53:59.796Z*