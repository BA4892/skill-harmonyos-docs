# OH_MediaKeySession_Callback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drm-oh-mediakeysession-callback`

**DocID**: `2785ea55b74541b190a878eb6938e736`

**NodeID**: `00020177579591076125075823c5db7f`

---

OH_MediaKeySession_Callback

typedef struct OH_MediaKeySession_Callback {...} OH_MediaKeySession_Callback

概述

OH_MediaKeySession_Callback结构体，用于监听密钥过期、密钥更改等事件，返回媒体密钥会话实例，适用于多个媒体密钥会话的解密场景。

起始版本：
 12

相关模块：

Drm

所在头文件：

native_mediakeysession.h

汇总

[h2]成员变量

名称

描述

OH_MediaKeySession_EventCallback
 eventCallback

正常事件回调，如密钥过期等。

OH_MediaKeySession_KeyChangeCallback
 keyChangeCallback

密钥更改事件的密钥更改回调。

---
*2026-04-22T15:53:59.796Z*