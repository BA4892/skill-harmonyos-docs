# Functions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-arkts-utils-f`

**DocID**: `8a54f877e8eb4a26955a02c639ae9e85`

**NodeID**: `0002017757962161966367803cebd5a6`

---

Functions

本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。

导入模块

import { ArkTSUtils } from '@kit.ArkTS'

ArkTSUtils.isSendable

isSendable(value: Object | null | undefined): boolean

该方法用于判断value是否为Sendable数据类型。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Utils.Lang

参数：

参数名

类型

必填

说明

value

Object | null | undefined

是

待校验的对象。

返回值：

类型

说明

boolean

value是否为Sendable数据类型，true表示value是Sendable数据类型，否则为false。

示例：

import { ArkTSUtils } from '@kit.ArkTS';

@Sendable
function sendableFunc() {
 console.info("sendableFunc");
}

if (ArkTSUtils.isSendable(sendableFunc)) {
 console.info("sendableFunc is Sendable");
} else {
 console.info("sendableFunc is not Sendable");
}
// 期望输出: 'SendableFunc is Sendable'

---
*2026-04-22T15:53:58.083Z*