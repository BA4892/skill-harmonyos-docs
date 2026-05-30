# network_boost.h

> **分区**: API参考  |  **Slug**: `network-boost-c-files-boost`  |  **DocID**: `20663df7bd7b46e28aec58b13bd91546`

---

# network_boost.h

  #### 概述

声明用于网络加速的API。提供基本的函数、结构体和const定义。

 **引用文件：** <NetworkBoostKit/network_boost.h>

 **库：** libnetwork_boost.so

 **系统能力：** SystemCapability.Communication.NetworkBoost.Core

 **起始版本：** 6.0.2(22)

 **相关模块：** [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

   #### 汇总

  #### 结构体

 名称 描述   struct  [NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc) 业务场景描述信息。       #### 枚举

 名称 描述   struct  [NetworkBoost_SceneEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_sceneevent){

 SCENE_EVENT_ENTER = 0, SCENE_EVENT_UPDATE = 1, SCENE_EVENT_LEAVE = 2

 }

  业务事件枚举。       #### 函数

 名称 描述   int32_t [HMS_NetworkBoost_SetSceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#hms_networkboost_setscenedesc)([NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc) sceneDesc) 设置业务场景。

---
*Updated: 2026-04-22 06:48:43*
