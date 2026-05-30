# @ohos.net.sharing (网络共享管理)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-net-sharing`

**DocID**: `06b85949f82b49f5b62d39a2b0edf6eb`

**NodeID**: `0002017757963416846340a4be830da1`

---

@ohos.net.sharing (网络共享管理)

网络共享管理模块用于将设备网络连接共享给其他连接设备。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { sharing } from '@kit.NetworkKit';

NetHandle

type NetHandle = connection.NetHandle

数据网络的句柄。在调用NetHandle的方法之前，需要先获取NetHandle对象。

系统能力
：SystemCapability.Communication.NetManager.Core

类型

说明

connection.NetHandle

网络链路信息。

---
*2026-04-22T15:53:59.169Z*