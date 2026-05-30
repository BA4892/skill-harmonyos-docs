# NetConn_NetCapabilities

> **分区**: API参考  |  **Slug**: `capi-netconnection-netconn-netcapabilities`  |  **DocID**: `3a49cead600b431bafbe7d2f54a7c01d`

---

# NetConn_NetCapabilities

 ```
typedef struct NetConn_NetCapabilities {...} NetConn_NetCapabilities
```
  #### 概述

网络能力集。

 **起始版本：** 11

 **相关模块：** [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

 **所在头文件：** [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   uint32_t linkUpBandwidthKbps 上行带宽。  uint32_t linkDownBandwidthKbps 下行带宽。  [NetConn_NetCap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#netconn_netcap) netCaps[[NETCONN_MAX_CAP_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 网络能力列表。  int32_t netCapsSize 网络能力列表的实际size。  [NetConn_NetBearerType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#netconn_netbearertype) bearerTypes[[NETCONN_MAX_BEARER_TYPE_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 承载类型列表  int32_t bearerTypesSize 承载类型列表的实际size

---
*Updated: 2026-04-22 06:48:18*
