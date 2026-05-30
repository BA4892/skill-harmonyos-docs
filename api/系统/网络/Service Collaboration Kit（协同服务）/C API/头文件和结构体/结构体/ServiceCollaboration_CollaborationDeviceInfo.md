# ServiceCollaboration_CollaborationDeviceInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `servicecollaboration-collaborationdeviceinfo`

**DocID**: `56a712783ffc403c9ffc91b573e51bff`

**NodeID**: `0002017757963416851276de61d7fb10`

---

ServiceCollaboration_CollaborationDeviceInfo

概述

跨设备互通获取的设备信息对象，包含设备的基本信息和能力类型。

起始版本：
 5.0.0(12)

相关模块：

ServiceCollaboration

汇总

[h2]成员变量

名称

描述

uint32_t 
deviceType

对端设备类型。只有手机或者平板。手机设备类型的值为0x14，平板设备类型的值为0x17。

char 
deviceNetworkId
 [
COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH
]

对端设备network Id。

char 
deviceName
 [
COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH
]

对端设备名。

uint32_t 
filterNum

对端设备支持的能力类型列表的大小。

ServiceCollaborationFilterType
 * 
serviceFilterTypes

对端设备支持的能力类型列表。

结构体成员变量说明

[h2]deviceName

char ServiceCollaboration_CollaborationDeviceInfo::deviceName[
COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH
]

描述

对端设备名。

[h2]deviceNetworkId

char ServiceCollaboration_CollaborationDeviceInfo::deviceNetworkId[
COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH
]

描述

对端设备network Id。

[h2]deviceType

uint32_t ServiceCollaboration_CollaborationDeviceInfo::deviceType

描述

对端设备类型。只有手机或者平板。手机设备类型的值为0x14，平板设备类型的值为0x17。

[h2]filterNum

uint32_t ServiceCollaboration_CollaborationDeviceInfo::filterNum

描述

对端设备支持的能力类型列表的大小。

[h2]serviceFilterTypes

ServiceCollaborationFilterType
* ServiceCollaboration_CollaborationDeviceInfo::serviceFilterTypes

描述

对端设备支持的能力类型列表。

---
*2026-04-22T15:55:03.031Z*