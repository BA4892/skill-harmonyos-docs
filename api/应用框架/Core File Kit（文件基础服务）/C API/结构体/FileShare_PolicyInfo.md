# FileShare_PolicyInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-fileshare-fileshare-policyinfo`

**DocID**: `e5a1942ca10243788f72310947435532`

**NodeID**: `00020177579621619659493127e0b179`

---

FileShare_PolicyInfo

typedef struct FileShare_PolicyInfo {...} FileShare_PolicyInfo

概述

需要授予或使能权限URI的策略信息。

起始版本：
 12

相关模块：

fileShare

所在头文件：

oh_file_share.h

汇总

[h2]成员变量

名称

描述

char *uri

需要授予或使能权限的URI。

unsigned int length

URI的字节长度。

unsigned int operationMode

授予或使能权限的URI访问模式。

 示例：FileShare_OperationMode.READ_MODE 、 FileShare_OperationMode.WRITE_MODE 

 或者 FileShare_OperationMode.READ_MODE|FileShare_OperationMode.WRITE_MODE。

---
*2026-04-22T15:55:02.486Z*