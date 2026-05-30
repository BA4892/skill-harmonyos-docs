# telephony_data.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-telephony-data-h`

**DocID**: `5f989153ff4648eb96e40bc23e4f91ff`

**NodeID**: `0002017757963416846902ed85158fff`

---

telephony_data.h

概述

为电话蜂窝数据定义C接口。

引用文件：
 <telephony/cellular_data/telephony_data.h>

库：
 libtelephony_data.so

系统能力：
 SystemCapability.Telephony.CellularData

起始版本：
 13

相关模块：

Telephony

汇总

[h2]函数

名称

描述

int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)

获取默认移动数据的SIM卡接口。

函数说明

[h2]OH_Telephony_GetDefaultCellularDataSlotId()

int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)

描述

获取默认移动数据的SIM卡接口。

系统能力：
 SystemCapability.Telephony.CellularData

起始版本：
 13

返回：

类型

说明

int32_t

默认移动数据的SIM卡接口 (0 表示卡槽1, 1 表示卡槽2)。

---
*2026-04-22T15:55:03.046Z*