# ScsiPeripheral_BasicSenseInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `pi-scsiperipheralddk-scsiperipheral-basicsenseinfo`

**DocID**: `7fbeccb026fc4824bc396457497974a7`

**NodeID**: `000201775796341685089ed7056b63e1`

---

ScsiPeripheral_BasicSenseInfo

typedef struct ScsiPeripheral_BasicSenseInfo {...} ScsiPeripheral_BasicSenseInfo

概述

sense data的基本信息。

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

uint8_t responseCode

响应码。

bool valid

信息有效标志位。

uint64_t information

Information字段。

uint64_t commandSpecific

Command-specific information字段。

bool sksv

Sense key specific字段的标志位。

uint32_t senseKeySpecific

Sense key specific字段。

---
*2026-04-22T15:55:03.272Z*