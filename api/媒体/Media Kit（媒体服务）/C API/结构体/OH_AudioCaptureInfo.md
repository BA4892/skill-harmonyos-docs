# OH_AudioCaptureInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avscreencapture-oh-audiocaptureinfo`

**DocID**: `ff235c02b7a444148a695903f13c859c`

**NodeID**: `000201775795910761300fe729568355`

---

OH_AudioCaptureInfo

typedef struct OH_AudioCaptureInfo {...} OH_AudioCaptureInfo

概述

音频采样信息。

当audioSampleRate和audioChannels同时为0时，忽略该类型音频相关参数，不录制该类型音频数据。

起始版本：
 10

相关模块：

AVScreenCapture

所在头文件：

native_avscreen_capture_base.h

汇总

[h2]成员变量

名称

描述

int32_t audioSampleRate

音频采样率，支持列表请查阅Audio Kit的
AudioSamplingRate
。

int32_t audioChannels

音频声道数。

OH_AudioCaptureSourceType
 audioSource

音频源。

---
*2026-04-22T15:55:03.737Z*