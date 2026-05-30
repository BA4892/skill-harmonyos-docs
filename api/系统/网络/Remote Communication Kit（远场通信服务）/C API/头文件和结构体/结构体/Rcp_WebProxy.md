# Rcp_WebProxy

> **分区**: API参考  |  **Slug**: `_rcp___web_proxy`  |  **DocID**: `85e91caa988e4f0e9b1fcf7e2e8475da`

---

# Rcp_WebProxy

  #### 概述

自定义代理配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char * [url](#url) 代理服务器的URL。如果您没有明确设置端口，则端口将为1080。  [Rcp_ProxyTunnelMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_proxytunnelmode)[createTunnel](#createtunnel) 用于控制何时创建代理隧道。  [Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)[exclusions](#exclusions) 如果[Rcp_Request.url](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request#url)匹配[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)规则，则[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)将不使用代理。  [Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)[securityConfiguration](#securityconfiguration) 代理中的[Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)。       #### 结构体成员变量说明

  #### [h2]createTunnel

Rcp_ProxyTunnelMode Rcp_WebProxy::createTunnel **描述**

 用于控制何时创建代理隧道。

   #### [h2]exclusions

Rcp_Exclusions Rcp_WebProxy::exclusions **描述**

 如果[Rcp_Request.url](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request#url)匹配[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)规则，则[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)将不使用代理。

   #### [h2]securityConfiguration

Rcp_SecurityConfiguration Rcp_WebProxy::securityConfiguration **描述**

 代理中的[Rcp_SecurityConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___security_configuration)。

   #### [h2]url

const char* Rcp_WebProxy::url **描述**

 代理服务器的URL。如果您没有明确设置端口，则端口将为1080。

---
*Updated: 2026-04-22 06:49:05*
