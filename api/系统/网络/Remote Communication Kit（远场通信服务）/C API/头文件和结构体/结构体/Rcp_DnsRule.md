# Rcp_DnsRule

> **分区**: API参考  |  **Slug**: `_rcp___dns_rule`  |  **DocID**: `538c5efc161248ada323fd00825b5429`

---

# Rcp_DnsRule

  #### 概述

DNS规则配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_DnsRuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_dnsruletype)[type](#type) 表示union中使用的数据类型。  union { 

  [Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers) *   [dnsServers](#dnsservers) 

  [Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule) *   [staticDnsRule](#staticdnsrule) 

  [Rcp_DynamicDnsRuleFunction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_dynamicdnsrulefunction)   [dynamicDnsRule](#dynamicdnsrule) 

  }

  dnsServers：DNS服务器。

 staticDnsRule：静态DNS规则。

 dynamicDnsRule：动态DNS规则。

        #### 结构体成员变量说明

  #### [h2]dnsServers

Rcp_DnsServers* Rcp_DnsRule::dnsServers **描述**

 DNS服务器。

   #### [h2]dynamicDnsRule

Rcp_DynamicDnsRuleFunction Rcp_DnsRule::dynamicDnsRule **描述**

 动态DNS规则。

   #### [h2]staticDnsRule

Rcp_StaticDnsRule* Rcp_DnsRule::staticDnsRule **描述**

 静态DNS规则。

   #### [h2]type

Rcp_DnsRuleType Rcp_DnsRule::type **描述**

 表示union中使用的数据类型。

---
*Updated: 2026-04-22 06:49:02*
