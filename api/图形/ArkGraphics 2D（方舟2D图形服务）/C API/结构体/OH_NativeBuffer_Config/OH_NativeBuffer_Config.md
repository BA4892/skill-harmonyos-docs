# OH_NativeBuffer_Config

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-oh-nativebuffer-oh-nativebuffer-config`

**DocID**: `220316e77268439ebc44b3d6609a4d58`

**NodeID**: `000201775795874920101aebd7530604`

---

OH_NativeBuffer_Config

typedef struct {...} OH_NativeBuffer_Config

概述

OH_NativeBuffer的属性配置，用于申请新的OH_NativeBuffer实例或查询现有实例的相关属性。

起始版本：
 9

相关模块：

OH_NativeBuffer

所在头文件：

native_buffer.h

汇总

[h2]成员变量

名称

描述

int32_t width

宽度（像素）。

int32_t height

高度（像素）。

int32_t format

像素格式，具体可参见
OH_NativeBuffer_Format
枚举。

int32_t usage

buffer的用途说明，具体可参见
OH_NativeBuffer_Usage
枚举。

int32_t stride

输出参数。本地窗口缓冲区步幅，单位为Byte。

起始版本：
 10

---
*2026-04-22T15:54:00.072Z*