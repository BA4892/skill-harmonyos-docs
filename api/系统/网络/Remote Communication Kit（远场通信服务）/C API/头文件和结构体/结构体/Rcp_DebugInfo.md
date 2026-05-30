# Rcp_DebugInfo

> **分区**: API参考  |  **Slug**: `_rcp___debug_info`  |  **DocID**: `7a523ce818184333a5b6ea0ef0ced41a`

---

# Rcp_DebugInfo

  #### 概述

描述存储在[Rcp_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response)中的调试信息的结构。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_DebugEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_debugevent)[type](#type) 调试事件类型。  [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer)[data](#data) 调试信息。  struct [Rcp_DebugInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info) * [next](#next) 链式存储。指向下一个[Rcp_DebugInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info)。       #### 结构体成员变量说明

  #### [h2]data

Rcp_Buffer Rcp_DebugInfo::data **描述**

 调试信息。

   #### [h2]next

struct Rcp_DebugInfo* Rcp_DebugInfo::next **描述**

 链式存储。指向下一个[Rcp_DebugInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___debug_info)。

   #### [h2]type

Rcp_DebugEvent Rcp_DebugInfo::type **描述**

 调试事件类型。

---
*Updated: 2026-04-22 06:49:00*
