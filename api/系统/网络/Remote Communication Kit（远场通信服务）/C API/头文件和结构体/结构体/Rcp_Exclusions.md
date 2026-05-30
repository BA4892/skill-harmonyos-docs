# Rcp_Exclusions

> **分区**: API参考  |  **Slug**: `_rcp___exclusions`  |  **DocID**: `58a51170a49b4017a1ef4f86538ec66e`

---

# Rcp_Exclusions

  #### 概述

代理配置中用于过滤不使用代理的urls。

 如果[Rcp_Request.url](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request#url)匹配[Rcp_Exclusions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___exclusions)规则，则[Rcp_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request)不会使用代理。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_ExclusionsValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_exclusionsvaluetype)[type](#type) 表示union中使用的数据类型。  union { 

  [Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls) *  [urls](#urls) 

  [Rcp_ExclusionFunction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_exclusionfunction)   [exclusionFunction](#exclusionfunction) 

  }

  Urls。链式存储url。

 回调函数。通过回调函数过滤url。

        #### 结构体成员变量说明

  #### [h2]exclusionFunction

Rcp_ExclusionFunction Rcp_Exclusions::exclusionFunction **描述**

 通过回调过滤。

   #### [h2]type

Rcp_ExclusionsValueType Rcp_Exclusions::type **描述**

 表示union中使用的数据类型。

   #### [h2]urls

Rcp_Urls* Rcp_Exclusions::urls **描述**

 Urls。

---
*Updated: 2026-04-22 06:49:03*
