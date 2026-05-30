# FIDO2_AuthenticatorTransportArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_i_d_o2___authenticator_transport_array`

**DocID**: `1cea8ea029804137a10ad60d18dcaac5`

**NodeID**: `00020177579634168516629948f4cb39`

---

FIDO2_AuthenticatorTransportArray

概述

认证器传输方式数组。

起始版本：
 6.0.0(20)

相关模块：

FIDO2

汇总

[h2]成员变量

名称

描述

uint32_t 
transportNum

传输方式数量。

FIDO2_AuthenticatorTransport
 * 
transports

定义身份认证器访问类型（USB、NFC、蓝牙）。

结构体成员变量说明

[h2]transportNum

uint32_t FIDO2_AuthenticatorTransportArray::transportNum

描述

传输方式数量。

[h2]transports

FIDO2_AuthenticatorTransport
* FIDO2_AuthenticatorTransportArray::transports

描述

定义身份认证器访问类型（USB、NFC、蓝牙）。

---
*2026-04-22T15:55:02.728Z*