# Http_HeaderValue

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-http-headervalue`

**DocID**: `ca2988f4ad454026928ba37eb909617b`

**NodeID**: `00020177579634168509556e188bd03f`

---

Http_HeaderValue

typedef struct Http_HeaderValue {...} Http_HeaderValue

概述

请求或者响应的标头映射的值类型。

起始版本：
 20

相关模块：

netstack

所在头文件：

net_http_type.h

汇总

[h2]成员变量

名称

描述

char *value

标头键值对的值。

struct Http_HeaderValue *next

链式存储。指向下一个Http_HeaderValue。

---
*2026-04-22T15:53:59.200Z*