# ohpm命令公共错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-errorcode-universal`  |  **DocID**: `e00e63f1e8b142c18e4bb4578e3d5d25`  |  **NodeID**: `0002017757901610455202a58fe599ac`

---

# ohpm命令公共错误码

 #### 00617101 获取包信息失败

**错误信息**

 Fetch Pkg Info Failed.

 **错误描述**

 获取包信息失败。

 **可能原因**

 执行ohpm list、ohpm info、ohpm install命令时，包名或版本号不匹配，从中心仓和私仓获取不到相关信息。

 **处理步骤**

 在中心仓和私仓搜索包名/版本号，确保可以跟仓中匹配。

  #### 00608001 oh-package.json5文件不存在

**错误信息**

 Pkg Not Found.

 **错误描述**

 找不到三方库。

 **可能原因**

 工程目录下不存在oh-package.json5文件。

 **处理步骤**

 确保工程目录下存在oh-package.json5文件，再执行命令。

  #### 00608002 文件不存在

**错误信息**

 File Not Found.

 **错误描述**

 文件不存在。

 **可能原因**

 在指定目录下未找到文件。

 **处理步骤**

 确认目录下存在文件后再执行命令。

  #### 00608003 读取文件时发生错误

**错误信息**

 File Read Error.

 **错误描述**

 读取文件时发生错误。

 **可能原因**

 读取配置等文件失败。

 **处理步骤**

 查看是否被占用后，重新读取。

  #### 00670002 路径大小写敏感错误

**错误信息**

 Path Case Sensitivity Error.

 **错误描述**

 路径大小写敏感错误。

 **可能原因**

 工程中文件的配置路径和文件的实际路径大小写不一致。

 **处理步骤**

 修改工程中配置的文件路径，使其与文件的实际路径一致；或者设置.ohpmrc文件中的case_sensitive_check为false，不检测文件路径大小写。更多请参考[case_sensitive_check](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section2045412394117)。

---
*Updated: 2026-04-22 01:09:20*
