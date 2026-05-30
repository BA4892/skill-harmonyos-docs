# @system.mediaquery (媒体查询)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-system-mediaquery`

**DocID**: `c8c4823dd5d949128512bdaa186c391c`

**NodeID**: `00020177579621619674724f95f3518c`

---

@system.mediaquery (媒体查询)

提供根据不同媒体类型定义不同的样式。

从API version 7 开始，该接口不再维护，推荐使用新接口
@ohos.mediaquery
。

本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import mediaquery from '@system.mediaquery';

MediaQuery

定义MediaQuery接口。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

[h2]matchMedia

matchMedia(condition: string): MediaQueryList

根据媒体查询条件，创建MediaQueryList对象。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

condition

string

是

用于查询的条件。

返回值：

类型

说明

MediaQueryList

表示创建MediaQueryList对象的属性，详情见下表说明。

示例：

let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

MediaQueryEvent

定义MediaQuery事件。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

类型

可选

说明

matches

boolean

否

匹配结果。true表示满足查询条件，false表示不满足查询条件。

MediaQueryList

定义MediaQuery列表信息。

[h2]属性

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

类型

只读

可选

说明

media

string

是

是

序列化媒体查询条件。

matches

boolean

是

是

匹配结果。 true表示满足查询条件，false表示不满足查询条件。

onchange

(matches: boolean) => void

是

是

匹配结果发生变化时的执行函数。matches表示是否匹配媒体查询条件，true满足查询条件，false不满足查询条件。

[h2]MediaQueryList.addListener

addListener(callback: (event: MediaQueryEvent) => void): void

给MediaQueryList添加回调函数，回调函数应在onShow生命周期之前添加，即需要在onInit或onReady生命周期里添加。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

callback

(event: MediaQueryEvent) => void

是

匹配条件发生变化的响应函数。

示例：

import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
 if(e.matches){
 // do something
 }
}
mMediaQueryList.addListener(maxWidthMatch);

[h2]MediaQueryList.removeListener

removeListener(callback: (event: MediaQueryEvent) => void): void

移除MediaQueryList中的回调函数。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

参数：

参数名

类型

必填

说明

callback

(event: MediaQueryEvent) => void

是

匹配条件发生变化的响应函数。

示例：

import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
 if(e.matches){
 // do something
 }
}
mMediaQueryList.removeListener(maxWidthMatch);

---
*2026-04-22T15:53:58.179Z*