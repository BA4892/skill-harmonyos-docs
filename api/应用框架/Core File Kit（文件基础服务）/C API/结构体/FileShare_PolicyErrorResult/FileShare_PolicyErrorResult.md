# FileShare_PolicyErrorResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-fileshare-fileshare-policyerrorresult`

**DocID**: `28931cfbb6334a01b6397b16a7e60c1f`

**NodeID**: `0002017757962161965117607779cd5e`

---

FileShare_PolicyErrorResult

typedef struct FileShare_PolicyErrorResult {...} FileShare_PolicyErrorResult

概述

授予或使能权限失败的URI策略结果。

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

授予或使能策略失败的URI。

FileShare_PolicyErrorCode
 code

授予或使能策略失败的URI对应的错误码。

char *message

授予或使能策略失败的URI对应的原因。

---
*2026-04-22T15:53:58.822Z*