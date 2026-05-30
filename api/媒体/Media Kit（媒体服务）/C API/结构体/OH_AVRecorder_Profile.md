# OH_AVRecorder_Profile

> **分区**: API参考  |  **Slug**: `capi-avrecorder-oh-avrecorder-profile`  |  **DocID**: `3c87351b626a4555806dc19cd5e9ae8e`

---

# OH_AVRecorder_Profile

       ```
typedef struct OH_AVRecorder_Profile {...} OH_AVRecorder_Profile
```
              #### 概述

     定义音视频录制的详细参数。

     通过参数设置可以选择只录制音频或只录制视频：

     
      - 当 audioBitrate 或 audioChannels 为 0 时，不录制音频。
      - 当 videoFrameWidth 或 videoFrameHeight 为 0 时，不录制视频。
     
     各参数的范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)。

     **起始版本：** 18

     **相关模块：** [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

     **所在头文件：** [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

                  #### 汇总

                  #### [h2]成员变量

                                   名称         描述                                       int32_t audioBitrate         音频比特率。                         int32_t audioChannels         音频通道数。                         [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) audioCodec         音频编码格式。                         int32_t audioSampleRate         音频采样率。                         [OH_AVRecorder_ContainerFormatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_containerformattype) fileFormat         输出文件格式。                         int32_t videoBitrate         视频比特率。                         [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) videoCodec         视频编码格式。                         int32_t videoFrameWidth         视频宽度。                         int32_t videoFrameHeight         视频高度。                         int32_t videoFrameRate         视频帧率。                         bool isHdr                   是否录制HDR视频。

          true表示录制HDR视频，false表示不录制HDR视频。

          默认是false。

                         bool enableTemporalScale                   是否支持时域分层编码功能。

          true表示编码输出的码流中部分帧可以支持跳过不编码，false表示编码输出的码流中所有帧不支持跳过不编码，详情请参考[时域可分层视频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-temporal-scalability)。

          默认是false。

---
*Updated: 2026-04-22 06:40:58*
