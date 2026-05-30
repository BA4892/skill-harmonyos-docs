# OH_AVRecorder_Metadata

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avrecorder-oh-avrecorder-metadata`

**DocID**: `2012e22af8da4f279f93e7608e8f6a55`

**NodeID**: `000201775795910761208a4411d0bc0a`

---

OH_AVRecorder_Metadata

typedef struct OH_AVRecorder_Metadata {...} OH_AVRecorder_Metadata

概述

元数据信息数据结构。

起始版本：
 18

相关模块：

AVRecorder

所在头文件：

avrecorder_base.h

汇总

[h2]成员变量

名称

描述

char* genre

媒体资源的类型或体裁。

char* videoOrientation

视频的旋转方向，单位为度。

OH_AVRecorder_Location
 location

视频的地理位置信息。

OH_AVRecorder_MetadataTemplate
 customInfo

从 moov.meta.list 读取的自定义参数键值映射。

---
*2026-04-22T15:55:03.732Z*