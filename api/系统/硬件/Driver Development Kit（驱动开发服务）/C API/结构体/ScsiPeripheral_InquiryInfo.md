# ScsiPeripheral_InquiryInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-scsiperipheralddk-scsiperipheral-inquiryinfo`

**DocID**: `9c811337671d4faa9c044b17eaf11706`

**NodeID**: `000201775796341685069db146209686`

---

ScsiPeripheral_InquiryInfo

typedef struct ScsiPeripheral_InquiryInfo {...} ScsiPeripheral_InquiryInfo

概述

SCSI inquiry 数据。

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

uint8_t deviceType

设备类型。

char idVendor[
SCSIPERIPHERAL_VENDOR_ID_LEN
 + 1]

制造商 id。

char idProduct[
SCSIPERIPHERAL_PRODUCT_ID_LEN
 + 1]

产品 id。

char revProduct[
SCSIPERIPHERAL_PRODUCT_REV_LEN
 + 1]

产品版本。

ScsiPeripheral_DeviceMemMap* data

所有的查询数据。

---
*2026-04-22T15:55:03.269Z*