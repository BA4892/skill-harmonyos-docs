# @ohos.enterprise.deviceControl（设备控制管理）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-enterprise-devicecontrol`

**DocID**: `0decc3f78c9d424cbdbc99533fa217d7`

**NodeID**: `00020177579634168464027f7ff78ef1`

---

@ohos.enterprise.deviceControl（设备控制管理）

本模块提供设备控制能力。

本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考
MDM Kit开发指南
。

导入模块

import { deviceControl } from '@kit.MDMKit';

deviceControl.operateDevice

operateDevice(admin: Want, operate: string, addition?: string): void

允许管理员操作设备。

需要权限：
 ohos.permission.ENTERPRISE_OPERATE_DEVICE

系统能力：
 SystemCapability.Customization.EnterpriseDeviceManager

模型约束：
 此接口仅可在Stage模型下使用。

参数：

参数名

类型

必填

说明

admin

Want

是

企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。

operate

string

是

要执行的操作。

- resetFactory：设备恢复出厂设置。接口调用后，设备将立即恢复出厂设置。恢复完成后，整机设备数据将全部被擦除且无法恢复。企业需要做好应用的安全设计，防止应用被攻击导致企业数据丢失。

- reboot：设备重启。

- shutDown：设备关机。

- lockScreen：设备屏幕锁定。该能力使用后设备屏幕无法使用，仅支持锁屏文案定制，不支持在锁屏界面定制交互功能，如果需要实现在屏幕锁定的情况下支持自定义行为的能力，建议使用
setAllowedKioskApps
接口配置支持
Kiosk模式
的应用。

- lockDevice：设备锁定，当设备锁定后屏幕无法使用，按键无响应。在开发过程中，下发设备锁定策略前一定要预留逃生通道，并且确保逃生通道正常。建议开发时保留hdc能力与远程通信能力，通过hdc命令或者远程push能力能触发设备解锁定功能。

- unlockDevice：设备解锁定。

在API version21之前，设备锁定和解锁定仅支持PC/2in1使用。从API version21开始，设备锁定和解锁定支持Phone和Tablet。

addition

string

否

执行时附加参数。若operate为lockDevice，表示屏幕锁定后展示的描述信息。

错误码：

以下错误码的详细介绍请参见
企业设备管理错误码
和
通用错误码
。

错误码ID

错误信息

9200001

The application is not an administrator application of the device.

9200002

The administrator application does not have permission to manage the device.

201

Permission verification failed. The application does not have the permission required to call the API.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.

示例：

import { deviceControl } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
 // 需根据实际情况进行替换
 bundleName: 'com.example.myapplication',
 abilityName: 'EnterpriseAdminAbility'
};

try {
 // 参数需根据实际情况进行替换
 deviceControl.operateDevice(wantTemp, 'resetFactory');
} catch (err) {
 console.error(`Failed to reset factory. Code is ${err.code}, message is ${err.message}`);
}

---
*2026-04-22T15:55:03.214Z*