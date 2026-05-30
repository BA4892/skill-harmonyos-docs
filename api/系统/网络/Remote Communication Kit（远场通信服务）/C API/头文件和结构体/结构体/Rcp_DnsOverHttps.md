# Rcp_DnsOverHttps

> **分区**: API参考  |  **Slug**: `_rcp___dns_over_https`  |  **DocID**: `359e24000f2b4b209863195fdc1c34d0`

---

# Rcp_DnsOverHttps

  #### 概述

HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char * [url](#url) DOH服务器的URL。  bool [skipCertificatesValidation](#skipcertificatesvalidation) 判断是否跳过证书验证。默认值为false。       #### 结构体成员变量说明

  #### [h2]skipCertificatesValidation

bool Rcp_DnsOverHttps::skipCertificatesValidation **描述**

 判断是否跳过证书验证。默认值为false。

   #### [h2]url

const char* Rcp_DnsOverHttps::url **描述**

 DOH服务器的URL。

---
*Updated: 2026-04-22 06:49:02*
