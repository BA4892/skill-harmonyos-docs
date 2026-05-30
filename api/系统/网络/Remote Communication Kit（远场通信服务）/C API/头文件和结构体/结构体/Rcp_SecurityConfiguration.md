# Rcp_SecurityConfiguration

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_rcp___security_configuration`

**DocID**: `faca8f14611644e09d0ff6c149358c9b`

**NodeID**: `0002017757963416852218fc00733050`

---

Rcp_SecurityConfiguration

概述

请求的安全配置。

起始版本：
 5.0.0(12)

相关模块：

RemoteCommunication

汇总

[h2]成员变量

名称

描述

Rcp_RemoteValidationType

remoteValidationType

远端认证方法类型。

Rcp_CertificateAuthority

certificateAuthority

用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。

Rcp_ClientCertificate

certificate

发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。

Rcp_ServerAuthentication

serverAuthentication

服务器身份验证设置。默认情况下不进行身份验证。

结构体成员变量说明

[h2]certificate

Rcp_ClientCertificate
 Rcp_SecurityConfiguration::certificate

描述

发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。

[h2]certificateAuthority

Rcp_CertificateAuthority
 Rcp_SecurityConfiguration::certificateAuthority

描述

用于验证远程服务器标识的证书颁发机构（CA）。默认值为“system”，如果未设置此字段，将使用system CA验证远程服务器的标识。

[h2]remoteValidationType

Rcp_RemoteValidationType
 Rcp_SecurityConfiguration::remoteValidationType

描述

远端认证方法类型。

[h2]serverAuthentication

Rcp_ServerAuthentication
 Rcp_SecurityConfiguration::serverAuthentication

描述

服务器身份验证设置。默认情况下不进行身份验证。

---
*2026-04-22T15:55:03.008Z*