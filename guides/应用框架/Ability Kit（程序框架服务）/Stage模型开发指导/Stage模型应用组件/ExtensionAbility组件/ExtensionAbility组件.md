# ExtensionAbility组件

> **分区**: Guides  |  **Slug**: `extensionability-overview`  |  **DocID**: `35bff5e5a50b42c5a3ed3c9abd55ccb9`  |  **NodeID**: `00020177683995544387678c26562214`

---

# ExtensionAbility组件

       [ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)组件是一种面向特定场景的应用组件。每一个具体场景对应一个不同类型的ExtensionAbility，例如用于卡片场景的[FormExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability)，用于输入法场景的[InputMethodExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-extension-ability)，用于延时任务场景的[WorkSchedulerExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-workschedulerextensionability)等。开发者通过使用不同类型的ExtensionAbility组件，可以扩展和丰富应用功能，更好地与其他应用或系统开展交互。

    不同类型ExtensionAbility组件均由系统定义，且通常由相应的系统服务统一管理（例如[InputMethodExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-extension-ability)组件由输入法管理服务统一管理）。开发者不能直接继承ExtensionAbility组件，只能使用（包括实现或访问）已定义的[ExtensionAbility类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#extensionabilitytype)。

              #### ExtensionAbility类型说明

     当前系统已定义的ExtensionAbility类型如下表所示。

                         
        - “是否允许三方应用实现”是指：三方应用能否继承该类型ExtensionAbility实现自己的业务逻辑。
        - “是否有独立Extension沙箱”是指：该类型ExtensionAbility的沙箱是否与主应用沙箱相对独立、不可互相访问。
       
                      
                        | ExtensionAbility类型          | 功能描述          | 是否允许三方应用实现          | 是否有独立Extension沙箱         
                               | [FormExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability)          | 卡片扩展能力，用于提供[服务卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview)的相关能力。          | 是          | 否         
                 | [WorkSchedulerExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-workschedulerextensionability)          | 延时任务扩展能力，用于提供[延迟任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/work-scheduler)的相关能力。          | 是          | 否         
                 | [InputMethodExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-extension-ability)          | 输入法扩展能力，用于实现[输入法应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ime-kit-intro)的开发。          | 是          | 是         
                 | ServiceExtensionAbility                    后台服务扩展能力，提供后台运行并对外提供相应能力。

          三方应用可以连接该ExtensionAbility，并进行通信。

         | 否          | 否         
                 | [AccessibilityExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-accessibilityextensionability)          | 无障碍服务扩展能力，支持访问与操作前台界面。          | 是          | 否         
                 | DataShareExtensionAbility                    数据共享扩展能力，用于对外提供数据读写服务。

          三方应用可以连接该ExtensionAbility，进行数据读写。

         | 否          | 否         
                 | [BackupExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-backupextensionability)          | 数据备份扩展能力，用于提供[备份及恢复应用数据](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-backup-overview)的能力。          | 是          | 否         
                 | [EnterpriseAdminExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability)                    [企业设备管理扩展能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit-admin)，提供企业管理时处理管理事件的能力，

          比如设备上应用安装事件、锁屏密码输入错误次数过多事件等。

         | 是          | 否         
                 | [PrintExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-printextensionability)          | 文件[打印扩展能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/printextensionabilityguide)，提供应用打印照片、文档等办公场景。          | 是          | 否         
                 | [ShareExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-shareextensionability)          | 分享扩展组件，用于提供分享模板服务扩展的能力。          | 是          | 否         
                 | [DriverExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-driverextensionability)          | 驱动扩展能力，用于提供[驱动相关扩展框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverextensionability)。          | 是          | 否         
                 | [ActionExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-actionextensionability)          | 自定义服务扩展能力，为开发者提供基于UIExtension的自定义操作业务模板。          | 是          | 否         
                 | [AdsServiceExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-adsserviceextensionability)          | 广告服务扩展能力，对外提供后台自定义广告业务服务。          | 是          | 否         
                 | [EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddeduiextensionability)          | 嵌入式UI扩展能力，提供[跨进程界面嵌入](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/embeddeduiextensionability)的能力。          | 是          | 否         
                 | [FenceExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-fenceextensionability)          | 地理围栏扩展能力，用于提供[地理围栏](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fenceextensionability)扩展的能力。          | 是          | 否         
                 | [DistributedExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedextensionability)          | 分布式扩展能力，提供分布式创建、销毁、连接的生命周期回调。          | 是          | 否         
                 | [AppServiceExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-appserviceextensionability)          | 应用后台服务扩展能力，提供应用后台服务的创建、销毁、连接、断开等生命周期回调。          | 是          | 否         
                 | [FaultLogExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-faultlogextensionability)          | 提供故障延迟通知的能力。          | 是          | 否         
                 | [WebNativeMessagingExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensionability)          | Web插件对���能力。提供插件对接native应用能力。          | 是          | 否         
                 | [NotificationSubscriberExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationsubscriberextensionability)          | 通知订阅拓展能力，用于发送通知数据到三方穿戴设备。          | 是          | 否         
                 | [PartnerAgentExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/is-fusionconnectivity-partneragentextensionability)          | 基于蓝牙通信技术，提供设备发现与设备下线的通知功能。          | 是          | 否         
                 | [PhotoEditorExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-photoeditorextensionability)          | 照片编辑扩展能力，提供给应用实现图片编辑的功能。          | 是          | 否         
                 | [VpnExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vpnextensionability)          | VPN扩展能力，提供三方VPN创建、销毁等生命周期回调。          | 是          | 否         
                 | [FormEditExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formeditextensionability)          | 卡片编辑扩展能力，提供卡片页面编辑能力，支持实现用户自定义卡片内容的功能，例如：编辑联系人卡片、修改卡片中展示的联系人、编辑天气卡片等。          | 是          | 否         
                 | [LiveFormExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-liveformextensionability)          | 卡片动效扩展能力，提供卡片动效能力，例如卡片破框动效，丰富信息提醒、浅层交互功能，显著提升用户体验。          | 是          | 否         
                 | [PushExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-extension-ability)          | 推送扩展能力，提供获取场景化消息数据等能力。          | 是          | 否         
                 | [InsightIntentUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/intents-arkts-api-insightintent-uiextension)          | 为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。          | 是          | 否         
                 | [AssetAccelerationExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-extensionability)          | 资源预下载扩展能力，提供在设备闲时状态，进行后台资源预下载的能力。          | 是          | 否         
                 | [VoIPExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-voip-ability)          | 网音视频通话扩展能力，提供网络音视频通话服务。          | 是          | 否         
                 | [RemoteLocationExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-location-ability)          | 远程定位扩展能力，提供查询用户位置的能力。          | 是          | 否         
                 | [RemoteNotificationExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-remote-notification-extension-ability)          | 远程通知扩展能力，提供获取场景化消息数据和生命周期结束的回调。          | 是          | 否         
                 | [CallerInfoQueryExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/callservicekit-callerinfoquery-extension-ability)          | 来电信息查询扩展能力，提供通话来去电页面显示企业联系人信息的能力。          | 是          | 否         
                 | [StatusBarViewExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-ability)          | 状态栏视图扩展能力，提供三方应用接入PC状态栏的能力。          | 是          | 否         
                 | [TimeGuardExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/screentimeguard-timeguardextensionability)          | 屏幕时间守护扩展能力，为开发者提供策略管控生效、停止和应用权限授予、取消时执行特定逻辑的能力。          | 是          | 否         
                 | [LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability)          | 锁屏沉浸实况窗扩展能力，提供通过实况窗开放能力和锁屏展示地图轨迹的能力。          | 是          | 否         
             

                              通常情况下，应用中（同一Bundle名称）所有同一类型的ExtensionAbility均运行在同一个独立进程。以下为例外场景：

       
        - ServiceExtensionAbility（仅系统应用涉及）、DataShareExtensionAbility（仅系统应用涉及）与所有UIAbility均运行在同一个独立进程（主进程）。
        - UIExtensionAbility以及继承该类型的ExtensionAbility可以通过module.json5配置文件中的[extensionProcessMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#extensionabilities标签)字段，配置进程运行模式。
       
                             #### 访问指定类型的ExtensionAbility组件

     所有类型的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)组件均不能被应用直接启动，而是由相应的系统管理服务拉起，以确保其生命周期受系统管控，使用时拉起，使用完销毁。ExtensionAbility组件的调用方无需关心目标ExtensionAbility组件的生命周期。

     以[InputMethodExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-extension-ability)组件为例进行说明，如下图所示，调用方应用发起对InputMethodExtensionAbility组件的调用，此时将先调用输入法管理服务，由输入法管理服务拉起InputMethodExtensionAbility组件，返回给调用方，同时开始管理其生命周期。

     **图1** 使用InputMethodExtensionAbility组件

     

                  #### 实现指定类型的ExtensionAbility组件

     以实现卡片[FormExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability)为例进行说明。卡片框架提供了FormExtensionAbility基类，开发者通过派生此基类（如MyFormExtensionAbility），实现回调（如创建卡片的onCreate()回调、更新卡片的[onUpdateForm()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability#formextensionabilityonupdateform)回调等）来实现具体卡片功能，具体开发指导见[服务卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview)。

     卡片FormExtensionAbility实现方不用关心使用方何时去请求添加、删除卡片，FormExtensionAbility实例及其所在的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)进程的整个生命周期，都是由卡片管理系统服务FormManagerService进行调度管理。

     

              
     **[EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/embeddeduiextensionability)**
     **[使用AppServiceExtensionAbility组件实现后台服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-service-extension-ability)**

---
*Updated: 2026-04-22 06:37:48*
