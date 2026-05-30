# Camera_TorchStatusInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-camera-camera-torchstatusinfo`

**DocID**: `e95a60ece76a4e66855927b3c3c71714`

**NodeID**: `000201775795910761275e6da2886082`

---

Camera_TorchStatusInfo

typedef struct Camera_TorchStatusInfo {...} Camera_TorchStatusInfo

概述

手电筒状态信息。

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

bool isTorchAvailable

手电筒是否可用，true表示可用，false表示不可用。

bool isTorchActive

手电筒是否激活，true表示激活，false表示未激活。

float torchLevel

手电筒亮度等级。取值范围为[0,1]，越靠近1，亮度越大。

---
*2026-04-22T15:55:03.564Z*