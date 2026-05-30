# scsi_peripheral_api.h

> **分区**: API参考  |  **Slug**: `capi-scsi-peripheral-api-h`  |  **DocID**: `7758bf2da8ff485aad23a03629292769`

---

# scsi_peripheral_api.h

  #### 概述

声明用于主机侧访问SCSI设备的SCSI Peripheral DDK接口。

 **引用文件：** <scsi_peripheral/scsi_peripheral_api.h>

 **库：** libscsi.z.so

 **系统能力：** SystemCapability.Driver.SCSI.Extension

 **起始版本：** 18

 **相关模块：** [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

   #### 汇总

  #### [h2]函数

 名称 描述   [int32_t OH_ScsiPeripheral_Init(void)](#oh_scsiperipheral_init) 初始化SCSI Peripheral DDK。  [int32_t OH_ScsiPeripheral_Release(void)](#oh_scsiperipheral_release) 释放SCSI Peripheral DDK。  [int32_t OH_ScsiPeripheral_Open(uint64_t deviceId, uint8_t interfaceIndex, ScsiPeripheral_Device **dev)](#oh_scsiperipheral_open) 打开deviceId和interfaceIndex指定的SCSI设备。其中，deviceId可以通过USB设备的总线编号左移32位后、同其设备地址进行或运算得到，interfaceIndex为需要打开的USB接口的索引值。  [int32_t OH_ScsiPeripheral_Close(ScsiPeripheral_Device **dev)](#oh_scsiperipheral_close) 关闭SCSI设备。  [int32_t OH_ScsiPeripheral_TestUnitReady(ScsiPeripheral_Device *dev, ScsiPeripheral_TestUnitReadyRequest *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_testunitready) 检查逻辑单元是否已经准备好。  [int32_t OH_ScsiPeripheral_Inquiry(ScsiPeripheral_Device *dev, ScsiPeripheral_InquiryRequest *request,ScsiPeripheral_InquiryInfo *inquiryInfo, ScsiPeripheral_Response *response)](#oh_scsiperipheral_inquiry) 查询SCSI设备的基本信息。  [int32_t OH_ScsiPeripheral_ReadCapacity10(ScsiPeripheral_Device *dev, ScsiPeripheral_ReadCapacityRequest *request,ScsiPeripheral_CapacityInfo *capacityInfo, ScsiPeripheral_Response *response)](#oh_scsiperipheral_readcapacity10) 获取SCSI设备的容量信息。  [int32_t OH_ScsiPeripheral_RequestSense(ScsiPeripheral_Device *dev, ScsiPeripheral_RequestSenseRequest *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_requestsense) 获取sense data（SCSI设备返回给主机的信息，用于报告设备的状态、错误信息以及诊断信息）。  [int32_t OH_ScsiPeripheral_Read10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_read10) 从指定逻辑块读取数据。  [int32_t OH_ScsiPeripheral_Write10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_write10) 写数据到设备的指定逻辑块。  [int32_t OH_ScsiPeripheral_Verify10(ScsiPeripheral_Device *dev, ScsiPeripheral_VerifyRequest *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_verify10) 校验指定逻辑块。  [int32_t OH_ScsiPeripheral_SendRequestByCdb(ScsiPeripheral_Device *dev, ScsiPeripheral_Request *request,ScsiPeripheral_Response *response)](#oh_scsiperipheral_sendrequestbycdb) 以CDB（Command Descriptor Block）方式发送SCSI命令。  [int32_t OH_ScsiPeripheral_CreateDeviceMemMap(ScsiPeripheral_Device *dev, size_t size,ScsiPeripheral_DeviceMemMap **devMmap)](#oh_scsiperipheral_createdevicememmap) 创建缓冲区。请在缓冲区使用完后，调用[OH_ScsiPeripheral_DestroyDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-api-h#oh_scsiperipheral_destroydevicememmap)销毁缓冲区，否则会造成资源泄漏。  [int32_t OH_ScsiPeripheral_DestroyDeviceMemMap(ScsiPeripheral_DeviceMemMap *devMmap)](#oh_scsiperipheral_destroydevicememmap) 销毁缓冲区。请在缓冲区使用完后及时销毁缓冲区，否则会造成资源泄漏。  [int32_t OH_ScsiPeripheral_ParseBasicSenseInfo(uint8_t *senseData, uint8_t senseDataLen,ScsiPeripheral_BasicSenseInfo *senseInfo)](#oh_scsiperipheral_parsebasicsenseinfo) 解析基本的sense data，包括Information、Command specific information、Sense key specific字段。       #### 函数说明

  #### [h2]OH_ScsiPeripheral_Init()

int32_t OH_ScsiPeripheral_Init(void) **描述**

 初始化SCSI Peripheral DDK。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 初始化DDK失败。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

        #### [h2]OH_ScsiPeripheral_Release()

int32_t OH_ScsiPeripheral_Release(void) **描述**

 释放SCSI Peripheral DDK。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

        #### [h2]OH_ScsiPeripheral_Open()

int32_t OH_ScsiPeripheral_Open(uint64_t deviceId, uint8_t interfaceIndex, ScsiPeripheral_Device **dev) **描述**

 打开deviceId和interfaceIndex指定的SCSI设备。其中，deviceId可以通过USB设备的总线编号左移32位后、同其设备地址进行或运算得到，interfaceIndex为需要打开的USB接口的索引值。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   uint64_t deviceId 设备ID，代表要操作的设备。  uint8_t interfaceIndex 接口索引，对应SCSI设备的接口。  [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) **dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空或*dev为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生IO错误。

  [SCSIPERIPHERAL_DDK_DEVICE_NOT_FOUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 通过deviceId和interfaceIndex找不到设备。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_Close()

int32_t OH_ScsiPeripheral_Close(ScsiPeripheral_Device **dev) **描述**

 关闭SCSI设备。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) **dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空或*dev为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

        #### [h2]OH_ScsiPeripheral_TestUnitReady()

int32_t OH_ScsiPeripheral_TestUnitReady(ScsiPeripheral_Device *dev, ScsiPeripheral_TestUnitReadyRequest *request,ScsiPeripheral_Response *response) **描述**

 检查逻辑单元是否已经准备好。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_TestUnitReadyRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iperipheralddk-scsiperipheral-testunitreadyrequest) *request 逻辑单元检查命令（test unit ready）的请求信息，详情参见[ScsiPeripheral_TestUnitReadyRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iperipheralddk-scsiperipheral-testunitreadyrequest)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response 逻辑单元检查命令（test unit ready）的响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、request为空或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_Inquiry()

int32_t OH_ScsiPeripheral_Inquiry(ScsiPeripheral_Device *dev, ScsiPeripheral_InquiryRequest *request,ScsiPeripheral_InquiryInfo *inquiryInfo, ScsiPeripheral_Response *response) **描述**

 查询SCSI设备的基本信息。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_InquiryRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-scsiperipheralddk-scsiperipheral-inquiryrequest) *request inquiry命令的请求信息，详情参见[ScsiPeripheral_InquiryRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-scsiperipheralddk-scsiperipheral-inquiryrequest)。  [ScsiPeripheral_InquiryInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-inquiryinfo) *inquiryInfo inquiry命令返回的查询信息，详情参见[ScsiPeripheral_InquiryInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-inquiryinfo)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response inquiry命令返回的原始响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空、inquiryInfo 为空、inquiryInfo->data或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_ReadCapacity10()

int32_t OH_ScsiPeripheral_ReadCapacity10(ScsiPeripheral_Device *dev, ScsiPeripheral_ReadCapacityRequest *request,ScsiPeripheral_CapacityInfo *capacityInfo, ScsiPeripheral_Response *response) **描述**

 获取SCSI设备的容量信息。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_ReadCapacityRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-readcapacityrequest) *request read capacity命令的请求信息，详情参见[ScsiPeripheral_ReadCapacityRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-readcapacityrequest)。  [ScsiPeripheral_CapacityInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-capacityinfo) *capacityInfo read capacity命令返回的容量信息，详情参见[ScsiPeripheral_CapacityInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-capacityinfo)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response read capacity命令返回的原始响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空、capacityInfo为空或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_RequestSense()

int32_t OH_ScsiPeripheral_RequestSense(ScsiPeripheral_Device *dev, ScsiPeripheral_RequestSenseRequest *request,ScsiPeripheral_Response *response) **描述**

 获取sense data（SCSI设备返回给主机的信息，用于报告设备的状态、错误信息以及诊断信息）。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_RequestSenseRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-requestsenserequest) *request Request Sense命令的请求信息，详情参见[ScsiPeripheral_RequestSenseRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/siperipheralddk-scsiperipheral-requestsenserequest)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response Request Sense命令返回的响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_Read10()

int32_t OH_ScsiPeripheral_Read10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response) **描述**

 从指定逻辑块读取数据。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_IORequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest) *request read命令的请求信息，详情参见[ScsiPeripheral_IORequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response read命令返回的响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空、request->data或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_Write10()

int32_t OH_ScsiPeripheral_Write10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response) **描述**

 写数据到设备的指定逻���块。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_IORequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest) *request write命令的请求信息，详情参见[ScsiPeripheral_IORequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response write命令返回的响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空、request->data为空或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_Verify10()

int32_t OH_ScsiPeripheral_Verify10(ScsiPeripheral_Device *dev, ScsiPeripheral_VerifyRequest *request,ScsiPeripheral_Response *response) **描述**

 校验指定逻辑块。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_VerifyRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-scsiperipheralddk-scsiperipheral-verifyrequest) *request verify命令的请求信息，详情参见[ScsiPeripheral_VerifyRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-scsiperipheralddk-scsiperipheral-verifyrequest)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response verify命令返回的响应信息，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、request为空或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_SendRequestByCdb()

int32_t OH_ScsiPeripheral_SendRequestByCdb(ScsiPeripheral_Device *dev, ScsiPeripheral_Request *request,ScsiPeripheral_Response *response) **描述**

 以CDB（Command Descriptor Block）方式发送SCSI命令。

 **需要权限：** ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  [ScsiPeripheral_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-request) *request 请求，详情参见[ScsiPeripheral_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-request)。  [ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response) *response 响应，详情参见[ScsiPeripheral_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-response)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_NO_PERM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 权限校验失败。

  [SCSIPERIPHERAL_DDK_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 未初始化DDK。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、 request为空、request->data为

  空、request->cdbLength为0或者response为空。

  [SCSIPERIPHERAL_DDK_SERVICE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 与DDK服务通信失败。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

  [SCSIPERIPHERAL_DDK_IO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) DDK发生I/O错误。

  [SCSIPERIPHERAL_DDK_TIMEOUT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 传输超时。

  [SCSIPERIPHERAL_DDK_INVALID_OPERATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 不支持该操作。

        #### [h2]OH_ScsiPeripheral_CreateDeviceMemMap()

int32_t OH_ScsiPeripheral_CreateDeviceMemMap(ScsiPeripheral_Device *dev, size_t size,ScsiPeripheral_DeviceMemMap **devMmap) **描述**

 创建缓冲区。请在缓冲区使用完后，调用[OH_ScsiPeripheral_DestroyDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-api-h#oh_scsiperipheral_destroydevicememmap)销毁缓冲区，否则会造成资源泄漏。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device) *dev 设备句柄，详情参见[ScsiPeripheral_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-device)。  size_t size 缓冲区的大小。  [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap) **devMmap 创建的缓冲区通过该参数返回给调用者，详情参见[ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) dev为空、devMmap为空或*devMmap为空。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

        #### [h2]OH_ScsiPeripheral_DestroyDeviceMemMap()

int32_t OH_ScsiPeripheral_DestroyDeviceMemMap(ScsiPeripheral_DeviceMemMap *devMmap) **描述**

 销毁缓冲区。请在缓冲区使用完后及时销毁缓冲区，否则会造成资源泄漏。

 **起始版本：** 18

 **参数：**

  参数项 描述   [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap) *devMmap 待销毁的由[OH_ScsiPeripheral_CreateDeviceMemMap](#oh_scsiperipheral_createdevicememmap)创建的缓冲区，详情参见[ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) devMmap为空。

  [SCSIPERIPHERAL_DDK_MEMORY_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 内存操作失败。

        #### [h2]OH_ScsiPeripheral_ParseBasicSenseInfo()

int32_t OH_ScsiPeripheral_ParseBasicSenseInfo(uint8_t *senseData, uint8_t senseDataLen,ScsiPeripheral_BasicSenseInfo *senseInfo) **描述**

 解析基本的sense data，包括Information、Command specific information、Sense key specific字段。

 **起始版本：** 18

 **参数：**

  参数项 描述   uint8_t *senseData 待解析的sense data。  uint8_t senseDataLen sense data长度。  [ScsiPeripheral_BasicSenseInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo) *senseInfo 用于保存解析后的基本信息，详情参见[ScsiPeripheral_BasicSenseInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo)。     **返回：**

  类型 说明   int32_t [SCSIPERIPHERAL_DDK_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) 调用接口成功。

  [SCSIPERIPHERAL_DDK_INVALID_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode) senseData格式不是描述符或固定格式、senseDataLen小于

  SCSIPERIPHERAL_MIN_DESCRIPTOR_FORMAT_SENSE或者senseDataLen小于SCSIPERIPHERAL_MIN_FIXED_FORMAT_SENSE。

---
*Updated: 2026-04-22 06:48:54*
