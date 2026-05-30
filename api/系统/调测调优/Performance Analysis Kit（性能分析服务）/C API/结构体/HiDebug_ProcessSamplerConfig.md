# HiDebug_ProcessSamplerConfig

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hidebug-hidebug-processsamplerconfig`

**DocID**: `cb221ce5b6734fdb95535f4b43bff1bd`

**NodeID**: `0002017757963416850755f9bcca0b88`

---

HiDebug_ProcessSamplerConfig

typedef struct HiDebug_ProcessSamplerConfig {...} HiDebug_ProcessSamplerConfig

概述

采样配置的结构定义

起始版本：
 22

相关模块：

HiDebug

所在头文件：

hidebug_type.h

汇总

[h2]成员变量

名称

描述

uint32_t* tids

待采样的线程号数组。最大支持10个线程的同时采样，数组长度超出时，将取前10个线程进行采样。

uint32_t size

tids指向的数组长度。

uint32_t frequency

采样频率，取值范围[1-200]，单位HZ。超出取值范围时取默认值100。

uint32_t duration

采样时长，取值范围[1000-10000]，单位ms。小于1000时，接口调用异常；大于10000时，取10000。

uint32_t reserved

保留字段。

---
*2026-04-22T15:55:03.372Z*