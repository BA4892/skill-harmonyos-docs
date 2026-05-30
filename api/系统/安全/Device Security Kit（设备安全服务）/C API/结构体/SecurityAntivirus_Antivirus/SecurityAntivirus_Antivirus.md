# SecurityAntivirus_Antivirus

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `devicesecurity-capi-structs-securityantivirus`

**DocID**: `d4de3f1accfc4a9f8737822bd8b58769`

**NodeID**: `000201775796341684857bfb5b20badf`

---

SecurityAntivirus_Antivirus

概述

定义防病毒应用信息。

起始版本：
 6.0.0(20)

相关模块：

SecurityAntivirus

所在头文件：

security_antivirus.h

汇总

[h2]成员变量

名称

描述

const char *
bundleName

防病毒应用包名

const char *
metadata

防病毒应用信息（当前版本号、上次更新时间、病毒防护开关状态、用户ID）

结构体成员变量说明

[h2]bundleName

const char *SecurityAntivirus_Antivirus::bundleName

描述

防病毒应用包名，包名字段要求请参见
链接
。

[h2]metadata

const char *SecurityAntivirus_Antivirus::metadata

描述

防病毒应用信息（包含当前版本号、上次更新时间、病毒防护状态、用户ID的json字符串），其中版本号字段要求请参见
链接
，上次更新时间为10位秒级或13位毫秒级时间戳，病毒防护状态仅限on或off，user_id为用户ID。示例格式如下：

{
"version": "1.0.0.0",
"last_update_time": "1751877696",
"protection_status": "on/off"，
"user_id": "100"
}

---
*2026-04-22T15:53:59.014Z*