# ohpm dist-tags

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-dist-tags`  |  **DocID**: `0541bc5c917d4d8bac60ff367527b68d`  |  **NodeID**: `000201775790161045523dd1dedf6bdc`

---

# ohpm dist-tags

 tag可标记一个三方库的某个版本，在install时可用tag代替版本号安装包。

 #### 命令格式

```
ohpm dist-tags [subcommand] [<@group>/]<pkg>[@<version>] <tag>
alias: dist-tags
```
   
- subcommand: 包含list、add、update、remove四个子命令。
- @group: 三方库的命名空间，可选。
- pkg: 三方库名称，必选。
- version: 三方库的版本号，在add、update子命令时必选。
- tag: 标签，在add、update、remove子命令时必选。tag必须以大小写字母或数字开头，只允许包含大小写字母、数字、点号(.)、下划线(_)和中划线(-)，最大长度为60个字符。

  #### 功能描述

操作tag。分为查看三方库的所有tag，给三方库的某个版本添加tag，修改tag到三方库的另一个版本，删除三方库的某个tag。

  "latest"是一个预设的标签，不允许直接通过dist-tags命令来进行修改。该标签自动指向最高的正式版本；若无正式版本，则默认指向最高的先行版本。

 以第三方库a为例，假定其版本序列包括"1.0.1-beta"、"1.0.1"和"2.0.1-beta"，在这种情况下，"latest"会自动映射到"1.0.1"，因为它是当前最高的正式版本。

   #### 子命令

 #### [h2]list

```
ohpm dist-tags list [<@group>/]<pkg>
alias: ls
```
 列出指定三方库的所有标签。输出结果中，`latest`标签始终位于首位，其他标签按照字典序排列显示。

  #### [h2]add

ohpm dist-tags add [<@group>/]<pkg>[@<version>] <tag> 给某个版本的三方库增加一个标签。若该三方库已存在相同标签，则添加操作将会失败。

  #### [h2]update

```
ohpm dist-tags update [<@group>/]<pkg>[@<version>] <tag>
alias: up
```
 更新指定包的某个标签所对应的版本。如果指定的标签不存在，则更新操作将失败。

  #### [h2]remove

```
ohpm dist-tags remove [<@group>/]<pkg> <tag>
alias: rm
```
  删除指定包的一个标签。如果该标签并未存在于包中，则删除操作将会失败。

 #### Options

 #### [h2]publish_id

- 默认值：""
- 类型：String

 可以在 dist-tags 命令后面配置 --publish_id <id> 参数，指定发布码。

  #### [h2]key_path

- 默认值：""
- 类型：String

 可以在 dist-tags 命令后面配置 --key_path <p> 参数，指定ssh私钥路径。

  #### [h2]registry

- 默认值：无
- 类型：URL

 可以在 dist-tags 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。

  #### [h2]publish_registry

- 默认值：""
- 类型：URL

 可以在 dist-tags 命令后面配置 --publish_registry <r> 参数，指定发布仓库地址。如果未指定，默认从配置中获取发布仓库地址。

  #### [h2]fetch_timeout

- 默认值：60000
- 类型： Number
- 别名：ft

 可以在 dist-tags 命令后面配置 --ft <number>或者  --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。

  #### [h2]strict_ssl

- 默认值：true
- 类型： Boolean

 可以在 dist-tags 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。

  #### [h2]log_level

- 默认值：无
- 类型： String

 从ohpm 6.0.2.636版本开始，可以在 dist-tags 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### 示例

如果想要通过使用tag，在oh-package.json5文件中引入包@ohos/axios的1.0.0版本，步骤如下：

 1.  通过ohpm dist-tags的子命令add，对包@ohos/axios的1.0.0版本添加标签名beta。

 ```
ohpm dist-tags add @ohos/axios@1.0.0 beta
```
 2.  在oh-package.json5文件中，使用标签beta引入包@ohos/axios的1.0.0版本。```
{
  "dependencies": {
    // tag标签引入，引入标签为"beta"对应的版本号1.0.0
    "@ohos/axios": "tag:beta"
  }
  ...
  ...
}
```

---
*Updated: 2026-04-22 01:09:20*
