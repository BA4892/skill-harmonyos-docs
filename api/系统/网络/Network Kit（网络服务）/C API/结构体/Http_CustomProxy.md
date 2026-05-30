# Http_CustomProxy

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-netstack-http-customproxy`

**DocID**: `91f849c9ed7b41dcbef5731f1b811676`

**NodeID**: `0002017757963416851028360f2d4801`

---

Http_CustomProxy

typedef struct Http_CustomProxy {...} Http_CustomProxy

概述

用户自定义代理配置。

起始版本：
 20

相关模块：

netstack

所在头文件：

net_http_type.h

汇总

[h2]成员变量

名称

描述

const char *host

代理服务器主机名， 如果没有显式设置端口，端口将默认为1080。

int32_t port

主机端口。取值范围[0, 65535]。

const char *exclusionLists

不使用代理的主机名列表，主机名支持域名、IP地址以及通配符形式。

---
*2026-04-22T15:55:02.929Z*