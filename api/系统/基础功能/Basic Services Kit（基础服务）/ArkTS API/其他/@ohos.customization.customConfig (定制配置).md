# @ohos.customization.customConfig (定制配置)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-customization-customconfig`

**DocID**: `d322377393704a008a1bab52af7a551e`

**NodeID**: `000201775796341684855f3b26177459`

---

@ohos.customization.customConfig (定制配置)

本模块接口为应用提供定制配置的获取能力，如渠道号等。

 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { customConfig } from '@kit.BasicServicesKit';

customConfig.getChannelId

getChannelId(): string

获取应用的预装渠道号。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

**系统能力：**SystemCapability.Customization.CustomConfig

返回值：

类型

说明

string

渠道号

示例：

import { customConfig } from '@kit.BasicServicesKit';

let channelId: string = customConfig.getChannelId();
console.info('app channelId is ' + channelId);

---
*2026-04-22T15:55:03.083Z*