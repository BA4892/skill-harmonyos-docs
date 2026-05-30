# Http_ClientCert

> **分区**: API参考  |  **Slug**: `capi-netstack-http-clientcert`  |  **DocID**: `4dd5997803464bb5a87433287da3ad9b`

---

# Http_ClientCert

 ```
typedef struct Http_ClientCert {...} Http_ClientCert
```
  #### 概述

发送到服务端的客户端证书配置，服务端将通过客户端证书校验客户端身份。

 **起始版本：** 20

 **相关模块：** [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

 **所在头文件：** [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char *certPath 证书路径。  [Http_CertType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_certtype) type 证书类型，默认是PEM，参考[Http_CertType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_certtype)。  char *keyPath 证书密钥的路径。  char *keyPassword 证书密钥的密码。

---
*Updated: 2026-04-22 06:49:04*
