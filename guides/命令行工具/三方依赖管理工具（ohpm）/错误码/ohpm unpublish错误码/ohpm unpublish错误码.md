# ohpm unpublish错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-unpublish-errorcode`  |  **DocID**: `ef865df780f641d9b6aeb541937d6389`  |  **NodeID**: `000201775790161045502f5f272f0241`

---

# ohpm unpublish错误码

 #### 00610001 执行下架命令时未指定版本号

**错误信息**

 Delete All Version Pkg Not Force.

 **错误描述**

 未强制下架不同版本的包。

 **可能原因**

 下架时未指定版本号，且未使用强制下架。

 **处理步骤**

 如果未指定版本，默认下架三方库的所有版本，并且需要加上 -f 配置参数。

---
*Updated: 2026-04-22 01:09:19*
