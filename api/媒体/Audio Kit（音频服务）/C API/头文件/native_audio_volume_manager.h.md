# native_audio_volume_manager.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-native-audio-volume-manager-h`

**DocID**: `60dcabb49e1e478093ca4e5eefd0522d`

**NodeID**: `000201775795910761125c927f225d41`

---

native_audio_volume_manager.h

概述

声明音频音量管理器接口。

 该文件接口用于创建AudioVolumeManager。

引用文件：
 <ohaudio/native_audio_volume_manager.h>

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

OH_AudioVolumeManager

OH_AudioVolumeManager

声明音频音量管理器。音频音量管理器提供多种函数，供开发人员获取系统音量信息。

[h2]函数

名称

typedef关键字

描述

typedef void (*OH_AudioVolumeManager_OnStreamVolumeChangeCallback)(void *userData, OH_AudioStream_Usage usage, int32_t volumeLevel, bool updateUi)

OH_AudioVolumeManager_OnStreamVolumeChangeCallback

音量变化回调函数的原型定义，用于传递给
OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback
。

typedef void (*OH_AudioVolumeManager_OnRingerModeChangeCallback)(void *userData, OH_AudioRingerMode ringerMode)

OH_AudioVolumeManager_OnRingerModeChangeCallback

铃声模式变化回调函数的原型定义，用于传递给
OH_AudioVolumeManager_RegisterRingerModeChangeCallback
。

OH_AudioCommon_Result OH_AudioManager_GetAudioVolumeManager(OH_AudioVolumeManager **volumeManager)

-

使用音量管理器相关功能，首先需要获取音量管理器实例。

OH_AudioCommon_Result OH_AudioVolumeManager_GetMaxVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *maxVolumeLevel)

-

获取指定用途类型音频流的最大音量等级。

OH_AudioCommon_Result OH_AudioVolumeManager_GetMinVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *minVolumeLevel)

-

获取指定用途类型音频流的最小音量等级。

OH_AudioCommon_Result OH_AudioVolumeManager_GetVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *volumeLevel)

-

获取指定用途类型音频流的系统音量等级。

OH_AudioCommon_Result OH_AudioVolumeManager_IsMuteByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, bool *muted)

-

检查指定用途类型的音频流是否处于静音状态。

OH_AudioCommon_Result OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, OH_AudioVolumeManager_OnStreamVolumeChangeCallback callback, void *userData)

-

注册音频流音量修改回调函数。

OH_AudioCommon_Result OH_AudioVolumeManager_UnregisterStreamVolumeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnStreamVolumeChangeCallback callback)

-

取消注册音频流音量修改回调函数。

OH_AudioCommon_Result OH_AudioVolumeManager_GetRingerMode(OH_AudioVolumeManager *volumeManager, OH_AudioRingerMode *ringerMode)

-

获取当前铃声模式。

OH_AudioCommon_Result OH_AudioVolumeManager_RegisterRingerModeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnRingerModeChangeCallback callback, void *userData)

-

注册铃声模式切换回调函数。

OH_AudioCommon_Result OH_AudioVolumeManager_UnregisterRingerModeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnRingerModeChangeCallback callback)

-

取消注册铃声模式切换回调函数。

函数说明

[h2]OH_AudioVolumeManager_OnStreamVolumeChangeCallback()

typedef void (*OH_AudioVolumeManager_OnStreamVolumeChangeCallback)(void *userData, OH_AudioStream_Usage usage, int32_t volumeLevel, bool updateUi)

描述

音量变化回调函数的原型定义，用于传递给
OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback
。

起始版本：
 20

参数：

参数项

描述

void *userData

用户自定义数据指针。

OH_AudioStream_Usage
 usage

对应音量被调整的流的用途类型。

int32_t volumeLevel

修改后的音量。

bool updateUi

是否在UI界面显示音量变化。true表示显示，false表示不显示。

[h2]OH_AudioVolumeManager_OnRingerModeChangeCallback()

typedef void (*OH_AudioVolumeManager_OnRingerModeChangeCallback)(void *userData, OH_AudioRingerMode ringerMode)

描述

铃声模式变化回调函数的原型定义，用于传递给
OH_AudioVolumeManager_RegisterRingerModeChangeCallback
。

起始版本：
 20

参数：

参数项

描述

void *userData

用户自定义数据指针。

OH_AudioRingerMode
 ringerMode

切换后的铃声模式。

[h2]OH_AudioManager_GetAudioVolumeManager()

OH_AudioCommon_Result OH_AudioManager_GetAudioVolumeManager(OH_AudioVolumeManager **volumeManager)

描述

使用音量管理器相关功能，首先需要获取音量管理器实例。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 **volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager为nullptr。

[h2]OH_AudioVolumeManager_GetMaxVolumeByUsage()

OH_AudioCommon_Result OH_AudioVolumeManager_GetMaxVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *maxVolumeLevel)

描述

获取指定用途类型音频流的最大音量等级。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioStream_Usage
 usage

用于映射特定音量类型的音频流用途类型。

int32_t *maxVolumeLevel

用于接收返回的最大音量。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或maxVolumeLevel为nullptr，或usage是无效值。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_GetMinVolumeByUsage()

OH_AudioCommon_Result OH_AudioVolumeManager_GetMinVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *minVolumeLevel)

描述

获取指定用途类型音频流的最小音量等级。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioStream_Usage
 usage

用于映射特定音量类型的音频流用途类型。

int32_t *minVolumeLevel

用于接收返回的最小音量。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或minVolumeLevel为nullptr，或usage是无效值。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_GetVolumeByUsage()

OH_AudioCommon_Result OH_AudioVolumeManager_GetVolumeByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, int32_t *volumeLevel)

描述

获取指定用途类型音频流的系统音量等级。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioStream_Usage
 usage

用于映射特定音量类型的音频流用途类型。

int32_t *volumeLevel

用于接收返回的系统音量。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或volumeLevel为nullptr，或usage是无效值。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_IsMuteByUsage()

OH_AudioCommon_Result OH_AudioVolumeManager_IsMuteByUsage(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, bool *muted)

描述

检查指定用途类型的音频流是否处于静音状态。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioStream_Usage
 usage

用于映射特定音量类型的音频流用途类型。

bool *muted

用于接收返回的音频流是否静音。true表示静音，false表示未静音。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或muted为nullptr，或usage是无效值。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback()

OH_AudioCommon_Result OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioStream_Usage usage, OH_AudioVolumeManager_OnStreamVolumeChangeCallback callback, void *userData)

描述

注册音频流音量修改回调函数。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioStream_Usage
 usage

监听用于映射特定音量类型的音频流用途类型。

OH_AudioVolumeManager_OnStreamVolumeChangeCallback
 callback

监听的音频流音量发生时，将调用此回调函数
OH_AudioVolumeManager_OnStreamVolumeChangeCallback
。

void *userData

用户自定义数据指针。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager、usage或callback为nullptr，或usage是无效值。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_UnregisterStreamVolumeChangeCallback()

OH_AudioCommon_Result OH_AudioVolumeManager_UnregisterStreamVolumeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnStreamVolumeChangeCallback callback)

描述

取消注册音频流音量修改回调函数。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioVolumeManager_OnStreamVolumeChangeCallback
 callback

指向
OH_AudioVolumeManager_RegisterStreamVolumeChangeCallback
传入的回调函数，用于取消注册。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或callback为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_GetRingerMode()

OH_AudioCommon_Result OH_AudioVolumeManager_GetRingerMode(OH_AudioVolumeManager *volumeManager, OH_AudioRingerMode *ringerMode)

描述

获取当前铃声模式。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioRingerMode
 *ringerMode

用于接收返回的铃声模式。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或ringerMode为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_RegisterRingerModeChangeCallback()

OH_AudioCommon_Result OH_AudioVolumeManager_RegisterRingerModeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnRingerModeChangeCallback callback, void *userData)

描述

注册铃声模式切换回调函数。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioVolumeManager_OnRingerModeChangeCallback
 callback

监听的铃声模式发生切换时，将调用此回调函数
OH_AudioVolumeManager_OnRingerModeChangeCallback
。

void *userData

用户自定义数据指针。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或callback为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

[h2]OH_AudioVolumeManager_UnregisterRingerModeChangeCallback()

OH_AudioCommon_Result OH_AudioVolumeManager_UnregisterRingerModeChangeCallback(OH_AudioVolumeManager *volumeManager, OH_AudioVolumeManager_OnRingerModeChangeCallback callback)

描述

取消注册铃声模式切换回调函数。

起始版本：
 20

参数：

参数项

描述

OH_AudioVolumeManager
 *volumeManager

指向OH_AudioVolumeManager用于接收创建的音量管理器实例。

OH_AudioVolumeManager_OnRingerModeChangeCallback
 callback

指向
OH_AudioVolumeManager_RegisterRingerModeChangeCallback
传入的回调函数，用于取消注册。

返回：

类型

说明

OH_AudioCommon_Result

AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

 AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数volumeManager或callback为nullptr。

 AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统处理错误。

---
*2026-04-22T15:55:03.418Z*