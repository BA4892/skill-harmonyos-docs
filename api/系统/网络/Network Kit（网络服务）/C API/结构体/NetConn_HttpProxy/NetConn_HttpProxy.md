# NetConn_HttpProxy

> **分区**: API参考  |  **Slug**: `capi-netconnection-netconn-httpproxy`  |  **DocID**: `4a90ee62d78e403c955eb9912abdf21d`

---

# NetConn_HttpProxy

 ```
typedef struct NetConn_HttpProxy {...} NetConn_HttpProxy
```
  #### 概述

代理配置信息。

 **起始版本：** 11

 **相关模块：** [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

 **所在头文件：** [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char host[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 主机名。  char exclusionList[[NETCONN_MAX_EXCLUSION_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义)[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) 代理服务器的排除列表。  int32_t exclusionListSize 排除列表的实际大小。  uint16_t port 端口号。

---
*Updated: 2026-04-22 06:48:50*
