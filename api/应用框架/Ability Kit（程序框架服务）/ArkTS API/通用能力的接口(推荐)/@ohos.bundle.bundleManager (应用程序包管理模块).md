# @ohos.bundle.bundleManager (应用程序包管理模块)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-bundlemanager`

**DocID**: `9eaddac1fa3f4066931c403e841bbb4f`

**NodeID**: `0002017757962161971062b924bfc337`

---

@ohos.bundle.bundleManager (应用程序包管理模块)

本模块提供应用信息的查询能力，支持应用包信息
BundleInfo
、应用程序信息
ApplicationInfo
、UIAbility组件信息
AbilityInfo
、ExtensionAbility组件信息
ExtensionAbilityInfo
等信息的查询。

本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { bundleManager } from '@kit.AbilityKit';

BundleFlag

包信息标志，指示需要获取的包信息的内容。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

GET_BUNDLE_INFO_DEFAULT

0x00000000

获取默认包信息，不包含signatureInfo、applicationInfo、hapModuleInfo、ability、extensionAbility和permission的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_APPLICATION

0x00000001

用于获取包含applicationInfo的bundleInfo，获取的bundleInfo不包含signatureInfo、hapModuleInfo、ability、extensionAbility和permission的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_HAP_MODULE

0x00000002

用于获取包含hapModuleInfo的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、ability、extensionAbility和permission的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_ABILITY

0x00000004

用于获取包含ability的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、extensionAbility和permission的信息。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY

0x00000008

用于获取包含extensionAbility的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、ability 和permission的信息。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION

0x00000010

用于获取包含permission的bundleInfo。获取的bundleInfo不包含signatureInfo、applicationInfo、hapModuleInfo、extensionAbility和ability的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_METADATA

0x00000020

用于获取applicationInfo、moduleInfo、abilityInfo和extensionAbilityInfo中包含的metadata。单独使用不生效，它需要与GET_BUNDLE_INFO_WITH_APPLICATION、GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY配合使用，其中：

- 获取applicationInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_APPLICATION一起使用。

- 获取moduleInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。

- 获取abilityInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY一起使用。

- 获取extensionAbilityInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY一起使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_DISABLE

0x00000040

用于获取application被禁用的BundleInfo和被禁用的Ability信息。获取的bundleInfo不包含signatureInfo、applicationInfo、hapModuleInfo、ability、extensionAbility和permission的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_SIGNATURE_INFO

0x00000080

用于获取包含signatureInfo的bundleInfo。获取的bundleInfo不包含applicationInfo、hapModuleInfo、extensionAbility、ability和permission的信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_MENU
11+

0x00000100

用于获取包含fileContextMenuConfig的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_ROUTER_MAP
12+

0x00000200

用于获取包含routerMap的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

GET_BUNDLE_INFO_WITH_SKILL
12+

0x00000800

用于获取包含skills的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY一起使用。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

ExtensionAbilityType

扩展组件的类型。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

FORM

0

FormExtensionAbility
：卡片扩展能力，提供卡片开发能力。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

WORK_SCHEDULER

1

WorkSchedulerExtensionAbility
：延时任务扩展能力，允许应用在系统闲时执行实时性不高的任务。

INPUT_METHOD

2

InputMethodExtensionAbility
：输入法扩展能力，用于开发输入法应用。

ACCESSIBILITY

4

AccessibilityExtensionAbility
：无障碍服务扩展能力，支持访问与操作前台界面。

BACKUP

9

BackupExtensionAbility
：数据备份扩展能力，提供应用数据的备份恢复能力。

ENTERPRISE_ADMIN

11

EnterpriseAdminExtensionAbility
：企业设备管理扩展能力，提供企业管理时处理管理事件的能力，比如设备上应用安装事件、锁屏密码输入错误次数过多事件等。

SHARE
10+

16

ShareExtensionAbility
：提供分享业务能力，为开发者提供基于UIExtension的分享业务模板。

DRIVER
10+

18

DriverExtensionAbility
：驱动扩展能力，提供外设驱动扩展能力。应用配置了driver类型的ExtensionAbility后会被视为驱动应用，驱动应用在安装、卸载和恢复时不会区分用户，且创建新用户时也会安装设备上已有的驱动应用。例如，创建子用户时会默认安装主用户已有的驱动应用，在子用户上卸载驱动应用时，主用户上对应的驱动应用也会同时被卸载。

ACTION
10+

19

ActionExtensionAbility
：自定义服务扩展能力，为开发者提供基于UIExtension的自定义操作业务模板。

EMBEDDED_UI
12+

21

EmbeddedUIExtensionAbility
：嵌入式UI扩展能力，提供跨进程界面嵌入的能力。

INSIGHT_INTENT_UI
12+

22

InsightIntentUIExtensionAbility：为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。

FENCE
18+

24

FenceExtensionAbility
：为开发者提供地理围栏相关的能力，继承自ExtensionAbility。

ASSET_ACCELERATION
18+

26

AssetAccelerationExtensionAbility：资源预下载扩展能力，提供在设备闲时状态，进行后台资源预下载的能力。

FORM_EDIT
18+

27

FormEditExtensionAbility
：为开发者提供卡片编辑的能力，继承自UIExtensionAbility。

DISTRIBUTED
20+

28

DistributedExtensionAbility
：提供分布式相关扩展能力，提供分布式创建、销毁、连接的生命周期回调。

APP_SERVICE
20+

29

AppServiceExtensionAbility
：为企业普通应用提供后台服务能力。

LIVE_FORM
20+

30

LiveFormExtensionAbility
：互动卡片相关扩展能力，提供互动卡片创建、销毁的生命周期回调。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

WEB_NATIVE_MESSAGING
21+

32

WebNativeMessagingExtensionAbility
：为开发者提供Web原生消息通信能力的ExtensionAbility。

FAULT_LOG
21+

33

FaultLogExtensionAbility
：提供故障延迟通知的能力。

NOTIFICATION_SUBSCRIBER
22+

34

NotificationSubscriberExtensionAbility
：提供通知订阅的相关功能。

CRYPTO
22+

35

CryptoExtensionAbility
：提供外部密钥管理扩展的相关功能。

UNSPECIFIED

255

不指定类型。

CALLER_INFO_QUERY
19+

25

CallerInfoQueryExtensionAbility
：为开发者提供来去电信息查询能力。

PermissionGrantState

权限授予状态。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

PERMISSION_DENIED

-1

拒绝授予权限。

PERMISSION_GRANTED

0

授予权限。

SupportWindowMode

标识该组件所支持的窗口模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

FULL_SCREEN

0

窗口支持全屏显示。

SPLIT

1

窗口支持分屏显示。

FLOATING

2

支持窗口化显示，即显示悬浮窗口。

LaunchType

标识组件的
启动模式
。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

SINGLETON

0

UIAbility的启动模式，表示单实例。

MULTITON

1

UIAbility的启动模式，表示普通多实例。

SPECIFIED

2

UIAbility的启动模式，表示该UIAbility内部根据业务自己指定多实例。

AbilityType

标识Ability组件的类型。

模型约束：
 仅可在FA模型下使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

PAGE

1

UI界面类型的Ability。表示基于Page模板开发的FA，用于提供与用户交互的能力。

SERVICE

2

后台服务类型的Ability，无UI界面。表示基于Service模板开发的
PA（ParticleAbility）
，用于提供后台运行任务的能力，例如后台下载或者播放音乐。

DATA

3

表示基于Data模板开发的
PA（ParticleAbility）
，用于对外部提供统一的数据访问对象。

DisplayOrientation

标识该Ability的显示模式。仅适用于FA模型的
PageAbility
。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

UNSPECIFIED

0

表示未定义方向模式，由系统判定。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

LANDSCAPE

1

表示横屏显示模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

PORTRAIT

2

表示竖屏显示模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

FOLLOW_RECENT

3

表示跟随上一个显示模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

LANDSCAPE_INVERTED

4

表示反向横屏显示模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

PORTRAIT_INVERTED

5

表示反向竖屏显示模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION

6

表示传感器在旋转到横向和竖向时，页面会自动旋转。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_LANDSCAPE

7

表示传感器在旋转到横向时，页面会自动旋转。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_PORTRAIT

8

表示传感器在旋转到竖向时，页面会自动旋转。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_RESTRICTED

9

表示受开关控制的自动旋转模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_LANDSCAPE_RESTRICTED

10

表示受开关控制的自动横向旋转模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_PORTRAIT_RESTRICTED

11

表示受开关控制的自动竖向旋转模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

LOCKED

12

表示锁定模式。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

AUTO_ROTATION_UNSPECIFIED
12+

13

受开关控制和由系统判定的自动旋转模式。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

FOLLOW_DESKTOP
12+

14

跟随桌面的旋转模式。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

CompatiblePolicy
10+

标识动态共享库的版本兼容类型。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

BACKWARD_COMPATIBILITY

1

共享库是向后兼容类型。

ModuleType

标识模块类型。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

ENTRY

1

应用的主模块，作为应用的入口，提供了应用的基础功能。

FEATURE

2

应用的动态特性模块，作为应用能力的扩展，可以根据用户的需求和设备类型进行选择性安装。

SHARED

3

应用的
动态共享库
模块。

BundleType

标识应用的类型。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

APP

0

该Bundle是应用。

ATOMIC_SERVICE

1

该Bundle是元服务。

MultiAppModeType
12+

标识应用多开的模式类型。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

UNSPECIFIED

0

未指定类型，表示
multiAppMode配置
未配置时的默认状态。

MULTI_INSTANCE

1

多实例模式
。常驻进程不支持该字段。

APP_CLONE

2

分身模式
。

AbilityFlag
20+

Ability组件信息标志，指示需要获取的Ability组件信息的内容。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

名称

值

说明

GET_ABILITY_INFO_DEFAULT

0x00000000

获取默认
AbilityInfo
，获取的AbilityInfo不包含permissions、metadata、被禁用Ability对应的AbilityInfo。

GET_ABILITY_INFO_WITH_PERMISSION

0x00000001

获取包含permissions的AbilityInfo。

GET_ABILITY_INFO_WITH_APPLICATION

0x00000002

获取包含applicationInfo的AbilityInfo。

GET_ABILITY_INFO_WITH_METADATA

0x00000004

获取包含metadata的AbilityInfo。

GET_ABILITY_INFO_WITH_DISABLE

0x00000008

获取被禁用Ability对应的AbilityInfo。

GET_ABILITY_INFO_ONLY_SYSTEM_APP

0x00000010

获取系统应用对应的AbilityInfo。

GET_ABILITY_INFO_WITH_APP_LINKING

0x00000040

获取通过
域名校验
筛选的AbilityInfo。

GET_ABILITY_INFO_WITH_SKILL

0x00000080

获取包含skills的AbilityInfo。

bundleManager.getBundleInfoForSelf

getBundleInfoForSelf(bundleFlags: number): Promise<BundleInfo>

根据给定的bundleFlags获取当前应用的BundleInfo。使用Promise异步回调。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

返回值：

类型

说明

Promise<
BundleInfo
>

Promise对象，返回当前应用的BundleInfo。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

示例：

// 获取bundleInfo，包含带有metadataArray信息的appInfo信息
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags =
 bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;

try {
 bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {
 hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
}

bundleManager.getBundleInfoForSelf

getBundleInfoForSelf(bundleFlags: number, callback: AsyncCallback<BundleInfo>): void

根据给定的bundleFlags获取当前应用的BundleInfo。使用callback异步回调。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

callback

AsyncCallback<
BundleInfo
>

是

回调函数
，当获取成功时，err为undefined，data为获取到的当前应用的BundleInfo；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

示例：

// 获取bundleInfo，包含permissions信息的abilitiesInfo信息
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags =
 bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_ABILITY |
 bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;

try {
 bundleManager.getBundleInfoForSelf(bundleFlags, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
}

bundleManager.getProfileByAbility

getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void

根据给定的moduleName、abilityName和metadataName（module.json5中
abilities标签
下的metadata标签的name）获取自身相应配置文件的json格式字符串。使用callback异步回调。

说明：

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

abilityName

string

是

表示UIAbility组件的名称。

metadataName

string

是

表示UIAbility组件的
元信息名称
，即module.json5配置文件中
abilities标签
下的metadata标签的name。

callback

AsyncCallback<Array<string>>

是

回调函数
，当获取成功时，err为undefined，data为获取到的Array<string>；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified abilityName is not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

17700029

The specified ability is disabled.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';
let metadataName = 'ability_metadata';

try {
 bundleManager.getProfileByAbility(moduleName, abilityName, metadataName, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}

bundleManager.getProfileByAbility

getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>

根据给定的moduleName、abilityName和metadataName（module.json5中
abilities标签
下的metadata标签的name）获取自身相应配置文件的json格式字符串。使用Promise异步回调。

说明：

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

abilityName

string

是

表示UIAbility组件的名称。

metadataName

string

否

表示UIAbility组件的元信息名称，即module.json5配置文件中
abilities标签
下的metadata标签的name，默认值为空。

返回值：

类型

说明

Promise<Array<string>>

Promise对象，返回Array<string>。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified abilityName is not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

17700029

The specified ability is disabled.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';

try {
 // 通过模块名称和ability名称获取相应配置文件的json格式字符串信息
 bundleManager.getProfileByAbility(moduleName, abilityName).then((data) => {
 hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';
let metadataName = 'ability_metadata';

try {
 // 通过模块名称，ability名称和UIAbility组件的元信息名称获取自身相应配置文件的json格式字符串信息
 bundleManager.getProfileByAbility(moduleName, abilityName, metadataName).then((data) => {
 hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}

bundleManager.getProfileByAbilitySync
10+

getProfileByAbilitySync(moduleName: string, abilityName: string, metadataName?: string): Array<string>

以同步方法根据给定的moduleName、abilityName和metadataName（module.json5中
metadata标签
下的name）获取自身相应配置文件的json格式字符串，返回对象为string数组。

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

abilityName

string

是

表示UIAbility组件的名称。

metadataName

string

否

表示UIAbility组件的元信息名称，即module.json5配置文件中
abilities标签
下的metadata标签的name，默认值为空。

返回值：

类型

说明

Array<string>

数组对象，返回Array<string>。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified abilityName is not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

17700029

The specified ability is disabled.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';

try {
 // 通过模块名称和ability名称获取相应配置文件的json格式字符串信息
 let data = bundleManager.getProfileByAbilitySync(moduleName, abilityName);
 hilog.info(0x0000, 'testTag', 'getProfileByAbilitySync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByAbilitySync failed. Cause: %{public}s', message);
}

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName: string = 'entry';
let abilityName: string = 'EntryAbility';
let metadataName: string = 'ability_metadata';

try {
 // 通过模块名称，ability名称和UIAbility组件的元信息名称获取相应配置文件的json格式字符串信息
 let data = bundleManager.getProfileByAbilitySync(moduleName, abilityName, metadataName);
 hilog.info(0x0000, 'testTag', 'getProfileByAbilitySync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByAbilitySync failed. Cause: %{public}s', message);
}

bundleManager.getProfileByExtensionAbility

getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void

根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
metadata标签
下的name）获取自身相应配置文件的json格式字符串。使用callback异步回调。

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

extensionAbilityName

string

是

表示ExtensionAbility组件的名称。

metadataName

string

是

表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
extensionAbilities标签
下的metadata标签的name。

callback

AsyncCallback<Array<string>>

是

回调函数
，当获取成功时，err为undefined，data为获取到的Array<string>；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified extensionAbilityName not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let extensionAbilityName = 'com.example.myapplication.extension';
let metadataName = 'ability_metadata';

try {
 bundleManager.getProfileByExtensionAbility(moduleName, extensionAbilityName, metadataName, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getProfileByExtensionAbility successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed: %{public}s', message);
}

bundleManager.getProfileByExtensionAbility

getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName?: string): Promise<Array<string>>

根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
metadata标签
下的name）获取自身相应配置文件的json格式字符串。使用Promise异步回调。

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

extensionAbilityName

string

是

表示ExtensionAbility组件的名称。

metadataName

string

否

表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
extensionAbilities标签
下的metadata标签的name，默认值为空。

返回值：

类型

说明

Promise<Array<string>>

Promise对象，返回Array<string>对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified extensionAbilityName not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let extensionAbilityName = 'com.example.myapplication.extension';
let metadataName = 'ability_metadata';

try {
 bundleManager.getProfileByExtensionAbility(moduleName, extensionAbilityName).then((data) => {
 hilog.info(0x0000, 'testTag', 'getProfileByExtensionAbility successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed. Cause: %{public}s', message);
}

try {
 bundleManager.getProfileByExtensionAbility(moduleName, extensionAbilityName, metadataName).then((data) => {
 hilog.info(0x0000, 'testTag', 'getProfileByExtensionAbility successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbility failed. Cause: %{public}s', message);
}

bundleManager.getProfileByExtensionAbilitySync
10+

getProfileByExtensionAbilitySync(moduleName: string, extensionAbilityName: string, metadataName?: string): Array<string>

以同步方法根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
metadata标签
下的name）获取自身相应配置文件的json格式字符串，返回对象为string数组。

如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过
资源管理模块
的相关接口，来获取引用的资源。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

moduleName

string

是

表示Module名称。

extensionAbilityName

string

是

表示ExtensionAbility组件的名称。

metadataName

string

否

表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
extensionAbilities标签
下的metadata标签的name，默认值为空。

返回值：

类型

说明

Array<string>

返回Array<string>对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
���

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700002

The specified moduleName is not existed.

17700003

The specified extensionAbilityName not existed.

17700024

Failed to get the profile because there is no profile in the HAP.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let extensionAbilityName = 'com.example.myapplication.extension';
let metadataName = 'ability_metadata';

try {
 let data = bundleManager.getProfileByExtensionAbilitySync(moduleName, extensionAbilityName);
 hilog.info(0x0000, 'testTag', 'getProfileByExtensionAbilitySync successfully. Data: %{public}s',
 JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbilitySync failed. Cause: %{public}s', message);
}

try {
 let data = bundleManager.getProfileByExtensionAbilitySync(moduleName, extensionAbilityName, metadataName);
 hilog.info(0x0000, 'testTag', 'getProfileByExtensionAbilitySync successfully. Data: %{public}s',
 JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getProfileByExtensionAbilitySync failed. Cause: %{public}s', message);
}

bundleManager.getBundleInfoForSelfSync
10+

getBundleInfoForSelfSync(bundleFlags: number): BundleInfo

以同步方法根据给定的bundleFlags获取当前应用的BundleInfo。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

返回值：

类型

说明

BundleInfo

返回BundleInfo对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;

try {
 let data = bundleManager.getBundleInfoForSelfSync(bundleFlags);
 hilog.info(0x0000, 'testTag', 'getBundleInfoForSelfSync successfully: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfoForSelfSync failed: %{public}s', message);
}

bundleManager.canOpenLink
12+

canOpenLink(link: string): boolean

根据给定的链接判断目标应用是否可访问，链接中的scheme需要在
module.json5文件
的querySchemes字段下配置。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

link

string

是

表示需要查询的链接。

返回值：

类型

说明

boolean

返回true表示给定的链接可以打开，返回false表示给定的链接不能打开。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700055

The specified link is invalid.

17700056

The scheme of the specified link is not in the querySchemes.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let link = 'welink://';
 let data = bundleManager.canOpenLink(link);
 hilog.info(0x0000, 'testTag', 'canOpenLink successfully: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'canOpenLink failed: %{public}s', message);
}

bundleManager.getLaunchWant
13+

getLaunchWant(): Want

获取本应用
入口UIAbility
的Want参数。

元服务API：
 从API version 13开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

返回值：

类型

说明

Want

返回仅包含bundleName和abilityName的Want对象。

错误码：

以下错误码的详细介绍请参见
ohos.bundle错误码
。

错误码ID

错误信息

17700072

The launch want is not found.

示例：

import { BusinessError } from '@kit.BasicServicesKit';
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 let want = bundleManager.getLaunchWant();
 hilog.info(0x0000, 'testTag', 'getLaunchWant ability name: %{public}s', want.abilityName);
 hilog.info(0x0000, 'testTag', 'getLaunchWant bundle name: %{public}s', want.bundleName);
} catch (error) {
 let message = (error as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getLaunchWant failed: %{public}s', message);
}

bundleManager.getBundleInfo
14+

getBundleInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback<BundleInfo>): void

根据给定的bundleName、bundleFlags和userId获取
BundleInfo
。使用callback异步回调。

获取调用方自身信息时不需要权限。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleName

string

是

表示要查询的应用Bundle名称。

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

userId

number

是

表示用户ID，可以通过
getOsAccountLocalId接口
获取。

callback

AsyncCallback<
BundleInfo
>

是

回调函数
，当获取成功时，err为undefined，data为获取到的bundleInfo；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700001

The specified bundleName is not found.

17700004

The specified user ID is not found.

17700026

The specified bundle is disabled.

示例：

// 额外获取包含AbilityInfo信息的bundleInfo
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags =
 bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_ABILITY;
let userId = 100;

try {
 bundleManager.getBundleInfo(bundleName, bundleFlags, userId, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getBundleInfo successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', message);
}

// 额外获取包含ApplicationInfo中的metadata的bundleInfo
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags =
 bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;
let userId = 100;

try {
 bundleManager.getBundleInfo(bundleName, bundleFlags, userId, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getBundleInfo successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', message);
}

bundleManager.getBundleInfo
14+

getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void

根据给定的bundleName和bundleFlags获取BundleInfo。使用callback异步回调。

获取调用方自身的信息时不需要权限。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleName

string

是

表示要查询的应用Bundle名称。

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

callback

AsyncCallback<
BundleInfo
>

是

回调函数
，当获取成功时，err为undefined，data为获取到的BundleInfo；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700001

The specified bundleName is not found.

17700026

The specified bundle is disabled.

示例：

// 额外获取extensionAbility
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE |
bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY;

try {
 bundleManager.getBundleInfo(bundleName, bundleFlags, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getBundleInfo successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed: %{public}s', message);
}

bundleManager.getBundleInfo
14+

getBundleInfo(bundleName: string, bundleFlags: number, userId?: number): Promise<BundleInfo>

根据给定的bundleName、bundleFlags和userId获取BundleInfo。使用Promise异步回调。

获取调用方自身的信息时不需要权限。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleName

string

是

表示要查询的应用Bundle名称。

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

userId

number

否

表示用户ID，可以通过
getOsAccountLocalId接口
获取，默认值：调用方所在用户，取值范围：大于等于0。

返回值：

类型

说明

Promise<
BundleInfo
>

Promise对象，返回BundleInfo。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700001

The specified bundleName is not found.

17700004

The specified user ID is not found.

17700026

The specified bundle is disabled.

示例：

// 额外获取ApplicationInfo和SignatureInfo
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |
bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;
let userId = 100;

try {
 bundleManager.getBundleInfo(bundleName, bundleFlags, userId).then((data) => {
 hilog.info(0x0000, 'testTag', 'getBundleInfo successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed. Cause: %{public}s', message);
}

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;

try {
 bundleManager.getBundleInfo(bundleName, bundleFlags).then((data) => {
 hilog.info(0x0000, 'testTag', 'getBundleInfo successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfo failed. Cause: %{public}s', message);
}

bundleManager.getBundleInfoSync
14+

getBundleInfoSync(bundleName: string, bundleFlags: number, userId: number): BundleInfo

以同步方法根据给定的bundleName、bundleFlags和userId获取BundleInfo。

获取调用方自身的信息时不需要权限。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleName

string

是

表示要查询的应用Bundle名称。

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

userId

number

是

表示用户ID，可以通过
getOsAccountLocalId接口
获取。

返回值：

类型

说明

BundleInfo

返回BundleInfo对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700001

The specified bundleName is not found.

17700004

The specified user ID is not found.

17700026

The specified bundle is disabled.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;
let userId = 100;

try {
 let data = bundleManager.getBundleInfoSync(bundleName, bundleFlags, userId);
 hilog.info(0x0000, 'testTag', 'getBundleInfoSync successfully: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfoSync failed: %{public}s', message);
}

bundleManager.getBundleInfoSync
14+

getBundleInfoSync(bundleName: string, bundleFlags: number): BundleInfo

以同步方法根据给定的bundleName、bundleFlags获取调用方所在用户下的BundleInfo。

获取调用方自身的信息时不需要权限。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

bundleName

string

是

表示要查询的应用Bundle名称。

bundleFlags

number

是

指定返回的BundleInfo所包含的信息。

返回值：

类型

说明

BundleInfo

返回BundleInfo对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700001

The specified bundleName is not found.

17700026

The specified bundle is disabled.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;
try {
 let data = bundleManager.getBundleInfoSync(bundleName, bundleFlags);
 hilog.info(0x0000, 'testTag', 'getBundleInfoSync successfully: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleInfoSync failed: %{public}s', message);
}

bundleManager.getBundleNameByUid
14+

getBundleNameByUid(uid: number, callback: AsyncCallback<string>): void

根据给定的uid获取对应应用的bundleName。使用callback异步回调。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

uid

number

是

表示应用程序的UID。

callback

AsyncCallback<string>

是

回调函数
，当获取成功时，err为undefined，data为获取到的BundleName；否则为错误对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700021

The uid is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;
try {
 bundleManager.getBundleNameByUid(uid, (err, data) => {
 if (err) {
 hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed: %{public}s', err.message);
 } else {
 hilog.info(0x0000, 'testTag', 'getBundleNameByUid successfully: %{public}s', JSON.stringify(data));
 }
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed: %{public}s', message);
}

bundleManager.getBundleNameByUid
14+

getBundleNameByUid(uid: number): Promise<string>

根据给定的uid获取对应应用的bundleName。使用Promise异步回调。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

uid

number

是

表示应用程序的UID。

返回值：

类型

说明

Promise<string>

Promise对象，返回bundleName。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700021

The uid is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;
try {
 bundleManager.getBundleNameByUid(uid).then((data) => {
 hilog.info(0x0000, 'testTag', 'getBundleNameByUid successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed. Cause: %{public}s', message);
}

bundleManager.getBundleNameByUidSync
14+

getBundleNameByUidSync(uid: number): string

以同步方法根据给定的uid获取对应应用的bundleName。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

uid

number

是

表示应用程序的UID。

返回值：

类型

说明

string

返回获取到的bundleName。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700021

The uid is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;
try {
 let data = bundleManager.getBundleNameByUidSync(uid);
 hilog.info(0x0000, 'testTag', 'getBundleNameByUidSync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getBundleNameByUidSync failed. Cause: %{public}s', message);
}

bundleManager.getAppCloneIdentity
14+

getAppCloneIdentity(uid: number): Promise<AppCloneIdentity>;

根据uid查询分身应用的包名和分身索引。使用Promise异步回调。

需要权限：
 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

当调用方为三方应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED权限。

当调用方为系统应用时，需要申请ohos.permission.GET_BUNDLE_INFO_PRIVILEGED或者ohos.permission.GET_BUNDLE_INFO权限。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

uid

number

是

表示应用程序的UID。

返回值：

类型

说明

Promise<
AppCloneIdentity
>

Promise对象，返回<AppCloneIdentity>。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

401

Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.

17700021

The uid is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;

try {
 bundleManager.getAppCloneIdentity(uid).then((res) => {
 hilog.info(0x0000, 'testTag', 'getAppCloneIdentity res = %{public}s', JSON.stringify(res));
 }).catch((err: BusinessError) => {
 hilog.error(0x0000, 'testTag', 'getAppCloneIdentity failed. Cause: %{public}s', err.message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getAppCloneIdentity failed. Cause: %{public}s', message);
}

bundleManager.getSignatureInfo
18+

getSignatureInfo(uid: number): SignatureInfo

根据给定的uid获取对应应用的
签名信息
。

需要权限：
 ohos.permission.GET_SIGNATURE_INFO

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

uid

number

是

表示应用程序的UID。

返回值：

类型

说明

SignatureInfo

返回SignatureInfo对象。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

17700021

The uid is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005; // uid需要替换为对应应用程序的UID。
try {
 let data = bundleManager.getSignatureInfo(uid);
 hilog.info(0x0000, 'testTag', 'getSignatureInfo successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getSignatureInfo failed. Cause: %{public}s', message);
}

bundleManager.getAbilityInfo
20+

getAbilityInfo(uri: string, abilityFlags: number): Promise<Array<AbilityInfo>>

获取指定资源标识符和组件信息标志对应的Ability信息。使用Promise异步回调。

元服务API：
 从API version 20开始，该接口支持在元服务中使用。

需要权限：
 ohos.permission.GET_ABILITY_INFO

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

设备行为差异：
 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回201错误码。

参数：

参数名

类型

必填

说明

uri

string

是

表示统一资源标识符URI，取值与
module.json5配置文件中skills下的uris字段
相对应。

abilityFlags

number

是

表示
Ability组件信息标志
，指示需要获取的Ability组件信息的内容。

返回值：

类型

说明

Promise<Array<
AbilityInfo
>>

Promise对象，返回获取到的Ability信息数组。

错误码：

以下错误码的详细介绍请参见
通用错误码
和
ohos.bundle错误码
。

错误码ID

错误信息

201

Permission denied.

17700003

The ability is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let abilityFlags = bundleManager.AbilityFlag.GET_ABILITY_INFO_WITH_APPLICATION;
let uri = "https://www.example.com";

try {
 bundleManager.getAbilityInfo(uri, abilityFlags).then((data) => {
 hilog.info(0x0000, 'testTag', 'getAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
 }).catch((err: BusinessError) => {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getAbilityInfo failed. Cause: %{public}s', message);
 });
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getAbilityInfo failed. Cause: %{public}s', message);
}

bundleManager.cleanBundleCacheFilesForSelf
21+

cleanBundleCacheFilesForSelf(): Promise<void>

清理应用自身的缓存。使用Promise异步回调。

元服务API：
 从API version 21开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

返回值：

类型

说明

Promise<void>

Promise对象，无返回结果。

示例：

import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

bundleManager.cleanBundleCacheFilesForSelf().then(() => {
 hilog.info(0x0000, 'testTag', 'cleanBundleCacheFilesForSelf complete.');
});

bundleManager.getPluginBundlePathForSelf
22+

getPluginBundlePathForSelf(pluginBundleName: string): string

获取指定插件在当前
应用沙箱
内的安装路径。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

参数：

参数名

类型

必填

说明

pluginBundleName

string

是

目标插件的包名。

返回值：

类型

说明

string

目标插件在当前应用沙箱内的安装路径。

错误码：

错误码请参见
ohos.bundle错误码
。

错误码ID

错误信息

17700001

The specified bundleName is not found.

示例：

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// 请开发者替换为实际插件对应的包名
let pluginBundleName = 'com.ohos.pluginDemo';
try {
 let path = bundleManager.getPluginBundlePathForSelf(pluginBundleName);
 hilog.info(0x0000, 'testTag', 'getPluginBundlePathForSelf successfully. path: %{public}s', path);
} catch (err) {
 let message = (err as BusinessError).message;
 hilog.error(0x0000, 'testTag', 'getPluginBundlePathForSelf failed. Cause: %{public}s', message);
}

ApplicationInfo

type ApplicationInfo = _ApplicationInfo

应用程序信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_ApplicationInfo

应用程序信息。

ModuleMetadata
10+

type ModuleMetadata = _ModuleMetadata

模块的元数据信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_ModuleMetadata

模块的元数据信息。

Metadata

type Metadata = _Metadata

元数据信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力
: SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_Metadata

元数据信息。

BundleInfo

type BundleInfo = _BundleInfo.BundleInfo

应用包信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力
: SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_BundleInfo.BundleInfo

应用包信息。

UsedScene

type UsedScene = _BundleInfo.UsedScene

权限使用的场景和时机。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_BundleInfo.UsedScene

权限使用的场景和时机。

ReqPermissionDetail

type ReqPermissionDetail = _BundleInfo.ReqPermissionDetail

应用运行时需向系统申请的权限集合的详细信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_BundleInfo.ReqPermissionDetail

应用运行时需向系统申请的权限集合的详细信息。

SignatureInfo

type SignatureInfo = _BundleInfo.SignatureInfo

应用包的签名信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_BundleInfo.SignatureInfo

应用包的签名信息。

HapModuleInfo

type HapModuleInfo = _HapModuleInfo.HapModuleInfo

模块信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_HapModuleInfo.HapModuleInfo

模块信息。

PreloadItem

type PreloadItem = _HapModuleInfo.PreloadItem

元服务中模块的预加载模块信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_HapModuleInfo.PreloadItem

元服务中模块的预加载模块信息。

Dependency

type Dependency = _HapModuleInfo.Dependency

模块所依赖的动态共享库信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_HapModuleInfo.Dependency

模块所依赖的动态共享库信息。

RouterItem
12+

type RouterItem = _HapModuleInfo.RouterItem

模块配置的路由表信息。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_HapModuleInfo.RouterItem

模块配置的路由表信息。

DataItem
12+

type DataItem = _HapModuleInfo.DataItem

模块配置的路由表中的自定义数据。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_HapModuleInfo.DataItem

模块配置的路由表中的自定义数据。

AbilityInfo

type AbilityInfo = _AbilityInfo.AbilityInfo

Ability信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_AbilityInfo.AbilityInfo

Ability信息。

WindowSize

type WindowSize = _AbilityInfo.WindowSize

窗口尺寸。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_AbilityInfo.WindowSize

窗口尺寸。

ExtensionAbilityInfo

type ExtensionAbilityInfo = _ExtensionAbilityInfo.ExtensionAbilityInfo

ExtensionAbility信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_ExtensionAbilityInfo.ExtensionAbilityInfo

ExtensionAbility信息。

ElementName

type ElementName = _ElementName

ElementName信息。

元服务API：
 从API version 11开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_ElementName

ElementName信息。

Skill
12+

type Skill = _Skill.Skill

skill信息。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_Skill.Skill

skill信息。

SkillUrl
12+

type SkillUrl = _Skill.SkillUri

SkillUri信息。

元服务API：
 从API version 12开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_Skill.SkillUri

SkillUri信息。

AppCloneIdentity
15+

type AppCloneIdentity = _BundleInfo.AppCloneIdentity

描述应用包的身份信息。

系统能力：
 SystemCapability.BundleManager.BundleFramework.Core

类型

说明

_BundleInfo.AppCloneIdentity

应用包的身份信息。

---
*2026-04-22T15:55:01.375Z*