# native_audio_manager.h

> **分区**: API参考  |  **Slug**: `capi-native-audio-manager-h`  |  **DocID**: `281b78c2d09e4ddb8ac11e915e735f4e`

---

# native_audio_manager.h

  #### 概述

声明音频管理相关的接口。

 **引用文件：** <ohaudio/native_audio_manager.h>

 **库：** libohaudio.so

 **系统能力：** SystemCapability.Multimedia.Audio.Core

 **起始版本：** 12

 **相关模块：** [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager) OH_AudioManager 声明音频管理器。用于音频管理相关功能。       #### [h2]函数

 名称 typedef关键字 描述   [typedef void (*OH_AudioManager_OnAudioSceneChangeCallback)(void *userData, OH_AudioScene scene)](#oh_audiomanager_onaudioscenechangecallback) OH_AudioManager_OnAudioSceneChangeCallback 音频场景变化回调函数的原型定义，用于传递给[OH_AudioManager_RegisterAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_registeraudioscenechangecallback)。  [OH_AudioCommon_Result OH_GetAudioManager(OH_AudioManager **audioManager)](#oh_getaudiomanager) - 获取音频管理器。

  使用音频管理器相关功能，首先需要获取音频管理器实例。

   [OH_AudioCommon_Result OH_GetAudioScene(OH_AudioManager* manager, OH_AudioScene *scene)](#oh_getaudioscene) - 获取音频场景模式。  [OH_AudioCommon_Result OH_AudioManager_RegisterAudioSceneChangeCallback(OH_AudioManager *manager, OH_AudioManager_OnAudioSceneChangeCallback callback, void *userData)](#oh_audiomanager_registeraudioscenechangecallback) - 注册音频场景切换回调函数。  [OH_AudioCommon_Result OH_AudioManager_UnregisterAudioSceneChangeCallback(OH_AudioManager *manager, OH_AudioManager_OnAudioSceneChangeCallback callback)](#oh_audiomanager_unregisteraudioscenechangecallback) - 取消注册音频场景切换回调函数。       #### 函数说明

  #### [h2]OH_AudioManager_OnAudioSceneChangeCallback()

typedef void (*OH_AudioManager_OnAudioSceneChangeCallback) (void *userData, OH_AudioScene scene) **描述**

 音频场景变化回调函数的原型定义，用于传递给[OH_AudioManager_RegisterAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_registeraudioscenechangecallback)。

 **起始版本：** 20

 **参数：**

  参数项 描述   void *userData 用户自定义数据指针。  [OH_AudioScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audioscene) scene 切换后的音频场景。       #### [h2]OH_GetAudioManager()

OH_AudioCommon_Result OH_GetAudioManager(OH_AudioManager **audioManager) **描述**

 获取音频管理器。

  使用音频管理器相关功能，首先需要获取音频管理器实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager) **audioManager 指向[OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager)用于接收创建的音频管理器实例。     **返回：**

  类型 说明   [OH_AudioCommon_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audiocommon_result) AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：参数audioManager为nullptr。

        #### [h2]OH_GetAudioScene()

OH_AudioCommon_Result OH_GetAudioScene(OH_AudioManager* manager, OH_AudioScene *scene) **描述**

 获取音频场景模式。

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager)* manager 指向[OH_GetAudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_getaudiomanager)创建的音频管理器实例：[OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager)。  [OH_AudioScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audioscene) *scene 指向[OH_AudioScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audioscene)用于接收返回的音频场景模式。     **返回：**

  类型 说明   [OH_AudioCommon_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audiocommon_result) AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

  1.参数audioManager为nullptr;

  2.参数scene为nullptr。

        #### [h2]OH_AudioManager_RegisterAudioSceneChangeCallback()

OH_AudioCommon_Result OH_AudioManager_RegisterAudioSceneChangeCallback(OH_AudioManager *manager,OH_AudioManager_OnAudioSceneChangeCallback callback, void *userData) **描述**

 注册音频场景切换回调函数。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager) *manager 指向[OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager)用于接收创建的音频管理器实例。  [OH_AudioManager_OnAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_onaudioscenechangecallback) callback 当音频场景切换时，将调用此回调函数[OH_AudioManager_OnAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_onaudioscenechangecallback)。  void *userData 用户自定义数据指针。     **返回：**

  类型 说明   [OH_AudioCommon_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audiocommon_result) AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

  1.参数manager为nullptr；

  2.参数callback为nullptr。

  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统错误。

        #### [h2]OH_AudioManager_UnregisterAudioSceneChangeCallback()

OH_AudioCommon_Result OH_AudioManager_UnregisterAudioSceneChangeCallback(OH_AudioManager *manager,OH_AudioManager_OnAudioSceneChangeCallback callback) **描述**

 取消注册音频场景切换回调函数。

 **起始版本：** 20

 **参数：**

  参数项 描述   [OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager) *manager 指向[OH_AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiomanager)用于接收创建的音频管理器实例。  [OH_AudioManager_OnAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_onaudioscenechangecallback) callback 指向[OH_AudioManager_OnAudioSceneChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-manager-h#oh_audiomanager_onaudioscenechangecallback)传入的回调函数，用于取消注册。     **返回：**

  类型 说明   [OH_AudioCommon_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audiocommon_result) AUDIOCOMMON_RESULT_SUCCESS：函数执行成功。

  AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM：

  1.参数manager为nullptr；

  2.参数callback为nullptr。

  AUDIOCOMMON_RESULT_ERROR_SYSTEM：系统错误。

---
*Updated: 2026-04-22 06:40:46*
