# NetConn_TraceRouteInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netconnection-netconn-tracerouteinfo`

**DocID**: `6d7548b10bcb4de9a483993d9da4f904`

**NodeID**: `000201775796341685015fa0a4ca775b`

---

NetConn_TraceRouteInfo

typedef struct NetConn_TraceRouteInfo {...} NetConn_TraceRouteInfo

概述

定义跟踪路由信息。

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

uint8_t jumpNo

跳数。

char address
[NETCONN_MAX_STR_LEN]

主机名或地址。

uint32_t rtt
[NETCONN_MAX_RTT_NUM]

往返时间（单位：毫秒)，包含最大、最小、平均、标准差。

---
*2026-04-22T15:55:02.916Z*