# OH_AVScreenCaptureCallback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avscreencapture-oh-avscreencapturecallback`

**DocID**: `27448200326c4e4c9f5b43f2a8f9db6d`

**NodeID**: `00020177579591076134819a5485821f`

---

OH_AVScreenCaptureCallback

typedef struct OH_AVScreenCaptureCallback {...} OH_AVScreenCaptureCallback

概述

OH_AVScreenCapture中包含所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVScreenCapture实例中，以便处理回调上报的信息，从而保证OH_AVScreenCapture的正常运行。

从API version 12开始，推荐使用接口
OH_AVScreenCapture_OnError
、
OH_AVScreenCapture_OnBufferAvailable
替代。

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

OH_AVScreenCaptureOnError
 onError

监控录屏调用操作错误。

从API version 12开始，推荐使用接口
OH_AVScreenCapture_OnError
替代。

OH_AVScreenCaptureOnAudioBufferAvailable
 onAudioBufferAvailable

监控音频码流是否有数据产生。

从API version 12开始，推荐使用接口
OH_AVScreenCapture_OnBufferAvailable
替代。

OH_AVScreenCaptureOnVideoBufferAvailable
 onVideoBufferAvailable

监控视频码流是否有数据产生。

从API version 12开始，推荐使用接口
OH_AVScreenCapture_OnBufferAvailable
替代。

---
*2026-04-22T15:53:59.925Z*