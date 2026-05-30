# ServiceCollaborationCallback

> **分区**: API参考  |  **Slug**: `servicecollaborationcallback`  |  **DocID**: `9c6ef3036b174119ad470a2e9b516594`

---

# ServiceCollaborationCallback

  #### 概述

传给[HMS_ServiceCollaboration_StartCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration)的回调方法。

 **起始版本：** 5.0.0(12)

 **相关模块：** [ServiceCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module)

 **所在头文件：** [service_collaboration_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t(* [OnEvent](#onevent) )([ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1) code, uint32_t extraCode) 在跨设备互通服务状态变化时被调用。  int32_t(* [OnDataCallback](#ondatacallback) )([ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1) code, [ServiceCollaborationDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationdatatype-1) dataType, uint32_t dataSize, char *data) 在跨设备互通服务数据返回时被调用。       #### 结构体成员变量说明

  #### [h2]OnDataCallback

int32_t(* ServiceCollaborationCallback::OnDataCallback) (ServiceCollaborationEventCode code, ServiceCollaborationDataType dataType, uint32_t dataSize, char *data) **描述**

 在跨设备互通服务数据返回时被调用。

 **参数：**

  名称 描述   [ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1) code 错误码。  [ServiceCollaborationDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationdatatype-1) dataType 回传数据类型。  uint32_t dataSize 数据大小，单位是字节。  char *data 数据。       #### [h2]OnEvent

int32_t(* ServiceCollaborationCallback::OnEvent) (ServiceCollaborationEventCode code, uint32_t extraCode) **描述**

 在跨设备互通服务状态变化时被调用。

 **参数：**

  名称 描述   [ServiceCollaborationEventCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationeventcode-1) code 错误码。  uint32_t extraCode 拓展状态码，携带错误码未提供的额外信息。

---
*Updated: 2026-04-22 06:49:06*
