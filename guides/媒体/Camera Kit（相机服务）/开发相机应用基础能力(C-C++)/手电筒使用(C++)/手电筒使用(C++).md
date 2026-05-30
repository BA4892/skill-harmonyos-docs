# 手电筒使用(C++)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `native-camera-torch-use`  |  **DocID**: `e2c184e3bfd74aa487b3bb1b39b74ec7`  |  **NodeID**: `00020177579552692876012273507b94`

---

# 手电筒使用(C++)

       通过操作设备启用手电筒功能，可使设备的手电筒保持常亮状态。

    在使用相机应用并操作手电筒功能时，存在以下几种情况说明：

    
     - 当使用后置相机并设置闪光灯模式[Camera_FlashMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_flashmode)关闭时，手电筒功能无法启用。
     - 当使用前置相机时，手电筒可以正常启用并保持常亮状态。
     - 从前置相机切换至后置相机时，如果手电筒原本处于开启状态，它将会被自动关闭。
    
              #### 开发步骤

     详细的API说明请参考[OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)。

     
             导入NDK接口。选择系统提供的NDK接口能力，导入NDK接口的方法如下。

       ```
// 导入NDK接口头文件。
#include "hilog/log.h"
#include "ohcamera/camera.h"
#include "ohcamera/camera_input.h"
#include "ohcamera/capture_session.h"
#include "ohcamera/camera_manager.h"
```
             在CMake脚本中链接相关动态库。

       ```
target_link_libraries(entry PUBLIC
    libace_napi.z.so
    libohcamera.so
    libhilog_ndk.z.so
)
```
             通过[OH_CameraManager_IsTorchSupported()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_istorchsupported)方法，检测当前设备是否支持手电筒。

       ```
bool IsTorchSupported(Camera_Manager* cameraManager)
{
    // 判断设备是否支持手电筒模式。
    bool isTorchSupported = false;
    if (cameraManager == nullptr) {
        OH_LOG_ERROR(LOG_APP, "cameraManager is nullptr.");
        return isTorchSupported;
    }
    Camera_ErrorCode ret = OH_CameraManager_IsTorchSupported(cameraManager, &isTorchSupported);
    if (ret != CAMERA_OK) {
        OH_LOG_ERROR(LOG_APP, "OH_CameraManager_IsTorchSupported failed.");
    }
    if (isTorchSupported) {
        OH_LOG_INFO(LOG_APP, "isTorchSupported success.");
    } else {
        OH_LOG_ERROR(LOG_APP, "isTorchSupported failed.");
    }
    return isTorchSupported;
}
```
             通过[OH_CameraManager_IsTorchSupportedByTorchMode()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_istorchsupportedbytorchmode)方法，检测当前设备是否支持指定的手电筒模式。

       ```
bool IsTorchSupportedByTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode)
{
    bool torchModeSupported = false;
    Camera_ErrorCode ret = OH_CameraManager_IsTorchSupportedByTorchMode(cameraManager, torchMode, &torchModeSupported);
    if (ret != CAMERA_OK) {
         OH_LOG_ERROR(LOG_APP, "OH_CameraManager_IsTorchSupported failed.");
    }
    if (torchModeSupported) {
         OH_LOG_INFO(LOG_APP, "isTorchModeSupported success.");
    } else {
         OH_LOG_ERROR(LOG_APP, "isTorchModeSupported failed. %{public}d ", ret);
    }
    return torchModeSupported;
}
```
             通过[OH_CameraManager_SetTorchMode()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_settorchmode)方法，设置当前设备的手电筒模式。

       ```
Camera_ErrorCode SetTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode)
{
    // 在torchMode支持的情况下进行设置手电筒模式。
    Camera_ErrorCode ret = OH_CameraManager_SetTorchMode(cameraManager, torchMode);
    if (ret != CAMERA_OK) {
        OH_LOG_ERROR(LOG_APP, "OH_CameraManager_SetTorchMode failed. %{public}d ", ret);
    } else {
        OH_LOG_INFO(LOG_APP, "OH_CameraManager_SetTorchMode success.");
    }
    return ret;
}
```
     
                  #### 状态监听

     在相机应用开发过程中，可以随时监听手电筒状态，包括手电筒打开、手电筒关闭、手电筒不可用、手电筒恢复可用。手电筒状态发生变化，可通过回调函数获取状态的变化。

     注册torchStatus事件，回调会返回监听结果，callback返回Camera_TorchStatusInfo参数，参数的具体内容可参考相机管理器回调接口实例[Camera_TorchStatusInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-torchstatusinfo)。

     ```
void TorchStatusCallback(Camera_Manager *cameraManager, Camera_TorchStatusInfo* torchStatus)
{
   OH_LOG_INFO(LOG_APP, "TorchStatusCallback is called.");
}
Camera_ErrorCode RegisterTorchStatusCallback(Camera_Manager *cameraManager)
{
    Camera_ErrorCode ret = OH_CameraManager_RegisterTorchStatusCallback(cameraManager, TorchStatusCallback);
    if (ret != CAMERA_OK) {
       OH_LOG_ERROR(LOG_APP, "OH_CameraManager_RegisterTorchStatusCallback failed.");
    }
    return ret;
}
```

---
*Updated: 2026-04-20 01:45:33*
