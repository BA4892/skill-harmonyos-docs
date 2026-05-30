# Bubble

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-bubble`

**DocID**: `ac9d4c327d4d4b48ae7bae8830ebcc5f`

**NodeID**: `00020177579594626731654f98e68770`

---

Bubble

导入模块

import { map, mapCommon } from '@kit.MapKit';

Bubble

气泡，继承
BasePriorityOverlay
。在调用map.
MapComponentController
类的
addBubble
方法时会返回该类型的实例。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

let bubbleOptions: mapCommon.BubbleParams = {
 positions: [[{
 latitude: 31.98, longitude: 118.766
 }]],
 // 图标需存放在resources/rawfile目录下
 icons: [
 'icon.png',
 'icon.png',
 'icon.png',
 'icon.png'
 ],
 forceVisible: true,
 priority: 3,
 minZoom: 2,
 maxZoom: 20,
 visible: true,
 zIndex: 1
};
let bubble: map.Bubble = await this.mapController.addBubble(bubbleOptions);

[h2]setIcons

setIcons(icons: Array<string | image.PixelMap | Resource>): Promise<void>

设置气泡的图标。使用Promise异步回调。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

参数：

参数名

类型

必填

说明

icons

Array<string | 
image.PixelMap
 | 
Resource
>

是

气泡的图标。

必须提供4个方向的图标，传入的图标宽高需要相同。

图片格式支持jpg、jpeg、png、gif、webp、svg。

string类型入参支持两种格式：

资源相对路径格式：图标存放在resources/rawfile，icon参数传入rawfile文件夹下的相对路径。

toDataURL格式（如data:image/png;base64,<图片的Base64字节编码值>）。

 说明： 

从5.0.0(12)版本开始，icon属性支持
Resource
和
image.PixelMap
类型。

返回值：

类型

说明

Promise<void>

Promise对象。无返回结果的Promise对象。

示例：

import { image } from '@kit.ImageKit';

// 图标需存放在resources/rawfile目录下
let icons: Array<string | image.PixelMap | Resource> = [
 'test1.png',
 'test2.png',
 'test3.png',
 'test4.png'
];
await bubble.setIcons(icons);

[h2]setPositions

setPositions(positions: Array<Array<mapCommon.LatLng>>): void

设置气泡的候选位置坐标。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

参数：

参数名

类型

必填

说明

positions

Array<Array<
mapCommon.LatLng
>>

是

气泡的候选位置坐标。

示例：

let positions: Array<Array<mapCommon.LatLng>> = [[
 { latitude: 31.9844, longitude: 118.7112 },
 { latitude: 31.9844, longitude: 118.7262 },
 { latitude: 31.9844, longitude: 118.7362 },
 { latitude: 31.9844, longitude: 118.7462 },
 { latitude: 31.9844, longitude: 118.7562 },
 { latitude: 31.9844, longitude: 118.7662 },
 { latitude: 31.9844, longitude: 118.7762 }
]];
bubble.setPositions(positions);

---
*2026-04-22T15:54:00.350Z*