# CPU高负载事件介绍

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `hiappevent-watcher-cpu-usage-high-event`  |  **DocID**: `1dc3b06fc0864968802cf91119f12374`  |  **NodeID**: `00020177579585271662546fb12cda0d`

---

# CPU高负载事件介绍

  #### 简介

CPU高负载事件用于检测应用在前台或后台时，应用相关的进程使用CPU资源超过系统的门限，导致手机发热等问题。

 CPU高负载事件包含以下3类：

 
前台CPU高负载异常：5分钟内应用平均负载大于30%。

  后台CPU高负载异常：5分钟内应用平均负载大于10%。

  线程CPU高负载异常：1分钟内单线程平均负载大于70%。

  
 如需了解如何使用HiAppEvent提供订阅CPU高负载事件，请参考以下文档。目前仅提供ArkTS接口。

 
- [订阅CPU高负载事件（ArkTS）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-cpu-usage-high-arkts)

   CPU高负载事件不支持在[应用分身场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-clone)或[元服务场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-create-faproject)使用HiAppEvent进行订阅，从API version 22开始支持在[输入法应用场景](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-application-guide)下使用HiAppEvent进行订阅。

     #### 检测原理

CPU高负载事件检测原理详见[功耗检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-detection)章节。

   #### 自定义参数

configEventPolicy接口说明

  
| 接口名  | 描述  
  | configEventPolicy(policy: EventPolicy): Promise<void>  事件的自定义配置参数策略。

 **说明**：从API version 22开始，支持该接口。

  
  

  configEventPolicy接口参数设置

  
| 参数名  | 类型  | 必填  | 说明  
  | policy  | [EventPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#eventpolicy22)  | 是  | 系统事件配置策略。  
  

  EventPolicy接口参数设置

  
| 名称  | 类型  | 只读  | 可选  | 说明  
  | CpuUsageHighPolicy  | [CpuUsageHighPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#cpuusagehighpolicy22)  | 否  | 是  | CPU高负载事件配置策略。  
  

    #### 事件字段说明

params字段说明

  
| 名称  | 类型  | 说明  
  | time  | number  | 事件生成时间，单位为ms。  
 | bundle_version  | string  | 应用版本。  
 | bundle_name  | string  | 应用名称。  
 | foreground  | boolean  | 应用是否处于前台状态，true：应用在前台，false：应用在后台。  
 | usage  | number  | 单核CPU平均使用率，取值范围：[0，100]，单位：%。  
 | begin_time  | number  | 采集开始时间，单位为ms。  
 | end_time  | number  | 采集结束时间，单位为ms。  
 | fault_type  | number  故障类型(从API version 20开始，支持该参数)：

 - 1：前台CPU高负载异常；

 - 2：后台CPU高负载异常；

 - 3：线程CPU高负载异常。

  
 | external_log  | string[]  | 记录故障日志文件路径，日志的文件名是：CPU_USAGE_HIGH_时间数字_数字.log，详细见[日志规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-detection#section1471964462613)。**为避免目录空间超限，导致新生成的日志文件写入失败，日志文件处理完后请及时删除。**  
 | log_over_limit  | boolean  | 生成的故障日志文件与已存在的日志文件总大小是否超过5M上限。true表示超过上限，日志写入失败；false表示未超过上限  
 | threads  | object[]  线程信息，具体信息取决于fault_type故障类型，不同类型记录的线程信息存在差异。

 - 前台CPU高负载异常：异常进程的TOP5线程信息；

 - 后台CPU高负载异常：异常进程的TOP5线程信息；

 - 线程CPU高负载异常：异常线程的信息。

  
  

    #### [h2]threads字段说明

 
| 名称  | 类型  | 说明  
  | name  | string  | 线程名。  
 | tid  | number  | 线程id。  
 | usage  | number  平均负载数值，取值范围：[0，100]，单位：%，具体信息取决于fault_type故障类型，不同类型记录的平均负载数值含义存在差异。

 - 前台CPU高负载异常：多核平均负载，如需换算单核负载需乘以核数；

 - 后台CPU高负载异常：多核平均负载，如需换算单核负载需乘以核数；

 - 线程CPU高负载异常：单核平均负载。

---
*Updated: 2026-04-20 01:47:08*
