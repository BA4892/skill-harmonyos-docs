# metadata_output.h

> **分区**: API参考  |  **Slug**: `capi-metadata-output-h`  |  **DocID**: `24fa833b3ee14e82a6ff8f6b81f61d56`

---

# metadata_output.h

  #### 概述

声明元数据输出概念。

 **引用文件：** <ohcamera/metadata_output.h>

 **库：** libohcamera.so

 **系统能力：** SystemCapability.Multimedia.Camera.Core

 **起始版本：** 11

 **相关模块：** [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks) MetadataOutput_Callbacks 元数据输出的回调。  [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput) Camera_MetadataOutput 元数据输出对象。

  可以使用[OH_CameraManager_CreateMetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_createmetadataoutput)方法创建指针。

        #### [h2]函数

 名称 typedef关键字 描述   [typedef void (*OH_MetadataOutput_OnMetadataObjectAvailable)(Camera_MetadataOutput* metadataOutput, Camera_MetadataObject* metadataObject, uint32_t size)](#oh_metadataoutput_onmetadataobjectavailable) OH_MetadataOutput_OnMetadataObjectAvailable 在[MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)中被调用的元数据输出元数据对象可用回调。  [typedef void (*OH_MetadataOutput_OnError)(Camera_MetadataOutput* metadataOutput, Camera_ErrorCode errorCode)](#oh_metadataoutput_onerror) OH_MetadataOutput_OnError 在[MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)中被调用的元数据输出错误回调。  [Camera_ErrorCode OH_MetadataOutput_RegisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)](#oh_metadataoutput_registercallback) - 注册元数据输出更改事件回调。  [Camera_ErrorCode OH_MetadataOutput_UnregisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback)](#oh_metadataoutput_unregistercallback) - 注销元数据输出更改事件回调。  [Camera_ErrorCode OH_MetadataOutput_Start(Camera_MetadataOutput* metadataOutput)](#oh_metadataoutput_start) - 启动元数据输出。  [Camera_ErrorCode OH_MetadataOutput_Stop(Camera_MetadataOutput* metadataOutput)](#oh_metadataoutput_stop) - 停止元数据输出。  [Camera_ErrorCode OH_MetadataOutput_Release(Camera_MetadataOutput* metadataOutput)](#oh_metadataoutput_release) - 释放元数据输出实例。  [Camera_ErrorCode OH_MetadataOutput_AddMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)](#oh_metadataoutput_addmetadataobjecttypes) - 添加元数据对象类型。  [Camera_ErrorCode OH_MetadataOutput_RemoveMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size)](#oh_metadataoutput_removemetadataobjecttypes) - 移除元数据对象类型。       #### 函数说明

  #### [h2]OH_MetadataOutput_OnMetadataObjectAvailable()

typedef void (*OH_MetadataOutput_OnMetadataObjectAvailable)(Camera_MetadataOutput* metadataOutput, Camera_MetadataObject* metadataObject, uint32_t size) **描述**

 在[MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)中被调用的元数据输出元数据对象可用回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 传递回调的元数据输出实例。  [Camera_MetadataObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataobject)* metadataObject 回调传递的元数据实例信息。  uint32_t size 元数据对象的大小。       #### [h2]OH_MetadataOutput_OnError()

typedef void (*OH_MetadataOutput_OnError)(Camera_MetadataOutput* metadataOutput, Camera_ErrorCode errorCode) **描述**

 在[MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)中被调用的元数据输出错误回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 传递回调的元数据输出实例。  [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) errorCode 元数据输出的错误码。     **参考：**

 [CAMERA_SERVICE_FATAL_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode)

   #### [h2]OH_MetadataOutput_RegisterCallback()

Camera_ErrorCode OH_MetadataOutput_RegisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback) **描述**

 注册元数据输出更改事件回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 元数据输出实例。  [MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)* callback 要注册的元数据输出回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_MetadataOutput_UnregisterCallback()

Camera_ErrorCode OH_MetadataOutput_UnregisterCallback(Camera_MetadataOutput* metadataOutput, MetadataOutput_Callbacks* callback) **描述**

 注销元数据输出更改事件回调。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 元数据输出实例。  [MetadataOutput_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-metadataoutput-callbacks)* callback 要注销的元数据输出回调。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

        #### [h2]OH_MetadataOutput_Start()

Camera_ErrorCode OH_MetadataOutput_Start(Camera_MetadataOutput* metadataOutput) **描述**

 启动元数据输出。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 要启动的元数据输出实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SESSION_NOT_CONFIG：捕获会话未配置。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_MetadataOutput_Stop()

Camera_ErrorCode OH_MetadataOutput_Stop(Camera_MetadataOutput* metadataOutput) **描述**

 停止元数据输出。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 要停止的元数据输出实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_MetadataOutput_Release()

Camera_ErrorCode OH_MetadataOutput_Release(Camera_MetadataOutput* metadataOutput) **描述**

 释放元数据输出实例。

 **起始版本：** 11

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 要释放的元数据输出实例。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_MetadataOutput_AddMetadataObjectTypes()

Camera_ErrorCode OH_MetadataOutput_AddMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size) **描述**

 添加元数据对象类型。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 元数据输出实例。  [Camera_MetadataObjectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_metadataobjecttype)* types 用于添加到Camera_MetadataOutput实例的元数据对象类型数组。  uint32_t size 元数据对象类型数组长度。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

        #### [h2]OH_MetadataOutput_RemoveMetadataObjectTypes()

Camera_ErrorCode OH_MetadataOutput_RemoveMetadataObjectTypes(Camera_MetadataOutput* metadataOutput, Camera_MetadataObjectType* types, uint32_t size) **描述**

 移除元数据对象类型。

 **起始版本：** 23

 **参数：**

  参数项 描述   [Camera_MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-metadataoutput)* metadataOutput 元数据输出实例。  [Camera_MetadataObjectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_metadataobjecttype)* types 从Camera_MetadataOutput实例移除的元数据对象类型数组。  uint32_t size 元数据对象类型数组长度。     **返回：**

  类型 说明   [Camera_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode) CAMERA_OK：方法调用成功。

  CAMERA_INVALID_ARGUMENT：参数丢失或参数类型不正确。

  CAMERA_SERVICE_FATAL_ERROR：相机服务异常。

---
*Updated: 2026-04-22 06:40:56*
