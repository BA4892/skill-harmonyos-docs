# @ohos.bluetooth.map (蓝牙map模块)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-bluetooth-map`

**DocID**: `b50352f656fc4ad0aa26675b4b8c081f`

**NodeID**: `000201775796341684671571df81bc54`

---

@ohos.bluetooth.map (蓝牙map模块)

本模块提供基于消息访问协议（Message Access Profile，
MAP
）的蓝牙消息访问能力，支持获取连接状态等方法。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { map } from '@kit.ConnectivityKit';

BaseProfile

type BaseProfile = baseProfile.BaseProfile

基础Profile接口定义，提供订阅和获取连接状态等公共能力。

系统能力
：SystemCapability.Communication.Bluetooth.Core

类型

说明

baseProfile.BaseProfile

基础Profile接口定义。

map.createMapMseProfile

createMapMseProfile(): MapMseProfile

创建蓝牙消息访问协议中的
MSE
实例。通过该实例可使用本端作为MSE设备的接口，如：获取和其他设备间的蓝牙消息服务连接状态。

系统能力
：SystemCapability.Communication.Bluetooth.Core

返回值：

类型

说明

MapMseProfile

返回该profile的实例。

错误码
：

以下错误码的详细介绍请参见
通用错误码说明文档
。

错误码ID

错误信息

401

Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.

801

Capability not supported.

示例：

import { BusinessError } from '@kit.BasicServicesKit';

try {
 let mapMseProfile = map.createMapMseProfile();
 console.info('MapMse success');
} catch (err) {
 console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

MapMseProfile

该实例表示蓝牙消息访问协议中的
MSE
角色。

该类继承于
BaseProfile
，因此可以使用其父类中的方法。

使用该类的接口前，需通过
createMapMseProfile
接口构造该类的实例。

和该实例角色相对应的是
MCE
角色。

---
*2026-04-22T15:53:59.105Z*