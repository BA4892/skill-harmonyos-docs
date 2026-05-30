# OH_IPC_MessageOption

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ohipcremoteobject-oh-ipc-messageoption`

**DocID**: `37fc4a40db3c40f28f90e77ef389c1e4`

**NodeID**: `0002017757962161966069edcb230c20`

---

OH_IPC_MessageOption

typedef struct {...} OH_IPC_MessageOption

概述

IPC消息选项定义。

起始版本：
 12

相关模块：

OHIPCRemoteObject

所在头文件：

ipc_cremote_object.h

汇总

[h2]成员变量

名称

描述

OH_IPC_RequestMode
 mode

消息请求模式。

uint32_t timeout

RPC预留参数，该参数对IPC无效。

void* reserved

保留参数，必须为空

---
*2026-04-22T15:55:02.560Z*