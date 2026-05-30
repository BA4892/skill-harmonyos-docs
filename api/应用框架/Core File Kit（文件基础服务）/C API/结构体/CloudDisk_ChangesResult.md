# CloudDisk_ChangesResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-clouddisk-clouddisk-changesresult`

**DocID**: `97c565ca7cfb4cbaa2b5a2092ec287e0`

**NodeID**: `000201775796216196752d215ad54f4a`

---

CloudDisk_ChangesResult

typedef struct CloudDisk_ChangesResult {...} CloudDisk_ChangesResult

概述

查询同步根路径中文件变更的结果。该结构体包含同步根路径中文件的变更数据，包括下一个更新序列号、结尾标志以及变更数据项数组。

起始版本：
 21

相关模块：

CloudDisk

所在头文件：

oh_cloud_disk_manager.h

汇总

[h2]成员变量

名称

描述

uint64_t nextUsn{0}

下一次可查询的有效起始变更序列号。

bool isEof{false}

本次变更是否为同步根路径中记录的最后的修改记录。true：表示是最后的修改记录；false：表示不是最后的修改记录。

size_t bufferLength{0}

历史变更记录数组中的元素数量。

CloudDisk_ChangeData
 changeDatas[]

历史变更记录数组。

---
*2026-04-22T15:55:02.487Z*