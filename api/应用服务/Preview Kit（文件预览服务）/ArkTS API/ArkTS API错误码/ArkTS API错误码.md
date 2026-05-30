# ArkTS API错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `preview-arkts-errcode`

**DocID**: `e644f49e192948fea469d5140397bcf0`

**NodeID**: `00020177579594626713138695362ccb`

---

ArkTS API错误码

以下仅介绍本模块特有错误码，通用错误码请参考
通用错误码说明文档
。

1017220001 内部失败

错误信息

Internal failure.

错误描述

调用接口时，返回未知内部错误。

可能原因

系统处理异常返回的未定义的错误。

处理步骤

出现的情况不明确，建议尝试重新创建业务，或者过一段时间重试，并做好相关的逻辑判断。如果仍无法解决请通过
在线提单
提交问题。

1017220002 服务异常

错误信息

Service unavailable.

错误描述

IPC服务处理异常。

可能原因

系统处理异常，比如系统服务重启、跨进程调用异常等。

处理步骤

出现的情况不明确，建议尝试重新创建业务，或者过一段时间重试，并做好相关的逻辑判断。如果仍无法解决请通过
在线提单
提交问题。

1017220003 添加的文件个数超过上限

错误信息

The number of files exceeds the upper limit.

错误描述

添加的文件个数超过上限。

可能原因

1. 没有先调用
on('filePreloadStateChanged')
接口注册，直接调用
openFileBoost.addFile
接口添加文件。

2. 调用
openFileBoost.addFile
接口添加文件个数太多（当前一个进程最多添加50个文件）。

处理步骤

1. 确认在已经调用了
on('filePreloadStateChanged')
的情况下，再调用
openFileBoost.addFile
接口。

2. 不需要再监听预加载状态的文件时，调用
openFileBoost.removeFile
接口，删除对应文件的监听再重试。

---
*2026-04-22T15:54:00.498Z*