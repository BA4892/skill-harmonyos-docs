# vibrator.h

> **分区**: API参考  |  **Slug**: `capi-vibrator-h`  |  **DocID**: `d354ad2df8e64bf38fe4e5a06e7a4b2d`

---

# vibrator.h

  #### 概述

为您提供标准的开放API，用于控制马达振动的启停。

 **引用文件：** <sensors/vibrator.h>

 **库：** libohvibrator.z.so

 **系统能力：** SystemCapability.Sensors.MiscDevice

 **起始版本：** 11

 **相关模块：** [Vibrator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator)

   #### 汇总

  #### [h2]函数

 名称 描述   [int32_t OH_Vibrator_PlayVibration(int32_t duration, Vibrator_Attribute attribute)](#oh_vibrator_playvibration) 控制马达在指定时间内持续振动。  [int32_t OH_Vibrator_PlayVibrationCustom(Vibrator_FileDescription fileDescription, Vibrator_Attribute vibrateAttribute)](#oh_vibrator_playvibrationcustom) 播放自定义振动序列。  [int32_t OH_Vibrator_Cancel()](#oh_vibrator_cancel) 停止马达振动。       #### 函数说明

  #### [h2]OH_Vibrator_PlayVibration()

int32_t OH_Vibrator_PlayVibration(int32_t duration, Vibrator_Attribute attribute) **描述**

 控制马达在指定时间内持续振动。

 **需要权限：** ohos.permission.VIBRATE

 **起始版本：** 11

 **参数：**

  参数项 描述   int32_t duration - 振动时长，单位：毫秒。  [Vibrator_Attribute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-attribute) attribute - 振动属性，请参考VibrateAttribute。     **返回：**

  类型 说明   int32_t 如果操作成功，则返回0；否则返回非零值。请参阅 [Vibrator_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-type-h#vibrator_errorcode)。       #### [h2]OH_Vibrator_PlayVibrationCustom()

int32_t OH_Vibrator_PlayVibrationCustom(Vibrator_FileDescription fileDescription, Vibrator_Attribute vibrateAttribute) **描述**

 播放自定义振动序列。

 **需要权限：** ohos.permission.VIBRATE

 **起始版本：** 11

 **参数：**

  参数项 描述   [Vibrator_FileDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-filedescription) fileDescription - 自定义振动效果文件描述符，请参阅 [Vibrator_FileDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-filedescription)。  [Vibrator_Attribute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-attribute) vibrateAttribute - 振动属性，请参阅 [Vibrator_Attribute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-vibrator-attribute)。     **返回：**

  类型 说明   int32_t 如果操作成功，则返回0；否则返回非零值。请参阅 [Vibrator_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-type-h#vibrator_errorcode)。       #### [h2]OH_Vibrator_Cancel()

int32_t OH_Vibrator_Cancel() **描述**

 停止马达振动。

 **需要权限：** ohos.permission.VIBRATE

 **起始版本：** 11

 **返回：**

  类型 说明   int32_t 如果操作成功，则返回0；否则返回非零值。请参阅 [Vibrator_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-type-h#vibrator_errorcode)。

---
*Updated: 2026-04-22 06:48:46*
