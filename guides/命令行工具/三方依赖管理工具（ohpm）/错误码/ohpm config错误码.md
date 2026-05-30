# ohpm config错误码

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-config-errorcode`  |  **DocID**: `79d12e09028f443d9bf851ce66a2cbd4`  |  **NodeID**: `000201775790161045489a220cbe5624`

---

# ohpm config错误码

 #### 00602001 未配置子命令

**错误信息**

 Config Subcommand Is Empty.

 **错误描述**

 Config子命令为空。

 **可能原因**

 执行ohpm config命令时，未配置子命令。

 **处理步骤**

 确认ohpm config可用的子命令，配置子命令后再执行。

  #### 00602002 配置的子命令不支持

**错误信息**

 Config Subcommand Not Support.

 **错误描述**

 Config配置的子命令不支持。

 **可能原因**

 ohpm config配置的子命令不支持。

 **处理步骤**

 确认ohpm config可用的子命令后再配置。

  #### 00602003 set命令参数缺失

**错误信息**

 Config Set Command Param Error.

 **错误描述**

 set命令参数错误。

 **可能原因**

 执行ohpm config set命令时，未配置<key> <value>参数。

 **处理步骤**

 确保命令输入格式为"ohpm config set <key> <value>"。

  #### 00602004 get命令参数错误

**错误信息**

 Config Get Command Param Error.

 **错误描述**

 get命令参数错误。

 **可能原因**

 输入ohpm config get <value>命令，不可直接获取value，需要通过key获取。

 **处理步骤**

 确保命令输入格式为"ohpm config get <key>"。

  #### 00602005 delete命令参数错误

**错误信息**

 Config Delete Command Param Error.

 **错误描述**

 delete命令参数错误。

 **可能原因**

 输入ohpm config delete命令。

 **处理步骤**

 确保命令输入格式为"ohpm config delete <key>"。

  #### 00602006 list参数无效

**错误信息**

 Config List Command Param Error.

 **错误描述**

 list参数无效。

 **可能原因**

 输入的list参数无效，如ohpm config list  adsy。

 **处理步骤**

 确保命令输入格式为"ohpm config list  [-j|--json]"。

  #### 00602007 获取受保护的键名

**错误信息**

 Protected Key.

 **错误描述**

 键名被保护。

 **可能原因**

 获取以下划线开头的键名。

 **处理步骤**

 以下划线开头键名受保护（如_auth=readWriteToken），不允许访问。详情可参考[如何配置AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section613915915011)。

  #### 00602008 键不存在

**错误信息**

 Key Not Exist.

 **错误描述**

 键不存在。

 **可能原因**

 删除用户级目录下ohpmrc文件中指定的键值时，key不存在。

 **处理步骤**

 运行"ohpm config list"查看所有可用的配置键，再执行"ohpm config delete <key>"。

  #### 00602009 重复加载配置

**错误信息**

 Repeat Load Configuration.

 **错误描述**

 重复加载配置。

 **可能原因**

 ohpm重复加载参数和配置。

 **处理步骤**

 关闭ohpm命令，重新加载一次。

  #### 00602010 保存时未加载配置文件

**错误信息**

 Not Loaded When Saving.

 **错误描述**

 保存时未加载配置文件。

 **可能原因**

 保存时未加载配置文件。

 **处理步骤**

 加载完成后再保存配置。

  #### 00602011 设置时未加载配置的数据

**错误信息**

 Not Loaded When Setting.

 **错误描述**

 未加载配置即设置。

 **可能原因**

 在设置值之前未加载配置。

 **处理步骤**

 加载完成后再配置参数。

  #### 00602012 Encrypt命令参数错误

**错误信息**

 Config Encrypt Command Param Error.

 **错误描述**

 Encrypt命令参数配置错误。

 **可能原因**

 执行ohpm config encrypt命令，未配置加密组件路径。

 **处理步骤**

 检查和确保命令格式为"ohpm config encrypt --crypto_path <string>"。

  #### 00602013 加密组件路径为空

**错误信息**

 Crypto Path Is Empty.

 **错误描述**

 加密路径为空。

 **可能原因**

 执行ohpm config encrypt --crypto_path命令。

 **处理步骤**

 检查和确保命令格式为"ohpm config encrypt --crypto_path <string>"。

  #### 00602014 加密组件路径错误

**错误信息**

 Crypto Component Not Directory.

 **错误描述**

 加密组件路径错误。

 **可能原因**

 执行ohpm config encrypt --crypto_path <string>，string为实际存在的文件，不是目标路径。

 **处理步骤**

 检查当前加密路径是否为目标路径。

  #### 00602015 无效的加密组件

**错误信息**

 Invalid Crypto Component.

 **错误描述**

 无效的加密组件。

 **可能原因**

 生成的加密组件的key无效。

 **处理步骤**

 运行命令ohpm config encrypt --crypto_path <string>生成有效的加密组件目录，确保指定的路径符合加密组件的要求。

  #### 00602016 加密路径未配置

**错误信息**

 Crypto Path Not Configured.

 **错误描述**

 加密路径配置不正确。

 **可能原因**

 crypto_path内容格式不正确。

 **处理步骤**

 检查.ohpmrc文件中crypto_path确保正确配置，确保crypto_path的格式正确。

---
*Updated: 2026-04-22 01:09:18*
