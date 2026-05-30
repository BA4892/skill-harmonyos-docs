# ScsiPeripheral_IORequest

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-scsiperipheralddk-scsiperipheral-iorequest`

**DocID**: `4540f39034f1470f812cd171ec24491e`

**NodeID**: `000201775796341685035956bacd265a`

---

ScsiPeripheral_IORequest

typedef struct ScsiPeripheral_IORequest {...} ScsiPeripheral_IORequest

概述

读/写操作的请求参数。

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

逻辑块起始地址。

uint16_t transferLength

需要操作的连续逻辑块的数量。

uint8_t control

Control字段，用于指定一些控制信息。

uint8_t byte1

CDB的第一个字节。

uint8_t byte6

CDB的第六个字节。

ScsiPeripheral_DeviceMemMap* data

数据传输的缓冲区。

uint32_t timeout

超时时间（单位：毫秒）。

---
*2026-04-22T15:53:59.481Z*