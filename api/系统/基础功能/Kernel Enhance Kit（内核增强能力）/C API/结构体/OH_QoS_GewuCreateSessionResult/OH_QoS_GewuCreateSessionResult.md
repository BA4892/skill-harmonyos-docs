# OH_QoS_GewuCreateSessionResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-qos-oh-qos-gewucreatesessionresult`

**DocID**: `b6b52dbf32a24a2c958e999c0327745b`

**NodeID**: `0002017757963416847490c6d947a08f`

---

OH_QoS_GewuCreateSessionResult

typedef struct { ... } OH_QoS_GewuCreateSessionResult

概述

OH_QoS_GewuCreateSession()接口的返回结果，成功时返回创建的 session，失败时 error 会置为对应的错误码 。

起始版本：
 20

相关模块：

QoS

所在头文件：

qos.h

汇总

[h2]成员变量

名称

描述

OH_QoS_GewuSession
 session

创建出来的会话句柄

OH_QoS_GewuErrorCode
 error

错误码- 创建会话成功返回OH_QOS_GEWU_OK。- 由于没有足够的内存而创建会话失败返回OH_QOS_GEWU_NOMEM。

---
*2026-04-22T15:53:59.452Z*