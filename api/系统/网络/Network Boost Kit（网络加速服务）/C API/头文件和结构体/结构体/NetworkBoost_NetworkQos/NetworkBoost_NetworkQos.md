# NetworkBoost_NetworkQos

> **分区**: API参考  |  **Slug**: `network-boost-c-struct-network_qos`  |  **DocID**: `c12193cc173245748aa05da1a31341d3`

---

# NetworkBoost_NetworkQos

  #### 概述

网络质量回调信息。

 **起始版本：** 5.1.0(18)

 **相关模块：** [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

 **所在头文件：** [network_boost_quality.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-quality)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [NetworkBoost_PathType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_pathtype-1) [pathType](#pathtype) 相应的数据路径上的网络质量信息。  uint64_t [linkUpBandwidth](#linkupbandwidth) 上行带宽信息，单位为bps。  uint64_t [linkDownBandwidth](#linkdownbandwidth) 下行带宽信息，单位为bps。  uint64_t [linkUpRate](#linkuprate) 上行速率，单位为bps。  uint64_t [linkDownRate](#linkdownrate) 下行速率，单位为bps。  uint32_t [rttMs](#rttms) RTT时延，表示统计时间间隔内，pathType对应数据路径上，所有的TCP上下行数据包的平均往返时延。取值范围为0或任意正数，单位：毫秒（ms）。

 如果在统计时间间隔内没有收到某次TCP请求的回复，则该次的RTT时延不会被计入该统计时间间隔内。因此，在完全不可上网的场景下，由于无法收到TCP的回复，回调中的RTT时延值会比较小，与实际状态不一致。针对完全不可上网的场景，建议结合[on('netCapabilitiesChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#onnetcapabilitieschange)方法进行综合判断。

   uint32_t [linkUpBufferDelayMs](#linkupbufferdelayms) 上行发送空口缓冲时延，单位为ms，取值范围是任意正数。  uint32_t [linkUpBufferCongestionPercent](#linkupbuffercongestionpercent) 上行发送空口缓冲时延占总缓冲时间的比例，取值范围[0, 100]。       #### 结构体成员变量说明

  #### [h2]linkDownBandwidth

uint64_t NetworkBoost_NetworkQos::linkDownBandwidth **描述**

 下行带宽信息，单位为bps。

   #### [h2]linkDownRate

uint64_t NetworkBoost_NetworkQos::linkDownRate **描述**

 下行速率，单位为bps。

   #### [h2]linkUpBandwidth

uint64_t NetworkBoost_NetworkQos::linkUpBandwidth **描述**

 上行带宽信息，单位为bps。

   #### [h2]linkUpBufferCongestionPercent

uint32_t NetworkBoost_NetworkQos::linkUpBufferCongestionPercent **描述**

 上行发送空口缓冲时延占总缓冲时间的比例，取值范围[0, 100]。

   #### [h2]linkUpBufferDelayMs

uint32_t NetworkBoost_NetworkQos::linkUpBufferDelayMs **描述**

 上行发送空口缓冲时延（单位ms），取值范围是任意正数。

   #### [h2]linkUpRate

uint64_t NetworkBoost_NetworkQos::linkUpRate **描述**

 上行速率，单位为bps。

   #### [h2]pathType

NetworkBoost_PathType NetworkBoost_NetworkQos::pathType **描述**

 相应的数据路径上的网络质量信息。

   #### [h2]rttMs

uint32_t NetworkBoost_NetworkQos::rttMs **描述**

 RTT时延（单位ms），取值范围是任意正数。

---
*Updated: 2026-04-22 06:48:55*
