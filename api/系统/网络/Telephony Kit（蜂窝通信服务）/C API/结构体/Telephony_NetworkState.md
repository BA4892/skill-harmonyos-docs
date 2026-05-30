# Telephony_NetworkState

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-telephony-telephony-networkstate`

**DocID**: `6cffa89fa6f14d098e2d165e75dc3b60`

**NodeID**: `0002017757963416847483534baf6130`

---

Telephony_NetworkState

typedef struct {...} Telephony_NetworkState

概述

网络状态信息。

起始版本：
 13

相关模块：

Telephony

所在头文件：

telephony_radio_type.h

汇总

[h2]成员变量

名称

描述

char longOperatorName_[TELEPHONY_MAX_OPERATOR_LEN]

注册网络的长运营商名称。

char shortOperatorName_[TELEPHONY_MAX_OPERATOR_LEN]

注册网络的短运营商名称。

char plmnNumeric_[TELEPHONY_MAX_PLMN_NUMERIC_LEN]

注册网络的PLMN码。

bool isRoaming_

是否处于漫游状态。

Telephony_RegState regState_

设备的网络注册状态。

Telephony_RadioTechnology cfgTech_

设备的无线接入技术。

Telephony_NsaState nsaState_

设备的NSA网络注册状态。

bool isCaActive_

CA的状态。

bool isEmergency_

此设备是否只允许拨打紧急呼叫。

---
*2026-04-22T15:55:03.048Z*