# CloudDisk_PathInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-clouddisk-clouddisk-pathinfo`

**DocID**: `6f071fb7c2094c48b19413ec4d76bd09`

**NodeID**: `000201775796216197921a20e35eefd8`

---

CloudDisk_PathInfo

typedef struct CloudDisk_PathInfo {...} CloudDisk_PathInfo
typedef struct CloudDisk_PathInfo CloudDisk_FieldInfo
typedef struct CloudDisk_PathInfo CloudDisk_SyncFolderPath

概述

文件路径信息。

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

char *value

文件的路径，以'\0'字符结尾。

size_t length

文件路径的长度，不包括结尾的'\0'字符。

---
*2026-04-22T15:55:02.490Z*