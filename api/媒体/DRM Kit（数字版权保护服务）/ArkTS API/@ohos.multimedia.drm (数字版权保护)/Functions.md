# Functions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-drm-f`

**DocID**: `436ffa3fcb1340608918ca405c325333`

**NodeID**: `00020177579591076102873b8ece3308`

---

Functions

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

导入模块

import { drm } from '@kit.DrmKit';

drm.createMediaKeySystem

createMediaKeySystem(name: string): MediaKeySystem

创建MediaKeySystem实例。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

参数：

参数名

类型

必填

说明

name

string

是

DRM解决方案名称，如"com.wiseplay.drm"。

返回值：

类型

说明

MediaKeySystem

MediaKeySystem实例。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
DRM错误码
。

错误码ID

错误信息

401

The parameter check failed. Possibly because: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.

24700101

All unknown errors

24700103

Meet max MediaKeySystem num limit

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
 let mediaKeySystem: drm.MediaKeySystem = drm.createMediaKeySystem("com.wiseplay.drm");
} catch (err) {
 let error = err as BusinessError;
 console.error(`createMediaKeySystem ERROR: ${error}`);
}

drm.isMediaKeySystemSupported

isMediaKeySystemSupported(name: string): boolean

判断设备是否支持指定的DRM解决方案。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

参数：

参数名

类型

必填

说明

name

string

是

DRM解决方案名称，如"com.wiseplay.drm"。

返回值：

类型

说明

boolean

返回是否支持。true表示支持指定的DRM解决方案，false表示不支持指定的DRM解决方案。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
DRM错误码
。

错误码ID

错误信息

401

The parameter check failed. Possibly because: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed, the param name's length is zero or too big(exceeds 4096 Bytes).

24700101

All unknown errors

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let supported: boolean = drm.isMediaKeySystemSupported("com.wiseplay.drm");
 console.info("isMediaKeySystemSupported: ", supported);
} catch (err) {
 let error = err as BusinessError;
 console.error(`isMediaKeySystemSupported ERROR: ${error}`);
}

drm.isMediaKeySystemSupported

isMediaKeySystemSupported(name: string, mimeType: string): boolean

判断设备是否支持指定DRM解决方案及媒体类型。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

参数：

参数名

类型

必填

说明

name

string

是

DRM解决方案名称。建议先调用
isMediaKeySystemSupported
判断是否是支持的解决方案名称。

mimeType

string

是

媒体类型，支持的媒体类型取决于DRM解决方案，如：video/avc、video/hevc。

返回值：

类型

说明

boolean

返回是否支持。true表示支持指定DRM解决方案及媒体类型，false表示不支持指定DRM解决方案及媒体类型。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
DRM错误码
。

错误码ID

错误信息

401

The parameter check failed. Possibly because: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.

24700101

All unknown errors

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let supported: boolean = drm.isMediaKeySystemSupported("com.wiseplay.drm", "video/avc");
 console.info("isMediaKeySystemSupported: ", supported);
} catch (err) {
 let error = err as BusinessError;
 console.error(`isMediaKeySystemSupported ERROR: ${error}`);
}

drm.isMediaKeySystemSupported

isMediaKeySystemSupported(name: string, mimeType: string, level: ContentProtectionLevel): boolean

判断设备是否支持指定DRM解决方案、媒体类型以及内容保护级别。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

参数：

参数名

类型

必填

说明

name

string

是

DRM解决方案名称。建议先调用
isMediaKeySystemSupported
判断是否是支持的解决方案名称。

mimeType

string

是

媒体类型，支持的媒体类型取决于DRM解决方案。建议先调用
isMediaKeySystemSupported
判断是否是DRM解决方案支持的类型。

level

ContentProtectionLevel

是

内容保护级别。

返回值：

类型

说明

boolean

返回是否支持。true表示支持指定DRM解决方案、媒体类型以及内容保护级别，false表示不支持指定DRM解决方案、媒体类型以及内容保护级别。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
DRM错误码
。

错误码ID

错误信息

401

The parameter check failed. Possibly because: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.

24700101

All unknown errors

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
 let supported: boolean = drm.isMediaKeySystemSupported("com.wiseplay.drm", "video/avc", drm.ContentProtectionLevel.CONTENT_PROTECTION_LEVEL_SW_CRYPTO);
 console.info("isMediaKeySystemSupported: ", supported);
} catch (err) {
 let error = err as BusinessError;
 console.error(`isMediaKeySystemSupported ERROR: ${error}`);
}

drm.getMediaKeySystemUuid
12+

getMediaKeySystemUuid(name: string): string;

获取DRM解决方案支持的DRM内容保护系统唯一标识。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

参数：

参数名

类型

必填

说明

name

string

是

DRM解决方案名称，支持的解决方案名称可通过
isMediaKeySystemSupported
判断。

返回值：

类型

说明

string

DRM内容保护系统的唯一标识。

错误码：

以下错误码的详细介绍请参见
通用错误码说明文档
和
DRM错误码
。

错误码ID

错误信息

401

The parameter check failed.Possibly because: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.

24700101

All unknown errors

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
 let uuid: string = drm.getMediaKeySystemUuid("com.wiseplay.drm");
 console.info("getMediaKeySystemUuid: ", uuid);
} catch (err) {
 let error = err as BusinessError;
 console.error(`getMediaKeySystemUuid ERROR: ${error}`);
}

drm.getMediaKeySystems
12+

getMediaKeySystems(): MediaKeySystemDescription[]

获取设备支持的插件信息列表。

元服务API：
 从API version 14开始，该接口支持在元服务中使用。

系统能力：
 SystemCapability.Multimedia.Drm.Core

返回值：

类型

说明

MediaKeySystemDescription[]

设备支持的插件信息列表。

错误码：

以下错误码的详细介绍请参见
DRM错误码
。

错误码ID

错误信息

24700101

All unknown errors

24700201

Fatal service error, for example, service died

示例：

import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
 let description: drm.MediaKeySystemDescription[] = drm.getMediaKeySystems();
} catch (err) {
 let error = err as BusinessError;
 console.error(`getMediaKeySystems ERROR: ${error}`);
}

---
*2026-04-22T15:55:03.582Z*