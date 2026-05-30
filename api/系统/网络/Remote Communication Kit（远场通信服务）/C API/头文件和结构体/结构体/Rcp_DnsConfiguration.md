# Rcp_DnsConfiguration

> **分区**: API参考  |  **Slug**: `_rcp___dns_configuration`  |  **DocID**: `4ef6857475e947d180e6972c5f4085c1`

---

# Rcp_DnsConfiguration

  #### 概述

DNS解析配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_DnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_rule) * [dnsRules](#dnsrules) DNS规则配置。  [Rcp_DnsOverHttps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_over_https)[dnsOverHttps](#dnsoverhttps) DOH配置。       #### 结构体成员变量说明

  #### [h2]dnsOverHttps

Rcp_DnsOverHttps Rcp_DnsConfiguration::dnsOverHttps **描述**

 DOH配置。

   #### [h2]dnsRules

Rcp_DnsRule* Rcp_DnsConfiguration::dnsRules **描述**

 DNS规则配置。

 [Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers): 表示优先使用指定的dns服务器解析主机名。

 [Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule): 表示如果主机名匹配，则优先使用指定的地址。

 [Rcp_DynamicDnsRuleFunction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_dynamicdnsrulefunction): 表示优先使用函数中返回的地址。

---
*Updated: 2026-04-22 06:49:02*
