# ohpm list错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-list-errorcode`  |  **DocID**: `55f1b2e25f374505921ecf5c11d2a95c`  |  **NodeID**: `0002017757901610454964b0be34df24`

---

# ohpm list错误码

 #### 00622014  parameterFile配置问题

**错误信息**

 Parameter File Not Config Error.

 **错误描述**

 参数文件未配置。

 **可能原因**

 parameterFile配置问题。

 **处理步骤**

 检查和确保parameterFile配置正确，具体修改可参考[parameterFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5#section122411462820)。

  #### 00608001 包未找到

**错误信息**

 Pkg Not Found.

 **错误描述**

 包未找到。

 **可能原因**

 目录中不存在oh-package.json5文件。

 **处理步骤**

 确保当前目录下存在oh-package.json5文件。

  #### 00618005 存在循环依赖

**错误信息**

 Invalid Dependency.

 **错误描述**

 无效依赖。

 **可能原因**

 存在循环依赖，如ma@1.0.0 -> mb@1.0.0 -> mc@1.0.0 -> ma@1.0.0。

 **处理步骤**

 检查依赖配置，确保无循环依赖。

---
*Updated: 2026-04-22 01:09:19*
