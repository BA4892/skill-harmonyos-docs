# oh_device_manager_err_code.h

> **分区**: API参考  |  **Slug**: `capi-oh-device-manager-err-code-h`  |  **DocID**: `2c27c6a86a2f4e2b92af0e9fc901d04b`

---

# oh_device_manager_err_code.h

  #### 概述

声明设备管理模块错误码信息。

 **引用文件：** <distributedhardware/device_manager/oh_device_manager_err_code.h>

 **库：** libdevicemanager_ndk.so

 **系统能力：** SystemCapability.DistributedHardware.DeviceManager

 **起始版本：** 20

 **相关模块：** [DeviceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-devicemanager)

   #### 汇总

  #### [h2]枚举

 名称 typedef关键字 描述   [DeviceManager_ErrorCode](#devicemanager_errorcode) DeviceManager_ErrorCode 分布式设备管理错误码信息。       #### 枚举类型说明

  #### [h2]DeviceManager_ErrorCode

enum DeviceManager_ErrorCode **描述**

 分布式设备管理错误码信息。

 **起始版本：** 20

  枚举项 描述   ERR_OK = 0 执行成功。  ERR_PERMISSION_ERROR = 201 权限校验失败。  ERR_INVALID_PARAMETER = 401 非法参数。  DM_ERR_FAILED = 11600101 函数执行失败。  DM_ERR_OBTAIN_SERVICE = 11600102 获取设备管理服务失败。  DM_ERR_OBTAIN_BUNDLE_NAME = 11600109 获取bundleName失败。

---
*Updated: 2026-04-22 06:48:18*
