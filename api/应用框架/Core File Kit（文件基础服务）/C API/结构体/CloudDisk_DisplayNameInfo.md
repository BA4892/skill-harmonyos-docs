# CloudDisk_DisplayNameInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-clouddisk-clouddisk-displaynameinfo`

**DocID**: `dad1c186a47945b4b99d1d981810365b`

**NodeID**: `000201775796216196786ac2f322f533`

---

CloudDisk_DisplayNameInfo

typedef struct CloudDisk_DisplayNameInfo {...} CloudDisk_DisplayNameInfo

概述

定义同步根路径的显示名称信息。

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

uint32_t displayNameResId

应用同步根路径显示名称对应的静态资源ID。

char *customAlias

自定义的别名，不能包含字符：\/*?<>|:"，以及不能以"."、".."和纯空格作为完整名称。

size_t customAliasLength

自定义别名的长度，范围：[0, 255]。

---
*2026-04-22T15:55:02.488Z*