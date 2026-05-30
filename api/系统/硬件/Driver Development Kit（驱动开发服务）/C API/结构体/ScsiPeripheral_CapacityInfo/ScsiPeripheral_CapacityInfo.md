# ScsiPeripheral_CapacityInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-scsiperipheralddk-scsiperipheral-capacityinfo`

**DocID**: `999ea47543894f2da144bb09b68fd239`

**NodeID**: `0002017757963416850824e822f0995e`

---

ScsiPeripheral_CapacityInfo

typedef struct ScsiPeripheral_CapacityInfo {...} ScsiPeripheral_CapacityInfo

概述

SCSI read capacity 数据。

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

返回的逻辑单元地址。

uint32_t lbLength

单个逻辑单元长度，单位：字节。

---
*2026-04-22T15:53:59.485Z*