# Http_HeaderEntry

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-http-headerentry`

**DocID**: `3d5c8dc7e27040ffbf1c36b53651ea81`

**NodeID**: `000201775796341685098a9181b863e6`

---

Http_HeaderEntry

typedef struct Http_HeaderEntry {...} Http_HeaderEntry

概述

请求或者响应的标头的所有键值对。

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

char *key

请求或者响应的标头中的键。

Http_HeaderValue
 *value

请求或者响应的标头中的键对应的值，参考
Http_HeaderValue
。

struct Http_HeaderEntry *next

链式存储。指向下一个Http_HeaderEntry。

---
*2026-04-22T15:53:59.200Z*