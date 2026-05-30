# OH_NativeBuffer_Plane

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-nativebuffer-oh-nativebuffer-plane`

**DocID**: `d91fe5f23e8148b7bd3976fcef7460f2`

**NodeID**: `000201775795874920102d533f6d481d`

---

OH_NativeBuffer_Plane

typedef struct {...} OH_NativeBuffer_Plane

概述

单个图像平面格式信息。

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

uint64_t offset

图像平面的偏移量，单位为Byte。

uint32_t rowStride

从图像一行的第一个值到下一行的第一个值的距离，单位为Byte。

uint32_t columnStride

从图像一列的第一个值到下一列的第一个值的距离，单位为Byte。

---
*2026-04-22T15:55:03.896Z*