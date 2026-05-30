# OH_QoS_GewuSubmitRequestResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-qos-oh-qos-gewusubmitrequestresult`

**DocID**: `14be7f4137004aa6b2c35b5f9874b099`

**NodeID**: `000201775796341684797572fdd0329e`

---

OH_QoS_GewuSubmitRequestResult

typedef struct { ... } OH_QoS_GewuSubmitRequestResult

概述

OH_QoS_GewuSubmitRequest()接口的返回结果，成功时返回请求的 request，失败时 error 会置为对应的错误码 。

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

OH_QoS_GewuRequest request

创建出来的请求句柄

OH_QoS_GewuErrorCode
 error

错误码。- 请求提交成功返回OH_QOS_GEWU_OK。- 由于没有足够的内存而创建会话失败返回OH_QOS_GEWU_NOMEM。

---
*2026-04-22T15:53:59.453Z*