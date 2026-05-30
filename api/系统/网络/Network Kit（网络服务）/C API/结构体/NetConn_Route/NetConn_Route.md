# NetConn_Route

> **分区**: API参考  |  **Slug**: `capi-netconnection-netconn-route`  |  **DocID**: `3f620e50a5794bffa44df6d5aabc136e`

---

# NetConn_Route

 ```
typedef struct NetConn_Route {...} NetConn_Route
```
  #### 概述

路由配置信息。

 **起始版本：** 11

 **相关模块：** [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

 **所在头文件：** [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char iface[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 网络接口  [NetConn_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netaddr) destination 目标地址  [NetConn_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-netaddr) gateway 网关地址  int32_t hasGateway 是否存在网关  int32_t isDefaultRoute 是否是默认路由

---
*Updated: 2026-04-22 06:48:47*
