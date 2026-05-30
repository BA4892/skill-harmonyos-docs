# OH_AVScreenCaptureConfig

> **分区**: API参考  |  **Slug**: `capi-avscreencapture-oh-avscreencaptureconfig`  |  **DocID**: `3426d1b38d004da4848994328fdce008`

---

# OH_AVScreenCaptureConfig

 ```
typedef struct OH_AVScreenCaptureConfig {...} OH_AVScreenCaptureConfig
```
  #### 概述

屏幕录制配置参数。

 **起始版本：** 10

 **相关模块：** [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

 **所在头文件：** [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [OH_CaptureMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_capturemode) captureMode 屏幕录制的模式。  [OH_DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_datatype) dataType 屏幕录制流的数据格式。  [OH_AudioInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audioinfo) audioInfo 音频录制参数。  [OH_VideoInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-videoinfo) videoInfo 视频录制参数。  [OH_RecorderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-recorderinfo) recorderInfo 录制文件参数，当数据格式为OH_CAPTURE_FILE时必须设置。

---
*Updated: 2026-04-22 06:41:16*
