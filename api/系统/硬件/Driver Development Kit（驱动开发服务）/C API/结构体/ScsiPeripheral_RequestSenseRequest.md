# ScsiPeripheral_RequestSenseRequest

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `siperipheralddk-scsiperipheral-requestsenserequest`

**DocID**: `3c2358b893094e15bd871b135f76828f`

**NodeID**: `000201775796341685086a3e99d77de1`

---

ScsiPeripheral_RequestSenseRequest

typedef struct ScsiPeripheral_RequestSenseRequest {...} ScsiPeripheral_RequestSenseRequest

概述

SCSI命令（Request Sense）的请求结构体。

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

uint8_t allocationLength

Allocation length字段，指定了请求方向发起者（通常是主机）为响应数据准备的缓冲区大小。

uint8_t control

Control字段，用于指定一些控制信息。

uint8_t byte1

CDB的第一个字节。

uint32_t timeout

超时时间(单位: 毫秒)。

---
*2026-04-22T15:55:03.271Z*