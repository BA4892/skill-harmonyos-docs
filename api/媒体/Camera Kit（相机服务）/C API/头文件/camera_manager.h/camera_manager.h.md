# camera_manager.h

> **分区**: API参考  |  **Slug**: `capi-camera-manager-h`  |  **DocID**: `34a6ece1f6724267889e1e5b8e8cbdbf`

---

# camera_manager.h

  #### 概述

声明相机管理器的概念。

 **引用文件：** <ohcamera/camera_manager.h>

 **库：** libohcamera.so

 **系统能力：** SystemCapability.Multimedia.Camera.Core

 **起始版本：** 11

 **相关模块：** [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [CameraManager_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-cameramanager-callbacks) CameraManager_Callbacks 相机设备状态的回调。       #### [h2]函数

 名称 typedef关键字 描述   [typedef void (*OH_CameraManager_StatusCallback)(Camera_Manager* cameraManager, Camera_StatusInfo* status)](#oh_cameramanager_statuscallback) OH_CameraManager_StatusCallback 在[CameraManager_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-cameramanager-callbacks)中被调用的相机管理器状态回调。  [typedef void (*OH_CameraManager_TorchStatusCallback)(Camera_Manager* cameraManager, Camera_TorchStatusInfo* status)](#oh_cameramanager_torchstatuscallback) OH_CameraManager_TorchStatusCallback 手电筒状态变化回调。  [typedef void (*OH_CameraManager_OnFoldStatusInfoChange)(Camera_Manager* cameraManager, Camera_FoldStatusInfo* foldStatusInfo)](#oh_cameramanager_onfoldstatusinfochange) OH_CameraManager_OnFoldStatusInfoChange 相机管理器折叠状态信息回调。  [Camera_ErrorCode OH_CameraManager_RegisterCallback(Camera_Manager* cameraManager, CameraManager_Callbacks* callback)](#oh_cameramanager_registercallback) - 注册相机状态更改事件回调。  [Camera_ErrorCode OH_CameraManager_UnregisterCallback(Camera_Manager* cameraManager, CameraManager_Callbacks* callback)](#oh_cameramanager_unregistercallback) - 注销相机状态更改事件回调。  [Camera_ErrorCode OH_CameraManager_RegisterTorchStatusCallback(Camera_Manager* cameraManager, OH_CameraManager_TorchStatusCallback torchStatusCallback)](#oh_cameramanager_registertorchstatuscallback) - 注册手电筒状态变更事件回调。  [Camera_ErrorCode OH_CameraManager_UnregisterTorchStatusCallback(Camera_Manager* cameraManager, OH_CameraManager_TorchStatusCallback torchStatusCallback)](#oh_cameramanager_unregistertorchstatuscallback) - 注销手电筒状态变更事件回调。  [Camera_ErrorCode OH_CameraManager_RegisterFoldStatusInfoCallback(Camera_Manager* cameraManager, OH_CameraManager_OnFoldStatusInfoChange foldStatusInfoCallback)](#oh_cameramanager_registerfoldstatusinfocallback) - 注册折叠状态信息变更事件回调。  [Camera_ErrorCode OH_CameraManager_UnregisterFoldStatusInfoCallback(Camera_Manager* cameraManager, OH_CameraManager_OnFoldStatusInfoChange foldStatusInfoCallback)](#oh_cameramanager_unregisterfoldstatusinfocallback) - 注销折叠状态信息变更事件回调。  [Camera_ErrorCode OH_CameraManager_GetSupportedCameras(Camera_Manager* cameraManager, Camera_Device** cameras, uint32_t* size)](#oh_cameramanager_getsupportedcameras) - 获取支持指定的相机设备实例。  [Camera_ErrorCode OH_CameraManager_DeleteSupportedCameras(Camera_Manager* cameraManager, Camera_Device* cameras, uint32_t size)](#oh_cameramanager_deletesupportedcameras) - 删除支持的相机。  [Camera_ErrorCode OH_CameraManager_GetSupportedCameraOutputCapability(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_OutputCapability** cameraOutputCapability)](#oh_cameramanager_getsupportedcameraoutputcapability) - 查询指定相机支持的输出能力。  [Camera_ErrorCode OH_CameraManager_GetSupportedCameraOutputCapabilityWithSceneMode(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_SceneMode sceneMode, Camera_OutputCapability** cameraOutputCapability)](#oh_cameramanager_getsupportedcameraoutputcapabilitywithscenemode) - 查询指定相机在指定模式下支持的输出能力。  [Camera_ErrorCode OH_CameraManager_GetSupportedFullCameraOutputCapabilityWithSceneMode(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_SceneMode sceneMode, Camera_OutputCapability** cameraOutputCapability)](#oh_cameramanager_getsupportedfullcameraoutputcapabilitywithscenemode) - 查询指定相机在指定模式下支持的完整输出能力，包括未压缩图（YUV）、HEIF和HDR等能力。使用YUV，HEIF或HDR等能力前，需要先显式调用此方法确保获取完整输出能力。  [Camera_ErrorCode OH_CameraManager_DeleteSupportedCameraOutputCapability(Camera_Manager* cameraManager, Camera_OutputCapability* cameraOutputCapability)](#oh_cameramanager_deletesupportedcameraoutputcapability) - 删除支持的输出能力。  [Camera_ErrorCode OH_CameraManager_IsCameraMuted(Camera_Manager* cameraManager, bool* isCameraMuted)](#oh_cameramanager_iscameramuted) - 确定相机是否静音。  [Camera_ErrorCode OH_CameraManager_CreateCaptureSession(Camera_Manager* cameraManager, Camera_CaptureSession** captureSession)](#oh_cameramanager_createcapturesession) - 创建捕获会话实例。  [Camera_ErrorCode OH_CameraManager_CreateCameraInput(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_Input** cameraInput)](#oh_cameramanager_createcamerainput) - 创建相机输入实例。  [Camera_ErrorCode OH_CameraManager_CreateCameraInput_WithPositionAndType(Camera_Manager* cameraManager, Camera_Position position, Camera_Type type, Camera_Input** cameraInput)](#oh_cameramanager_createcamerainput_withpositionandtype) - 创建具有位置和类型的相机输入实例。  [Camera_ErrorCode OH_CameraManager_CreatePreviewOutput(Camera_Manager* cameraManager, const Camera_Profile* profile, const char* surfaceId, Camera_PreviewOutput** previewOutput)](#oh_cameramanager_createpreviewoutput) - 创建预览输出实例。  [Camera_ErrorCode OH_CameraManager_CreatePreviewOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_PreviewOutput** previewOutput)](#oh_cameramanager_createpreviewoutputusedinpreconfig) - 创建在预配置流中使用的预览输出实例。  [Camera_ErrorCode OH_CameraManager_CreatePhotoOutput(Camera_Manager* cameraManager, const Camera_Profile* profile, const char* surfaceId, Camera_PhotoOutput** photoOutput)](#oh_cameramanager_createphotooutput) - 创建一个拍照输出实例。该接口只支持创建JPEG格式的拍照输出对象。  [Camera_ErrorCode OH_CameraManager_CreatePhotoOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_PhotoOutput** photoOutput)](#oh_cameramanager_createphotooutputusedinpreconfig) - 创建在预配置流中使用的照片输出实例。  [Camera_ErrorCode OH_CameraManager_CreatePhotoOutputWithoutSurface(Camera_Manager *cameraManager, const Camera_Profile *profile, Camera_PhotoOutput **photoOutput)](#oh_cameramanager_createphotooutputwithoutsurface) - 创建照片输出实例，调用此函数不需要surfaceId。  [Camera_ErrorCode OH_CameraManager_CreateVideoOutput(Camera_Manager* cameraManager, const Camera_VideoProfile* profile, const char* surfaceId, Camera_VideoOutput** videoOutput)](#oh_cameramanager_createvideooutput) - 创建一个录像输出实例。  [Camera_ErrorCode OH_CameraManager_CreateVideoOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_VideoOutput** videoOutput)](#oh_cameramanager_createvideooutputusedinpreconfig) - 创建在预配置流中使用的视频输出实例。  [Camera_ErrorCode OH_CameraManager_CreateMetadataOutput(Camera_Manager* cameraManager, const Camera_MetadataObjectType* profile, Camera_MetadataOutput** metadataOutput)](#oh_cameramanager_createmetadataoutput) - 创建元数据输出实例。  [Camera_ErrorCode OH_CameraManager_CreateMetadataOutputWithObjectTypes(Camera_Manager* cameraManager, const Camera_MetadataObjectType* metadataObjectTypes, uint32_t size, Camera_MetadataOutput** metadataOutput)](#oh_cameramanager_createmetadataoutputwithobjecttypes) - 使用元数据对象类型数组创建元数据输出实例。  [Camera_ErrorCode OH_CameraManager_GetSupportedSceneModes(Camera_Device* camera, Camera_SceneMode** sceneModes, uint32_t* size)](#oh_cameramanager_getsupportedscenemodes) - 获取特定相机支持的场景模式。  [Camera_ErrorCode OH_CameraManager_DeleteSceneModes(Camera_Manager* cameraManager, Camera_SceneMode* sceneModes)](#oh_cameramanager_deletescenemodes) - 删除场景模式。  [Camera_ErrorCode OH_CameraManager_IsTorchSupported(Camera_Manager* cameraManager, bool* isTorchSupported)](#oh_cameramanager_istorchsupported) - 检查设备是否支持手电筒。  [Camera_ErrorCode OH_CameraManager_IsTorchSupportedByTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode, bool* isTorchSupported)](#oh_cameramanager_istorchsupportedbytorchmode) - 检查设备是否支持指定的手电筒模式。  [Camera_ErrorCode OH_CameraManager_SetTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode)](#oh_cameramanager_settorchmode) - 设置相机手电筒模式。  [Camera_ErrorCode OH_CameraManager_GetCameraDevice(Camera_Manager* cameraManager, Camera_Position position, Camera_Type type, Camera_Device* camera)](#oh_cameramanager_getcameradevice) - 根据相机位置和相机类型查询指定的相机。  [Camera_ErrorCode OH_CameraManager_GetCameraDevices(Camera_Manager* cameraManager, Camera_DeviceQueryInfo* deviceQueryInfo, uint32_t* cameraSize, Camera_Device** cameras)](#oh_cameramanager_getcameradevices) - 根据相机位置、相机类型数组和连接类型查询符合条件的相机列表。  [Camera_ErrorCode OH_CameraManager_DeleteCameraDevices(Camera_Manager* cameraManager, Camera_Device* cameras)](#oh_cameramanager_deletecameradevices) - 删除指定相机设备。  [Camera_ErrorCode OH_CameraManager_GetCameraConcurrentInfos(Camera_Manager* cameraManager, const Camera_Device* camera, uint32_t deviceSize, Camera_ConcurrentInfo** cameraConcurrentInfo, uint32_t* infoSize)](#oh_cameramanager_getcameraconcurrentinfos) - 获取指定相机的并发信息。       #### 函数说明

  #### [h2]OH_CameraManager_StatusCallback()

typedef void (*OH_CameraManager_StatusCallback)(Camera_Manager* cameraManager, Camera_StatusInfo* status) **描述**

 在[CameraManager_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-cameramanager-callbacks)中被调用的相机管理器状态回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 传递回调的Camera_Manager。  [Camera_StatusInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-statusinfo)* status 每个相机设备的状态信息。       #### [h2]OH_CameraManager_TorchStatusCallback()

typedef void (*OH_CameraManager_TorchStatusCallback)(Camera_Manager* cameraManager, Camera_TorchStatusInfo* status) **描述**

 手电筒状态变化回调。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 传递回调的Camera_Manager。  [Camera_TorchStatusInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-torchstatusinfo)* status 手电筒的状态信息。       #### [h2]OH_CameraManager_OnFoldStatusInfoChange()

typedef void (*OH_CameraManager_OnFoldStatusInfoChange)(Camera_Manager* cameraManager, Camera_FoldStatusInfo* foldStatusInfo) **描述**

 相机管理器折叠状态信息回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 传递回调的Camera_Manager。  [Camera_FoldStatusInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-foldstatusinfo)* foldStatusInfo 设备的折叠状态信息。       #### [h2]OH_CameraManager_RegisterCallback()

Camera_ErrorCode OH_CameraManager_RegisterCallback(Camera_Manager* cameraManager, CameraManager_Callbacks* callback) **描述**

 注册相机状态更改事件回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [CameraManager_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-cameramanager-callbacks)* callback 要注册的相机设备状态回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_UnregisterCallback()

Camera_ErrorCode OH_CameraManager_UnregisterCallback(Camera_Manager* cameraManager, CameraManager_Callbacks* callback) **描述**

 注销相机状态更改事件回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [CameraManager_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-cameramanager-callbacks)* callback 要注销的相机设备状态回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_RegisterTorchStatusCallback()

Camera_ErrorCode OH_CameraManager_RegisterTorchStatusCallback(Camera_Manager* cameraManager, OH_CameraManager_TorchStatusCallback torchStatusCallback) **描述**

 注册手电筒状态变更事件回调。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [OH_CameraManager_TorchStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_torchstatuscallback) torchStatusCallback 要注册的手电筒状态变化回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_UnregisterTorchStatusCallback()

Camera_ErrorCode OH_CameraManager_UnregisterTorchStatusCallback(Camera_Manager* cameraManager, OH_CameraManager_TorchStatusCallback torchStatusCallback) **描述**

 注销手电筒状态变更事件回调。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [OH_CameraManager_TorchStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_torchstatuscallback) torchStatusCallback 要注销的手电筒状态变化回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_RegisterFoldStatusInfoCallback()

Camera_ErrorCode OH_CameraManager_RegisterFoldStatusInfoCallback(Camera_Manager* cameraManager, OH_CameraManager_OnFoldStatusInfoChange foldStatusInfoCallback) **描述**

 注册折叠状态信息变更事件回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [OH_CameraManager_OnFoldStatusInfoChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_onfoldstatusinfochange) foldStatusInfoCallback 要注册的折叠状态信息变更事件回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_UnregisterFoldStatusInfoCallback()

Camera_ErrorCode OH_CameraManager_UnregisterFoldStatusInfoCallback(Camera_Manager* cameraManager, OH_CameraManager_OnFoldStatusInfoChange foldStatusInfoCallback) **描述**

 注销折叠状态信息变更事件回调。

 **起始版本：** 13

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [OH_CameraManager_OnFoldStatusInfoChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_onfoldstatusinfochange) foldStatusInfoCallback 要注销的折叠状态信息变更事件回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_GetSupportedCameras()

Camera_ErrorCode OH_CameraManager_GetSupportedCameras(Camera_Manager* cameraManager, Camera_Device** cameras, uint32_t* size) **描述**

 获取支持指定的相机设备实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)** cameras 如果方法调用成功，将记录支持的Camera_Device列表。  uint32_t* size 如果方法调用成功，将记录支持的Camera_Device列表的大小。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_DeleteSupportedCameras()

Camera_ErrorCode OH_CameraManager_DeleteSupportedCameras(Camera_Manager* cameraManager, Camera_Device* cameras, uint32_t size) **描述**

 删除支持的相机。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* cameras 要删除的Camera_Device列表。  uint32_t size 要删除的相机设备数量。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_GetSupportedCameraOutputCapability()

Camera_ErrorCode OH_CameraManager_GetSupportedCameraOutputCapability(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_OutputCapability** cameraOutputCapability) **描述**

 查询指定相机支持的输出能力。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 要查询的Camera_Device。  [Camera_OutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-outputcapability)** cameraOutputCapability 如果方法调用成功，将记录支持的Camera_OutputCapability。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_GetSupportedCameraOutputCapabilityWithSceneMode()

Camera_ErrorCode OH_CameraManager_GetSupportedCameraOutputCapabilityWithSceneMode(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_SceneMode sceneMode, Camera_OutputCapability** cameraOutputCapability) **描述**

 查询指定相机在指定模式下支持的输出能力。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 要查询的Camera_Device。  [Camera_SceneMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_scenemode) sceneMode 指定相机模式。  [Camera_OutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-outputcapability)** cameraOutputCapability 如果方法调用成功，将记录支持的Camera_OutputCapability列表。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_GetSupportedFullCameraOutputCapabilityWithSceneMode()

Camera_ErrorCode OH_CameraManager_GetSupportedFullCameraOutputCapabilityWithSceneMode(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_SceneMode sceneMode, Camera_OutputCapability** cameraOutputCapability) **描述**

 查询指定相机在指定模式下支持的完整输出能力，包括未压缩图（YUV）、HEIF和HDR等能力。使用YUV，HEIF或HDR等能力前，需要先显式调用此方法确保获取完整输出能力。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 要查询的Camera_Device。  [Camera_SceneMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_scenemode) sceneMode 指定相机模式。  [Camera_OutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-outputcapability)** cameraOutputCapability 如果方法调用成功，将记录支持的Camera_OutputCapability列表。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_DeleteSupportedCameraOutputCapability()

Camera_ErrorCode OH_CameraManager_DeleteSupportedCameraOutputCapability(Camera_Manager* cameraManager, Camera_OutputCapability* cameraOutputCapability) **描述**

 删除支持的输出能力。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_OutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-outputcapability)* cameraOutputCapability 要删除的Camera_OutputCapability。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_IsCameraMuted()

Camera_ErrorCode OH_CameraManager_IsCameraMuted(Camera_Manager* cameraManager, bool* isCameraMuted) **描述**

 确定相机是否静音。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  bool* isCameraMuted 如果方法调用成功，将返回相机是否静音的结果。返回true表示相机已静音，返回false表示未静音。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_CreateCaptureSession()

Camera_ErrorCode OH_CameraManager_CreateCaptureSession(Camera_Manager* cameraManager, Camera_CaptureSession** captureSession) **描述**

 创建捕获会话实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_CaptureSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-capturesession)** captureSession 如果方法调用成功，将创建Camera_CaptureSession。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateCameraInput()

Camera_ErrorCode OH_CameraManager_CreateCameraInput(Camera_Manager* cameraManager, const Camera_Device* camera, Camera_Input** cameraInput) **描述**

 创建相机输入实例。

 **需要权限：** ohos.permission.CAMERA

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 用于创建Camera_Input实例的Camera_Device。  [Camera_Input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-input)** cameraInput 如果方法调用成功，将创建Camera_Input实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateCameraInput_WithPositionAndType()

Camera_ErrorCode OH_CameraManager_CreateCameraInput_WithPositionAndType(Camera_Manager* cameraManager, Camera_Position position, Camera_Type type, Camera_Input** cameraInput) **描述**

 创建具有位置和类型的相机输入实例。

 **需要权限：** ohos.permission.CAMERA

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_Position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_position) position 用于创建Camera_Input实例的相机位置。  [Camera_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_type) type 用于创建Camera_Input实例的相机类型。  [Camera_Input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-input)** cameraInput 如果方法调用成功，将创建Camera_Input实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreatePreviewOutput()

Camera_ErrorCode OH_CameraManager_CreatePreviewOutput(Camera_Manager* cameraManager, const Camera_Profile* profile, const char* surfaceId, Camera_PreviewOutput** previewOutput) **描述**

 创建预览输出实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-profile)* profile 用于创建Camera_PreviewOutput实例的相机流配置文件。  const char* surfaceId 用于创建Camera_PreviewOutput实例的surfaceId。  [Camera_PreviewOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-previewoutput)** previewOutput 如果方法调用成功，将创建Camera_PreviewOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreatePreviewOutputUsedInPreconfig()

Camera_ErrorCode OH_CameraManager_CreatePreviewOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_PreviewOutput** previewOutput) **描述**

 创建在预配置流中使用的预览输出实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  const char* surfaceId 用于创建Camera_PreviewOutput实例的surfaceId。  [Camera_PreviewOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-previewoutput)** previewOutput 如果方法调用成功，将创建Camera_PreviewOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreatePhotoOutput()

Camera_ErrorCode OH_CameraManager_CreatePhotoOutput(Camera_Manager* cameraManager, const Camera_Profile* profile, const char* surfaceId, Camera_PhotoOutput** photoOutput) **描述**

 创建一个拍照输出实例。该接口只支持创建JPEG格式的拍照输出对象。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-profile)* profile 用于创建Camera_PhotoOutput实例的相机流配置文件。  const char* surfaceId 用于创建Camera_PhotoOutput实例的surfaceId。  [Camera_PhotoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-photooutput)** photoOutput 如果方法调用成功，将创建Camera_PhotoOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreatePhotoOutputUsedInPreconfig()

Camera_ErrorCode OH_CameraManager_CreatePhotoOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_PhotoOutput** photoOutput) **描述**

 创建在预配置流中使用的照片输出实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  const char* surfaceId 用于创建Camera_PhotoOutput实例的surfaceId。  [Camera_PhotoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-photooutput)** photoOutput 如果方法调用成功，将创建Camera_PhotoOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreatePhotoOutputWithoutSurface()

Camera_ErrorCode OH_CameraManager_CreatePhotoOutputWithoutSurface(Camera_Manager *cameraManager, const Camera_Profile *profile, Camera_PhotoOutput **photoOutput) **描述**

 创建照片输出实例，调用此函数不需要surfaceId。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager) *cameraManager 相机管理器实例。  [const Camera_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-profile) *profile 用于创建Camera_PhotoOutput实例的相机流配置文件。  [Camera_PhotoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-photooutput) **photoOutput 如果方法调用成功，将创建Camera_PhotoOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateVideoOutput()

Camera_ErrorCode OH_CameraManager_CreateVideoOutput(Camera_Manager* cameraManager, const Camera_VideoProfile* profile, const char* surfaceId, Camera_VideoOutput** videoOutput) **描述**

 创建一个录像输出实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_VideoProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-videoprofile)* profile 用于创建Camera_VideoOutput实例的录像配置文件。  const char* surfaceId 用于创建Camera_VideoOutput实例的surfaceId。  [Camera_VideoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-videooutput)** videoOutput 如果方法调用成功，将创建Camera_VideoOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateVideoOutputUsedInPreconfig()

Camera_ErrorCode OH_CameraManager_CreateVideoOutputUsedInPreconfig(Camera_Manager* cameraManager, const char* surfaceId, Camera_VideoOutput** videoOutput) **描述**

 创建在预配置流中使用的视频输出实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  const char* surfaceId 用于创建Camera_VideoOutput实例的surfaceId。  [Camera_VideoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-videooutput)** videoOutput 如果方法调用成功，将创建Camera_VideoOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateMetadataOutput()

Camera_ErrorCode OH_CameraManager_CreateMetadataOutput(Camera_Manager* cameraManager, const Camera_MetadataObjectType* profile, Camera_MetadataOutput** metadataOutput) **描述**

 创建元数据输出实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_MetadataObjectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_metadataobjecttype)* profile 用于创建Camera_MetadataOutput实例的元数据对象类型。  [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)** metadataOutput 如果方法调用成功，将创建Camera_MetadataOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_CreateMetadataOutputWithObjectTypes()

Camera_ErrorCode OH_CameraManager_CreateMetadataOutputWithObjectTypes(Camera_Manager* cameraManager, const Camera_MetadataObjectType* metadataObjectTypes, uint32_t size, Camera_MetadataOutput** metadataOutput) **描述**

 使用元数据对象类型数组创建元数据输出实例。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_MetadataObjectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_metadataobjecttype)* metadataObjectTypes 用于创建Camera_MetadataOutput实例的元数据对象类型数组。  uint32_t size 元数据对象类型数组长度。  [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)** metadataOutput 如果方法调用成功，将创建Camera_MetadataOutput实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_GetSupportedSceneModes()

Camera_ErrorCode OH_CameraManager_GetSupportedSceneModes(Camera_Device* camera, Camera_SceneMode** sceneModes, uint32_t* size) **描述**

 获取特定相机支持的场景模式。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 要查询的Camera_Device。  [Camera_SceneMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_scenemode)** sceneModes 如果方法调用成功，将记录支持的场景模式列表。  uint32_t* size 如果方法调用成功，将记录支持的场景模式列表大小。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_DeleteSceneModes()

Camera_ErrorCode OH_CameraManager_DeleteSceneModes(Camera_Manager* cameraManager, Camera_SceneMode* sceneModes) **描述**

 删除场景模式。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_SceneMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_scenemode)* sceneModes 要删除的场景模式列表。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_IsTorchSupported()

Camera_ErrorCode OH_CameraManager_IsTorchSupported(Camera_Manager* cameraManager, bool* isTorchSupported) **描述**

 检查设备是否支持手电筒。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  bool* isTorchSupported 设备是否支持手电筒。返回true表示设备支持手电筒，返回false表示不支持。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_IsTorchSupportedByTorchMode()

Camera_ErrorCode OH_CameraManager_IsTorchSupportedByTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode, bool* isTorchSupported) **描述**

 检查设备是否支持指定的手电筒模式。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_TorchMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_torchmode) torchMode 要检查的相机手电筒模式。  bool* isTorchSupported 设备是否支持指定的手电筒模式。返回true表示设备支持该模式，返回false表示不支持。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_SetTorchMode()

Camera_ErrorCode OH_CameraManager_SetTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode) **描述**

 设置相机手电筒模式。

 **起始版本：** 12

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_TorchMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_torchmode) torchMode 要设置的相机手电筒模式。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_GetCameraDevice()

Camera_ErrorCode OH_CameraManager_GetCameraDevice(Camera_Manager* cameraManager, Camera_Position position, Camera_Type type, Camera_Device* camera) **描述**

 根据相机位置和相机类型查询指定的相机。

 获取指定[Camera_Position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_position)和[Camera_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_type)的相机镜头，如果该接口返回值为CAMERA_SERVICE_FATAL_ERROR，表示当前设备未查询到该镜头。

 **起始版本：** 18

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_Position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_position) position 要查询的相机位置。  [Camera_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_type) type 要查询的相机类型。  [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 要查询的Camera_Device。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_GetCameraDevices()

Camera_ErrorCode OH_CameraManager_GetCameraDevices(Camera_Manager* cameraManager, Camera_DeviceQueryInfo* deviceQueryInfo, uint32_t* cameraSize, Camera_Device** cameras) **描述**

 根据相机位置、相机类型数组和连接类型查询符合条件的相机列表。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_DeviceQueryInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-devicequeryinfo)* deviceQueryInfo 相机设备的查询信息实例。  uint32_t* cameraSize 查询的所支持的Camera_Device列表大小。  [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)** cameras 查询的所支持的Camera_Device列表。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_CameraManager_DeleteCameraDevices()

Camera_ErrorCode OH_CameraManager_DeleteCameraDevices(Camera_Manager* cameraManager, Camera_Device* cameras) **描述**

 删除指定相机设备。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* cameras 待删除的Camera_Device列表。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_CameraManager_GetCameraConcurrentInfos()

Camera_ErrorCode OH_CameraManager_GetCameraConcurrentInfos(Camera_Manager* cameraManager, const Camera_Device* camera, uint32_t deviceSize, Camera_ConcurrentInfo** cameraConcurrentInfo, uint32_t* infoSize) **描述**

 获取指定相机的并发信息。

 **起始版本：** 18

 **参数：**

  参数项 描述   [Camera_Manager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-manager)* cameraManager 相机管理器实例。  [const Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)* camera 用于查询的Camera_Device相机设备列表，推荐设置为包含[OH_CameraManager_GetCameraDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_getcameradevice)获取的前置与后置两个相机设备的相机设备列表。  uint32_t deviceSize 用于查询的相机设备列表长度, 必须设置为2（表示前置与后置两个用于并发的相机设备）。  [Camera_ConcurrentInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-concurrentinfo)** cameraConcurrentInfo 查询到的相机并发能力数组Camera_ConcurrentInfo，作为入参应当默认设置为空。

  如果相机支持并发，cameraConcurrentInfo会被赋值为查询到的相机并发能力数组Camera_ConcurrentInfo。

  如果相机不支持并发，不会对cameraConcurrentInfo进行更改，并且返回错误码[Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode).CAMERA_SERVICE_FATAL_ERROR。

   uint32_t* infoSize 查询到的相机并发能力数组长度，作为入参应当默认设置为0。

  如果相机支持并发，infoSize会被赋值为查询到的相机并发能力数组长度。

  如果相机不支持并发，不会对infoSize进行更改，并且返回错误码[Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode).CAMERA_SERVICE_FATAL_ERROR。

      **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常，或者相机不支持并发。

---
*Updated: 2026-04-22 06:40:52*
