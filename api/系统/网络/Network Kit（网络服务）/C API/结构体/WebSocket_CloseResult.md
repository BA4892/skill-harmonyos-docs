# WebSocket_CloseResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-websocket-closeresult`

**DocID**: `68eb90948f364354aca8df41b5cf3a65`

**NodeID**: `0002017757963416850652e694eb109b`

---

WebSocket_CloseResult

struct WebSocket_CloseResult {...}

概述

websocket客户端接收到服务端关闭的参数。

起始版本：
 11

相关模块：

netstack

所在头文件：

net_websocket_type.h

汇总

[h2]成员变量

名称

描述

uint32_t code

错误值。

const char *reason

错误原因。

---
*2026-04-22T15:55:02.921Z*