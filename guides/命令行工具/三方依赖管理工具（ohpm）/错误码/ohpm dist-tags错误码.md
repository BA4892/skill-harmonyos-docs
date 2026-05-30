# ohpm dist-tags错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-dist-tags-errorcode`  |  **DocID**: `1ec1ac88fea0445698375bf57a5dd07d`  |  **NodeID**: `00020177579016104551553d1ddf459a`

---

# ohpm dist-tags错误码

 #### 00623001 tag标签无效

**错误信息**

 Tag Invalid Error.

 **错误描述**

 标签无效。

 **可能原因**

 tag标签格式不符合要求。

 **处理步骤**

 检查tag标签格式，确保其符合规范。具体请参考[ohpm dist-tags](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-dist-tags)。

  #### 00623003 list命令错误

**错误信息**

 List Command Param Error.

 **错误描述**

 list命令参数错误。

 **可能原因**

 ohpm dist-tags list命令配置错误。

 **处理步骤**

 确保输入的命令为 "ohpm dist-tags list [<@group>/]<pkg>"。

  #### 00623004 命令参数配置错误

**错误信息**

 SubCommand Param Error.

 **错误描述**

 子命令参数错误。

 **可能原因**

 命令行中缺少<pkg>、<tag>参数。

 **处理步骤**

 检查和确保输入的命令中带有<pkg>和<tag>参数。

  #### 00623005 未配置发布仓库地址

**错误信息**

 Publish Registry Empty Error.

 **错误描述**

 发布仓库地址为空错误。

 **可能原因**

 未设置发布的仓库地址。

 **处理步骤**

 使用命令ohpm config set publish_registry <r> 设置发布仓库地址。

  #### 00623006 未配置版本号

**错误信息**

 Version Empty Error.

 **错误描述**

 版本为空错误。

 **可能原因**

 命令中未填写版本号。

 **处理步骤**

 检查和添加正确的三方库版本号。

  #### 00623007 未配置子命令

**错误信息**

 Subcommand Is Empty.

 **错误描述**

 子命令为空错误。

 **可能原因**

 ohpm dist-tags命令配置时，缺少子命令。

 **处理步骤**

 确认和配置ohpm dist-tags可用的子命令（add、remove、 update、 list）。

  #### 00623008 子命令不支持

**错误信息**

 Subcommand Not Support.

 **错误描述**

 子命令不支持。

 **可能原因**

 使用了不支持的子命令。

 **处理步骤**

 确认和配置ohpm dist-tags可用的子命令（add、remove、 update、 list）。

---
*Updated: 2026-04-22 01:09:20*
