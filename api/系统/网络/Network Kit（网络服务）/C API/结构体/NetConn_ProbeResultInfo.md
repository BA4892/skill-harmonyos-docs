# NetConn_ProbeResultInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netconnection-netconn-proberesultinfo`

**DocID**: `8ba41d03d88c402fac5acc805be47517`

**NodeID**: `000201775796341685013484754ef4b9`

---

NetConn_ProbeResultInfo

typedef struct NetConn_ProbeResultInfo {...} NetConn_ProbeResultInfo

概述

定义探测结果信息。

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

uint8_t lossRate

丢包率，百分制，值100表示100%丢包；50表示50%丢包。

uint32_t rtt
[NETCONN_MAX_RTT_NUM]

时延结果，包含最小、最大、平均、标准差。

---
*2026-04-22T15:55:02.915Z*