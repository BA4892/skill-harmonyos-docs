# HiTraceMeter介绍

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `hitracemeter-intro`  |  **DocID**: `0576722f7257428fb7cddea7624e4718`  |  **NodeID**: `000201775795852716114639b5ab0377`

---

# HiTraceMeter介绍

 本文介绍HiTraceMeter接口的使用方法。开发者可以在代码中调用HiTraceMeter接口进行trace打点，然后可使用[hitrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace)命令行工具或者[hidebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug-guidelines#获取应用trace记录信息)提供的trace采集接口，获取程序运行时产生的打点信息，了解程序运行的进程、线程、时间戳、CPU等信息，以帮助开发者进行问题分析和性能调优。

 HiTraceMeter提供ArkTS和C/C++两种接口，按需选择。

 
[使用HiTraceMeter跟踪性能（ArkTS）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-guidelines-arkts)

  [使用HiTraceMeter跟踪性能（C/C++）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-guidelines-ndk)

  
  #### 实现原理

内核设置了一个缓冲区用于记录设备运行时产生的打点记录，并在sysfs中提供了trace_marker和trace节点：

 trace_marker节点为只写节点，程序将打点信息写入到trace_marker节点后，打点信息会被存储到内核的缓冲区。HiTraceMeter提供的接口封装了写操作，应用可以调用这些接口将打点数据写入内核节点。

 trace节点为只读节点，可从中读取系统当前缓冲区内的所有记录。hitrace命令行工具封装了对该节点的读取操作，开发者可使用命令将采集的打点信息显示在命令行或保存到设备文件中。

 调用HiTraceMeter接口生成的打点信息格式可查看[用户态trace格式说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-view#用户态trace格式说明)。

 **HiTraceMeter Tag**：跟踪数据使用类别，每个软件子系统对应一个tag。可以在hdc命令行中用“hitrace -l”命令查看所有的tag名及其简介。使用[hitrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace)命令行工具采集跟踪数据时，需要指定tag，采集结果仅包含指定tag类别的跟踪数据。应用中调用HiTraceMeter打点使用的tag是app。

---
*Updated: 2026-04-20 01:46:21*
