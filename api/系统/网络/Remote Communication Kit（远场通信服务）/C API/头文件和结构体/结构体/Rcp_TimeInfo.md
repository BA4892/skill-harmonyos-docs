# Rcp_TimeInfo

> **分区**: API参考  |  **Slug**: `_rcp___time_info`  |  **DocID**: `e3a0444486724bd380dead117cdef5c6`

---

# Rcp_TimeInfo

  #### 概述

响应计时信息。

 它将在[Rcp_Response.timeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response#timeinfo)中被收集，[Rcp_TracingConfiguration.collectTimeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___tracing_configuration#collecttimeinfo)决定是否收集它。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   double [totalTime](#totaltime) HTTP传输（包括名称解析、TCP连接等）的总时间（毫秒）。  double [nameLookUpTime](#namelookuptime) 从请求开始到完成远程主机名解析所用的时间（以毫秒为单位）。  double [connectTime](#connecttime) 从请求开始到建立与远程主机（或代理）的连接的时间（以毫秒为单位）。  double [preTransferTime](#pretransfertime) 从请求开始到准备就绪进行数据传输所花费的时间（以毫秒为单位）。  double [fileTime](#filetime) 从远程文件的上次修改时间开始的时间（以毫秒为单位）。  double [startTransferTime](#starttransfertime) 从开始到接收到第一个字节所花费的时间（以毫秒为单位）。  double [redirectTime](#redirecttime) 所有重定向步骤（包括名称查找、连接等）所用的时间（毫秒）。  double [tlsHandshakeTime](#tlshandshaketime) 从请求开始到建立与远程主机（或代理）的TLS握手的时间（以毫秒为单位）。       #### 结构体成员变量说明

  #### [h2]connectTime

double Rcp_TimeInfo::connectTime **描述**

 从请求开始到建立与远程主机（或代理）的连接时间（以毫秒为单位）。

   #### [h2]fileTime

double Rcp_TimeInfo::fileTime **描述**

 从远程文件的上次修改时间开始的时间（以毫秒为单位）。

   #### [h2]nameLookUpTime

double Rcp_TimeInfo::nameLookUpTime **描述**

 从请求开始到完成远程主机名解析所用的时间（以毫秒为单位）。

   #### [h2]preTransferTime

double Rcp_TimeInfo::preTransferTime **描述**

 从请求开始到准备就绪进行数据传输所花费的时间（以毫秒为单位）。

   #### [h2]redirectTime

double Rcp_TimeInfo::redirectTime **描述**

 所有重定向步骤（包括名称查找、连接等）所用的时间（毫秒）。

   #### [h2]startTransferTime

double Rcp_TimeInfo::startTransferTime **描述**

 从开始到接收到第一个字节所花费的时间（以毫秒为单位）。

   #### [h2]tlsHandshakeTime

double Rcp_TimeInfo::tlsHandshakeTime **描述**

 从请求开始到建立与远程主机（或代理）的TLS握手的时间（以毫秒为单位）。

   #### [h2]totalTime

double Rcp_TimeInfo::totalTime **描述**

 HTTP传输（包括名称解析、TCP连接等）的总时间（毫秒）。

---
*Updated: 2026-04-22 06:49:05*
