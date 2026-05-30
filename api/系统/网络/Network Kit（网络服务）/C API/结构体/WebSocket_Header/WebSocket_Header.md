# WebSocket_Header

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-websocket-header`

**DocID**: `8ad5d1979a6e4869aff02fd5509b3b9b`

**NodeID**: `00020177579634168508366c5dbd8a01`

---

WebSocket_Header

struct WebSocket_Header {...}

概述

websocket客户端增加header的链表节点。

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

const char *fieldName

header的字段名。

const char *fieldValue

header的字段内容。

struct 
WebSocket_Header
 *next

header链表的next指针。

---
*2026-04-22T15:53:59.197Z*