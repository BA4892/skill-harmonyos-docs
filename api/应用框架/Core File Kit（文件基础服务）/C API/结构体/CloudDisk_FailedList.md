# CloudDisk_FailedList

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-clouddisk-clouddisk-failedlist`

**DocID**: `4015ead4ce614aaab24e6cb6a5c1bf2e`

**NodeID**: `0002017757962161978515ba0bedecc8`

---

CloudDisk_FailedList

typedef struct CloudDisk_FailedList {...} CloudDisk_FailedList

概述

同步操作中失败的文件列表信息。该结构包含文件路径信息以及失败的具体错误原因。

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

CloudDisk_PathInfo
 pathInfo

失败文件的绝对路径信息。

CloudDisk_ErrorReason
 errorReason

文件同步失败的原因。

---
*2026-04-22T15:55:02.489Z*