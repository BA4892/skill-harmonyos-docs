# OH_AVRecorder_Config

> **分区**: API参考  |  **Slug**: `capi-avrecorder-oh-avrecorder-config`  |  **DocID**: `b08c20ad36754f7c9c2a182e96491df4`

---

# OH_AVRecorder_Config

 ```
typedef struct OH_AVRecorder_Config {...} OH_AVRecorder_Config
```
  #### 概述

提供媒体AVRecorder的配置定义。

 **起始版本：** 18

 **相关模块：** [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

 **所在头文件：** [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [OH_AVRecorder_AudioSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_audiosourcetype) audioSourceType 录制音频源类型。  [OH_AVRecorder_VideoSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_videosourcetype) videoSourceType 录制视频源类型。  [OH_AVRecorder_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-profile) profile 包含音频和视频编码配置。  char* url 定义文件URL，格式为fd://xx。  [OH_AVRecorder_FileGenerationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_filegenerationmode) fileGenerationMode 指定录制输出文件的生成模式。  [OH_AVRecorder_Metadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-metadata) metadata 包含录制媒体的附加元数据。  int32_t maxDuration 指定录制的最大时长，单位为秒。

---
*Updated: 2026-04-22 06:41:04*
