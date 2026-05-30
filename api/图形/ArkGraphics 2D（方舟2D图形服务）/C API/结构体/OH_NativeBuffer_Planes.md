# OH_NativeBuffer_Planes

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-nativebuffer-oh-nativebuffer-planes`

**DocID**: `b09934ecff1b450eaa4755f29b7ef9e2`

**NodeID**: `00020177579587492010872648d14bf7`

---

OH_NativeBuffer_Planes

typedef struct OH_NativeBuffer_Planes {...} OH_NativeBuffer_Planes

概述

OH_NativeBuffer的图像平面格式信息。

起始版本：
 12

相关模块：

OH_NativeBuffer

所在头文件：

native_buffer.h

汇总

[h2]成员变量

名称

描述

uint32_t planeCount

不同平面的数量。

OH_NativeBuffer_Plane
 planes[4]

图像平面格式信息数组。

---
*2026-04-22T15:55:03.897Z*