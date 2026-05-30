# device_security_mode.h

> **分区**: API参考  |  **Slug**: `devicesecurity-capi-device-security-mode-8h`  |  **DocID**: `9f6004182f9a4e18b337c36cec4b4713`

---

# device_security_mode.h

  #### 概述

文件中定义了与设备安全模式相关的函数。

 **引用文件：** <DeviceSecurityKit/device_security_mode.h>

 **库：** libdevice_security_mode.z.so

 **系统能力：** SystemCapability.Security.SafetyDetect

 **起始版本：** 5.0.1(13)

 **相关模块：** [DeviceSecurityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode)

   #### 汇总

  #### [h2]类型定义

 名称 描述   typedef enum [DSM_DeviceSecurityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) [DSM_DeviceSecurityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode) 设备安全模式枚举类型定义。       #### [h2]枚举

 名称 描述   [DSM_DeviceSecurityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) {

 DSM_NORMAL_MODE = 0,

 DSM_SECURE_SHIELD_MODE = 1

 }

  设备安全模式枚举值。       #### [h2]函数

 名称 描述   [DSM_DeviceSecurityMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1) [HMS_DSM_GetDeviceSecurityMode()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-devicesecuritymode#hms_dsm_getdevicesecuritymode) 查询当前设备安全模式。

---
*Updated: 2026-04-22 06:47:53*
