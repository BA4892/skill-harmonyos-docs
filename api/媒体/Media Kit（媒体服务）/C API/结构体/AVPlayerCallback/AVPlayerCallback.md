# AVPlayerCallback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-avplayer-avplayercallback`

**DocID**: `357b9f84f62b49a7a4cd75b5181861d9`

**NodeID**: `000201775795910761096efb2dbce0db`

---

AVPlayerCallback

typedef struct AVPlayerCallback {...} AVPlayerCallback

概述

包含了OH_AVPlayerOnInfo和OH_AVPlayerOnError回调函数指针的集合。应用需注册此实例结构体到OH_AVPlayer实例中，并对回调上报的信息进行处理，保证AVPlayer的正常运行。

起始版本：
 11

废弃版本：
 12

替代接口：

OH_AVPlayerOnInfoCallback

OH_AVPlayerOnErrorCallback

相关模块：

AVPlayer

所在头文件：

avplayer_base.h

汇总

[h2]成员变量

名称

描述

OH_AVPlayerOnInfo onInfo

监控AVPlayer过程信息，参考
OH_AVPlayerOnInfo
。

起始版本：
 11

废弃版本：
 12

替代接口：

OH_AVPlayerOnInfoCallback

OH_AVPlayerOnError onError

监控AVPlayer操作错误，参考
OH_AVPlayerOnError
。

起始版本：
 11

废弃版本：
 12

替代接口：

OH_AVPlayerOnErrorCallback

---
*2026-04-22T15:53:59.913Z*