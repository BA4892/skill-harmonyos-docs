# avimage_generator.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avimage-generator-h`

**DocID**: `86ff95198c2148b69ef20c5c1817d906`

**NodeID**: `000201775795910761002b1c51f5e7ab`

---

avimage_generator.h

概述

定义AVImageGenerator接口。使用其C API从视频资源中获取指定时间点视频帧。

引用文件：
 <multimedia/player_framework/avimage_generator.h>

库：
 libavimage_generator.so

系统能力：
 SystemCapability.Multimedia.Media.AVImageGenerator

起始版本：
 18

相关模块：

AVImageGenerator

汇总

[h2]结构体

名称

typedef关键字

描述

OH_AVImageGenerator

OH_AVImageGenerator

定义OH_AVImageGenerator类型，用于生成指定时间点视频帧。

[h2]函数

名称

描述

OH_AVImageGenerator* OH_AVImageGenerator_Create(void)

创建OH_AVImageGenerator实例，用于生成指定时间点视频帧。

OH_AVErrCode OH_AVImageGenerator_SetFDSource(OH_AVImageGenerator* generator, int32_t fd, int64_t offset, int64_t size)

通过媒体文件描述符设置数据源。

OH_AVErrCode OH_AVImageGenerator_FetchFrameByTime(OH_AVImageGenerator* generator, int64_t timeUs, OH_AVImageGenerator_QueryOptions options, OH_PixelmapNative** pixelMap)

从视频资源中获取指定时间点视频帧。

此函数必须在
OH_AVImageGenerator_SetFDSource
之后调用。

OH_AVErrCode OH_AVImageGenerator_Release(OH_AVImageGenerator* generator)

释放用于OH_AVImageGenerator的资源以及销毁OH_AVImageGenerator实例。

函数说明

[h2]OH_AVImageGenerator_Create()

OH_AVImageGenerator* OH_AVImageGenerator_Create(void)

描述

创建OH_AVImageGenerator实例，用于生成指定时间点视频帧。

系统能力：
 SystemCapability.Multimedia.Media.AVImageGenerator

起始版本：
 18

返回：

类型

说明

OH_AVImageGenerator
*

创建成功时返回指向OH_AVImageGenerator实例的指针，否则返回空指针。

 可能的失败原因：HstEngineFactory未能创建AVMetadataHelperEngine。

[h2]OH_AVImageGenerator_SetFDSource()

OH_AVErrCode OH_AVImageGenerator_SetFDSource(OH_AVImageGenerator* generator,int32_t fd, int64_t offset, int64_t size)

描述

通过媒体文件描述符设置数据源。

系统能力：
 SystemCapability.Multimedia.Media.AVImageGenerator

起始版本：
 18

参数：

参数项

描述

OH_AVImageGenerator
* generator

指向OH_AVImageGenerator实例的指针。

int32_t fd

媒体源的文件描述符。

int64_t offset

媒体源在文件描述符中的偏移量。

int64_t size

媒体源的大小。

返回：

类型

说明

OH_AVErrCode

AV_ERR_OK：执行成功。

 AV_ERR_INVALID_VAL：输入的generator为空指针或参数无效。

 AV_ERR_OPERATE_NOT_PERMIT：操作被禁止。

 AV_ERR_NO_MEMORY：内部内存分配失败。

[h2]OH_AVImageGenerator_FetchFrameByTime()

OH_AVErrCode OH_AVImageGenerator_FetchFrameByTime(OH_AVImageGenerator* generator,int64_t timeUs, OH_AVImageGenerator_QueryOptions options, OH_PixelmapNative** pixelMap)

描述

从视频资源中获取指定时间点视频帧。

此函数必须在
OH_AVImageGenerator_SetFDSource
之后调用。

系统能力：
 SystemCapability.Multimedia.Media.AVImageGenerator

起始版本：
 18

参数：

参数项

描述

OH_AVImageGenerator
* generator

指向OH_AVImageGenerator实例的指针。

int64_t timeUs

需要获取的视频帧在视频中的时间点，单位为微秒（μs）。

OH_AVImageGenerator_QueryOptions
 options

关于给定时间Us和视频帧之间关系的时间选项。

OH_PixelmapNative
** pixelMap

获取的视频帧对象。

返回：

类型

说明

OH_AVErrCode

AV_ERR_OK：执行成功。

 AV_ERR_INVALID_VAL：输入的generator为空指针或参数无效。

 AV_ERR_OPERATE_NOT_PERMIT：操作被禁止。

 AV_ERR_UNSUPPORTED_FORMAT：格式不支持。

 AV_ERR_NO_MEMORY：内部内存分配失败。

[h2]OH_AVImageGenerator_Release()

OH_AVErrCode OH_AVImageGenerator_Release(OH_AVImageGenerator* generator)

描述

释放用于OH_AVImageGenerator的资源以及销毁OH_AVImageGenerator实例。

系统能力：
 SystemCapability.Multimedia.Media.AVImageGenerator

起始版本：
 18

参数：

参数项

描述

OH_AVImageGenerator
* generator

指向OH_AVImageGenerator实例的指针。

返回：

类型

说明

OH_AVErrCode

AV_ERR_OK：执行成功。

 AV_ERR_INVALID_VAL：输入的generator为空指针或参数无效。

---
*2026-04-22T15:55:03.708Z*