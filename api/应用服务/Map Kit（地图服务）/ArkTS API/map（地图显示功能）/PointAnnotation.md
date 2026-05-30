# PointAnnotation

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-pointannotation`

**DocID**: `732a5465660a4409b9c23f7024443185`

**NodeID**: `000201775795946267314b0d4b926715`

---

PointAnnotation

导入模块

import { map, mapCommon } from '@kit.MapKit';

PointAnnotation

点注释，继承
BasePriorityOverlay
。在调用map.
MapComponentController
类的
addPointAnnotation
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

let pointAnnotationOptions: mapCommon.PointAnnotationParams = {
 position: {
 latitude: 32.120750,
 longitude: 118.788765
 },
 titles: [{
 content: "南京夫子庙"
 }],
 // 图标需存放在resources/rawfile目录下
 icon: 'icon.png'
};
let pointAnnotation: map.PointAnnotation = await this.mapController.addPointAnnotation(pointAnnotationOptions);

[h2]getPosition

getPosition(): mapCommon.LatLng

获取点注释的锚点坐标。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

返回值：

类型

说明

mapCommon.LatLng

点注释的锚点坐标。

示例：

let position: mapCommon.LatLng = pointAnnotation.getPosition();

[h2]getTitleText

getTitleText(): mapCommon.Text

获取点注释第一标题的属性。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

返回值：

类型

说明

mapCommon.Text

获取点注释第一标题的属性。

示例：

let titleText: mapCommon.Text = pointAnnotation.getTitleText();

[h2]setTitleText

setTitleText(text: mapCommon.Text): void

设置第一标题属性（除content）。

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

text

mapCommon.Text

是

第一标题属性（除content）。

 说明： 

约束条件：fontSize、strokeWidth大于等于0。

示例：

// 以pointAnnotation为例
pointAnnotation.setTitleText({
 content: '',
 color: 0xff00ffff,
 fontSize: 15,
 strokeColor: 0xff00ff00,
 strokeWidth: 2,
 fontStyle: mapCommon.FontStyle.BOLD_ITALIC
});

[h2]setTitleAnimation

setTitleAnimation(animation: FontSizeAnimation): void

设置点注释的标题动画。

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

animation

FontSizeAnimation

是

点注释的标题动画。

示例：

let animation: map.FontSizeAnimation = new map.FontSizeAnimation(5, 25);
animation.setDuration(3000);
animation.on("start",() => {
 console.info('start Font Animation');
});
animation.on("end",() => {
 console.info('end Font Animation');
});
// 设置动画完成的状态
animation.setFillMode(map.AnimationFillMode.BACKWARDS);
// 设置动画重复方式
animation.setRepeatMode(map.AnimationRepeatMode.REVERSE);
// 设置动画的插值器
animation.setInterpolator(Curve.Linear);
// 设置动画重复的次数
animation.setRepeatCount(100);
pointAnnotation.setTitleAnimation(animation);
pointAnnotation.startTitleAnimation();

[h2]startTitleAnimation

startTitleAnimation(): void

启动点注释的标题动画。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

pointAnnotation.startTitleAnimation();

---
*2026-04-22T15:55:04.211Z*