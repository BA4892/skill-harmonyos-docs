# OH_AudioBuffer

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avscreencapture-oh-audiobuffer`

**DocID**: `1f0106d4811545238724b8905989bcd4`

**NodeID**: `0002017757959107613571d24eedb8ed`

---

OH_AudioBuffer

typedef struct OH_AudioBuffer {...} OH_AudioBuffer

概述

定义了音频数据的大小、类型、时间戳等配置信息。

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

uint8_t* buf

音频buffer内存。

int32_t size

音频buffer内存大小。

int64_t timestamp

音频buffer时间戳。

OH_AudioCaptureSourceType
 type

音频录制源类型。

---
*2026-04-22T15:55:03.744Z*