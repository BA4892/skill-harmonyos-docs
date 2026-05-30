# Constants

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-audio-c`

**DocID**: `0610e4b1dd7b4cc0a74df0263e3860ce`

**NodeID**: `0002017757959107612804b256968fa9`

---

Constants

本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

名称

类型

只读

说明

DEFAULT_VOLUME_GROUP_ID
9+

number

是

默认音量组id。

系统能力：
 SystemCapability.Multimedia.Audio.Volume

DEFAULT_INTERRUPT_GROUP_ID
9+

number

是

默认音频中断组id。

系统能力：
 SystemCapability.Multimedia.Audio.Interrupt

示例：

import { audio } from '@kit.AudioKit';

const defaultVolumeGroupId = audio.DEFAULT_VOLUME_GROUP_ID;
const defaultInterruptGroupId = audio.DEFAULT_INTERRUPT_GROUP_ID;

---
*2026-04-22T15:53:59.616Z*