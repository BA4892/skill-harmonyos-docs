# JSVM_CreateVMOptions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-createvmoptions`

**DocID**: `74317fec81bc4ff58f501774f2b9bc2f`

**NodeID**: `0002017757958595808245ce68600f41`

---

JSVM_CreateVMOptions

typedef struct {...} JSVM_CreateVMOptions

概述

创建JavaScript虚拟机的选项。

起始版本：
 11

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

size_t maxOldGenerationSize

老年代内存大小上限。

size_t maxYoungGenerationSize

年轻代内存大小上限。

size_t initialOldGenerationSize

老年代内存大小初始值。

size_t initialYoungGenerationSize

年轻代内存大小初始值。

const char* snapshotBlobData

启动快照数据。

size_t snapshotBlobSize

启动快照数据的大小。

bool isForSnapshotting

虚拟机是否用于创建快照，为true，则虚拟机用于创建快照，为false，则虚拟机不用于创建快照。

---
*2026-04-22T15:55:04.556Z*