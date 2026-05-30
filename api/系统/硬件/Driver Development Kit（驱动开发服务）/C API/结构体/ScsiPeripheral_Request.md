# ScsiPeripheral_Request

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-scsiperipheralddk-scsiperipheral-request`

**DocID**: `4857d662029e483c98d0feeacfac9ff6`

**NodeID**: `0002017757963416850442fdf64fea06`

---

ScsiPeripheral_Request

typedef struct ScsiPeripheral_Request {...} ScsiPeripheral_Request

概述

请求参数结构体。

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

uint8_t commandDescriptorBlock[SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN]

命令描述符块。

uint8_t cdbLength

命令描述符块的长度。

int8_t dataTransferDirection

数据传输方向：-1为无数据传输的命令，-2为从主机到设备的数据传输(写)，-3为从设备到主机的数据传输(读)，-4为双向数据传输。

ScsiPeripheral_DeviceMemMap* data

数据传输的缓冲区。

uint32_t timeout

超时时间（单位：毫秒）。

---
*2026-04-22T15:55:03.266Z*