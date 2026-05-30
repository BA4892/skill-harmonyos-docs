# VideoProcessing_Callback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-videoprocessing-videoprocessing-callback`

**DocID**: `b20996f927db4830adf52377b1f79ec5`

**NodeID**: `00020177579591076141044f7c6ccd56`

---

VideoProcessing_Callback

typedef struct VideoProcessing_Callback VideoProcessing_Callback

概述

视频处理回调对象类型。

定义一个VideoProcessing_Callback空指针，调用
OH_VideoProcessingCallback_Create
来创建一个回调对象。创建之前该指针必须为空。通过调用
OH_VideoProcessing_RegisterCallback
来向视频处理实例注册回调对象。

起始版本：
 12

相关模块：

VideoProcessing

所在头文件：

video_processing_types.h

---
*2026-04-22T15:53:59.936Z*