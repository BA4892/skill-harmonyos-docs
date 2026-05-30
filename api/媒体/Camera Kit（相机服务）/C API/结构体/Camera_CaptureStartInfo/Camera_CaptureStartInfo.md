# Camera_CaptureStartInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-camera-camera-capturestartinfo`

**DocID**: `0663b7487b424dff8008eedb1318fd43`

**NodeID**: `0002017757959107612997090b9b4448`

---

Camera_CaptureStartInfo

typedef struct Camera_CaptureStartInfo {...} Camera_CaptureStartInfo

概述

拍照开始信息。

起始版本：
 12

相关模块：

OH_Camera

所在头文件：

camera.h

汇总

[h2]成员变量

名称

描述

int32_t captureId

拍照id。

int64_t time

预估的单次拍照底层出sensor采集帧时间，如果上报-1，代表没有预估时间。

---
*2026-04-22T15:53:59.763Z*