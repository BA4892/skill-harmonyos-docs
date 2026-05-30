# native_audio_resource_manager.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-native-audio-resource-manager-h`

**DocID**: `58cd29558a7e44ec85f62c29e87cf61c`

**NodeID**: `000201775795910761194c48b1e8ab41`

---

native_audio_resource_manager.h

概述

声明音频资源管理相关的接口。

引用文件：
 <ohaudio/native_audio_resource_manager.h>

库：
 libohaudio.so

系统能力：
 SystemCapability.Multimedia.Audio.Core

起始版本：
 20

相关模块：

OHAudio

汇总

[h2]结构体

名称

typedef关键字

描述

OH_AudioResourceManager

OH_AudioResourceManager

声明音频资源管理器。用于管理音频资源相关功能。

OH_AudioWorkgroup

OH_AudioWorkgroup

声明音频工作组。将音频关键线程进行分组管理。

[h2]函数

名称

描述

OH_AudioCommon_Result OH_AudioManager_GetAudioResourceManager(OH_AudioResourceManager **resourceManager)

获取音频资源管理器。

 使用音频资源管理器相关功能，首先需要获取音频资源管理器实例。

OH_AudioCommon_Result OH_AudioResourceManager_CreateWorkgroup(OH_AudioResourceManager *resourceManager, const char *name, OH_AudioWorkgroup **group)

创建音频工作组。

OH_AudioCommon_Result OH_AudioResourceManager_ReleaseWorkgroup(OH_AudioResourceManager *resourceManager, OH_AudioWorkgroup *group)

释放音频工作组。

OH_AudioCommon_Result OH_AudioWorkgroup_AddCurrentThread(OH_AudioWorkgroup *group, int32_t *tokenId)

将当前线程加入group指向的音频工作组。

OH_AudioCommon_Result OH_AudioWorkgroup_RemoveThread(OH_AudioWorkgroup *group, int32_t tokenId)

将tokenId对应的线程从group音频工作组中移除。

OH_AudioCommon_Result OH_AudioWorkgroup_Start(OH_AudioWorkgroup *group, uint64_t startTime, uint64_t deadlineTime)

通知系统group指向的音频工作组开始工作，并告知系统当前工作组预期完成时间。

OH_AudioCommon_Result OH_AudioWorkgroup_Stop(OH_AudioWorkgroup *group)

通知系统group指向的音频工作组任务已完成。

函数说明

[h2]OH_AudioManager_GetAudioResourceManager()

OH_AudioCommon_Result OH_AudioManager_GetAudioResourceManager(OH_AudioResourceManager **resourceManager)

描述

获取音频资源管理器。

 使用音频资源管理器相关功能，首先需要获取音频资源管理器实例。

起始版本：
 20

参数：

参数项

描述

OH_AudioResourceManager
 **resourceManager

指向OH_AudioResourceManager用于接收创建的音频资源管理器实例。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数resourceManager为nullptr。

[h2]OH_AudioResourceManager_CreateWorkgroup()

OH_AudioCommon_Result OH_AudioResourceManager_CreateWorkgroup(OH_AudioResourceManager *resourceManager,const char *name, OH_AudioWorkgroup **group)

描述

创建音频工作组。

起始版本：
 20

参数：

参数项

描述

OH_AudioResourceManager
 *resourceManager

指向
OH_AudioManager_GetAudioResourceManager
创建的音频资源管理器实例OH_AudioResourceManager。

const char *name

要创建的音频工作组的名称。

OH_AudioWorkgroup
 **group

指向OH_AudioWorkgroup用于接收返回的音频工作组实例的指针。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

 1. 参数resourceManager为nullptr；

 2. 参数name为nullptr；

 3. 参数group为nullptr。

 AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioResourceManager_ReleaseWorkgroup()

OH_AudioCommon_Result OH_AudioResourceManager_ReleaseWorkgroup(OH_AudioResourceManager *resourceManager,OH_AudioWorkgroup *group)

描述

释放音频工作组。

起始版本：
 20

参数：

参数项

描述

OH_AudioResourceManager
 *resourceManager

指向
OH_AudioManager_GetAudioResourceManager
创建的音频资源管理器实例OH_AudioResourceManager。

OH_AudioWorkgroup
 *group

指向
OH_AudioResourceManager_CreateWorkgroup
创建的音频工作组实例OH_AudioWorkgroup。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

 1. 参数resourceManager为nullptr；

 2. 参数group为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioWorkgroup_AddCurrentThread()

OH_AudioCommon_Result OH_AudioWorkgroup_AddCurrentThread(OH_AudioWorkgroup *group, int32_t *tokenId)

描述

将当前线程加入group指向的音频工作组。

起始版本：
 20

参数：

参数项

描述

OH_AudioWorkgroup
 *group

指向
OH_AudioResourceManager_CreateWorkgroup
创建的音频工作组实例OH_AudioWorkgroup。

int32_t *tokenId

用于接收加入音频工作组的线程号。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

 1. 参数group为nullptr；

 2. 参数tokenId为nullptr。

 AUDIOCOMMON_RESULT_ERROR_NO_MEMORY：内存不足。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioWorkgroup_RemoveThread()

OH_AudioCommon_Result OH_AudioWorkgroup_RemoveThread(OH_AudioWorkgroup *group, int32_t tokenId)

描述

将tokenId对应的线程从group音频工作组中移除。

起始版本：
 20

参数：

参数项

描述

OH_AudioWorkgroup
 *group

指向
OH_AudioResourceManager_CreateWorkgroup
创建的音频工作组实例OH_AudioWorkgroup。

int32_t tokenId

要从音频工作组中移除的线程号。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

 1. 参数group为nullptr；

 2. 参数tokenId无效。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioWorkgroup_Start()

OH_AudioCommon_Result OH_AudioWorkgroup_Start(OH_AudioWorkgroup *group, uint64_t startTime, uint64_t deadlineTime)

描述

通知系统group指向的音频工作组开始工作，并告知系统当前工作组预期完成时间。

起始版本：
 20

参数：

参数项

描述

OH_AudioWorkgroup
 *group

指向
OH_AudioResourceManager_CreateWorkgroup
创建的音频工作组实例OH_AudioWorkgroup。

uint64_t startTime

当前音频工作组启动的时间点。

uint64_t deadlineTime

当前音频工作组预期完成的时间。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

 1. 参数group为nullptr；

 2. 参数startTime无效；

 3. 参数deadlineTime无效。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioWorkgroup_Stop()

OH_AudioCommon_Result OH_AudioWorkgroup_Stop(OH_AudioWorkgroup *group)

描述

通知系统group指向的音频工作组任务已完成。

起始版本：
 20

参数：

参数项

描述

OH_AudioWorkgroup
 *group

指向
OH_AudioResourceManager_CreateWorkgroup
创建的音频工作组实例OH_AudioWorkgroup。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数group为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

---
*2026-04-22T15:55:03.421Z*