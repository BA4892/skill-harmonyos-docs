# Screen Time Guard Kit简介

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `screentimeguard-introduction`  |  **DocID**: `4987d659d662490db866bb25187d8027`  |  **NodeID**: `000201775795649085632b7014bc8847`

---

# Screen Time Guard Kit简介

 在应用安全隐私保护前提下，为开发者提供屏幕使用时间管控、应用使用限制等开放能力，满足不同用户对时间管理多样化诉求，更好的服务终端用户。

  #### 能力介绍

[用户授权管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-interface-call-auth-overview)：用来管理用户的授权信息，分别为请求用户授权访问，取消授权访问，授权情况查询。

 [应用选择页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-app-picker-overview)：提供接口拉起具有不同功能的半模态页面，用户可在页面中勾选想进行管理的应用、快速跳转到其它应用。

 [守护策略管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-guard-strategy-manage-overview)：提供接口实现时间策略的添加、修改、查询、删除、启动和停止操作。

 [应用访问限制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-apps-restriction-overview)：对选定范围内的应用进行立即生效的允许/禁止管理。

   #### 基本概念

token：被管控应用的唯一标识。该token不包含应用自身信息如包名、应用名等，保障用户数据隐私安全。

 guard strategy：守护策略，分为起止时间策略、总时长策略和共享时长策略三种类型。

 起止时间策略：通过设定策略生效的开始时间和结束时间，可设定部分应用在这段时间内禁用或者可用。

 总时长策略：通过设定从当前开始的一个时间长度，可限定全部或部分应用在该时间长度内禁用或者可用。

 共享时长策略：通过设定一个时间长度，可限定全部或部分应用总共能使用该时间长度。

 管控范围：所有应用都可被管控，除了系统内置允许清单应用（如时钟、电话等）、管控发起应用本身、已授权的管控应用和健康使用设备。

   #### 约束与限制

支持的设备：Screen Time Guard Kit目前仅支持Phone、Tablet，支持模拟器设备。

  支持的国家/地区：目前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。

  仅支持主空间调用，不支持在隐私空间及其它子空间中调用。

  不支持调用方的分身应用接入。

  
   #### 模拟器支持情况

本Kit支持模拟器。

 模拟器与真机存在通用差异，详情请参见“[模拟器与真机的差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification)”。

---
*Updated: 2026-04-20 01:50:16*
