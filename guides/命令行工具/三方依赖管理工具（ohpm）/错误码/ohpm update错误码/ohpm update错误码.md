# ohpm update错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-update-errorcode`  |  **DocID**: `b504bea4e47348ffb63d6bbcb69dfc9b`  |  **NodeID**: `00020177579016104550494b90c90646`

---

# ohpm update错误码

 #### 00606001 执行命令时带版本号

**错误信息**

 Has Version.

 **错误描述**

 update时带版本号。

 **可能原因**

 执行ohpm update时带版本号。

 **处理步骤**

 更新命令中不应包含版本号，仅指定包名。

  #### 00606002  执行tag-filter命令时使用非标准的正则

**错误信息**

 Tag Filter Non Standard Regex.

 **错误描述**

 tag-filter命令使用非标准正则。

 **可能原因**

 执行ohpm update --tag-filter <regex>命令时，使用非标准正则。

 **处理步骤**

 检查和修改为标准正则。

---
*Updated: 2026-04-22 01:09:19*
