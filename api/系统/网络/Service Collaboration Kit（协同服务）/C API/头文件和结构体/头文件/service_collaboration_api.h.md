# service_collaboration_api.h

> **分区**: API参考  |  **Slug**: `servicecollaboration-capi-h`  |  **DocID**: `b6d3232471dc4a1085154e3c9b97394e`

---

# service_collaboration_api.h

  #### 概述

函数export定义的接口。

 **引用文件：** <service_collaboration/service_collaboration_api.h>

 **库：** libservice_collaboration_ndk.z.so

 **系统能力：** SystemCapability.Collaboration.Service

 **起始版本：** 5.0.0(12)

 **相关模块：** [ServiceCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo) 跨设备互通获取的设备信息对象，包含设备的基本信息和能力类型。  struct  [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets) 通过[HMS_ServiceCollaboration_GetCollaborationDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos)获取的对端设备信息对象集合。  struct  [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo) 使用[HMS_ServiceCollaboration_StartCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration)触发跨设备互通时，被选择的设备信息。  struct  [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback) 传给[HMS_ServiceCollaboration_StartCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration)的回调方法。  struct  [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2) 使用[HMS_ServiceCollaboration_StartCollaborationV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。       #### [h2]宏定义

 名称 描述   [COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdeviceinfo_devicenetworkid_maxlength)   65 设备network Id最大长度。  [COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdeviceinfo_devicename_maxlength)   128 设备名最大长度。  [SERVICE_COLLABORATION_URI_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#service_collaboration_uri_maxlength)   4096 传入应用沙箱目录uri的最大长度。       #### [h2]类型定义

 名称 描述   typedef enum [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype-1) [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype) 跨设备互通能力类型枚举。  typedef enum [ServiceCollaborationDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationdatatype-1) [ServiceCollaborationDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationdatatype) 回传数据类型。  typedef enum [ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1) [ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode) 错误码枚举。  typedef struct [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo) [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaboration_collaborationdeviceinfo) 设备信息对象。  typedef struct [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets) [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaboration_collaborationdeviceinfosets) 设备信息对象集合。  typedef struct [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo) [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaboration_selectinfo) 被选择的设备信息。  typedef struct [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback) [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationcallback) 回调跨设备互通状态信息。  typedef struct [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2) [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaboration_selectinfov2) 被选择的设备信息。  typedef struct [CollaborationDeviceFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdevicefiltertype) [CollaborationDeviceFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdevicefiltertype) 跨设备互通设备类型枚举       #### [h2]枚举

 名称 描述   [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype-1) {

 TAKE_PHOTO = 1,

 SCAN_DOCUMENT = 2,

 IMAGE_PICKER = 3,

 VIDEO_PICKER = 5,

 IMAGE_VIDEO_PICKER = 6

 }

  跨设备互通能力类型的枚举。  [ServiceCollaborationDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationdatatype-1){

 IMAGE = 1,

 VIDEO = 2

 }

  回传数据类型。  [ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1){

 LAST_DATA_BACK = 1001202000,

 PEER_CANCEL = 1001202001,

 NETWORK_ERROR = 1001202002,

 PEER_WIFI_NOT_OPEN = 1001202004,

 LOCAL_WIFI_NOT_OPEN = 1001202005,

 DATA_BACK_START = 1001202006,

 MIDDLE_DATA_BACK = 1001202007,

 TIMEOUT_AUTO_CANCEL = 1001202008,

 DATA_READ_FAILED = 1001202009,

 LINK_SHUTDOWN = 1001202011,

 REMOTE_HOTSPOT_CONFLICT = 1001202013,

 REMOTE_DISTRIBUTED_SERVICES_CONFLICT = 1001202014,

 SEND_VIDEO_SUCCESS = 1001202015,

 MULTI_VIDEO_SENDING_BACK = 1001202016,

 STORE_VIDEO_FAIL = 1001202017

 }

  错误码枚举。  [CollaborationDeviceFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdevicefiltertype) {

 PHONE = 1,

 TABLET = 2,

 PC_2IN1 = 3

 }

  被调用端设备类型的枚举。       #### [h2]函数

 名称 描述   [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets)* [HMS_ServiceCollaboration_GetCollaborationDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos)(

 uint32_t fileterNum, [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype-1) serviceFileterTypes[]);

  获取支持相关能力的设备列表。  uint32_t [HMS_ServiceCollaboration_StartCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration)(

 const [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo)* selectService, [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback)* callback)

  拉起跨设备互通回传图片的能力。  int32_t [HMS_ServiceCollaboration_StopCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_stopcollaboration)(uint32_t collaborationId); 取消跨设备互通能力。  uint32_t [HMS_ServiceCollaboration_StartCollaborationV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2)(

 const [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2)* selectService, [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback)* callback)

  拉起跨设备互通回传图片和视频的能力。  [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets)*

 [HMS_ServiceCollaboration_GetCollaborationDeviceInfosV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfosv2) (

 uint32_t deviceFilterNum, [CollaborationDeviceFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdevicefiltertype)

 deviceFilterTypes[], uint32_t serviceFilterNum,

 [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype) serviceFilterTypes[])

  获取支持相关能力的指定设备列表。

---
*Updated: 2026-04-22 06:49:05*
