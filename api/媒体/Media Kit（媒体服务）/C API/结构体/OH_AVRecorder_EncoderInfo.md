# OH_AVRecorder_EncoderInfo

> **分区**: API参考  |  **Slug**: `capi-avrecorder-oh-avrecorder-encoderinfo`  |  **DocID**: `ad241781a1244a9caaa3d52d36da49f2`

---

# OH_AVRecorder_EncoderInfo

 ```
typedef struct OH_AVRecorder_EncoderInfo {...} OH_AVRecorder_EncoderInfo
```
  #### 概述

提供编码器信息。

 **起始版本：** 18

 **相关模块：** [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

 **所在头文件：** [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) mimeType 编码器MIME类型名称。  char* type 编码器类型，audio表示音频编码器，video表示视频编码器。  [OH_AVRecorder_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-range) bitRate 比特率，包含该编码器的最大和最小值。  [OH_AVRecorder_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-range) frameRate 视频帧率，包含帧率的最大和最小值，仅视频编码器拥有。  [OH_AVRecorder_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-range) width 视频帧的宽度，包含宽度的最大和最小值，仅视频编码器拥有。  [OH_AVRecorder_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-range) height 视频帧的高度，包含高度的最大和最小值，仅视频编码器拥有。  [OH_AVRecorder_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-range) channels 音频采集声道数，包含声道数的最大和最小值，仅音频编码器拥有。  int32_t* sampleRate 音频采样率列表，包含所有可以使用的音频采样率值，仅音频编码器拥有。  int32_t sampleRateLen 音频采样率列表长度。

---
*Updated: 2026-04-22 06:41:06*
