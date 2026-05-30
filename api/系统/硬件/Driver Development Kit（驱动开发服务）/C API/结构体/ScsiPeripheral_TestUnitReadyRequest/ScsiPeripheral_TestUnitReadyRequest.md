# ScsiPeripheral_TestUnitReadyRequest

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `iperipheralddk-scsiperipheral-testunitreadyrequest`

**DocID**: `7f5e66e1357843d6822c7d0a58f870d1`

**NodeID**: `00020177579634168505819841e2c2ed`

---

ScsiPeripheral_TestUnitReadyRequest

typedef struct ScsiPeripheral_TestUnitReadyRequest {...} ScsiPeripheral_TestUnitReadyRequest

概述

命令（test unit ready）的请求结构体。

起始版本：
 18

相关模块：

SCSIPeripheralDDK

所在头文件：

scsi_peripheral_types.h

汇总

[h2]成员变量

名称

描述

uint8_t control

Control字段，用于指定一些控制信息。

uint32_t timeout

超时时间(单位: 毫秒)。

---
*2026-04-22T15:53:59.483Z*