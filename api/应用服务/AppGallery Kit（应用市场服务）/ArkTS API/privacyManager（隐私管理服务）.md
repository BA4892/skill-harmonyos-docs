# privacyManager（隐私管理服务）

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `store-privacymanager`

**DocID**: `be380600dc9a4c2088b083b13a1dee6d`

**NodeID**: `000201775795946267203dfa1cd7a9f9`

---

privacyManager（隐私管理服务）

提供查询隐私链接地址、查询隐私签署状态、撤销同意记录、请求用户同意功能。

调用接口需捕获异常。

起始版本：
5.0.0(12)

导入模块

import { privacyManager } from '@kit.AppGalleryKit';

AppPrivacyMgmtType

隐私管理类型的枚举。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

值

说明

UNSUPPORTED

0

不支持。

FULL_MODE

1

完整模式。

AppPrivacyResultType

隐私签署结果类型的枚举。

元服务API：
从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

值

说明

DISAGREED

0

不同意隐私协议。

FULL_MODE_AGREED

1

同意完整模式。

REQUIRE_RESIGNING_VERSION_UPDATE

2

协议发生变更，需要重新签署协议。

AppPrivacyLinkType

隐私链接类型的枚举。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

值

说明

PRIVACY_STATEMENT_LINK

1

隐私声明链接。

USER_AGREEMENT_LINK

2

用户协议链接。

AppPrivacyType

隐私类型的枚举。

元服务API：
从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

值

说明

PRIVACY_AGREEMENT

1

隐私协议。

USER_AGREEMENT

2

用户协议。

AppPrivacyMgmtInfo

隐私管理信息。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

类型

只读

可选

说明

type

AppPrivacyMgmtType

是

否

隐私管理类型。

privacyInfo

AppPrivacyLink
[]

是

否

隐私链接信息。

AppPrivacyLink

隐私链接。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

类型

只读

可选

说明

type

AppPrivacyLinkType

是

否

隐私链接类型。

versionCode

number

是

否

协议版本号。

url

string

是

否

url地址。

id

string

是

否

隐私协议id。

name

string

是

是

用户协议的名称，当
AppPrivacyLinkType
为USER_AGREEMENT_LINK时不可选。

 说明： 

起始版本：
5.0.2(14)

AppPrivacyResult

隐私签署结果。

元服务API：
从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

名称

类型

只读

可选

说明

type

AppPrivacyType

是

否

隐私类型。

versionCode

number

是

否

协议版本号。

result

AppPrivacyResultType

是

否

隐私签署结果。

id

string

是

否

隐私协议id。

signingTimestamp

number

是

是

隐私签署时间(单位:ms)

 说明： 

起始版本：
5.0.2(14)

元服务API
：从版本5.0.2(14)开始，该接口支持在元服务中使用。

ConsentResult

拉起标准化隐私弹框结果。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.2(14)

名称

类型

只读

可选

说明

results

AppPrivacyResult
[]

是

否

隐私签署结果。

privacyManager.getAppPrivacyMgmtInfo

getAppPrivacyMgmtInfo(): AppPrivacyMgmtInfo

查询隐私链接信息。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

返回值：

类型

说明

AppPrivacyMgmtInfo

隐私链接信息。

错误码：

以下错误码的详细介绍请参见
ArkTS API错误码
。

错误码ID

错误信息

1006700001

System internal error.

1006700003

The application does not use privacy manager service.

示例：

import { hilog } from '@kit.PerformanceAnalysisKit';
import { privacyManager } from '@kit.AppGalleryKit';

const TAG: string = 'getAppPrivacyMgmtInfo';

@Entry
@Component
struct GetAppPrivacyMgmtInfo {
 @State result: string = '';
 @State message: string = 'getAppPrivacyMgmtInfo';
 build() {
 Column() {
 Button(this.message)
 .onClick(() => {
 this.query()
 })
 .width('100%')
 Text(this.result)
 .fontSize(15)
 .fontWeight(FontWeight.Bold)
 .margin(20)
 }
 .margin(16)
 .height('100%')
 .justifyContent(FlexAlign.Center)
 }

 query() {
 this.result = '';
 try {
 // 查询隐私链接信息
 let appPrivacyManageInfo: privacyManager.AppPrivacyMgmtInfo = privacyManager.getAppPrivacyMgmtInfo();
 hilog.info(0, TAG, "GetAppPrivacyManageInfo type:" + appPrivacyManageInfo["type"]);
 this.result += 'GetAppPrivacyManageInfo type：' + appPrivacyManageInfo["type"] + ";
";
 // 隐私链接信息数组
 let privacyLinkInfoArray : privacyManager.AppPrivacyLink[] = appPrivacyManageInfo.privacyInfo;
 hilog.info(0, TAG, "GetAppPrivacyManageInfo size = " + privacyLinkInfoArray.length);
 for (let i = 0; i < privacyLinkInfoArray.length; i++) {
 this.result += 'uri: ' + privacyLinkInfoArray[i]["url"] + ";
";
 }
 } catch (error) {
 hilog.error(0, TAG, `getAppPrivacyMgmtInfo failed. code is ${error.code}, message is ${error.message}`);
 this.result = `getAppPrivacyMgmtInfo failed, error code: ${error.code}, error message: ${error.message}`;
 }
 }
}

privacyManager.getAppPrivacyResult

getAppPrivacyResult(): AppPrivacyResult[]

查询隐私签署状态。

元服务API：
从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

返回值：

类型

说明

AppPrivacyResult
[]

隐私签署结果。

错误码：

以下错误码的详细介绍请参见
ArkTS API错误码
。

错误码ID

错误信息

1006700001

System internal error.

1006700003

The application does not use privacy manager service.

示例：

import { hilog } from '@kit.PerformanceAnalysisKit';
import { privacyManager } from '@kit.AppGalleryKit';

const TAG: string = 'getAppPrivacyResult';

@Entry
@Component
struct GetAppPrivacyResult {
 @State result: string = '';
 @State message: string = 'getAppPrivacyResult';
 build() {
 Column() {
 Button(this.message)
 .onClick(() => {
 this.query()
 })
 .width('100%')
 Text(this.result)
 .fontSize(15)
 .fontWeight(FontWeight.Bold)
 .margin(20)
 }
 .margin(16)
 .height('100%')
 .justifyContent(FlexAlign.Center)
 }

 query() {
 this.result = '';
 try {
 // 查询隐私签署状态
 let appPrivacyResults: privacyManager.AppPrivacyResult[] = privacyManager.getAppPrivacyResult();
 hilog.info(0, TAG, "getAppPrivacyResult size = " + appPrivacyResults.length);
 if (appPrivacyResults.length == 0) {
 this.result += 'privacy result is empty!';
 return;
 }
 for (let i = 0; i < appPrivacyResults.length; i++) {
 hilog.info(0, TAG, "getAppPrivacyResult type = " + appPrivacyResults[i]["type"] + ", version = " + appPrivacyResults[i]["versionCode"] + ", result = " + appPrivacyResults[i]["result"]);
 this.result += 'getAppPrivacyResult type = ' + appPrivacyResults[i]["type"] + ", result = " + appPrivacyResults[i]["result"] + ";
";
 }
 } catch (error) {
 hilog.error(0, TAG, `getAppPrivacyResult failed. code is ${error.code}, message is ${error.message}`);
 this.result = `getAppPrivacyResult failed, error code: ${error.code}, error message: ${error.message}`;
 }
 }
}

privacyManager.disableService

disableService(): void

撤销同意记录。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.0(12)

错误码：

以下错误码的详细介绍请参见
ArkTS API错误码
。

错误码ID

错误信息

1006700001

System internal error.

1006700002

The specified service extension connect failed.

1006700003

The application does not use privacy manager service.

示例：

import { privacyManager } from '@kit.AppGalleryKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
 privacyManager.disableService();
 hilog.info(0, 'TAG', "Succeeded in disabling service.");
} catch (error) {
 hilog.error(0, 'TAG', "DisableService exception code: " + error.code + ", exception message: " + error.message);
}

privacyManager.requestAppPrivacyConsent

requestAppPrivacyConsent(context:common.UIAbilityContext):Promise<ConsentResult>

通过拉起标准化隐私弹框请求用户同意，通过Promise异步回调。

模型约束：
此接口仅可在Stage模型下使用。

系统能力：
SystemCapability.AppGalleryService.PrivacyManager

起始版本：
5.0.2(14)

参数：

参数名

类型

必填

说明

context

common.UIAbilityContext

是

调用方应用的上下文。

返回值：

类型

说明

Promise<
ConsentResult
>

Promise对象，返回弹框结果。

错误码：

以下错误码的详细介绍请参见
ArkTS API错误码
。

错误码ID

错误信息

401

Parameter error.

1006700001

System internal error.

1006700003

The application does not use privacy manager service.

示例：

import { privacyManager } from '@kit.AppGalleryKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import type { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
 @State message: string = 'requestAppPrivacyConsent test'

 build() {
 Row() {
 Column() {
 Text(this.message)
 .fontSize(50)
 .fontWeight(FontWeight.Bold)
 .onClick(() => {
 try {
 const uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
 // 通过拉起标准化隐私弹框请求用户同意,返回弹框结果
 privacyManager.requestAppPrivacyConsent(uiContext).then((consentResult : privacyManager.ConsentResult) => {
 let appPrivacyResults: privacyManager.AppPrivacyResult[] = consentResult["results"];
 for (let i = 0; i < appPrivacyResults.length; i++) {
 hilog.info(0, 'TAG', "GetAppPrivacyResult type = " + appPrivacyResults[i]["type"] + ", version = " + appPrivacyResults[i]["versionCode"] + ", result = " + appPrivacyResults[i]["result"] + ", signingTimestamp = " + appPrivacyResults[i]["signingTimestamp"]);
 }
 }).catch((error: BusinessError<Object>) => {
 hilog.error(0, 'TAG', `requestAppPrivacyConsent failed, Code: ${error.code}, message: ${error.message}`);
 });
 } catch (error) {
 hilog.error(0, 'TAG', "requestAppPrivacyConsent exception code: " + error.code + ", exception message: " + error.message);
 }
 })
 }
 .width('100%')
 }
 .height('100%')
 }
}

---
*2026-04-22T15:55:04.094Z*