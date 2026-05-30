# Rdb_DistributedConfig

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-rdb-rdb-distributedconfig`

**DocID**: `2bc7c083b92945c7a1bb93e7fbd6687a`

**NodeID**: `0002017757962161978759c630decb47`

---

Rdb_DistributedConfig

typedef struct Rdb_DistributedConfig {...} Rdb_DistributedConfig

概述

记录表的分布式配置信息。

起始版本：
 11

相关模块：

RDB

所在头文件：

relational_store.h

汇总

[h2]成员变量

名称

描述

int version

用于唯一标识Rdb_DistributedConfig结构的版本。

bool isAutoSync

表示该表是否支持端云自动同步。为true时，支持系统自动触发端云同步；为false时不支持系统自动触发端云同步，需要调用
OH_Rdb_CloudSync
接口触发端云同步。

---
*2026-04-22T15:55:01.537Z*