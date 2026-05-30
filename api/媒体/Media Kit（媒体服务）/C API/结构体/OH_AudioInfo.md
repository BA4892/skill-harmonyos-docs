# OH_AudioInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avscreencapture-oh-audioinfo`

**DocID**: `9d2eda0d2e894cd7b2d7866471038a17`

**NodeID**: `0002017757959107613187548b24d29e`

---

OH_AudioInfo

typedef struct OH_AudioInfo {...} OH_AudioInfo

概述

音频信息。

同时采集音频麦克风和音频内录数据时，两路音频的audioSampleRate和audioChannels采样参数需要相同。

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

OH_AudioCaptureInfo
 micCapInfo

音频麦克风采样信息。

OH_AudioCaptureInfo
 innerCapInfo

音频内录采样信息。

OH_AudioEncInfo
 audioEncInfo

音频编码信息，原始码流时不需要设置。

---
*2026-04-22T15:55:03.739Z*