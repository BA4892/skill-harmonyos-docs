# OH_AudioStreamInfo

> **分区**: API参考  |  **Slug**: `capi-ohaudio-oh-audiostreaminfo`  |  **DocID**: `b5f8350cbdfd4e08b0cf1119c09b52c3`

---

# OH_AudioStreamInfo

 ```
typedef struct OH_AudioStreamInfo {...} OH_AudioStreamInfo
```
  #### 概述

定义音频流信息，用于描述基本音频格式。

 **起始版本：** 19

 **相关模块：** [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

 **所在头文件：** [native_audiostream_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t samplingRate 音频流采样率。  [OH_AudioChannelLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h#oh_audiochannellayout) channelLayout 音频流声道布局。  [OH_AudioStream_EncodingType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_encodingtype) encodingType 音频流编码类型。  [OH_AudioStream_SampleFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sampleformat) sampleFormat 音频流采样格式。

---
*Updated: 2026-04-22 06:41:06*
