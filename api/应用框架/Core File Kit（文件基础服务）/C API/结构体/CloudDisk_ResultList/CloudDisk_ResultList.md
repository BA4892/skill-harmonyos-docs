# CloudDisk_ResultList

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-clouddisk-clouddisk-resultlist`

**DocID**: `35d9ff7008684a0f967e636489cc50d4`

**NodeID**: `000201775796216197947d99712e7499`

---

CloudDisk_ResultList

typedef struct CloudDisk_ResultList {...} CloudDisk_ResultList

概述

表示一个文件同步操作的结果。该结构体包含文件的绝对路径、同步结果，以及同步状态或失败原因。

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

文件的绝对路径信息。

bool isSuccess{false}

表示操作是否成功。true：表示操作成功；false：表示操作失败。默认值为false。

CloudDisk_SyncState
 syncState

文件的同步状态。当isSuccess为true时才生效。

CloudDisk_ErrorReason
 errorReason

文件同步状态获取失败的原因。当isSuccess为false时才生效。

---
*2026-04-22T15:53:58.826Z*