# Rcp_TransferConfiguration

> **分区**: API参考  |  **Slug**: `_rcp___transfer_configuration`  |  **DocID**: `872efcf9638f4a80a605e24497285fb7`

---

# Rcp_TransferConfiguration

  #### 概述

传输配置。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   bool [autoRedirect](#autoredirect) 是否自动遵循HTTP重定向响应。默认为True。  [Rcp_Timeout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___timeout)[timeout](#timeout) 超时配置。如果未设置此选项，将应用默认超时。  bool [assumesHTTP3Capable](#assumeshttp3capable) 是否假定目标服务器支持HTTP/3。默认值为false。  [Rcp_PathPreference](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_pathpreference)[pathPreference](#pathpreference) 请求路径首选项。       #### 结构体成员变量说明

  #### [h2]assumesHTTP3Capable

bool Rcp_TransferConfiguration::assumesHTTP3Capable **描述**

 是否假定目标服务器支持HTTP/3。默认值为false。

   #### [h2]autoRedirect

bool Rcp_TransferConfiguration::autoRedirect **描述**

 是否自动遵循HTTP重定向响应。默认为True。

   #### [h2]pathPreference

Rcp_PathPreference Rcp_TransferConfiguration::pathPreference **描述**

 请求路径首选项。

   #### [h2]timeout

Rcp_Timeout Rcp_TransferConfiguration::timeout **描述**

 超时配置。如果未设置此选项，将应用默认超时。如果已配置，则使用配置的超时时间。

---
*Updated: 2026-04-22 06:49:05*
