# ohpm-repo mirror_storage

> **分区**: Guides  |  **Slug**: `ide-ohpm-repo-mirror_storage`  |  **DocID**: `b9145442f8dc47d9ae0a67a02d90254e`

---

# ohpm-repo mirror_storage

 同步sftp存储的包。

 #### 前提条件

- 已成功执行[start 命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-start)或者[restart 命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-restart)，ohpm-repo服务启动成功。
- 数据存储db模块的类型必须为mysql，文件存储store模块的类型必须为sftp。

  #### 命令格式

```
ohpm-repo mirror_storage <source_sftp> <target_sftp> <target> [options]
```
  #### 功能描述

该命令必须配置文件存储插件模块为sftp。命令会将**源sftp**目录下满足<target>条件的包同步到**目标sftp**目录下。

  #### 参数

 #### [h2]<source_sftp>

- 类型：String
- 必填参数

 必须在mirror_storage命令后面配置<source_sftp>参数，指定**源sftp**配置的名字。

  #### [h2]<target_sftp>

- 类型：String
- 必填参数

 必须在mirror_storage命令后面配置<target_sftp>参数，指定**目标sftp**配置的名字。

  #### [h2]<target>

- 类型：String
- 必填参数
- 格式： [<@scope>/]<pkg>[<@version>] 或 @all
- 说明： <@scope>和<@version>是可选的， <pkg>是包名。

 必须在mirror_storage命令后配置<target>参数，指定满足条件的包；或使用@all指定所有包。

  #### 选项

 #### [h2]failed

- 默认值：无
- 类型：无

 可以在mirror_storage命令后面配置--failed选项，则只同步在下载错误日志中未被处理的且满足<target>条件的包，如果同步成功，则相应的错误日志会被设置成handled。

  #### 示例

执行以下命令，同步包repo_sftp2_mirror_gxy07056@2.0.0：

 ohpm-repo mirror_storage test_one_sftp test_two_sftp repo_sftp2_mirror_gxy07056@2.0.0 说明：将名为test_one_sftp的sftp目录中repo_sftp2_mirror_gxy07056@2.0.0包同步到名为test_two_sftp的sftp目录中。

 结果示例：

---
*Updated: 2026-04-24 01:27:14*
