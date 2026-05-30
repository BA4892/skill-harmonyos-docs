# Rcp_ConnectionConfiguration

> **分区**: API参考  |  **Slug**: `_rcp___connection_configuration`  |  **DocID**: `ae8c9b1343b54e78978643cb1c77939d`

---

# Rcp_ConnectionConfiguration

  #### 概述

连接配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   long [maxConnectionsPerHost](#maxconnectionsperhost) 每台主机的最大连接数。

 取值范围：1~2147483647。

 默认值：6。

   long [maxTotalConnections](#maxtotalconnections) 最大总连接数。

 取值范围：1~2147483647。 

 默认值为 64。

   long [maxCacheConnections](#maxcacheconnections) 最大缓存连接数。

 取值范围：1~2147483647。 

 默认值为 64。

        #### 结构体成员变量说明

  #### [h2]maxCacheConnections

long Rcp_ConnectionConfiguration::maxCacheConnections **描述**

 最大缓存连接数。

   #### [h2]maxConnectionsPerHost

long Rcp_ConnectionConfiguration::maxConnectionsPerHost **描述**

 每台主机的最大连接数。

   #### [h2]maxTotalConnections

long Rcp_ConnectionConfiguration::maxTotalConnections **描述**

 最大总连接数。范围由long决定。

---
*Updated: 2026-04-22 06:48:50*
