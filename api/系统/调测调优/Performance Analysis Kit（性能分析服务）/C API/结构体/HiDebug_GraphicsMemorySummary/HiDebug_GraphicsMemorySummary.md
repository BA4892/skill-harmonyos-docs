# HiDebug_GraphicsMemorySummary

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hidebug-hidebug-graphicsmemorysummary`

**DocID**: `2ae7b46c3ca44cb8aeabe2e27243ec15`

**NodeID**: `00020177579634168507214efafbc057`

---

HiDebug_GraphicsMemorySummary

typedef struct HiDebug_GraphicsMemorySummary {...} HiDebug_GraphicsMemorySummary

概述

应用图形显存占用详情的结构定义。

起始版本：
 21

相关模块：

HiDebug

所在头文件：

hidebug_type.h

汇总

[h2]成员变量

名称

描述

uint32_t gl

gl内存大小，RenderService渲染进程加载所需资源占用的内存，例如图片、纹理等，以KB为单位。

uint32_t graph

graph内存大小，进程统计的DMA内存占用，包括直接通过接口申请的DMA buffer和通过allocator_host申请的DMA buffer，以KB为单位。

---
*2026-04-22T15:53:59.575Z*