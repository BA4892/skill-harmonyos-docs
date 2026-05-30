# OH_AVDataSourceExt

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-codecbase-oh-avdatasourceext`

**DocID**: `d5a3e19489f24d5f8eae4c2bea4b467f`

**NodeID**: `000201775795910761127ac826775f6c`

---

OH_AVDataSourceExt

typedef struct OH_AVDataSourceExt {...} OH_AVDataSourceExt

概述

用户自定义数据源，回调支持通过userData传递用户自定义数据。

起始版本：
 20

相关模块：

CodecBase

所在头文件：

native_avcodec_base.h

汇总

[h2]成员变量

名称

描述

int64_t size

数据源的总大小。

OH_AVDataSourceReadAtExt
 readAt

数据源的数据回调。

---
*2026-04-22T15:55:03.477Z*