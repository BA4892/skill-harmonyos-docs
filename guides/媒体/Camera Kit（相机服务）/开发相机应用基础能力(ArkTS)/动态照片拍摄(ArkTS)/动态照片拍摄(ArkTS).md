# 动态照片拍摄(ArkTS)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `camera-moving-photo`  |  **DocID**: `14a545cc7d564f42ac411755e735ce7d`  |  **NodeID**: `000201775795526928779643f5dfa10a`

---

# 动态照片拍摄(ArkTS)

       相机框架提供动态照片拍摄能力，业务应用可以类似拍摄普通照片一样，一键式拍摄得到动态照片。

    应用开发动态照片主要分为以下步骤：

    
     - 应用开发动态照片前，请参考[申请相机开发的权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preparation)、[相机管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-device-management)、[设备输入](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-device-input)、[会话管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-session-management)等流程完成相机应用开发必选能力配置。
     - 查询当前设备的当前模式是否支持拍摄动态照片。
     - 如果支持动态照片，可以调用相机框架提供的使能接口**使能**动态照片能力。
     - 监听照片回调，将照片存入媒体库。可参考[MediaLibrary Kit-访问和管理动态照片资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-movingphoto)。
    
              #### 开发步骤

     详细的API说明请参考[@ohos.multimedia.camera (相机管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera)。

                         
        - 拍摄动态照片需要麦克风权限ohos.permission.MICROPHONE，权限申请和校验的方式请参考[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preparation)。否则拍摄的照片没有声音。
       
                
             导入依赖，需要导入相机框架、媒体库、图片相关领域依赖。

       ```
import { camera } from '@kit.CameraKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { BusinessError } from '@kit.BasicServicesKit';
```
             确定拍照输出流。

       通过[CameraOutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-i#cameraoutputcapability)中的photoProfiles属性，可获取当前设备支持的拍照输出流，通过[createPhotoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#createphotooutput11)方法创建拍照输出流。

       ```
function getPhotoOutput(cameraManager: camera.CameraManager,
  cameraOutputCapability: camera.CameraOutputCapability): camera.PhotoOutput | undefined {
  if (!cameraOutputCapability || !cameraOutputCapability.photoProfiles) {
    return;
  }
  let photoProfilesArray: Array<camera.Profile> = cameraOutputCapability.photoProfiles;
  if (!photoProfilesArray || photoProfilesArray.length === 0) {
    console.error("photoProfilesArray is null or []");
    return;
  }
  let photoOutput: camera.PhotoOutput | undefined = undefined;
  try {
    photoOutput = cameraManager.createPhotoOutput(photoProfilesArray[0]);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`Failed to createPhotoOutput. error: ${err}`);
  }
  return photoOutput;
}
```
             查询当前设备当前模式是否支持动态照片能力。

                                 查询是否支持动态照片前需要先完成相机会话配置、提交和启动会话，详细开发步骤请参考[会话管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-session-management)。

                      ```
function isMovingPhotoSupported(photoOutput: camera.PhotoOutput): boolean {
  let isSupported: boolean = false;
  try {
    isSupported = photoOutput.isMovingPhotoSupported();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isMovingPhotoSupported call failed. error code: ${err.code}`);
  }
  return isSupported;
}
```
             使能动态照片拍照能力。

                                 使能动态照片前需要使能[分段式拍照](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-deferred-capture)能力。

                      ```
function enableMovingPhoto(photoOutput: camera.PhotoOutput): void {
  try {
    photoOutput.enableMovingPhoto(true);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
   console.error(`The enableMovingPhoto call failed. error code: ${err.code}`);
  }
}
```
             触发拍照，与普通拍照方式相同，请参考[拍照](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting)。

     
                  #### 状态监听

     在相机应用开发过程中，可以随时监听动态照片拍照输出流状态。通过注册photoAsset的回调函数获取监听结果，photoOutput创建成功时即可监听。

     ```
function getPhotoAccessHelper(context: Context): photoAccessHelper.PhotoAccessHelper {
  let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
  return phAccessHelper;
}

async function mediaLibSavePhoto(photoAsset: photoAccessHelper.PhotoAsset,
  phAccessHelper: photoAccessHelper.PhotoAccessHelper): Promise<void> {
  try {
    let assetChangeRequest: photoAccessHelper.MediaAssetChangeRequest = new photoAccessHelper.MediaAssetChangeRequest(photoAsset);
    assetChangeRequest.saveCameraPhoto();
    await phAccessHelper.applyChanges(assetChangeRequest);
    console.info('apply saveCameraPhoto successfully');
  } catch (err) {
    console.error(`apply saveCameraPhoto failed with error: ${err.code}, ${err.message}`);
  }
}

function onPhotoOutputPhotoAssetAvailable(photoOutput: camera.PhotoOutput, context: Context): void {
  photoOutput.on('photoAssetAvailable', (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset): void => {
    if (err) {
      console.error(`photoAssetAvailable error: ${err}.`);
      return;
    }
    console.info('photoOutPutCallBack photoAssetAvailable');
    // 调用媒体库落盘接口保存一阶段图和动态照片视频。
    mediaLibSavePhoto(photoAsset, getPhotoAccessHelper(context));
  });
}
```
                  #### HDR动态照片

     从API version 23开始，相机提供HDR动态照片拍摄能力，即组成动态照片的静态图片与动态短视频均为高动态范围（HDR）内容，能够在高光与暗部细节、色彩层次和整体质感方面优于SDR成片效果。

     应用可以通过配置预览输出格式（Profile.format）和色彩空间（ColorSpace）灵活决定输出SDR/HDR动态照片。具体对应关系如下表所示，所有能力需先查后用，支持的预览输出格式通过接口[getSupportedFullOutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#getsupportedfulloutputcapability23)查询，支持的色彩空间通过接口[getSupportedColorSpaces](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-colormanagementquery#getsupportedcolorspaces12)查询。

           
                        | 静图动态范围          | 短视频动态范围          | 预览输出格式          | 色彩空间         
                               | SDR          | SDR          | CAMERA_FORMAT_YUV_420_SP          | SRGB         
                 | HDR          | SDR          | CAMERA_FORMAT_YUV_420_SP          | DISPLAY_P3         
                 | HDR          | HDR                    CAMERA_FORMAT_YCRCB_P010、

          CAMERA_FORMAT_YCBCR_P010

         | BT2020_HLG         
             

          **HDR配置说明**

     
      - 在配置预览输出流时，需要先通过接口[getSupportedFullOutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#getsupportedfulloutputcapability23)查询当前镜头和模式支持的完整能力，选择的预览输出格式为P010（CAMERA_FORMAT_YCRCB_P010/CAMERA_FORMAT_YCBCR_P010）。
      - 在配置色彩空间时，需要先通过接口[getSupportedColorSpaces](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-colormanagementquery#getsupportedcolorspaces12)获取当前设备所支持的色彩空间，再通过接口[setColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-colormanagement#setcolorspace12)设置色彩空间为BT2020_HLG。具体请参考[setColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-colormanagement#setcolorspace12)说明。

---
*Updated: 2026-04-20 01:45:35*
