# NotificationSubscriberExtensionAbility (开发概述)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `notification-subscriber-extension-ability`  |  **DocID**: `e4d7a14a860449fe908dd6eeb2c5cdf9`  |  **NodeID**: `0002017757956490868707a23c65f27e`

---

# NotificationSubscriberExtensionAbility (开发概述)

                 #### 功能简介

     此扩展能力的核心作用是让三方应用接收系统通知，应用可在此扩展能力中实现手机与穿戴设备之间的数据传输。应用发送通知给分布式通知服务后，该服务会把通知转发给三方应用实现的[NotificationSubscriberExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationsubscriberextensionability)。若一定时间内无新通知发布，当前运行的[NotificationSubscriberExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationsubscriberextensionability)会被系统自动销毁。

                  #### 前提条件

     
      - 用户已通过手机中的穿戴应用程序与穿戴设备配对。
      - 用户已在手机的穿戴应用中，通过[openSubscriptionSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationextensionsubscription#notificationextensionsubscriptionopensubscriptionsettings)接口拉起的半模态弹窗中，开启了“允许获取本机通知”与“已获取的本机通知”的开关。
      - 支持[HFP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terminology#hfp)连接的设备，需保证HFP连接一直处于连接状态。
     
                  #### 应用场景

     
      - **使用场景**：手机通知同步到穿戴设备
      - **传输方式**：支持低功耗蓝牙（Bluetooth Low Energy）和传统蓝牙两种同步方式
     
                  #### 约束条件

     
      - 本示例仅支持标准系统上运行，支持设备：手机和平板。
      - 本示例为Stage模型，支持API22及以上版本SDK。
      - 本示例需要使用DevEco Studio 6.0.2 Release及以上版本才可编译运行。
      - 三方穿戴应用需申请[ohos.permission.SUBSCRIBE_NOTIFICATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionsubscribe_notification)权限，权限为system_basic级别。
     
                  #### 运作机制

---
*Updated: 2026-04-20 01:51:08*
