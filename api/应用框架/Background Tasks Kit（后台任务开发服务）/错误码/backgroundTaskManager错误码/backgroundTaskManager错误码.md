# backgroundTaskManager错误码

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `errorcode-backgroundtaskmgr`

**DocID**: `bcba24fb1aa54ace9dc4916543ebce7c`

**NodeID**: `0002017757962161962682e427939090`

---

backgroundTaskManager错误码

以下仅介绍本模块特有错误码，通用错误码请参考
通用错误码说明文档
。

9800001 内存操作失败

错误信息

Memory operation failed.

错误描述

内存操作失败。

可能原因

系统内存泄漏。

系统内存不足。

处理步骤

内存不足，请释放内存。

请检查是否内存泄漏。

9800002 Parcel读写操作失败

错误信息

Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory.

错误描述

调用长时任务相关接口时，进程间通信，读写操作失败。

可能原因

进程间通信的时候，读取或写入数据对象失败。

读写操作申请内存失败。

在RPC过程中，发送方可以使用MessageParcel提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageParcel提供的读方法从该对象中读取特定格式的数据。

处理步骤

系统内部工作异常，请稍候重试，或者重启设备尝试。

9800003 IPC通信失败

错误信息

Internal transaction failed.

错误描述

进程间通信，IPC通信失败。

可能原因

IPC通信失败。

处理步骤

系统内部工作异常，请稍候重试，或者重启设备尝试。

9800004 系统服务失败

错误信息

System service operation failed.

错误描述

调用长时任务相关接口时，客户端进程请求系统服务进程，请求系统服务操作失败。

可能原因

系统服务还未启动。

系统服务异常。

处理步骤

系统服务内部工作异常，请稍候重试，或者重启设备尝试。

9800005 长时任务校验失败

错误信息

Continuous task verification failed.

错误描述

长时任务校验失败。

可能原因

应用重复申请长时任务。

应用重复取消长时任务。

bgMode无效，应用配置文件属性backgroundModes没有配置任何长时任务类型。

只有特定设备才能申请长时任务TASK_KEEPING。

未配置长时任务主类型或者长时任务子类型。

长时任务主类型和长时任务子类型的长度不一致或者类型不匹配。

长时任务主类型或者长时任务子类型未定义。

传入的continuousTaskId参数无效。

数据传输类型不支持通知合并。

长时任务通知不存在，无法合并。

当前长时任务或者被合并的长时任务不支持通知合并。

合并通知的长时任务类型不一致。

应用申请TASK_KEEPING长时任务时，未申请ACL授权。

数据传输类型不支持通过更新接口更新长时任务类型。

在后台申请除播音外新的长时任务类型。

处理步骤

请检查应用代码。

请检查应用是否拥有系统权限。

请检查应用所在设备类型。

请检查应用配置属性backgroundModes。

请检查长时任务主类型和子类型是否已配置。

请检查长时任务主类型和子类型的长度是否一致或者类型是否匹配。

请检查长时任务主类型和子类型是否超出范围。

请检查传入的continuousTaskId参数是否有效。

请检查合并通知时，申请的长时任务类型是否包含数据传输类型。

请检查合并通知时，长时任务通知是否存在。

请检查合并通知时，当前长时任务或者被合并的长时任务是否支持合并。

请检查合并通知时，长时任务类型是否一致。

请检查申请TASK_KEEPING长时任务时，是否申请了
ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM
的ACL授权。

请检查更新长时任务时，原类型或者新增类型是否包含了数据传输类型。

请检查除了播音和已经在前台申请过的长时任务类型，是否在后台申请了其他长时任务类型。

9800006 长时任务通知信息校验失败

错误信息

Notification verification failed for a continuous task.

错误描述

长时任务发送通知信息校验失败。

可能原因

缓存在资源子系统的长时任务通知信息资源加载失败。

通知子系统服务异常。

处理步骤

请检查系统长时任务资源"ohos.backgroundtaskmgr.resources"是否存在。

系统服务内部工作异常，请稍候重试，或者重启设备尝试。

9800007 长时任务信息存储失败

错误信息

Continuous task storage failed.

错误描述

长时任务信息存储失败。

可能原因

创建存储任务文件失败。

获取真实文件路径失败。

打开存储任务文件失败。

处理步骤

请检查文件/data/service/el1/public/background_task_mgr/running_task。

系统内部工作异常，请稍候重试，或者重启设备尝试。

9900001 短时任务调用方信息校验失败

错误信息

Caller information verification failed for a transient task.

错误描述

短时任务调用方信息校验失败。

可能原因

获取调用方的uid或pid错误，导致校验失败。

获取调用方的bundleName错误，导致校验失败。

取消短时任务时传入的requestId无效，在申请短时任务的列表中找不到对应的requestId。

处理步骤

请检查应用uid是否存在。

请检查应用是否申请了短时任务。

系统服务内部工作异常，请稍候重试，或者重启设备尝试。

9900002 短时任务校验失败

错误信息

Transient task verification failed.

错误描述

短时任务校验失败。

可能原因

requestSuspendDelay()方法传递的callback对象已存在。

cancelSuspendDelay()方法传递的callback对象不存在。

应用退入后台后5s内允许申请短时任务。

应用申请短时任务数量不能超过3个。

应用申请短时任务每日剩余配额不足。

处理步骤

请检查应用自身代码逻辑。

应用运行短时任务完毕及时释放。

9900003 Parcel读写操作失败

错误信息

Failed to write data into parcel. Possible reasons: 1. Invalid parameters; 2. Failed to apply for memory.

错误描述

调用短时任务相关接口时，进程间通信，读写操作失败。

可能原因

进程间通信的时候，读取或写入数据对象失败。

读写操作申请内存失败。

在RPC过程中，发送方可以使用MessageParcel提供的写方法，将���发送的数据以特定格式写入该对象。接收方可以使用MessageParcel提供的读方法从该对象中读取特定格式的数据。

处理步骤

系统内部工作异常，请稍候重试，或者重启设备尝试。

9900004 系统服务失败

错误信息

System service operation failed.

错误描述

调用短时任务相关接口时，客户端进程请求系统服务进程，请求系统服务操作失败。

可能原因

系统服务还未启动。

系统服务异常。

处理步骤

系统服务内部工作异常，请稍候重试，或者重启设备尝试。

---
*2026-04-22T15:53:58.796Z*