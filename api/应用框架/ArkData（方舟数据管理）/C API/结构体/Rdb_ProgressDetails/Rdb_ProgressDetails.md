# Rdb_ProgressDetails

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-rdb-rdb-progressdetails`

**DocID**: `a0b4dcd46ae54b1cab2a72b551fcf2e6`

**NodeID**: `0002017757962161970862d42d0d1ca2`

---

Rdb_ProgressDetails

typedef struct Rdb_ProgressDetails {...} Rdb_ProgressDetails

概述

描述数据库整体执行端云同步任务上传和下载的统计信息。

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

用于唯一标识OH_TableDetails结构的版本。

int schedule

表示端云同步过程。

int code

表示端云同步过程的状态。

int32_t tableLength

表示端云同步的表的数量。

---
*2026-04-22T15:53:58.040Z*