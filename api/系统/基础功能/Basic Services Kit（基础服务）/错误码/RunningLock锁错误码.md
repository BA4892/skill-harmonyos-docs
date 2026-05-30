# RunningLock锁错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `errorcode-runninglock`

**DocID**: `1763fd5be3164af2b0dbe4c5c5a0d738`

**NodeID**: `00020177579634168448490f1106beba`

---

RunningLock锁错误码

以下仅介绍本模块特有错误码，通用错误码请参考
通用错误码说明文档
。

4900101 连接服务失败

错误信息

Failed to connect to the service.

错误描述

操作失败，连接系统服务发生异常。

可能原因

系统服务停止运行。

系统服务内部通讯发生异常。

处理步骤

检查系统服务是否正常运行。

在控制台中输入如下命令，查看当前的系统服务列表。

> hdc shell hidumper -ls

查看系统服务列表中是否包含PowerManagerService系统服务。

---
*2026-04-22T15:55:03.132Z*