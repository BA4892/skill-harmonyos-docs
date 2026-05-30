# @ohos.advertising.AdsServiceExtensionAbility(广告扩展服务)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-adsserviceextensionability`

**DocID**: `24166336f2514288bc77f22fe96d9e9e`

**NodeID**: `000201775795946267132887b5fc5930`

---

@ohos.advertising.AdsServiceExtensionAbility(广告扩展服务)

本模块为设备厂商提供广告扩展能力，设备厂商可自主实现请求广告的回调。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import 
{ 

RespCallback 

} 
from 
'@kit.AdsKit'

;

RespCallback

(respData: Map<string, Array<advertising.Advertisement>>): void

广告请求回调。

系统能力：
 SystemCapability.Advertising.Ads

参数：

参数名

类型

必填

说明

respData

Map<string, Array<advertising.
Advertisement
>>

是

广告请求回调数据。

示例：

import { advertising, RespCallback } from '@kit.AdsKit';

function setRespCallback(respCallback: RespCallback) {
 const respData: Map<string, Array<advertising.Advertisement>> = new Map();
 // 设置广告返回数据
 // ...
 respCallback(respData);
}

---
*2026-04-22T15:54:00.231Z*