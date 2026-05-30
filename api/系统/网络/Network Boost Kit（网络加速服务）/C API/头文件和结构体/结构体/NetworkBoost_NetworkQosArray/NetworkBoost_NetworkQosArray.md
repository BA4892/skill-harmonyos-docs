# NetworkBoost_NetworkQosArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `network-boost-c-struct-network_qos_array`

**DocID**: `4e5ecb4bc04b42f99d9271a9648e93ea`

**NodeID**: `0002017757963416851630740c437f5e`

---

NetworkBoost_NetworkQosArray

概述

网络质量变化的详细信息。

起始版本：
 5.1.0(18)

相关模块：

NetworkBoost

汇总

[h2]成员变量

名称

描述

uint32_t 
pathNum

网络质量信息中的路径数量，取值范围 [1, 4]。

NetworkBoost_NetworkQos

networkQos
 [
NETBOOST_MAX_PATH_NUM
]

多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。

结构体成员变量说明

[h2]networkQos

NetworkBoost_NetworkQos
 NetworkBoost_NetworkQosArray::networkQos[
NETBOOST_MAX_PATH_NUM
]

描述

多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。

[h2]pathNum

uint32_t NetworkBoost_NetworkQosArray::pathNum

描述

网络质量信息中的路径数量，取值范围 [1, 4]。

---
*2026-04-22T15:53:59.232Z*