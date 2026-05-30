# OH_VideoCaptureInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avscreencapture-oh-videocaptureinfo`

**DocID**: `6ae0ab506409450ca9cd3443a524e0eb`

**NodeID**: `00020177579591076132177f4a72e36b`

---

OH_VideoCaptureInfo

typedef struct OH_VideoCaptureInfo {...} OH_VideoCaptureInfo

概述

视频录制信息。当videoFrameWidth和videoFrameHeight同时为0时，忽略视频相关参数不录制屏幕数据。

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

uint64_t displayId

录制物理屏id，使用该参数需要在capturemode为CAPTURE_SPECIFIED_SCREEN模式下使用。

int32_t* missionIDs

指定窗口id列表，使用该参数需要在capturemode为CAPTURE_SPECIFIED_WINDOW模式下使用。

int32_t missionIDsLen

指定窗口ID长度，使用该参数需要在capturemode为CAPTURE_SPECIFIED_WINDOW模式下使用。

int32_t videoFrameWidth

采集视频的宽度设置，单位px。

int32_t videoFrameHeight

采集视频的高度设置，单位px。

OH_VideoSourceType
 videoSource

视频采集格式设置，目前仅支持RGBA格式。

---
*2026-04-22T15:55:03.739Z*