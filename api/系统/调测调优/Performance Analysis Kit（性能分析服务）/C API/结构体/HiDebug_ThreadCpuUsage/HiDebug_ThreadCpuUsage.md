# HiDebug_ThreadCpuUsage

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hidebug-hidebug-threadcpuusage`

**DocID**: `41a4e875a9fe444094526139eaa06efe`

**NodeID**: `000201775796341684998c0687a97e0a`

---

HiDebug_ThreadCpuUsage

typedef struct HiDebug_ThreadCpuUsage {...} HiDebug_ThreadCpuUsage

概述

应用程序所有线程的CPU使用率结构体定义。

起始版本：
 12

相关模块：

HiDebug

所在头文件：

hidebug_type.h

汇总

[h2]成员变量

名称

描述

uint32_t threadId

线程ID。

double cpuUsage

线程CPU使用率百分比。

struct 
HiDebug_ThreadCpuUsage
 *next

下一个线程的使用率信息。

---
*2026-04-22T15:53:59.568Z*