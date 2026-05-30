# OhosImageSourceUpdateData

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-ohosimagesourceupdatedata`

**DocID**: `a12f7e042d734893961ccf642153c9bd`

**NodeID**: `000201775795910761417526ddea72f7`

---

OhosImageSourceUpdateData

struct OhosImageSourceUpdateData {...}

概述

定义图像源更新数据选项，由
OH_ImageSource_UpdateData
获取。

起始版本：
 10

相关模块：

Image

所在头文件：

image_source_mdk.h

汇总

[h2]成员变量

名称

描述

uint8_t* buffer = nullptr

图像源更新数据缓冲区。

size_t bufferSize = 0

图像源更新数据缓冲区大小。

uint32_t offset = 0

图像源更新数据缓冲区的开端。

uint32_t updateLength = 0

图像源更新数据缓冲区的更新数据长度。

int8_t isCompleted = 0

图像源更新数据在此节中完成。

---
*2026-04-22T15:55:03.671Z*