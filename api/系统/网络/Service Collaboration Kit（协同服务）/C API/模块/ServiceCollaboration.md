# ServiceCollaboration

> **分区**: API参考  |  **Slug**: `servicecollaboration-capi-module`  |  **DocID**: `f602cf98f9b142629dd86597eb600c17`

---

# ServiceCollaboration

  #### 概述

提供ServiceCollaboration跨设备互通的相关NDK接口。

 **系统能力：** SystemCapability.Collaboration.Service

 **起始版本：** 5.0.0(12)

   #### 汇总

  #### [h2]文件

 名称 描述   [service_collaboration_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-h) 跨设备互通的接口以及相关类型的定义。       #### [h2]结构体

 名称 描述   struct  [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo) 跨设备互通获取的设备信息对象，包含设备的基本信息和能力类型。  struct  [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets) 通过[HMS_ServiceCollaboration_GetCollaborationDeviceInfos](#hms_servicecollaboration_getcollaborationdeviceinfos)获取的对端设备信息对象集合。  struct  [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo) 使用[HMS_ServiceCollaboration_StartCollaboration](#hms_servicecollaboration_startcollaboration)触发跨设备互通时，被选择的设备信息。  struct  [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback) 传给[HMS_ServiceCollaboration_StartCollaboration](#hms_servicecollaboration_startcollaboration)的回调方法。  struct [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2) 使用[HMS_ServiceCollaboration_StartCollaborationV2](#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。       #### [h2]宏定义

 名称 描述   [COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH](#collaborationdeviceinfo_devicenetworkid_maxlength)   65 设备network Id最大长度。  [COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH](#collaborationdeviceinfo_devicename_maxlength) 128 设备名最大长度。  [SERVICE_COLLABORATION_URI_MAXLENGTH](#service_collaboration_uri_maxlength)   4096 传入沙箱目录uri的最大长度。       #### [h2]类型定义

 名称 描述   typedef enum [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) [ServiceCollaborationFilterType](#servicecollaborationfiltertype) 跨设备互通能力类型枚举。  typedef enum [ServiceCollaborationDataType](#servicecollaborationdatatype-1) [ServiceCollaborationDataType](#servicecollaborationdatatype) 回传数据类型。  typedef enum [ServiceCollaborationEventCode](#servicecollaborationeventcode-1) [ServiceCollaborationEventCode](#servicecollaborationeventcode) 错误码枚举。  typedef struct [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo) [ServiceCollaboration_CollaborationDeviceInfo](#servicecollaboration_collaborationdeviceinfo) 设备信息对象。  typedef struct [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets) [ServiceCollaboration_CollaborationDeviceInfoSets](#servicecollaboration_collaborationdeviceinfosets) 设备信息对象集合。  typedef struct [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo) [ServiceCollaboration_SelectInfo](#servicecollaboration_selectinfo) 被选择的设备信息。  typedef struct [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback) [ServiceCollaborationCallback](#servicecollaborationcallback) 回调跨设备互通状态信息。  typedef struct [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2) [ServiceCollaboration_SelectInfoV2](#servicecollaboration_selectinfov2) 使用[HMS_ServiceCollaboration_StartCollaborationV2](#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。  typedef enum [CollaborationDeviceFilterType](#collaborationdevicefiltertype) [CollaborationDeviceFilterType](#collaborationdevicefiltertype) 跨设备互通被调用端能力类型枚举       #### [h2]枚举

 名称 描述   [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) {

 TAKE_PHOTO = 1,

 SCAN_DOCUMENT = 2,

 IMAGE_PICKER = 3,

 VIDEO_PICKER = 5,

 IMAGE_VIDEO_PICKER = 6

 }

  跨设备互通能力类型的枚举。  [ServiceCollaborationDataType](#servicecollaborationdatatype-1){

 IMAGE = 1,

 VIDEO = 2

 }

  回传数据类型。  [ServiceCollaborationEventCode](#servicecollaborationeventcode-1){

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

  错误码枚举。  [CollaborationDeviceFilterType](#collaborationdevicefiltertype) {

 PHONE = 1,

 TABLET = 2,

 PC_2IN1 = 3

 }

  设备类型枚举       #### [h2]函数

 名称 描述   [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets)* [HMS_ServiceCollaboration_GetCollaborationDeviceInfos](#hms_servicecollaboration_getcollaborationdeviceinfos)(

 uint32_t fileterNum, [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) serviceFileterTypes[])

  获取支持相关能力的设备列表。  uint32_t [HMS_ServiceCollaboration_StartCollaboration](#hms_servicecollaboration_startcollaboration)(

 const [ServiceCollaboration_SelectInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfo)* selectService, [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback)* callback)

  拉起跨设备互通回传图片的能力。  int32_t [HMS_ServiceCollaboration_StopCollaboration](#hms_servicecollaboration_stopcollaboration)(uint32_t collaborationId) 取消跨设备互通能力。  int32_t [HMS_ServiceCollaboration_StartCollaborationV2](#hms_servicecollaboration_startcollaborationv2)(

 const [ServiceCollaboration_SelectInfoV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-selectinfov2)* selectService, [ServiceCollaborationCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaborationcallback)* callback)

 )

  拉起跨设备互通回传图片和视频的能力。  [ServiceCollaboration_CollaborationDeviceInfoSets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfosets)*

 [HMS_ServiceCollaboration_GetCollaborationDeviceInfosV2](#hms_servicecollaboration_getcollaborationdeviceinfosv2) (

 uint32_t deviceFilterNum, [CollaborationDeviceFilterType](#collaborationdevicefiltertype)

 deviceFilterTypes[], uint32_t serviceFilterNum,

 [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) serviceFilterTypes[])

  获取支持相关能力的指定设备列表。       #### 宏定义说明

  #### [h2]COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH

#define COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH   65 **描述**

 设备network Id最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH

#define COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH   128 **描述**

 设备名最大长度。

 **起始版本：** 5.0.0(12)

   #### [h2]SERVICE_COLLABORATION_URI_MAXLENGTH

#define SERVICE_COLLABORATION_URI_MAXLENGTH   4096 **描述**

 应用沙箱目录uri的最大长度。

 **起始版本：** 6.1.0(23)

   #### 类型定义说明

  #### [h2]ServiceCollaboration_CollaborationDeviceInfo

typedef struct ServiceCollaboration_CollaborationDeviceInfo ServiceCollaboration_CollaborationDeviceInfo **描述**

 设备信息对象。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaboration_CollaborationDeviceInfoSets

typedef struct ServiceCollaboration_CollaborationDeviceInfoSets ServiceCollaboration_CollaborationDeviceInfoSets **描述**

 设备信息对象集合。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaboration_SelectInfo

typedef struct ServiceCollaboration_SelectInfo ServiceCollaboration_SelectInfo **描述**

 被选择的设备信息。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaborationCallback

typedef struct ServiceCollaborationCallback ServiceCollaborationCallback **描述**

 回调跨设备互通状态信息。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaborationFilterType

typedef enum ServiceCollaborationFilterType ServiceCollaborationFilterType **描述**

 跨设备互通能力类型的枚举。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaborationDataType

typedef enum ServiceCollaborationDataType ServiceCollaborationDataType **描述**

 回传数据类型。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaborationEventCode

typedef enum ServiceCollaborationEventCode ServiceCollaborationEventCode **描述**

 错误码枚举。

 **起始版本：** 5.0.0(12)

   #### [h2]ServiceCollaboration_SelectInfoV2

typedef struct ServiceCollaboration_SelectInfoV2 ServiceCollaboration_SelectInfoV2 **描述**

 使用[HMS_ServiceCollaboration_StartCollaborationV2](#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。

 **起始版本：** 6.1.0(23)

   #### 枚举定义说明

  #### [h2]ServiceCollaborationFilterType

enum ServiceCollaborationFilterType **描述**

 跨设备互通能力类型枚举。

 **起始版本：** 5.0.0(12)

  枚举值 描述   TAKE_PHOTO = 1 拍照。  SCAN_DOCUMENT = 2 扫描。  IMAGE_PICKER = 3 从图库中选择图片。  VIDEO_PICKER = 5 从图库中选择视频。

 **起始版本：** 6.1.0(23)

   IMAGE_VIDEO_PICKER = 6 从图库中选择图片与视频。

 **起始版本：** 6.1.0(23)

        #### [h2]CollaborationDeviceFilterType

enum CollaborationDeviceFilterType **描述**

 跨设备互通设备类型枚举。

 **起始版本：** 6.1.0(23)

  枚举值 描述   PHONE 手机。  TABLET 平板。  PC_2IN1 PC/2in1。       #### [h2]ServiceCollaborationDataType

enum ServiceCollaborationDataType **描述**

 回传数据类型。

 **起始版本：** 5.0.0(12)

  枚举值 描述   IMAGE = 1 图片。  VIDEO = 2 视频。

 **起始版本：** 6.1.0(23)

        #### [h2]ServiceCollaborationEventCode

enum ServiceCollaborationEventCode **描述**

 错误码枚举。

 **起始版本：** 5.0.0(12)

  枚举值 描述   LAST_DATA_BACK = 1001202000 已收到最后一个数据包。  PEER_CANCEL = 1001202001 对端取消。  NETWORK_ERROR = 1001202002 网络异常。  PEER_WIFI_NOT_OPEN = 1001202004 对端WLAN未开启。  LOCAL_WIFI_NOT_OPEN = 1001202005 本端WLAN未开启。  DATA_BACK_START = 1001202006 开始回传数据。  MIDDLE_DATA_BACK = 1001202007 收到中间数据。  TIMEOUT_AUTO_CANCEL = 1001202008 接收数据超时取消。  DATA_READ_FAILED = 1001202009 数据读取失败。  LINK_SHUTDOWN = 1001202011 链路断开。  REMOTE_HOTSPOT_CONFLICT = 1001202013 由于对端开启热点产生了链路冲突。

 **起始版本：** 5.1.0(18)

   REMOTE_DISTRIBUTED_SERVICES_CONFLICT = 1001202014 由于对端设备正在与其他设备进行互联而产生了链路冲突。

 **起始版本：** 5.1.0(18)

   SEND_VIDEO_SUCCESS = 1001202015 视频回传成功。

 **起始版本：** 6.1.0(23)

   MULTI_VIDEO_SENDING_BACK = 1001202016 开始多个视频回传。

 **起始版本：** 6.1.0(23)

   STORE_VIDEO_FAIL = 1001202017 内存不足视频回传失败。

 **起始版本：** 6.1.0(23)

        #### 函数说明

  #### [h2]HMS_ServiceCollaboration_GetCollaborationDeviceInfos

```
ServiceCollaboration_CollaborationDeviceInfoSets* HMS_ServiceCollaboration_GetCollaborationDeviceInfos(
    uint32_t fileterNum, ServiceCollaborationFilterType serviceFileterTypes[]);
```
 **描述**

 获取支持相关能力的设备列表。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   uint32_t fileterNum 服务能力类型总数。  [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) serviceFileterTypes[] 具体需要的服务能力类型的数组。     **返回：**

 返回[ServiceCollaboration_CollaborationDeviceInfoSets](#servicecollaboration_collaborationdeviceinfosets)，设备信息对象集合。

   #### [h2]HMS_ServiceCollaboration_GetCollaborationDeviceInfosV2

```
ServiceCollaboration_CollaborationDeviceInfoSets* HMS_ServiceCollaboration_GetCollaborationDeviceInfosV2(
    uint32_t deviceFilterNum, CollaborationDeviceFilterType deviceFilterTypes[], uint32_t serviceFilterNum, ServiceCollaborationFilterType serviceFilterTypes[]);
```
 **描述**

 获取支持相关能力的指定设备列表。

 **起始版本：** 6.1.0(23)

 **参数:**

  名称 描述   uint32_t deviceFilterNum 设备类型总数。  [CollaborationDeviceFilterType](#collaborationdevicefiltertype) deviceFilterTypes[] 被调用端的设备类型的数组。  uint32_t serviceFilterNum 服务能力类型总数。  [ServiceCollaborationFilterType](#servicecollaborationfiltertype-1) serviceFilterTypes[] 服务能力类型的数组。     **返回：**

 返回[ServiceCollaboration_CollaborationDeviceInfoSets](#servicecollaboration_collaborationdeviceinfosets)，设备信息对象集合。

   #### [h2]HMS_ServiceCollaboration_StartCollaboration

```
uint32_t HMS_ServiceCollaboration_StartCollaboration(
    const ServiceCollaboration_SelectInfo* selectService, ServiceCollaborationCallback* callback);
```
 **描述**

 拉起跨设备互通回传图片的能力。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   const [ServiceCollaboration_SelectInfo](#servicecollaboration_selectinfo)* selectService 选择需要拉起的服务能力类型。  [ServiceCollaborationCallback](#servicecollaborationcallback)* callback 回调，传递跨设备互通状态信息。     **返回：**

 返回uint32_t的collaborationId，本次跨设备互通唯一标识。

   #### [h2]HMS_ServiceCollaboration_StopCollaboration

int32_t HMS_ServiceCollaboration_StopCollaboration(uint32_t collaborationId); **描述**

 取消跨设备互通能力。

 **起始版本：** 5.0.0(12)

 **参数:**

  名称 描述   uint32_t collaborationId 跨设备互通唯一标识。     **返回：**

 返回stop结果，0为成功。

   #### [h2]HMS_ServiceCollaboration_StartCollaborationV2

```
uint32_t HMS_ServiceCollaboration_StartCollaborationV2(
    const ServiceCollaboration_SelectInfoV2* selectService, ServiceCollaborationCallback* callback);
```
 **描述**

 拉起跨设备互通回传图片和视频的能力。

 **起始版本：** 6.1.0(23)

 **参数:**

  名称 描述   const [ServiceCollaboration_SelectInfoV2](#servicecollaboration_selectinfov2)* selectService 选择需要拉起的服务能力类型。  [ServiceCollaborationCallback](#servicecollaborationcallback)* callback 回调，传递跨设备互通状态信息。     **返回：**

 返回uint32_t的collaborationId，本次跨设备互通唯一标识。

---
*Updated: 2026-04-22 06:47:54*
