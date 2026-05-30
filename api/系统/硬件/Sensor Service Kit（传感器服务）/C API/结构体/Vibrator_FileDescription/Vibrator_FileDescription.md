# Vibrator_FileDescription

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vibrator-vibrator-filedescription`

**DocID**: `9b46c69b3abb45808aa25608ddd5a748`

**NodeID**: `00020177579634168495667cacffdbad`

---

Vibrator_FileDescription

typedef struct Vibrator_FileDescription { ... } Vibrator_FileDescription

概述

振动文件描述。

起始版本：
 11

相关模块：

Vibrator

所在头文件：

vibrator_type.h

汇总

[h2]成员变量

名称

描述

int32_t fd

自定义振动序列的文件句柄。

int64_t offset

自定义振动序列的偏移地址。

int64_t length

自定义振动序列的总长度。

---
*2026-04-22T15:53:59.533Z*