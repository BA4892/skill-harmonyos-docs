# backgroundProcessManager错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `errorcode-backgroundprocessmanager`

**DocID**: `25798ed1f07e4adfa11b3fa4afa0d402`

**NodeID**: `00020177579621619631613302d1c2d8`

---

backgroundProcessManager错误码

以下仅介绍本模块特有错误码，通用错误码请参考
通用错误码说明文档
。

31800002 参数错误

错误信息

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. PowerSaveMode status is out of range.

错误描述

参数错误。

可能原因

参数数量不正确。

参数类型不正确。

参数取值超出范围。

处理步骤

请检查必选参数是否传入，或者传入的参数类型是否错误。对于参数校验失败，阅读参数规格约束，按照可能原因进行排查。

31800003 已经被任务管理器设置

错误信息

Setup error, This setting is overridden by setting in Task Manager.

错误描述

设置失败，该设置项已经被任务管理器设置。

可能原因

设置项已经被任务管理器设置，任务管理器设置的参数的优先级比应用高。

处理步骤

尝试使用任务管理器应用进行设置。

31800004 系统调度原因导致设置失败

错误信息

The setting failed due to system scheduling reasons.

错误描述

由于系统调度原因，设置失败。

可能原因

由于系统调度原因，设置失败。

处理步骤

请重试该操作。

---
*2026-04-22T15:53:58.797Z*