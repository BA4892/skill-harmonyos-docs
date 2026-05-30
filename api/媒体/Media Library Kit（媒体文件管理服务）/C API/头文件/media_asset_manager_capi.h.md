# media_asset_manager_capi.h

> **分区**: API参考  |  **Slug**: `capi-media-asset-manager-capi-h`  |  **DocID**: `3a40b66495f14e3388935934c05d7d41`

---

# media_asset_manager_capi.h

  #### 概述

定义媒体资产管理器的接口。使用由媒体资产管理器提供的C API来请求媒体库资源。

 **库：** libmedia_asset_manager.so

 **引用文件：** <multimedia/media_library/media_asset_manager_capi.h>

 **系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

 **起始版本：** 12

 **相关模块：** [MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager)

   #### 汇总

  #### [h2]函数

 名称 描述   [OH_MediaAssetManager* OH_MediaAssetManager_Create(void)](#oh_mediaassetmanager_create) 创建一个媒体资产管理器。  [MediaLibrary_RequestId OH_MediaAssetManager_RequestImageForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)](#oh_mediaassetmanager_requestimageforpath) 请求具有目标路径的图像资源。  [MediaLibrary_RequestId OH_MediaAssetManager_RequestVideoForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)](#oh_mediaassetmanager_requestvideoforpath) 请求具有目标路径的视频资源。  [bool OH_MediaAssetManager_CancelRequest(OH_MediaAssetManager* manager, const MediaLibrary_RequestId requestId)](#oh_mediaassetmanager_cancelrequest) 通过请求Id取消请求。  [MediaLibrary_ErrorCode OH_MediaAssetManager_RequestMovingPhoto(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnMovingPhotoDataPrepared callback)](#oh_mediaassetmanager_requestmovingphoto) 根据不同的策略模式请求动态照片资源。  [MediaLibrary_ErrorCode OH_MediaAssetManager_RequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnImageDataPrepared callback)](#oh_mediaassetmanager_requestimage) 根据不同的策略模式请求图像资源。  [MediaLibrary_ErrorCode OH_MediaAssetManager_Release(OH_MediaAssetManager* manager)](#oh_mediaassetmanager_release) 释放[OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)实例。  [MediaLibrary_ErrorCode OH_MediaAssetManager_QuickRequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnQuickImageDataPrepared callback)](#oh_mediaassetmanager_quickrequestimage) 根据不同的策略模式请求图像资源。       #### 函数说明

  #### [h2]OH_MediaAssetManager_Create()

OH_MediaAssetManager* OH_MediaAssetManager_Create(void) **描述**

 创建一个媒体资产管理器。

 **起始版本：** 12

 **返回：**

  类型 说明   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* 返回一个指向OH_MediaAssetManager实例的指针。       #### [h2]OH_MediaAssetManager_RequestImageForPath()

MediaLibrary_RequestId OH_MediaAssetManager_RequestImageForPath(OH_MediaAssetManager* manager, const char* uri,MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback) **描述**

 请求具有目标路径的图像资源。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager 指向OH_MediaAssetManager实例的指针。  const char* uri 请求的图像资源的uri。  [MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions) requestOptions 请求策略模式配置项。  const char* destPath 请求资源的目标地址。  [OH_MediaLibrary_OnDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_ondataprepared) callback 媒体资源处理器，当所请求的媒体资源准备完成时会触发回调。     **返回：**

  类型 说明   [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid) 返回请求Id。       #### [h2]OH_MediaAssetManager_RequestVideoForPath()

MediaLibrary_RequestId OH_MediaAssetManager_RequestVideoForPath(OH_MediaAssetManager* manager, const char* uri,MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback) **描述**

 请求具有目标路径的视频资源。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager 指向OH_MediaAssetManager实例的指针。  const char* uri 请求的视频资源的uri。  [MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions) requestOptions 请求策略模式配置项。  const char* destPath 请求资源的目标地址。  [OH_MediaLibrary_OnDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_ondataprepared) callback 媒体资源处理器，当所请求的媒体资源准备完成时会触发回调。     **返回：**

  类型 说明   [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid) 返回请求Id。       #### [h2]OH_MediaAssetManager_CancelRequest()

bool OH_MediaAssetManager_CancelRequest(OH_MediaAssetManager* manager, const MediaLibrary_RequestId requestId) **描述**

 通过请求Id取消请求。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager 指向OH_MediaAssetManager实例的指针。  const [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid) requestId 待取消的请求Id。     **返回：**

  类型 说明   bool 如果请求成功取消，则返回true；否则返回false。       #### [h2]OH_MediaAssetManager_RequestMovingPhoto()

MediaLibrary_ErrorCode OH_MediaAssetManager_RequestMovingPhoto(OH_MediaAssetManager* manager,OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId,OH_MediaLibrary_OnMovingPhotoDataPrepared callback) **描述**

 根据不同的策略模式请求动态照片资源。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)实例指针。  [OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)* mediaAsset 要请求的媒体文件对象的[OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)实例。  [MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions) requestOptions 用于图像请求策略模式的[MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions)。  [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid)* requestId 请求的[MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid)，出参。  [OH_MediaLibrary_OnMovingPhotoDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_onmovingphotodataprepared) callback 当请求的动态照片准备就绪时调用[OH_MediaLibrary_OnMovingPhotoDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_onmovingphotodataprepared)。     **返回：**

  类型 说明   [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) MEDIA_LIBRARY_OK：方法调用成功。

  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：

  1. 未指定强制参数。

  2. 参数类型不正确。

  3. 参数验证失败。

  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。

  MEDIA_LIBRARY_PERMISSION_DENIED：没有权限。

  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。

        #### [h2]OH_MediaAssetManager_RequestImage()

MediaLibrary_ErrorCode OH_MediaAssetManager_RequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset,MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId,OH_MediaLibrary_OnImageDataPrepared callback) **描述**

 根据不同的策略模式请求图像资源。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)实例指针。  [OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)* mediaAsset 要请求的媒体文件对象的[OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)实例。  [MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions) requestOptions 用于图像请求策略模式的[MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions)。  [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid)* requestId 请求的[MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid)，出参。  [OH_MediaLibrary_OnImageDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_onimagedataprepared) callback 当请求的图像源准备就绪时调用[OH_MediaLibrary_OnImageDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_onimagedataprepared)。     **返回：**

  类型 说明   [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) MEDIA_LIBRARY_OK：方法调用成功。

  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：

  1. 未指定强制参数。

  2. 参数类型不正确。

  3. 参数验证失败。

  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。

  MEDIA_LIBRARY_PERMISSION_DENIED：没有权限。

  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。

        #### [h2]OH_MediaAssetManager_Release()

MediaLibrary_ErrorCode OH_MediaAssetManager_Release(OH_MediaAssetManager* manager) **描述**

 释放[OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)实例。

 **起始版本：** 13

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager 要释放的[OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)实例。     **返回：**

  类型 说明   [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) MEDIA_LIBRARY_OK：方法调用成功。

  MEDIA_LIBRARY_PARAMETER_ERROR：参数错误。可能的原因：

  1. 未指定强制参数。

  2. 参数类型不正确。

  3. 参数验证失败。

        #### [h2]OH_MediaAssetManager_QuickRequestImage()

MediaLibrary_ErrorCode OH_MediaAssetManager_QuickRequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnQuickImageDataPrepared callback) **描述**

 根据不同的策略模式请求图像资源。

 **需要权限：** ohos.permission.READ_IMAGEVIDEO

 **起始版本：** 23

 **参数：**

  参数项 描述   [OH_MediaAssetManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaassetmanager)* manager OH_MediaAssetManager的实例指针。  [OH_MediaAsset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-oh-mediaasset)* mediaAsset 要请求的媒体文件对象的OH_MediaAsset实例。  [MediaLibrary_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions) requestOptions 用于图像请求策略模式的MediaLibrary_RequestOptions。  [MediaLibrary_RequestId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestid)* requestId 请求的MediaLibrary_RequestId，该参数为输出参数。  [OH_MediaLibrary_OnQuickImageDataPrepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#oh_medialibrary_onquickimagedataprepared) callback 当请求的源数据准备就绪时，将会调用OH_MediaLibrary_OnQuickImageDataPrepared方法。     **返回：**

  类型 说明   [MediaLibrary_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-media-asset-base-capi-h#medialibrary_errorcode) MEDIA_LIBRARY_OK：方法调用成功。

  MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED：不支持该操作。

  MEDIA_LIBRARY_PERMISSION_DENIED：没有权限。

  MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR：内部系统错误。

---
*Updated: 2026-04-22 06:40:55*
