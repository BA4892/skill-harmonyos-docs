# native_avsession.h

> **分区**: API参考  |  **Slug**: `capi-native-avsession-h`  |  **DocID**: `595326164c3244959463bb24a295efac`

---

# native_avsession.h

  #### 概述

媒体会话定义，可用于设置元数据、播放状态信息等操作。

 **引用文件：** <multimedia/av_session/native_avsession.h>

 **库：** libohavsession.so

 **系统能力：** SystemCapability.Multimedia.AVSession.Core

 **起始版本：** 13

 **相关模块：** [OHAVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession) OH_AVSession 定义播控会话对象。播控会话对象可以使用[OH_AVSession_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsession_create)方法创建。  [OH_AVCastController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avcastcontroller) OH_AVCastController 声明投播控制器对象。投播控制器对象可以使用[OH_AVSession_CreateAVCastController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsession_createavcastcontroller)方法创建。       #### [h2]函数

 名称 typedef关键字 描述   [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnCommand)(OH_AVSession* session, AVSession_ControlCommand command, void* userData)](#oh_avsessioncallback_oncommand) OH_AVSessionCallback_OnCommand 通用的执行播控命令的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnFastForward)(OH_AVSession* session, uint32_t seekTime, void* userData)](#oh_avsessioncallback_onfastforward) OH_AVSessionCallback_OnFastForward 快进的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnRewind)(OH_AVSession* session, uint32_t seekTime, void* userData)](#oh_avsessioncallback_onrewind) OH_AVSessionCallback_OnRewind 快退的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSeek)(OH_AVSession* session, uint64_t seekTime, void* userData)](#oh_avsessioncallback_onseek) OH_AVSessionCallback_OnSeek 进度调节的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSetLoopMode)(OH_AVSession* session, AVSession_LoopMode curLoopMode, void* userData)](#oh_avsessioncallback_onsetloopmode) OH_AVSessionCallback_OnSetLoopMode 设置循环模式的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnToggleFavorite)(OH_AVSession* session, const char* assetId, void* userData)](#oh_avsessioncallback_ontogglefavorite) OH_AVSessionCallback_OnToggleFavorite 收藏的回调。  [typedef AVSessionCallback_Result (*OH_AVSessionCallback_OutputDeviceChange)(OH_AVSession* session, AVSession_ConnectionState state, AVSession_OutputDeviceInfo* outputDeviceInfo)](#oh_avsessioncallback_outputdevicechange) OH_AVSessionCallback_OutputDeviceChange 设备变化的回调。  [AVSession_ErrCode OH_AVSession_Create(AVSession_Type sessionType, const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)](#oh_avsession_create) - 创建会话对象。  [AVSession_ErrCode OH_AVSession_Destroy(OH_AVSession* avsession)](#oh_avsession_destroy) - 销毁会话对象。  [AVSession_ErrCode OH_AVSession_Activate(OH_AVSession* avsession)](#oh_avsession_activate) - 激活会话。  [AVSession_ErrCode OH_AVSession_Deactivate(OH_AVSession* avsession)](#oh_avsession_deactivate) - 取消激活媒体会话。  [AVSession_ErrCode OH_AVSession_GetSessionType(OH_AVSession* avsession, AVSession_Type* sessionType)](#oh_avsession_getsessiontype) - 获取会话类型。  [AVSession_ErrCode OH_AVSession_GetSessionId(OH_AVSession* avsession, const char** sessionId)](#oh_avsession_getsessionid) - 获取会话id。  [AVSession_ErrCode OH_AVSession_SetAVMetadata(OH_AVSession* avsession, OH_AVMetadata* avmetadata)](#oh_avsession_setavmetadata) - 设置媒体元数据。  [AVSession_ErrCode OH_AVSession_SetPlaybackState(OH_AVSession* avsession, AVSession_PlaybackState playbackState)](#oh_avsession_setplaybackstate) - 设置播放状态。  [AVSession_ErrCode OH_AVSession_SetPlaybackPosition(OH_AVSession* avsession, AVSession_PlaybackPosition* playbackPosition)](#oh_avsession_setplaybackposition) - 设置播放位置。  [AVSession_ErrCode OH_AVSession_SetFavorite(OH_AVSession* avsession, bool favorite)](#oh_avsession_setfavorite) - 设置收藏状态。  [AVSession_ErrCode OH_AVSession_SetLoopMode(OH_AVSession* avsession, AVSession_LoopMode loopMode)](#oh_avsession_setloopmode) - 设置循环模式。  [AVSession_ErrCode OH_AVSession_SetRemoteCastEnabled(OH_AVSession* avsession, bool enabled)](#oh_avsession_setremotecastenabled) - 请求使能远程投播。  [AVSession_ErrCode OH_AVSession_RegisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback, void* userData)](#oh_avsession_registercommandcallback) - 注册通用播控的回调。  [AVSession_ErrCode OH_AVSession_UnregisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback)](#oh_avsession_unregistercommandcallback) - 取消注册通用播控的回调。  [AVSession_ErrCode OH_AVSession_RegisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback, void* userData)](#oh_avsession_registerforwardcallback) - 注册快进的回调。  [AVSession_ErrCode OH_AVSession_UnregisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback)](#oh_avsession_unregisterforwardcallback) - 取消注册快进的回调。  [AVSession_ErrCode OH_AVSession_RegisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback, void* userData)](#oh_avsession_registerrewindcallback) - 注册快退的回调。  [AVSession_ErrCode OH_AVSession_UnregisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback)](#oh_avsession_unregisterrewindcallback) - 取消注册快退的回调。  [AVSession_ErrCode OH_AVSession_RegisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback, void* userData)](#oh_avsession_registerseekcallback) - 注册跳转的回调。  [AVSession_ErrCode OH_AVSession_UnregisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback)](#oh_avsession_unregisterseekcallback) - 取消注册跳转的回调。  [AVSession_ErrCode OH_AVSession_RegisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback, void* userData)](#oh_avsession_registersetloopmodecallback) - 注册设置循环模式的回调。  [AVSession_ErrCode OH_AVSession_UnregisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback)](#oh_avsession_unregistersetloopmodecallback) - 取消注册设置循环模式的回调。  [AVSession_ErrCode OH_AVSession_RegisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback, void* userData)](#oh_avsession_registertogglefavoritecallback) - 设置收藏的回调。  [AVSession_ErrCode OH_AVSession_UnregisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback)](#oh_avsession_unregistertogglefavoritecallback) - 取消设置收藏的回调。  [AVSession_ErrCode OH_AVSession_RegisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)](#oh_avsession_registeroutputdevicechangecallback) - 注册设备变化的回调。  [AVSession_ErrCode OH_AVSession_UnregisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback)](#oh_avsession_unregisteroutputdevicechangecallback) - 取消注册设备变化的回调。  [AVSession_ErrCode OH_AVSession_AcquireSession(const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession)](#oh_avsession_acquiresession) - 获取已经存在的媒体会话对象。当不再使用媒体会话对象时，调用[OH_AVSession_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsession_destroy)进行释放。  [AVSession_ErrCode OH_AVSession_CreateAVCastController(OH_AVSession* avsession, OH_AVCastController** avcastcontroller)](#oh_avsession_createavcastcontroller) - 创建投播控制器对象。当投播控制器对象不再使用时，调用[OH_AVCastController_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy)进行释放。  [AVSession_ErrCode OH_AVSession_StopCasting(OH_AVSession* avsession)](#oh_avsession_stopcasting) - 停止当前投播并断开设备连接。  [AVSession_ErrCode OH_AVSession_AcquireOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo** outputDeviceInfo)](#oh_avsession_acquireoutputdevice) - 获取当前输出设备。  [AVSession_ErrCode OH_AVSession_ReleaseOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo *outputDeviceInfo)](#oh_avsession_releaseoutputdevice) - 释放输出设备对象。       #### 函数说明

  #### [h2]OH_AVSessionCallback_OnCommand()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnCommand)(OH_AVSession* session, AVSession_ControlCommand command, void* userData) **描述**

 通用的执行播控命令的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OnFastForward()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnFastForward)(OH_AVSession* session, uint32_t seekTime, void* userData) **描述**

 快进的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OnRewind()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnRewind)(OH_AVSession* session, uint32_t seekTime, void* userData) **描述**

 快退的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OnSeek()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSeek)(OH_AVSession* session, uint64_t seekTime, void* userData) **描述**

 进度调节的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OnSetLoopMode()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnSetLoopMode)(OH_AVSession* session, AVSession_LoopMode curLoopMode, void* userData) **描述**

 设置循环模式的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OnToggleFavorite()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OnToggleFavorite)(OH_AVSession* session, const char* assetId, void* userData) **描述**

 收藏的回调。

 **起始版本：** 13

   #### [h2]OH_AVSessionCallback_OutputDeviceChange()

typedef AVSessionCallback_Result (*OH_AVSessionCallback_OutputDeviceChange)(OH_AVSession* session, AVSession_ConnectionState state, AVSession_OutputDeviceInfo* outputDeviceInfo) **描述**

 设备变化的回调。

 **起始版本：** 23

   #### [h2]OH_AVSession_Create()

AVSession_ErrCode OH_AVSession_Create(AVSession_Type sessionType, const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession) **描述**

 创建会话对象。

 **起始版本：** 13

 **参数：**

  参数项 描述   [AVSession_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_type) sessionType 会话类型[AVSession_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_type)。  const char* sessionTag 会话标签。  const char* bundleName 创建会话的包名。  const char* abilityName 创建会话的ability名。  [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)** avsession 返回的媒体会话对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：服务器内部错误。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数sessionType无效。

  2. 参数sessionTag为nullptr。

  3. 参数bundleName为nullptr。

  4. 参数abilityName为nullptr。

  5. 参数avsession为nullptr。

        #### [h2]OH_AVSession_Destroy()

AVSession_ErrCode OH_AVSession_Destroy(OH_AVSession* avsession) **描述**

 销毁会话对象。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_Activate()

AVSession_ErrCode OH_AVSession_Activate(OH_AVSession* avsession) **描述**

 激活会话。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_Deactivate()

AVSession_ErrCode OH_AVSession_Deactivate(OH_AVSession* avsession) **描述**

 取消激活媒体会话。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_GetSessionType()

AVSession_ErrCode OH_AVSession_GetSessionType(OH_AVSession* avsession, AVSession_Type* sessionType) **描述**

 获取会话类型。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_type)* sessionType 返回的会话类型。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数sessionType为nullptr。

        #### [h2]OH_AVSession_GetSessionId()

AVSession_ErrCode OH_AVSession_GetSessionId(OH_AVSession* avsession, const char** sessionId) **描述**

 获取会话id。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  const char** sessionId 返回的会话类型id。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数sessionId为nullptr。

        #### [h2]OH_AVSession_SetAVMetadata()

AVSession_ErrCode OH_AVSession_SetAVMetadata(OH_AVSession* avsession, OH_AVMetadata* avmetadata) **描述**

 设置媒体元数据。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avmetadatastruct)* avmetadata 设置媒体元数据信息。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数avmetadata为nullptr。

        #### [h2]OH_AVSession_SetPlaybackState()

AVSession_ErrCode OH_AVSession_SetPlaybackState(OH_AVSession* avsession, AVSession_PlaybackState playbackState) **描述**

 设置播放状态。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_PlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_playbackstate) playbackState 播放状态。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数playbackState是无效的。

        #### [h2]OH_AVSession_SetPlaybackPosition()

AVSession_ErrCode OH_AVSession_SetPlaybackPosition(OH_AVSession* avsession, AVSession_PlaybackPosition* playbackPosition) **描述**

 设置播放位置。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_PlaybackPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-playbackposition)* playbackPosition 播放位置对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数playbackPosition为nullptr。

        #### [h2]OH_AVSession_SetFavorite()

AVSession_ErrCode OH_AVSession_SetFavorite(OH_AVSession* avsession, bool favorite) **描述**

 设置收藏状态。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  bool favorite 收藏状态，true表示收藏，false表示取消收藏。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_SetLoopMode()

AVSession_ErrCode OH_AVSession_SetLoopMode(OH_AVSession* avsession, AVSession_LoopMode loopMode) **描述**

 设置循环模式。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_LoopMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_loopmode) loopMode 循环模式。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数loopMode是无效的。

        #### [h2]OH_AVSession_SetRemoteCastEnabled()

AVSession_ErrCode OH_AVSession_SetRemoteCastEnabled(OH_AVSession* avsession, bool enabled) **描述**

 请求使能远程投播。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  bool enabled 是否使能远程投播。true表示使能，false表示不使能。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_RegisterCommandCallback()

AVSession_ErrCode OH_AVSession_RegisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback, void* userData) **描述**

 注册通用播控的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_ControlCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_controlcommand) command 播控的控制命令。  [OH_AVSessionCallback_OnCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_oncommand) callback 控制命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_CODE_COMMAND_INVALID：控制命令无效。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterCommandCallback()

AVSession_ErrCode OH_AVSession_UnregisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback) **描述**

 取消注册通用播控的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_ControlCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-base-h#avsession_controlcommand) command 播控的控制命令。  [OH_AVSessionCallback_OnCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_oncommand) callback 控制命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_CODE_COMMAND_INVALID：控制命令无效。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterForwardCallback()

AVSession_ErrCode OH_AVSession_RegisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback, void* userData) **描述**

 注册快进的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnFastForward](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onfastforward) callback 快进命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterForwardCallback()

AVSession_ErrCode OH_AVSession_UnregisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback) **描述**

 取消注册快进的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnFastForward](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onfastforward) callback 快进命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterRewindCallback()

AVSession_ErrCode OH_AVSession_RegisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback, void* userData) **描述**

 注册快退的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnRewind](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onrewind) callback 快退命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterRewindCallback()

AVSession_ErrCode OH_AVSession_UnregisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback) **描述**

 取消注册快退的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnRewind](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onrewind) callback 快退命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterSeekCallback()

AVSession_ErrCode OH_AVSession_RegisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback, void* userData) **描述**

 注册跳转的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnSeek](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onseek) callback 跳转命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterSeekCallback()

AVSession_ErrCode OH_AVSession_UnregisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback) **描述**

 取消注册跳转的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnSeek](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onseek) callback 跳转命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterSetLoopModeCallback()

AVSession_ErrCode OH_AVSession_RegisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback, void* userData) **描述**

 注册设置循环模式的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnSetLoopMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onsetloopmode) callback 设置循环模式命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterSetLoopModeCallback()

AVSession_ErrCode OH_AVSession_UnregisterSetLoopModeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSetLoopMode callback) **描述**

 取消注册设置循环模式的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnSetLoopMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_onsetloopmode) callback 设置循环模式命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterToggleFavoriteCallback()

AVSession_ErrCode OH_AVSession_RegisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback, void* userData) **描述**

 设置收藏的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnToggleFavorite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_ontogglefavorite) callback 设置收藏命令的回调。  void* userData 指向通过回调函数传递的应用数据指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterToggleFavoriteCallback()

AVSession_ErrCode OH_AVSession_UnregisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback) **描述**

 取消设置收藏的回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OnToggleFavorite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_ontogglefavorite) callback 设置收藏命令的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_RegisterOutputDeviceChangeCallback()

AVSession_ErrCode OH_AVSession_RegisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback) **描述**

 注册设备变化的回调。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OutputDeviceChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_outputdevicechange) callback 设置设备变化的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_UnregisterOutputDeviceChangeCallback()

AVSession_ErrCode OH_AVSession_UnregisterOutputDeviceChangeCallback(OH_AVSession* avsession, OH_AVSessionCallback_OutputDeviceChange callback) **描述**

 取消注册设备变化的回调。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVSessionCallback_OutputDeviceChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsessioncallback_outputdevicechange) callback 设置设备变化的回调。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数callback为nullptr。

        #### [h2]OH_AVSession_AcquireSession()

AVSession_ErrCode OH_AVSession_AcquireSession(const char* sessionTag, const char* bundleName, const char* abilityName, OH_AVSession** avsession) **描述**

 获取已经存在的媒体会话对象。当不再使用媒体会话对象时，调用[OH_AVSession_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsession_destroy)进行释放。

 **起始版本：** 23

 **参数：**

  参数项 描述   const char* sessionTag 应用设置的会话自定义标签。  const char* bundleName 应用包名。  const char* abilityName 应用的Ability组件名。  [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)** avsession 用于接收OH_AVSession的变量指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数sessionTag无效。

  2. 参数bundleName无效。

  3. 参数abilityName无效。

  4. 参数avsession为nullptr。

        #### [h2]OH_AVSession_CreateAVCastController()

AVSession_ErrCode OH_AVSession_CreateAVCastController(OH_AVSession* avsession, OH_AVCastController** avcastcontroller) **描述**

 创建投播控制器对象。当投播控制器对象不再使用时，调用[OH_AVCastController_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcastcontroller-h#oh_avcastcontroller_destroy)进行释放。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [OH_AVCastController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avcastcontroller)** avcastcontroller 指向用于接收投播控制器OH_AVCastController的变量的指针。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数avcastcontroller为nullptr。

        #### [h2]OH_AVSession_StopCasting()

AVSession_ErrCode OH_AVSession_StopCasting(OH_AVSession* avsession) **描述**

 停止当前投播并断开设备连接。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。

  AV_SESSION_ERR_INVALID_PARAMETER：参数avsession为nullptr。

        #### [h2]OH_AVSession_AcquireOutputDevice()

AVSession_ErrCode OH_AVSession_AcquireOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo** outputDeviceInfo) **描述**

 获取当前输出设备。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-outputdeviceinfo)** outputDeviceInfo 指向用于接收输出设备信息AVSession_OutputDeviceInfo的变量的指针。不可以单独释放outputDeviceInfo指针。当不再使用outputDeviceInfo时，调用[OH_AVSession_ReleaseOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-h#oh_avsession_releaseoutputdevice)进行释放。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_SERVICE_EXCEPTION：会话服务异常。

  AV_SESSION_ERR_CODE_SESSION_NOT_EXIST：会话不存在。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数outputDeviceInfo为nullptr。

        #### [h2]OH_AVSession_ReleaseOutputDevice()

AVSession_ErrCode OH_AVSession_ReleaseOutputDevice(OH_AVSession* avsession, AVSession_OutputDeviceInfo *outputDeviceInfo) **描述**

 释放输出设备对象。

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_AVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession)* avsession 媒体会话对象。  [AVSession_OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-outputdeviceinfo) *outputDeviceInfo 应当释放的输出设备。     **返回：**

  类型 说明   [AVSession_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avsession-errors-h#avsession_errcode) AV_SESSION_ERR_SUCCESS：函数执行成功。

  AV_SESSION_ERR_INVALID_PARAMETER：

  1. 参数avsession为nullptr。

  2. 参数outputDeviceInfo为nullptr。

---
*Updated: 2026-04-22 06:40:47*
