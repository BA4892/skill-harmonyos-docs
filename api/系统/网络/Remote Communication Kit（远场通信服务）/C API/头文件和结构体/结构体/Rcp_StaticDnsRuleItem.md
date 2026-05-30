# Rcp_StaticDnsRuleItem

> **分区**: API参考  |  **Slug**: `_rcp___static_dns_rule_item`  |  **DocID**: `e536d08195094da5a6e2ae49d7425d33`

---

# Rcp_StaticDnsRuleItem

  #### 概述

描述单个静态DNS规则。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char [host](#host) [[RCP_HOST_MAX_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_host_max_len)] 主机名。  uint16_t [port](#port) 端口号。范围： [0, 65535]。  [Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address) * [ipAddresses](#ipaddresses) 表示[Rcp_StaticDnsRuleItem.host](#host)对应的IP地址。       #### 结构体成员变量说明

  #### [h2]host

char Rcp_StaticDnsRuleItem::host[RCP_HOST_MAX_LEN] **描述**

 主机名。

   #### [h2]ipAddresses

Rcp_IpAddress* Rcp_StaticDnsRuleItem::ipAddresses **描述**

 表示[Rcp_StaticDnsRuleItem.host](#host)对应的IP地址。

   #### [h2]port

uint16_t Rcp_StaticDnsRuleItem::port **描述**

 端口号。范围： [0, 65535]。

---
*Updated: 2026-04-22 06:49:05*
