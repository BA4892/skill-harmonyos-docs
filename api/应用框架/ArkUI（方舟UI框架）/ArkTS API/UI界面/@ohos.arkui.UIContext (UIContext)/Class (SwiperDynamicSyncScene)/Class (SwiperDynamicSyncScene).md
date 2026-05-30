# Class (SwiperDynamicSyncScene)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-uicontext-swiperdynamicsyncscene`

**DocID**: `61cda85f8a054ddba67ec8b33f1482ac`

**NodeID**: `00020177579621619772871b2169e512`

---

Class (SwiperDynamicSyncScene)

提供Swiper组件相关帧率的配置。

本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本Class首批接口从API version 12开始支持。

SwiperDynamicSyncScene继承自
DynamicSyncScene
，对应Swiper的动态帧率场景。

属性

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.ArkUI.ArkUI.Full

名称

类型

只读

可选

说明

type
12+

SwiperDynamicSyncSceneType

是

否

Swiper的动态帧率场景。

示例：

import { SwiperDynamicSyncSceneType, SwiperDynamicSyncScene } from '@kit.ArkUI';

@Entry
@Component
struct Frame {
 @State ANIMATION: ExpectedFrameRateRange = { min: 0, max: 120, expected: 90 };
 @State GESTURE: ExpectedFrameRateRange = { min: 0, max: 120, expected: 30};
 private scenes: SwiperDynamicSyncScene[] = [];

 build() {
 Column() {
 Text("动画"+ JSON.stringify(this.ANIMATION))
 Text("跟手"+ JSON.stringify(this.GESTURE))
 Row(){
 Swiper() {
 Text("one")
 Text("two")
 Text("three")
 }
 .width('100%')
 .height('300vp')
 .id("dynamicSwiper")
 .backgroundColor(Color.Blue)
 .autoPlay(true)
 .onAppear(()=>{
 let scenes = this.getUIContext().requireDynamicSyncScene("dynamicSwiper") as SwiperDynamicSyncScene[];
 if (scenes) {
 this.scenes = scenes;
 }
 })
 }

 Button("set frame")
 .onClick(() => {
 this.scenes.forEach((scenes: SwiperDynamicSyncScene) => {

 if (scenes.type == SwiperDynamicSyncSceneType.ANIMATION) {
 scenes.setFrameRateRange(this.ANIMATION);
 }

 if (scenes.type == SwiperDynamicSyncSceneType.GESTURE) {
 scenes.setFrameRateRange(this.GESTURE);
 }
 });
 })
 }
 }
}

---
*2026-04-22T15:53:58.136Z*