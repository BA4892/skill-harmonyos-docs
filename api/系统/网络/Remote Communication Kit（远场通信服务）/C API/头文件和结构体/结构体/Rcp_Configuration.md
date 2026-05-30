# Rcp_Configuration

> **分区**: API参考  |  **Slug**: `_rcp___configuration`  |  **DocID**: `667315c48e9d417aa18d18d31aea4756`

---

# Rcp_Configuration

  #### 概述

请求配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_TransferConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___transfer_configuration)[transferConfiguration](#transferconfiguration) 传输配置。  [Rcp_TracingConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration)[tracingConfiguration](#tracingconfiguration) 请求追踪配置。  [Rcp_ProxyConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___proxy_configuration)[proxyConfiguration](#proxyconfiguration) 代理配置。  [Rcp_DnsConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_configuration)[dnsConfiguration](#dnsconfiguration) DNS配置。  [Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)[securityConfiguration](#securityconfiguration) 安全配置。  void * [configurationPrivate](#configurationprivate) 可扩展字段。       #### 结构体成员变量说明

  #### [h2]configurationPrivate

void* Rcp_Configuration::configurationPrivate **描述**

 可扩展字段。

   #### [h2]dnsConfiguration

Rcp_DnsConfiguration Rcp_Configuration::dnsConfiguration **描述**

 DNS配置。

   #### [h2]proxyConfiguration

Rcp_ProxyConfiguration Rcp_Configuration::proxyConfiguration **描述**

 代理配置。

   #### [h2]securityConfiguration

Rcp_SecurityConfiguration Rcp_Configuration::securityConfiguration **描述**

 安全配置。

   #### [h2]tracingConfiguration

Rcp_TracingConfiguration Rcp_Configuration::tracingConfiguration **描述**

 请求追踪配置。

   #### [h2]transferConfiguration

Rcp_TransferConfiguration Rcp_Configuration::transferConfiguration **描述**

 传输配置。

---
*Updated: 2026-04-22 06:48:47*
