# NetConn_TraceRouteOption

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netconnection-netconn-tracerouteoption`

**DocID**: `bd2c30708f5249e3937a435b92848c50`

**NodeID**: `0002017757963416850333a7246f73f0`

---

NetConn_TraceRouteOption

typedef struct NetConn_TraceRouteOption {...} NetConn_TraceRouteOption

概述

定义网络跟踪路由选项。

起始版本：
 20

相关模块：

NetConnection

所在头文件：

net_connection_type.h

汇总

[h2]成员变量

名称

描述

uint8_t maxJumpNumber

探测结果最大跳数，需要和TraceRouteInfo设置一致，最大可设置30跳，默认为30跳。

NetConn_PacketsType packetsType

探测包协议类型，默认为NETCONN_PACKETS_ICMP。

---
*2026-04-22T15:55:02.917Z*