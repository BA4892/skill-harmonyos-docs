# Camera Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-camerakit-6101`  |  **DocID**: `0412a437cc2c4e27bc87369dd329cb56`

---

# Camera Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  API模型切换 |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation: number): ImageRotation;

 差异内容：NA

  |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation?: number): ImageRotation;

 差异内容：stagemodelonly

  |  api/@ohos.multimedia.camera.d.ts |  
 API模型切换 |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree: number): ImageRotation;

 差异内容：NA

  |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree?: number): ImageRotation;

 差异内容：stagemodelonly

  |  api/@ohos.multimedia.camera.d.ts |  
 API模型切换 |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree: number): ImageRotation;

 差异内容：NA

  |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree?: number): ImageRotation;

 差异内容：stagemodelonly

  |  api/@ohos.multimedia.camera.d.ts |  
 删除错误码 |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation: number): ImageRotation;

 差异内容：7400101

  |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation?: number): ImageRotation;

 差异内容：NA

  |  api/@ohos.multimedia.camera.d.ts |  
 删除错误码 |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree: number): ImageRotation;

 差异内容：7400101

  |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree?: number): ImageRotation;

 差异内容：NA

  |  api/@ohos.multimedia.camera.d.ts |  
 删除错误码 |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree: number): ImageRotation;

 差异内容：7400101

  |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree?: number): ImageRotation;

 差异内容：NA

  |  api/@ohos.multimedia.camera.d.ts |  
 函数变更 |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation: number): ImageRotation;

 差异内容：displayRotation: number

  |  类名：PreviewOutput；

 API声明：getPreviewRotation(displayRotation?: number): ImageRotation;

 差异内容：displayRotation?: number

  |  api/@ohos.multimedia.camera.d.ts |  
 函数变更 |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree: number): ImageRotation;

 差异内容：deviceDegree: number

  |  类名：PhotoOutput；

 API声明：getPhotoRotation(deviceDegree?: number): ImageRotation;

 差异内容：deviceDegree?: number

  |  api/@ohos.multimedia.camera.d.ts |  
 函数变更 |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree: number): ImageRotation;

 差异内容：deviceDegree: number

  |  类名：VideoOutput；

 API声明：getVideoRotation(deviceDegree?: number): ImageRotation;

 差异内容：deviceDegree?: number

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraManager；

 API声明：getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

 差异内容：getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraManager；

 API声明：getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>;

 差异内容：getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraInput；

 API声明：on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

 差异内容：on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraInput；

 API声明：off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

 差异内容：off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：PreconfigType；

 API声明：PRECONFIG_HIGH_QUALITY_PHOTOSESSION_BT2020 = 4

 差异内容：PRECONFIG_HIGH_QUALITY_PHOTOSESSION_BT2020 = 4

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：PreviewOutput；

 API声明：isBandwidthCompressionSupported(): boolean;

 差异内容：isBandwidthCompressionSupported(): boolean;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：PreviewOutput；

 API声明：enableBandwidthCompression(enabled: boolean): void;

 差异内容：enableBandwidthCompression(enabled: boolean): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：camera；

 API声明：type ImageType = image.Image | image.Picture;

 差异内容：type ImageType = image.Image | image.Picture;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：camera；

 API声明：interface CapturePhoto

 差异内容：interface CapturePhoto

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CapturePhoto；

 API声明：main: ImageType;

 差异内容：main: ImageType;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CapturePhoto；

 API声明：release(): Promise<void>;

 差异内容：release(): Promise<void>;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：PhotoOutput；

 API声明：onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void;

 差异内容：onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：PhotoOutput；

 API声明：offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void;

 差异内容：offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：MetadataObjectType；

 API声明：HUMAN_BODY = 1

 差异内容：HUMAN_BODY = 1

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：camera；

 API声明：interface CameraOcclusionDetectionResult

 差异内容：interface CameraOcclusionDetectionResult

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraOcclusionDetectionResult；

 API声明：readonly isCameraOccluded: boolean;

 差异内容：readonly isCameraOccluded: boolean;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：CameraOcclusionDetectionResult；

 API声明：readonly isCameraLensDirty: boolean;

 差异内容：readonly isCameraLensDirty: boolean;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：MetadataOutput；

 API声明：addMetadataObjectTypes(types: Array<MetadataObjectType>): void;

 差异内容：addMetadataObjectTypes(types: Array<MetadataObjectType>): void;

  |  api/@ohos.multimedia.camera.d.ts |  
 新增API |  NA |  类名：MetadataOutput；

 API声明：removeMetadataObjectTypes(types: Array<MetadataObjectType>): void;

 差异内容：removeMetadataObjectTypes(types: Array<MetadataObjectType>): void;

  |  api/@ohos.multimedia.camera.d.ts |