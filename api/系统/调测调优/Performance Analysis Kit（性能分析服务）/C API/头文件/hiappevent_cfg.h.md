# hiappevent_cfg.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-hiappevent-cfg-h`

**DocID**: `8c26b33e736d4682a1c1938ffc2be3f7`

**NodeID**: `0002017757963416847791dae5da5fa9`

---

hiappevent_cfg.h

概述

定义事件打点配置函数的所有配置项名称。如果开发者想要对应用事件打点功能进行配置，可以直接使用配置项常量。

引用文件：
 <hiappevent/hiappevent_cfg.h>

库：
 libhiappevent_ndk.z.so

系统能力：
 SystemCapability.HiviewDFX.HiAppEvent

起始版本：
 8

相关模块：

HiAppEvent

汇总

[h2]宏定义

名称

描述

DISABLE
 "disable"

事件打点开关。默认值为false。true：关闭打点功能，false：不关闭打点功能。

起始版本：
 8

MAX_STORAGE
 "max_storage"

事件文件目录存储配额大小。默认值为“10M”。

起始版本：
 8

宏定义说明

[h2]DISABLE

#define DISABLE "disable"

描述

事件打点开关。默认值为false。true：关闭打点功能，false：不关闭打点功能。

起始版本：
 8

[h2]MAX_STORAGE

#define MAX_STORAGE "max_storage"

描述

事件文件目录存储配额大小。默认值为“10M”。

起始版本：
 8

---
*2026-04-22T15:55:03.352Z*