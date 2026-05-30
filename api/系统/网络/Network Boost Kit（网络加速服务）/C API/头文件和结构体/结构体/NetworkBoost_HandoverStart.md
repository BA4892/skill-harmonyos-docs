# NetworkBoost_HandoverStart

> **分区**: API参考  |  **Slug**: `network-boost-c-struct-handover_start`  |  **DocID**: `d08587c40abc43e1944fbb19c0338ca9`

---

# NetworkBoost_HandoverStart

  #### 概述

连接迁移开始信息。

 **起始版本：** 5.1.0(18)

 **相关模块：** [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

 **所在头文件：** [network_boost_handover.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover)

   #### 汇总

  #### [h2]成员变量

 名称 描述   uint32_t [expires](#expires) 连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。  [NetworkBoost_DataSpeedAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-data_speed_action) [dataSpeedAction](#dataspeedaction) 老链路的发包建议。       #### 结构体成员变量说明

  #### [h2]dataSpeedAction

NetworkBoost_DataSpeedAction NetworkBoost_HandoverStart::dataSpeedAction **描述**

 老链路的发包建议。

   #### [h2]expires

uint32_t NetworkBoost_HandoverStart::expires **描述**

 连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。

---
*Updated: 2026-04-22 06:48:47*
