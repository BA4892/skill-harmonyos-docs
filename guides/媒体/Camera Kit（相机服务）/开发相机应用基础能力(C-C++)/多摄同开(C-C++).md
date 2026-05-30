# 多摄同开(C/C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `native-camera-concurrent-open`  |  **DocID**: `e146446b95424b13bd6064b6447c3d10`  |  **NodeID**: `0002017757955269287769d13343e5cc`

---

# 多摄同开(C/C++)

       从API version 18开始支持多摄同开，即应用同时开启前置/后置相机进行预览和录像（前置/后置相机同时拍照功能待开放）。

                     由于多摄同开需要前置/后置相机同时运行，所以对于相机功能有较大限制。当前版本仅支持以下七项基础功能，请勿对多摄同开开启的相机进行超出以下七种基础功能范围之外的查询、设置和使能。

      
       - 闪光灯。
       - 曝光。
       - 变焦。
       - 曝光补偿。
       - 对焦。
       - 防抖。
       - 色彩空间。
      
                       #### 开发步骤

     详细的API说明请参考[Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)。

     
             导入NDK接口，接口中提供了相机相关的属性和方法，导入方法如下。

       ```
#include <cstdint>
#include <unistd.h>
#include <string>
#include <thread>
#include <cstdio>
#include <fcntl.h>
#include <map>
#include <vector>
#include <native_buffer/native_buffer.h>
#include "iostream"
#include "mutex"
#include "hilog/log.h"
#include "ohcamera/camera.h"
#include "ohcamera/camera_input.h"
#include "ohcamera/capture_session.h"
#include "ohcamera/photo_output.h"
#include "ohcamera/preview_output.h"
#include "ohcamera/video_output.h"
#include "napi/native_api.h"
#include "ohcamera/camera_manager.h"
#include "common/log_common.h"
```
             在CMake脚本中链接相关动态库。

       ```
target_link_libraries(entry PUBLIC
   libohcamera.so
   libace_napi.z.so
   libnative_buffer.so
   libhilog_ndk.z.so
   librawfile.z.so)
```
             通过[OH_CameraManager_GetCameraDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_getcameradevice)方法获取对应的前置相机和后置相机。如果接口返回值为CAMERA_SERVICE_FATAL_ERROR，基于示例中的配置信息，表示当前设备不支持指定位置（前置/后置）的默认类型相机，无法实现多摄同开功能。

       ```
void GetSupportedCameras(Camera_Manager *cameraManager)
{
    Camera_Device *cameras;
    uint32_t size = 0;
    Camera_ErrorCode ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);
    if (cameras == nullptr || &size == nullptr || ret != CAMERA_OK) {
        return;
    }

    // 获取后置相机。
    ret = OH_CameraManager_GetCameraDevice(cameraManager, Camera_Position::CAMERA_POSITION_BACK, Camera_Type::CAMERA_TYPE_DEFAULT, &cameras[0]);

    // 获取前置相机。
    ret = OH_CameraManager_GetCameraDevice(cameraManager, Camera_Position::CAMERA_POSITION_FRONT, Camera_Type::CAMERA_TYPE_DEFAULT, &cameras[1]);
}
```
             获取对应的并发能力集。通过[OH_CameraManager_GetCameraConcurrentInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_getcameraconcurrentinfos)方法，获取[Camera_ConcurrentInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-concurrentinfo)相机并发能力集对象数组，数组包含了前置和后置同时开启的相机在指定多摄同开模式下支持的相机模式和相机输出能力，**在多摄同开场景下设置的模式和输出能力必须在并发能力集的范围之内**。

       ```
void GetSupportedOutputCapability(Camera_Manager *cameraManager, Camera_Device *cameras)
{
    Camera_ConcurrentInfo* cameraConcurrentInfo;
    uint32_t infoSize = 0;
    Camera_ErrorCode ret = OH_CameraManager_GetCameraConcurrentInfos(cameraManager, cameras, 2, &cameraConcurrentInfo, &infoSize);
    if (cameraConcurrentInfo == nullptr || cameraConcurrentInfo->outputCapabilities == nullptr
        || cameraConcurrentInfo->outputCapabilities->previewProfiles == nullptr || ret != CAMERA_OK) {
        return;
   }
}
```
             对应并发能力集创建PreviewOutput对象。

       ```
void CreatePreviewOutput(Camera_Manager *cameraManager, Camera_ConcurrentInfo* cameraConcurrentInfo, char* previewSurfaceId)
{
    Camera_Profile *profile = cameraConcurrentInfo->outputCapabilities->previewProfiles[0];
    if (profile == nullptr) {
        return;
    }
    Camera_PreviewOutput *previewOutput;
    Camera_ErrorCode ret = OH_CameraManager_CreatePreviewOutput(cameraManager, profile, previewSurfaceId, &previewOutput);
    if (previewOutput == nullptr || ret != CAMERA_OK) {
        return;
    }
}
```
             打开相机。通过[OH_CameraInput_OpenConcurrentCameras](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-input-h#oh_camerainput_openconcurrentcameras)以并发状态打开指定相机，在使用该接口前，请先查询接口是否支持并发能力集，并优先调用[OH_CameraManager_GetCameraConcurrentInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_getcameraconcurrentinfos)方法，获取多摄同开状态下的相机并发能力集。请勿在未查询并发能力集的情况下使用[OH_CameraInput_OpenConcurrentCameras](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-input-h#oh_camerainput_openconcurrentcameras)，否则会导致打开相机失败。

       ```
void CameraInputOpen(Camera_Manager *cameraManager, Camera_Device *cameras)
{
    Camera_Input *cameraInput;
    Camera_ErrorCode ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[0], &cameraInput);
    if (cameraInput == nullptr || ret != CAMERA_OK) {
        return;
    }
    // 当前版本只支持CAMERA_CONCURRENT_TYPE_LIMITED_CAPABILITY模式并发打开。
    ret = OH_CameraInput_OpenConcurrentCameras(cameraInput, Camera_ConcurrentType::CAMERA_CONCURRENT_TYPE_LIMITED_CAPABILITY);
    if (ret != CAMERA_OK) {
        return;
    }
}
```
             会话流程。配置对应的相机输入流[Camera_Input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-input)和需要的相机输出流，此处以预览输出流[Camera_PreviewOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-previewoutput)为例 。

       ```
void SessionFlowFn(Camera_CaptureSession *captureSession, Camera_Input *cameraInput, Camera_PreviewOutput *previewOutput)
{
    // 开始配置会话。
    Camera_ErrorCode ret = OH_CaptureSession_BeginConfig(captureSession);

    // 向会话中添加相机输入流。
    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);

    // 向会话中添加预览输出流。
    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);
 
    // 提交配置信息。
    ret = OH_CaptureSession_CommitConfig(captureSession);

    // 开始会话。
    ret = OH_CaptureSession_Start(captureSession);
 
    return;
}
```
             在多摄同开状态下，前/后置相机可配置的能力示例如下（当前版本仅支持本文开头部分所示的七项基础功能）。

       ```
// 闪光灯能力。
void HasFlashFn(uint32_t mode, Camera_CaptureSession *captureSession)
{
    Camera_FlashMode flashMode = static_cast<Camera_FlashMode>(mode);
    // 检查闪光灯。
    bool hasFlash = false;
    Camera_ErrorCode ret = OH_CaptureSession_HasFlash(captureSession, &hasFlash);
    if (captureSession == nullptr || ret != CAMERA_OK || !hasFlash) {
        return;
    }

    // 检查闪光灯模式是否支持。
    bool isSupported = false;
   ret = OH_CaptureSession_IsFlashModeSupported(captureSession, flashMode, &isSupported);
    if (ret != CAMERA_OK || !isSupported) {
        return;
    }

    // 设置闪光灯模式。
    ret = OH_CaptureSession_SetFlashMode(captureSession, flashMode);
    if (ret != CAMERA_OK) {
        return;
    }

    // 获取当前设备的闪光灯模式。
    ret = OH_CaptureSession_GetFlashMode(captureSession, &flashMode);
 }

// 曝光。
void IsExposureModeSupportedFn(uint32_t mode, Camera_CaptureSession *captureSession)
{
    Camera_ExposureMode exposureMode = static_cast<Camera_ExposureMode>(mode);
    bool isExposureModeSupported = false;
    Camera_ErrorCode ret = OH_CaptureSession_IsExposureModeSupported(captureSession, exposureMode, &isExposureModeSupported);
    if (&isExposureModeSupported == nullptr || ret != CAMERA_OK) {
        return;
    }
    ret = OH_CaptureSession_SetExposureMode(captureSession, exposureMode);
    if (ret != CAMERA_OK) {
        return;
    }
    ret = OH_CaptureSession_GetExposureMode(captureSession, &exposureMode);
}
```

---
*Updated: 2026-04-20 01:45:35*
