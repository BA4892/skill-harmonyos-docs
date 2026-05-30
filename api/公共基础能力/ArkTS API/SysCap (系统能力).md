# SysCap (系统能力)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-syscap`

**DocID**: `88b75b18a1dd4a6dafdd95c2a67108ac`

**NodeID**: `0002017757958595808127e12884d053`

---

SysCap (系统能力)

系统能力（SystemCapability，简称SysCap），指操作系统中每一个相对独立的特性。不同的设备对应不同的系统能力集，每个系统能力对应一个或多个API。开发者可根据系统能力来判断是否可以使用某接口。

本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

canIUse

canIUse(syscap: string): boolean

查询系统是否具备某个系统能力。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

syscap

string

是

待查询的系统能力名称。不支持输入null、undefined。

返回值：

类型

说明

boolean

系统能力查询结果，true表示系统具备该能力，false表示系统不具备。

示例：

import { geoLocationManager } from '@kit.LocationKit'
import { BusinessError } from '@kit.BasicServicesKit';

const isLocationAvailable = canIUse('SystemCapability.Location.Location.Core');
if (isLocationAvailable) {
 geoLocationManager.getCurrentLocation((err: BusinessError, location: geoLocationManager.Location) => {
 if (err) {
 console.error('err=' + JSON.stringify(err));
 }
 if (location) {
 console.info('location=' + JSON.stringify(location));
 }
 });
} else {
 console.info('Location not by this device.');
}

---
*2026-04-22T15:55:04.543Z*