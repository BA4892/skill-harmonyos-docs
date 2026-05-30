# HDR Vivid视频播放与录制开发实践

> **分区**: 最佳实践  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `bpta-hdrvivid`  |  **DocID**: `f00a2c55f82548b1987cf92230bcc948`  |  **NodeID**: `0002017755469036683699388b69b092`

---

# HDR Vivid视频播放与录制开发实践  

 #### 概述

HDR Vivid是高动态范围视频技术标准，中文名为“菁彩影像”。该标准旨在提供更丰富的色彩、更高的亮度和更深的对比度，从而为观众带来更加逼真的视觉体验。与传统的SDR（标准动态范围）视频相比，HDR Vivid视频能够展示更广泛的亮度范围和更细腻的色彩层次，使得画面更加生动和真实。它受亮度、对比度、色深、色域等因素影响，是一种提高画面亮度及对比度的画面处理技术。 其技术特点与优势包括：

 
- **高动态范围：**HDR Vivid通过更广的色域和更高的动态范围，使得画面能够容纳更多的细节和色彩层次。与传统的SDR相比，HDR Vivid的高光亮度是SDR的40倍，它能够同时呈现更深的黑色和更亮的白色，让画面的亮部和暗部细节更加清晰。
- **色彩丰富：**HDR Vivid支持10bit/12bit的色深，使得色彩过渡更加平滑，色彩表现更加细腻。色域面积相对BT.709标准增加了70%，色域越大证明能显示的颜色越多，HDR Vivid能够呈现更加真实的色彩，让用户感受到更加丰富的视觉体验。
- **智能优化：**作为一种动态HDR标准，HDR Vivid能够根据显示硬件和视频场景，逐帧动态优化画面的亮度、对比度和色彩。HDR Vivid使用动态元数据和智能映射引擎，将母版颜色容积映射到显示设备上，这种映射使得创作者的意图在不同显示设备上都得以保留，并且呈现最优画质效果，解决了传统制作和显示过程中色彩信息和亮度细节丢失的问题。

 基于系统不同的能力，本文给开发者提供了以下场景：

 
- [基于AVPlayer播放HDR Vivid视频](#section14393732191416)
- [基于AVCodec解码播放HDR Vivid视频](#section584353512238)
- [基于AVRecorder录制HDR Vivid视频](#section1957156132414)
- [基于AVCodec编码录制HDR Vivid视频](#section85025284348)

  #### 基于AVPlayer播放HDR Vivid视频

 #### [h2]实现原理

[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)提供功能完善的一体化播放能力，应用只需提供流媒体来源，无需数据解析和解码，即可实现播放效果。

 

  #### [h2]开发步骤

具体开发步骤可参考最佳实践《[基于AVPlayer基础播控实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-avplayer-basic-control)》。

  #### 基于AVCodec解码播放HDR Vivid视频

 #### [h2]实现原理

AVCodec模块中[视频解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-decoding)的Native API接口，可以完成视频解码功能，即将媒体数据在系统侧解码成YUV文件并送显至应用上。

 

  #### [h2]开发步骤

使用系统解码器AVCodec开发HDR Vivid视频播放功能，主要开发步骤为（详细开发步骤可参考[HDR Vivid视频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdr-vivid-video-player)）：

 
调用[OH_VideoDecoder_CreateByMime()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_createbymime)通过HEVC格式创建解码器实例对象。如果需要对HDR Vivid视频进行解码，需要配置MimeType为H265 (即OH_AVCODEC_MIMETYPE_VIDEO_HEVC)。```
// Create a decoder instance object
int32_t VideoDecoder::Create(const std::string &videoCodecMime) {
    decoder_ = OH_VideoDecoder_CreateByMime(videoCodecMime.c_str());
    CHECK_AND_RETURN_RET_LOG(decoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Create failed");
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoDecoder_RegisterCallback()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_registercallback)设置回调函数。```
// Setting the callback function
int32_t VideoDecoder::SetCallback(CodecUserData *codecUserData) {
    int32_t ret = AV_ERR_OK;
    ret = OH_VideoDecoder_RegisterCallback(decoder_,
                                           {SampleCallback::OnCodecError, SampleCallback::OnCodecFormatChange,
                                            SampleCallback::OnNeedInputBuffer, SampleCallback::OnNewOutputBuffer},
                                           codecUserData);
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Set callback failed, ret: %{public}d", ret);

    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoDecoder_Configure()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_configure)配置解码器。```
// Setting the Decoder
int32_t VideoDecoder::Configure(const SampleInfo &sampleInfo) {
    // ...
    int ret = OH_VideoDecoder_Configure(decoder_, format);
    // ...
}
```
 从[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件获取window参数，设置Surface，并调用[OH_VideoDecoder_Prepare()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_prepare)使解码器就绪。```
int32_t VideoDecoder::Config(const SampleInfo &sampleInfo, CodecUserData *codecUserData) {
    // ...
    // SetSurface from video decoder
    if (sampleInfo.window != nullptr) {
        int ret = OH_VideoDecoder_SetSurface(decoder_, sampleInfo.window);
        CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK && sampleInfo.window, AVCODEC_SAMPLE_ERR_ERROR,
                                 "Set surface failed, ret: %{public}d", ret);
    }
    
    // ...

    // Prepare video decoder
    {
        int ret = OH_VideoDecoder_Prepare(decoder_);
        CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Prepare failed, ret: %{public}d", ret);
    }

    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoDecoder_Start()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_start)启动解码器。```
// Start the Decoder
int32_t VideoDecoder::Start() {
    CHECK_AND_RETURN_RET_LOG(decoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Decoder is null");

    int ret = OH_VideoDecoder_Start(decoder_);
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Start failed, ret: %{public}d", ret);
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoDecoder_PushInputBuffer()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_pushinputbuffer)写入解码流。```
// Write the decoded stream
int32_t VideoDecoder::PushInputBuffer(CodecBufferInfo &info) {
    CHECK_AND_RETURN_RET_LOG(decoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Decoder is null");
    int32_t ret = OH_VideoDecoder_PushInputBuffer(decoder_, info.bufferIndex);
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Push input data failed");
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoDecoder_RenderOutputBuffer()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_renderoutputbuffer)渲染并释放解码帧。```
// Render and release decoded frames
int32_t VideoDecoder::FreeOutputBuffer(uint32_t bufferIndex, bool render) {
    CHECK_AND_RETURN_RET_LOG(decoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Decoder is null");

    int32_t ret = AVCODEC_SAMPLE_ERR_OK;
    if (render) {
        ret = OH_VideoDecoder_RenderOutputBuffer(decoder_, bufferIndex);
    } else {
        ret = OH_VideoDecoder_FreeOutputBuffer(decoder_, bufferIndex);
    }
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Free output data failed");
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 最后调用[OH_VideoDecoder_Destroy()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videodecoder-h#oh_videodecoder_destroy)销毁解码器实例，释放资源。```
// Destroy the decoder instance and release resources
int32_t VideoDecoder::Release() {
    if (decoder_ != nullptr) {
        OH_VideoDecoder_Flush(decoder_);
        OH_VideoDecoder_Stop(decoder_);
        OH_VideoDecoder_Destroy(decoder_);
        decoder_ = nullptr;
    }
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 
  #### 基于AVRecorder录制HDR Vivid视频

 #### [h2]实现原理

应用通过调用[AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro#avrecorder)实现视频录制时，先通过Camera接口调用相机服务，通过视频HDI捕获图像数据送显至应用，同时送至AVRecorder的录制服务，录制服务将图像数据编码后封装至文件中，实现视频录制功能。流程图如下：

 

  AVRecorder不支持设置AVMetadata音视频元数据的HDR类型。

  使用[Interface (CameraManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)+[Interface (AVRecorder)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder)录制HDR Vivid视频，与录制普通视频的区别主要在于：

 
- AVRecorder
AVRecoder需要配置isHdr参数为true，对应的编码格式必须为video/hevc。

 
 
- Camera
相机创建video output实例时，选择yuv 10bit profile（CAMERA_FORMAT_YCRCB_P010）。
- HDR录像需要相机支持视频防抖功能。
- 相机会话配置颜色空间为BT2020_HLG_LIMIT。

 
  #### [h2]开发步骤

针对原理中描述的四点不同，开发视频录制功能时，可参考以下步骤（详细开发步骤可参考[HDR Vivid相机录像(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-hdr-recording)）：

 
调用[media.createAVRecorder()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-f#mediacreateavrecorder9)创建AVRecorder实例。```
// Creating an AVRecorder Instance
try {
  this.avRecorder = await media.createAVRecorder();
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `createAVRecorder call failed. error code: ${err.code}`);
}
```
 配置预览流与录像输出流的分辨率为16:9，[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)参数中的变量isHdr为True，videoCodec为VIDEO_HEVC格式，以录制HDR Vivid视频。```
let videoSize: camera.Size = {
  width: 1920,
  height: 1080
}

let videoProfile: undefined | camera.VideoProfile = videoProfilesArray.find((profile: camera.VideoProfile) => {
  return profile.size.width === videoSize.width && profile.size.height === videoSize.height;
});
if (!videoProfile) {
  Logger.error(TAG, 'videoProfile is not found');
  return;
}

let aVRecorderProfile: media.AVRecorderProfile = {
  // ...
  videoCodec: media.CodecMimeType.VIDEO_HEVC,
  // ...
};
```
 调用[createVideoOutput()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#createvideooutput)创建VideoOutput实例，选择yuv 10bit profile。```
let videoProfile: undefined | camera.VideoProfile = videoProfilesArray.find((profile: camera.VideoProfile) => {
  return profile.size.width === videoSize.width && profile.size.height === videoSize.height &&
    profile.format === camera.CameraFormat.CAMERA_FORMAT_YCRCB_P010;
});

let previewProfile: undefined | camera.Profile = previewProfilesArray.find((profile: camera.Profile) => {
  return profile.format === camera.CameraFormat.CAMERA_FORMAT_YCRCB_P010 &&
    profile.size.width === videoSize.width && profile.size.height == videoSize.height
});

// ...

// ...

try {
  await this.avRecorder.prepare(avRecorderConfig);
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `prepare call failed. error code: ${err.code}`);
}

let videoSurfaceId: string | undefined = undefined;
try {
  videoSurfaceId = await this.avRecorder.getInputSurface();
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `getInputSurface call failed. error code: ${err.code}`);
}
if (videoSurfaceId === undefined) {
  return;
}

try {
  this.videoOutput = this.cameraManager.createVideoOutput(videoProfile, videoSurfaceId);
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `Failed to create the videoOutput instance. error: ${JSON.stringify(err)}`);
}
```
 创建并配置普通录像模式（[Interface (VideoSession)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession)）的相机会话。```
// Create and configure a camera session
try {
  this.captureSession = this.cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;
} catch (error) {
  // ...
}
// ...

try {
  this.captureSession.beginConfig();
} catch (error) {
  // ...
}

// ...

try {
  await this.captureSession.commitConfig();
} catch (error) {
  // ...
}

// ...

try {
  await this.captureSession.start();
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `captureSession start error: ${JSON.stringify(err)}`);
}
```
 同时设置视频防抖。

 ```
let mode: camera.VideoStabilizationMode = camera.VideoStabilizationMode.AUTO;
// Check whether video anti-shake is supported
let isSupported: boolean = false;
try {
  isSupported = this.captureSession.isVideoStabilizationModeSupported(mode);
  Logger.info(TAG, `isVideoStabilizationModeSupported: ${JSON.stringify(isSupported)}`);
} catch (error) {
  // If the failure occurs, the error code error.code is returned and processed
  let err = error as BusinessError;
  Logger.error(`The isVideoStabilizationModeSupported call failed. error code: ${err.code}`);
}
if (isSupported) {
  try {
    // Setting video anti-shake
    this.captureSession.setVideoStabilizationMode(mode);
    let activeVideoStabilizationMode = this.captureSession.getActiveVideoStabilizationMode();
    Logger.info(`activeVideoStabilizationMode: ${activeVideoStabilizationMode}`);
  } catch (error) {
    let err = error as BusinessError;
    Logger.warn(TAG,
      `setVideoStabilizationMode or getActiveVideoStabilizationMode failed, code=${err.code}, message=${err.message}`);
  }
} else {
  Logger.error(`videoStabilizationMode: ${mode} is not support`);
}
```
 设置色彩空间属性。

 ```
// Set the color space of the camera session to BT2020_HLG_LIMIT
if (isSupported) {
  let colorSpace: colorSpaceManager.ColorSpace = colorSpaceManager.ColorSpace.BT2020_HLG_LIMIT;
  let colorSpaces: Array<colorSpaceManager.ColorSpace> = [];
  try {
    colorSpaces = this.captureSession.getSupportedColorSpaces();
  } catch (error) {
    let err = error as BusinessError;
    Logger.error(`The getSupportedColorSpaces call failed. error code: ${err.code}`);
  }
  let isSupportedColorSpaces = colorSpaces.indexOf(colorSpace) >= 0;
  if (isSupportedColorSpaces) {
    Logger.info(`setColorSpace: ${colorSpace}`);
    try {
      this.captureSession.setColorSpace(colorSpace);
    } catch (error) {
      let err = error as BusinessError;
      Logger.error(`The setColorSpace call failed, error code: ${err.code}`);
    }
    try {
      let activeColorSpace: colorSpaceManager.ColorSpace = this.captureSession.getActiveColorSpace();
      Logger.info(`activeColorSpace: ${activeColorSpace}`);
    } catch (error) {
      let err = error as BusinessError;
      Logger.error(`getActiveColorSpace failed, code=${err.code}, message=${err.message}`);
    }
  } else {
    Logger.error(`colorSpace: ${colorSpace} is not support`);
  }
}
```
 启动video输出流。```
this.videoOutput.start((err: BusinessError) => {
  if (err) {
    Logger.error(TAG, `Failed to start the video output. error: ${JSON.stringify(err)}`);
    return;
  }
  Logger.info(TAG, 'Callback invoked to indicate the video output start success.');
});
```
 启动recorder进行录制。```
async startRecord() {
  if (this.avRecorder) {
    try {
      await this.avRecorder.start();
    } catch (error) {
      let err = error as BusinessError;
      Logger.error(TAG, `avRecorder start error: ${JSON.stringify(err)}`);
    }
  }
}
```
 
  #### 基于AVCodec编码录制HDR Vivid视频

 #### [h2]实现原理

应用通过调用AVCodec实现视频录制时，先通过Camera接口调用相机服务，通过视频HDI捕获图像数据送显至应用，同时送至AVCodec的编码模块将图像数据编码后封装至文件中，实现视频录制功能。流程图如下：

 

 使用[Interface (CameraManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)+AVCodec录制HDR Vivid视频，与录制普通视频的区别主要在于：

 
- AVCodec
视频编码器AVCodec需要选择HEVC格式，并配置profile为HEVC_PROFILE_MAIN_10的相机底层。
- 编码器AVCodec配置颜色相关参数为COLOR_PRIMARY_BT2020。

 - Camera
相机在创建video output实例时，选择yuv 10bit profile。
- HDR录像需要相机支持视频防抖功能，并配置颜色空间为BT2020_HLG_LIMIT。

 
  #### [h2]开发步骤

针对以上四点不同，使用Camera+AVCodec开发HDR Vivid视频录制功能时，可参考以下步骤（详细开发步骤可参考[HDR Vivid视频录制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdr-vivid-video-recorder)）：

 
调用[OH_VideoEncoder_CreateByMime()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videoencoder-h#oh_videoencoder_createbymime)根据MIME类型创建HEVC格式视频编码器并初始化。```
// Create a video coder and initialize it
int32_t VideoEncoder::Create(const std::string &videoCodecMime) {
    encoder_ = OH_VideoEncoder_CreateByMime(videoCodecMime.c_str());
    CHECK_AND_RETURN_RET_LOG(encoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Create failed");
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 配置HDR Vivid相关参数，包括可选配置视频帧宽度、视频帧高度、视频颜色格式，以及必须配置为HEVC_PROFILE_MAIN_10的[OH_HEVCProfile()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_hevcprofile)，表示HEVC编码档次为10bit主档次。```
int32_t VideoEncoder::Configure(const SampleInfo &sampleInfo) {
    // ...
    // Setting HDRVivid-related parameters
    if (sampleInfo.isHDRVivid) {
        OH_AVFormat_SetIntValue(format, OH_MD_KEY_I_FRAME_INTERVAL, sampleInfo.iFrameInterval);
        OH_AVFormat_SetIntValue(format, OH_MD_KEY_RANGE_FLAG, sampleInfo.rangFlag);
        OH_AVFormat_SetIntValue(format, OH_MD_KEY_COLOR_PRIMARIES, sampleInfo.primary);
        OH_AVFormat_SetIntValue(format, OH_MD_KEY_TRANSFER_CHARACTERISTICS, sampleInfo.transfer);
        OH_AVFormat_SetIntValue(format, OH_MD_KEY_MATRIX_COEFFICIENTS, sampleInfo.matrix);
    }
    // ...
}
```
 使用[OH_VideoEncoder_Configure()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videoencoder-h#oh_videoencoder_configure)配置编码器。```
// Setting the Encoder
int ret = OH_VideoEncoder_Configure(encoder_, format);
```
 ArkTS侧调用[createVideoOutput()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager#createvideooutput)创建VideoOutput实例，选择yuv 10bit profile。```
export function videoProfileCheck(cameraManager: camera.CameraManager,
  cameraData: CameraDataModel): undefined | camera.VideoProfile {
  let cameraDevices = cameraManager.getSupportedCameras();
  // ...

  let profiles: camera.CameraOutputCapability =
    cameraManager.getSupportedOutputCapability(cameraDevices[0], camera.SceneMode.NORMAL_VIDEO);
  // ...

  let videoProfiles: Array<camera.VideoProfile> = profiles.videoProfiles;
  // ...

  let videoProfile: undefined | camera.VideoProfile = videoProfiles.find((profile: camera.VideoProfile) => {
    if (cameraData.isHDRVivid) {
      // ...
        return profile.size.width === cameraData.cameraWidth &&
          profile.size.height === cameraData.cameraHeight &&
          profile.format === camera.CameraFormat.CAMERA_FORMAT_YCBCR_P010 &&
          profile.frameRateRange.min === 1 &&
          profile.frameRateRange.max === 30;
        // ...
    } else {
      // ...
    }
  });
  return videoProfile;
}
```
 ```
let videoProfile: undefined | camera.VideoProfile = videoProfileCheck(cameraManager, params);
if (!videoProfile) {
  Logger.error(TAG, 'videoProfile is not found!');
  return;
}

// ...

// Create the encoder output object
encoderVideoOutput = cameraManager.createVideoOutput(videoProfile, params.surfaceId);
if (encoderVideoOutput === undefined) {
  Logger.error(TAG, 'encoderVideoOutput is undefined');
  return;
}
Logger.info(TAG, 'encoderVideoOutput  success');
```
 设置视频防抖。```
function isVideoStabilizationModeSupported(session: camera.VideoSession, mode: camera.VideoStabilizationMode): boolean {
  let isSupported: boolean = false;
  try {
    isSupported = session.isVideoStabilizationModeSupported(mode);
  } catch (error) {
    // Failed to return error code error. code and handle it.
    let err = error as BusinessError;
    Logger.error(TAG, `The isVideoStabilizationModeSupported call failed. error code: ${err.code}`);
  }
  return isSupported;
}

function setVideoStabilizationMode(session: camera.VideoSession): boolean {
  let mode: camera.VideoStabilizationMode = camera.VideoStabilizationMode.AUTO;
  // Check if video stabilization is supported.
  let isSupported: boolean = isVideoStabilizationModeSupported(session, mode);
  if (isSupported) {
    Logger.info(TAG, `setVideoStabilizationMode: ${mode}`);
    try {
      // Setting video anti-shake
      session.setVideoStabilizationMode(mode);
      let activeVideoStabilizationMode = session.getActiveVideoStabilizationMode();
      Logger.info(TAG, `activeVideoStabilizationMode: ${activeVideoStabilizationMode}`);
    } catch (error) {
      hilog.error(0x0000, TAG, `setVideoStabilizationMode catch error, code: ${error.code}, message: ${error.message}`);
    }
  } else {
    Logger.info(TAG, `videoStabilizationMode: ${mode} is not support`);
  }
  return isSupported;
}
```
 设置色彩空间。

 ```
function getSupportedColorSpaces(session: camera.VideoSession): Array<colorSpaceManager.ColorSpace> {
  let colorSpaces: Array<colorSpaceManager.ColorSpace> = [];
  try {
    colorSpaces = session.getSupportedColorSpaces();
  } catch (error) {
    let err = error as BusinessError;
    Logger.error(TAG, `The getSupportedColorSpaces call failed. error code: ${err.code}`);
  }
  return colorSpaces;
}

// Set the color space
function setColorSpaceBeforeCommitConfig(session: camera.VideoSession, isHdr: number): void {
  try {
    let colorSpace: colorSpaceManager.ColorSpace =
      isHdr ? colorSpaceManager.ColorSpace.BT2020_HLG_LIMIT : colorSpaceManager.ColorSpace.BT709_LIMIT;
    let colorSpaces: Array<colorSpaceManager.ColorSpace> = getSupportedColorSpaces(session);
    let isSupportedColorSpaces = colorSpaces.indexOf(colorSpace) >= 0;
    if (isSupportedColorSpaces) {
      Logger.info(TAG, `setColorSpace: ${colorSpace}`);
      session.setColorSpace(colorSpace);
      let activeColorSpace: colorSpaceManager.ColorSpace = session.getActiveColorSpace();
      Logger.info(TAG, `activeColorSpace: ${activeColorSpace}`);
    } else {
      Logger.info(TAG, `colorSpace: ${colorSpace} is not support`);
    }
  } catch (error) {
    hilog.error(0x0000, TAG, `setColorSpace catch error, code: ${error.code}, message: ${error.message}`);
  }
}
```
 创建并配置相机会话。```
let XComponentPreviewProfile: camera.Profile | undefined = previewProfileCameraCheck(cameraManager, params);
if (XComponentPreviewProfile === undefined) {
  Logger.error(TAG, 'XComponentPreviewProfile is not found');
  return;
}
// ...

// Create a session flow
try {
  videoSession = cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;
} catch (error) {
  let err = error as BusinessError;
  Logger.error(TAG, `Failed to create the session instance. error: ${JSON.stringify(err)}`);
}
// ...

// Start Configuring the session.
try {
  videoSession.beginConfig();
} catch (error) {
  // ...
}
// ...
  let err = error as BusinessError;
  Logger.error(TAG, `Failed to add cameraInput. error: ${JSON.stringify(err)}`);
  // ...
// Add the XComponent preview stream to the session.
try {
  videoSession.addOutput(XComponentPreviewOutput);
} catch (error) {
  // ...
}

// Add the encoder video stream to the session.
try {
  videoSession.addOutput(encoderVideoOutput);
} catch (error) {
  // ...
}

// Submit configuration information.
try {
  await videoSession.commitConfig();
} catch (error) {
  // ...
}

// Set video stabilization.
if (setVideoStabilizationMode(videoSession)) {
  // Set color space.
  setColorSpaceBeforeCommitConfig(videoSession, params.isHDRVivid);
}

// Session start.
try {
  await videoSession.start();
} catch (error) {
  // ...
}

// Start the video output stream
encoderVideoOutput.start((err: BusinessError) => {
  // ...
});
```
 调用[OH_AVMuxer_Create()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avmuxer-h#oh_avmuxer_create)创建AVMuxer封装器实例对象，设置封装格式及封装路径，配置HDR Vivid相关参数。```
// Create an encapsulator instance object and set the encapsulation format to mp4
int32_t Muxer::Create(int32_t fd) {
    muxer_ = OH_AVMuxer_Create(fd, AV_OUTPUT_FORMAT_MPEG_4);
    CHECK_AND_RETURN_RET_LOG(muxer_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Muxer create failed, fd: %{public}d", fd);
    return AVCODEC_SAMPLE_ERR_OK;
}

int32_t Muxer::Config(SampleInfo &sampleInfo) {
    CHECK_AND_RETURN_RET_LOG(muxer_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Muxer is null");
    
    OH_AVFormat *formatAudio = OH_AVFormat_CreateAudioFormat(sampleInfo.audioCodecMime.data(),
                                                             sampleInfo.audioSampleRate, sampleInfo.audioChannelCount);
    CHECK_AND_RETURN_RET_LOG(formatAudio != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Create audio format failed");
    OH_AVFormat_SetIntValue(formatAudio, OH_MD_KEY_PROFILE, AAC_PROFILE_LC);
    int32_t ret = OH_AVMuxer_AddTrack(muxer_, &audioTrackId_, formatAudio);
    OH_AVFormat_Destroy(formatAudio); 

    OH_AVFormat *formatVideo =
        OH_AVFormat_CreateVideoFormat(sampleInfo.videoCodecMime.data(), sampleInfo.videoWidth, sampleInfo.videoHeight);
    CHECK_AND_RETURN_RET_LOG(formatVideo != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Create video format failed");

    OH_AVFormat_SetDoubleValue(formatVideo, OH_MD_KEY_FRAME_RATE, sampleInfo.frameRate);
    OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_WIDTH, sampleInfo.videoWidth);
    OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_HEIGHT, sampleInfo.videoHeight);
    OH_AVFormat_SetStringValue(formatVideo, OH_MD_KEY_CODEC_MIME, sampleInfo.videoCodecMime.data());
    if (sampleInfo.isHDRVivid) {
        OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_VIDEO_IS_HDR_VIVID, 1);
        OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_RANGE_FLAG, sampleInfo.rangFlag);
        OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_COLOR_PRIMARIES, sampleInfo.primary);
        OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_TRANSFER_CHARACTERISTICS, sampleInfo.transfer);
        OH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_MATRIX_COEFFICIENTS, sampleInfo.matrix);
    }

    ret = OH_AVMuxer_AddTrack(muxer_, &videoTrackId_, formatVideo);
    OH_AVFormat_Destroy(formatVideo);
    formatVideo = nullptr;
    OH_AVMuxer_SetRotation(muxer_, CAMERA_ANGLE);
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "AddTrack failed");
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 调用[OH_VideoEncoder_Start()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-videoencoder-h#oh_videoencoder_start)启动编码器。```
// Start Encoder
int32_t VideoEncoder::Start() {
    CHECK_AND_RETURN_RET_LOG(encoder_ != nullptr, AVCODEC_SAMPLE_ERR_ERROR, "Encoder is null");

    int ret = OH_VideoEncoder_Start(encoder_);
    CHECK_AND_RETURN_RET_LOG(ret == AV_ERR_OK, AVCODEC_SAMPLE_ERR_ERROR, "Start failed, ret: %{public}d", ret);
    return AVCODEC_SAMPLE_ERR_OK;
}
```
 
  #### 常见问题

 #### [h2]在播放HDR Vivid视频时，如何调节视频的亮度

方案1：可以参考文档使用[hdrBrightness()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent#hdrbrightness20)实现用于调整组件播放HDR视频的亮度。

 方案2：参考《[基于AVPlayer播放长视频实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-avplayer-long-video)》中[亮度控制](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-avplayer-long-video#section512331617222)章节。

  #### [h2]在播放视频前，如何判断一个视频是否为HDR类型视频

可通过avMetadataExtractor.fetchMetadata()获取视频信息AVMetadata，该信息中hdrType字段为AV_HDR_TYPE_NONE或者AV_HDR_TYPE_VIVID，以此来判断是不是HDR Vivid类型视频。

  #### 示例代码

- [实现HDR视频转码SDR视频功能](https://gitcode.com/harmonyos_samples/hdr2sdr/tree/master/)

---
*Updated: 2026-04-10 09:40:02*
