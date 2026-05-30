# BasePriorityOverlay

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-basepriorityoverlay`

**DocID**: `d922f7c2183e44ceacc8293a2adbecae`

**NodeID**: `000201775795946267313ed034f2dea3`

---

BasePriorityOverlay

导入模块

import { map, mapCommon } from '@kit.MapKit';

BasePriorityOverlay

具有优先级控制的覆盖物基础类，继承
BaseOverlay
。
PointAnnotation
和
Bubble
继承该基础类。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

[h2]getMaxZoom

getMaxZoom(): number

获取覆盖物的最大展示层级。

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

number

覆盖物的最大展示层级。

示例：

// 以pointAnnotation为例
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
let maxZoom: number = pointAnnotation.getMaxZoom();

[h2]getMinZoom

getMinZoom(): number

获取覆盖物的最小展示层级。

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

number

覆盖物的最小展示层级。

示例：

// 以pointAnnotation为例
let minZoom: number = pointAnnotation.getMinZoom();

[h2]setPriority

setPriority(priority: number): void

设置覆盖物碰撞优先级，值越大优先级越低。

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

priority

number

是

设置覆盖物的碰撞优先级。

示例：

// 以pointAnnotation为例
pointAnnotation.setPriority(100);

[h2]setZoom

setZoom(minZoom: number, maxZoom: number): void

设置覆盖物的显示层级。

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

minZoom

number

是

覆盖物的最小显示层级，取值范围：[2, 20]。

传入的值高于20，最小缩放级别会取20。

传入的值小于2，最小缩放级别会取2。

 说明： 

minZoom大于maxZoom，方法不生效。

maxZoom

number

是

覆盖物的最大显示层级，取值范围：[2, 20]。

传入的值高于20，最大缩放级别会取20。

传入的值小于2，最大缩放级别会取2。

示例：

// 以pointAnnotation为例
pointAnnotation.setZoom(3, 10);

[h2]setAnimation

setAnimation(animation: Animation): void

设置覆盖物的动画。仅支持
AlphaAnimation
、
ScaleAnimation
和
AnimationSet
。

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

Animation

是

动画。

示例：

// 创建一个透明度动画，从0.2到1
let animation: map.AlphaAnimation = new map.AlphaAnimation(0.2, 1);
// 设置动画持续时间为3000毫秒
animation.setDuration(3000);
// 定义动画开始时的回调函数
let callbackStart = () => {
 console.info("animationStart", `callback`);
};
// 定义动画结束时的回调函数
let callbackEnd = () => {
 console.info("animationEnd", `callback`);
};
// 注册动画开始事件监听器
animation.on("animationStart", callbackStart);
// 注册动画结束事件监听器
animation.on("animationEnd", callbackEnd);
// 设置动画填充模式为BACKWARDS，表示动画结束后回到初始状态
animation.setFillMode(map.AnimationFillMode.BACKWARDS);
// 设置动画重复模式为RESTART，表示每次重复从头开始
animation.setRepeatMode(map.AnimationRepeatMode.RESTART);
// 设置动画重复次数为100次
animation.setRepeatCount(100);
// 将动画应用到点注释上
pointAnnotation.setAnimation(animation);

[h2]startAnimation

startAnimation(): void

启动覆盖物的动画。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

// 创建一个透明度动画，从0.2到1
let animation: map.AlphaAnimation = new map.AlphaAnimation(0.2, 1);
// 设置动画持续时间为3000毫秒
animation.setDuration(3000);
// 定义动画开始时的回调函数
let callbackStart = () => {
 console.info("animationStart", `callback`);
};
// 定义动画结束时的回调函数
let callbackEnd = () => {
 console.info("animationEnd", `callback`);
};
// 注册动画开始事件监听器
animation.on("animationStart", callbackStart);
// 注册动画结束事件监听器
animation.on("animationEnd", callbackEnd);
// 设置动画填充模式为BACKWARDS，表示动画结束后回到初始状态
animation.setFillMode(map.AnimationFillMode.BACKWARDS);
// 设置动画重复模式为RESTART，表示每次重复从头开始
animation.setRepeatMode(map.AnimationRepeatMode.RESTART);
// 设置动画重复次数为100���
animation.setRepeatCount(100);
// 将动画应用到点注释上
pointAnnotation.setAnimation(animation);
// 启动动画
pointAnnotation.startAnimation();

[h2]clearAnimation

clearAnimation(): void

清除覆盖物的动画。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

pointAnnotation.clearAnimation();

---
*2026-04-22T15:54:00.349Z*