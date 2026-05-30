# NetConn_ConnectionProperties

> **分区**: API参考  |  **Slug**: `capi-netconnection-netconn-connectionproperties`  |  **DocID**: `dfe7d963767748c298ffcd7c1202e007`

---

# NetConn_ConnectionProperties

 ```
typedef struct NetConn_ConnectionProperties {...} NetConn_ConnectionProperties
```
  #### 概述

网络连接信息。

 **起始版本：** 11

 **相关模块：** [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

 **所在头文件：** [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char ifaceName[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 网络接口的名称。  char domain[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 网络连接的域名信息。  char tcpBufferSizes[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) TCP缓冲区大小。  uint16_t mtu MTU。  [NetConn_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netaddr) netAddrList[[NETCONN_MAX_ADDR_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 地址列表。  int32_t netAddrListSize 地址列表的实际size。  [NetConn_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netaddr) dnsList[[NETCONN_MAX_ADDR_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) DNS列表。  int32_t dnsListSize DNS列表的实际size。  [NetConn_Route](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-route) routeList[[NETCONN_MAX_ROUTE_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 路由列表。  int32_t routeListSize 路由列表的实际大小。  [NetConn_HttpProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-httpproxy) httpProxy HTTP代理信息。

---
*Updated: 2026-04-22 06:48:55*
