# NetStack_CertificatePinning

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-netstack-certificatepinning`

**DocID**: `342e2d501f6e437aa3b1efc157375f1a`

**NodeID**: `0002017757963416850503e1c7468c17`

---

NetStack_CertificatePinning

typedef struct NetStack_CertificatePinning {...} NetStack_CertificatePinning

概述

定义证书锁定信息。

起始版本：
 12

相关模块：

netstack

所在头文件：

net_ssl_c_type.h

汇总

[h2]成员变量

名称

描述

NetStack_CertificatePinningKind
 kind

证书锁定类型。

NetStack_HashAlgorithm
 hashAlgorithm

哈希算法。

char *publicKeyHash

哈希值。

---
*2026-04-22T15:53:59.193Z*