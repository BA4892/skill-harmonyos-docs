# ServiceCollaboration_SelectInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `servicecollaboration-selectinfo`

**DocID**: `1a77208f688648faa620de533017ad9e`

**NodeID**: `000201775796341685145b1df644feec`

---

ServiceCollaboration_SelectInfo

概述

使用
HMS_ServiceCollaboration_StartCollaboration
触发跨设备互通时，被选择的设备信息。

起始版本：
 5.0.0(12)

相关模块：

ServiceCollaboration

汇总

[h2]成员变量

名称

描述

ServiceCollaborationFilterType

serviceFilterType

开发者期望的设备能力类型。

char 
deviceNetworkId
 [
COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH
]

被选择的设备network Id。

uint32_t 
maxSize

能被选中的最大图片数量。

结构体成员变量说明

[h2]deviceNetworkId

char ServiceCollaboration_SelectInfo::deviceNetworkId[
COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH
]

描述

被选择的设备network Id。

[h2]maxSize

uint32_t ServiceCollaboration_SelectInfo::maxSize

描述

能被选中的最大图片数量。

[h2]serviceFilterType

ServiceCollaborationFilterType
 ServiceCollaboration_SelectInfo::serviceFilterType

描述

开发者期望的设备能力类型。

---
*2026-04-22T15:55:03.033Z*