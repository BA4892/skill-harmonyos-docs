# Rcp_StaticDnsRule

> **分区**: API参考  |  **Slug**: `_rcp___static_dns_rule`  |  **DocID**: `99082b9c14be484bb63b33f4b27b23c3`

---

# Rcp_StaticDnsRule

  #### 概述

静态DNS规则。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item)[staticDnsRule](#staticdnsrule) 单个静态DNS规则。  struct [Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule) * [next](#next) 链式存储。指向下一个[Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule)的指针。       #### 结构体成员变量说明

  #### [h2]next

struct Rcp_StaticDnsRule* Rcp_StaticDnsRule::next **描述**

 链式存储。指向下一个[Rcp_StaticDnsRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule)的指针。

   #### [h2]staticDnsRule

Rcp_StaticDnsRuleItem Rcp_StaticDnsRule::staticDnsRule **描述**

 单个静态DNS规则。

---
*Updated: 2026-04-22 06:49:05*
