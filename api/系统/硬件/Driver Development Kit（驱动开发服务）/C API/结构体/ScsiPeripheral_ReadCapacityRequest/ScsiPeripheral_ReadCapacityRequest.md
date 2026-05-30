# ScsiPeripheral_ReadCapacityRequest

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `siperipheralddk-scsiperipheral-readcapacityrequest`

**DocID**: `587725a4af4b4497968e6718b2042d21`

**NodeID**: `00020177579634168507487cd598c047`

---

ScsiPeripheral_ReadCapacityRequest

typedef struct ScsiPeripheral_ReadCapacityRequest {...} ScsiPeripheral_ReadCapacityRequest

概述

SCSI命令（read capacity）的请求结构体。

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

uint32_t lbAddress

逻辑单元地址。

uint8_t control

Control字段，用于指定一些控制信息。

uint8_t byte8

CDB的第八个字节。

uint32_t timeout

超时时间（单位: 毫秒）。

---
*2026-04-22T15:53:59.484Z*