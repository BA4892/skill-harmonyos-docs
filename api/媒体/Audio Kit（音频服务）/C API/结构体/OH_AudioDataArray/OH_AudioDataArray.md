# OH_AudioDataArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-ohaudiosuite-oh-audiodataarray`

**DocID**: `ef6b6a02971c4a548a2c88d1213d134f`

**NodeID**: `0002017757959107613255db3a4fbe58`

---

OH_AudioDataArray

typedef struct {...} OH_AudioDataArray

概述

定义多路输出渲染接口的输入数据描述。当管线中存在多输出效果节点时，通过多输出渲染接口获取处理过后的音频数据。

起始版本：
 22

相关模块：

OHAudioSuite

所在头文件：

native_audio_suite_base.h

汇总

[h2]成员变量

名称

描述

void **audioDataArray

需要输出的音频数据地址。

int32_t arraySize

音频数组大小。

int32_t requestFrameSize

audioDataArray数组中地址的内存大小（单位为字节），应确保每个地址均具有requestFrameSize字节个大小。

---
*2026-04-22T15:53:59.650Z*