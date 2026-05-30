# SecurityAntivirus

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `devicesecurity-capi-securityantivirus`

**DocID**: `e87c24971d1b41a9ac8541834045cce4`

**NodeID**: `00020177579634168482709f9d8ae344`

---

SecurityAntivirus

概述

SecurityAntivirus模块用于管理三方病毒防护服务应用。

系统能力：
 SystemCapability.Security.SecurityAntivirus

起始版本：
 6.0.0(20)

汇总

[h2]文件

名称

描述

security_antivirus.h

定义病毒防护服务应用调用的API接口。

[h2]结构体

名称

描述

struct 
SecurityAntivirus_Antivirus

定义病毒防护服务应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。

[h2]枚举

名称

描述

SecurityAntivirus_ErrCode
{

SECURITY_ANTIVIRUS_SUCCESS = 0,

SECURITY_ANTIVIRUS_PERMISSION_NOT_GRANTED = 201,

SECURITY_ANTIVIRUS_PARAM_INVALID = 1019900001,

SECURITY_ANTIVIRUS_NO_REGISTER = 1019900002,

SECURITY_ANTIVIRUS_INNER_ERROR = 1019900003

}

定义病毒防护服务管理错误码。

[h2]函数

名称

描述

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_RegisterAntivirus
(const char* bundleName)

三方EDR（Endpoint Detection and Response）应用向HarmonyOS安全防护服务注册。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_UnregisterAntivirus
(const char* bundleName)

三方EDR应用从HarmonyOS安全防护服务注销。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_UpdateAntivirus
(const 
SecurityAntivirus_Antivirus
* antivirus)

三方EDR应用向HarmonyOS安全防护服务更新自身应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_QueryAntivirus
(
SecurityAntivirus_Antivirus
** list, uint32_t* length)

零信任应用向HarmonyOS安全防护服务查询所有三方EDR注册信息。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_QueryPreinstalledAntivirus
(
SecurityAntivirus_Antivirus
** list, uint32_t* length)

MDM（Mobile Device Management）应用向HarmonyOS安全防护服务查询所有用户的防病毒功能状态。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_EnablePreinstalledAntivirus
(void)

MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_DisablePreinstalledAntivirus
(void)

MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount
(int32_t accountId)

MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。

SecurityAntivirus_ErrCode 
HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount
(int32_t accountId)

MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。

枚举类型说明

[h2]SecurityAntivirus_ErrCode

enum 
SecurityAntivirus_ErrCode

描述

定义病毒防护服务管理错误码。

系统能力：
SystemCapability.Security.SecurityAntivirus

起始版本：
6.0.0(20)

参数:

名称

描述

SECURITY_ANTIVIRUS_SUCCESS

接口调用成功。

SECURITY_ANTIVIRUS_PERMISSION_NOT_GRANTED

接口调用权限校验失败。

SECURITY_ANTIVIRUS_PARAM_INVALID

接口入参校验失败。

SECURITY_ANTIVIRUS_NO_REGISTER

安全防病毒应用未注册。

SECURITY_ANTIVIRUS_INNER_ERROR

HarmonyOS安全防护服务出现内部错误。

函数说明

[h2]HMS_SecurityAntivirus_RegisterAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_RegisterAntivirus(const char* bundleName)

描述

三方EDR应用向HarmonyOS安全防护服务注册。

起始版本：
6.0.0(20)

参数:

名称

描述

bundleName

三方EDR包名。

Permission：

ohos.permission.REGISTER_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_UnregisterAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UnregisterAntivirus(const char* bundleName)

描述

三方EDR应用从HarmonyOS安全防护服务注销。

起始版本：
6.0.0(20)

参数:

名称

描述

bundleName

三方EDR包名。

Permission：

ohos.permission.REGISTER_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_UpdateAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_UpdateAntivirus(const 
SecurityAntivirus_Antivirus
* antivirus)

描述

三方EDR应用向HarmonyOS安全防护服务更新信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。

起始版本：
6.0.0(20)

参数:

名称

描述

antivirus

三方EDR更新信息（包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID）。

Permission：

ohos.permission.REGISTER_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果当前应用未在病毒防护系统注册，则返回1019900002。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_QueryAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryAntivirus(
SecurityAntivirus_Antivirus
** list, uint32_t* length)

描述

零信任应用向HarmonyOS安全防护服务查询当前所有三方EDR注册信息。

起始版本：
6.0.0(20)

参数:

名称

描述

list

三方EDR注册信息列表。

length

三方EDR注册信息数量。

Permission：

ohos.permission.MANAGE_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_QueryPreinstalledAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_QueryPreinstalledAntivirus(
SecurityAntivirus_Antivirus
** list, uint32_t* length)

描述

MDM应用向HarmonyOS安全防护服务查询所有用户系统防病毒功能状态。

起始版本：
6.0.0(20)

参数:

名称

描述

list

HarmonyOS安全防护服务所有用户的防病毒功能状态信息列表。

length

HarmonyOS安全防护服务所有用户的防病毒功能状态信息数量。

Permission：

ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_EnablePreinstalledAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirus(void)

描述

MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。

起始版本：
6.0.0(20)

Permission：

ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_DisablePreinstalledAntivirus()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirus(void)

描述

MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。

起始版本：
6.0.0(20)

Permission：

ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount(int32_t accountId)

描述

MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。

起始版本：
6.0.0(20)

参数:

名称

描述

accountId

用户ID。

Permission：

ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

[h2]HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount()

SecurityAntivirus_ErrCode HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount(int32_t accountId)

描述

MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。

起始版本：
6.0.0(20)

参数:

名称

描述

accountId

用户ID。

Permission：

ohos.permission.MANAGE_PREINSTALLED_ANTIVIRUS

返回：

函数执行结果。返回值说明：如果操作成功，则返回0。如果权限验证失败，则返回201。如果传入参数不符合规范，则返回1019900001。如果HarmonyOS安全防护服务发生内部错误，则返回1019900003。

---
*2026-04-22T15:53:59.010Z*