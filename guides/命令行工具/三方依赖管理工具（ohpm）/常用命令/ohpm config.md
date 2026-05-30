# ohpm config

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-config`  |  **DocID**: `b75a86c7553b4c11bee018b95ac8ca99`  |  **NodeID**: `000201775790161045490782ae1400b3`

---

# ohpm config

 设置ohpm用户级配置项。

 #### 命令格式

```
ohpm config set <key> <value>
ohpm config get <key>
ohpm config delete <key>
ohpm config list
ohpm config encrypt [options]
```
  配置文件中信息以键值对<key> = <value>形式存在。

   #### 功能描述

ohpm 从命令行和 .ohpmrc 文件中获取其配置设置。有关更多 .ohpmrc 文件信息和可用配置选项，请参阅 [ohpmrc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc) 章节。

  ohpm config 仅支持配置项字段（默认项字段请查阅 [ohpmrc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#zh-cn_topic_0000001792216397_默认配置项) 章节），且仅支持修改**用户级目录**下的 .ohpmrc 文件。

   #### 子命令

 #### [h2]set

ohpm config set <key> <value> 在用户级目录下 .ohpmrc 文件中，以键值对<key> = <value>形式写入数据。

 **示例**

 
- 以配置项"log_level"为例，修改其值为debug（可选值：debug、info、warn、error）：```
ohpm config set log_level debug
```
 
- 成功执行后，在用户目录/.ohpm/.ohpmrc文件中将显示log_level=debug。

  #### [h2]get

ohpm config get <key> 将从命令行，项目级 .ohpmrc 文件，用户级 .ohpmrc 文件（优先级依次递减）中获取的值进行标准输出。

 如果未提供键值，则此命令执行效果与命令 ohpm config list 相同。

 **示例1**

 
- 以项目级.ohpmrc中log_level=info，用户级.ohpmrc中log_level=debug为例，在工程任意目录下执行如下命令。ohpm config get log_level 
- 成功执行后，在控制台打印log_level的值。```
info
```
 

 **示例2**

 
- 基于示例1，将项目级.ohpmrc删除，再次执行get命令。ohpm config get log_level 
- 成功执行后，在控制台打印log_level的值。```
debug
```
 

 **示例3**

 
- 未提供<key>值时执行命令ohpm config get。```
ohpm config get
```
 
成功执行后，将在控制台打印所有.ohpmrc配置。```
; "user" config from C:\Users\username\.ohpm\.ohpmrc

registry="http://localhost:8088/repos/ohpm"
strict_ssl = false
log_level = "debug"

; "user" config from C:\Users\username\.ohpm\.ohpmrc
; node bin location = C:\Program Files\nodejs\node.exe
; node version = v18.19.1
; ohpm local prefix = C:\Users\username
; ohpm version = 5.1.2-rc.2
; cwd = C:\Users\username
; HOME = C:\Users\username
```
 
  #### [h2]list

```
ohpm config list
alias: ls
```
 显示所有配置项。

 **示例**

 
- 执行list命令。```
ohpm config list 或者 ohpm config ls
```
 
成功执行后，将在控制台打印所有.ohpmrc配置。```
; "user" config from C:\Users\username\.ohpm\.ohpmrc

registry="http://localhost:8088/repos/ohpm"
strict_ssl = false
log_level = "debug"

; "user" config from C:\Users\username\.ohpm\.ohpmrc
; node bin location = C:\Program Files\nodejs\node.exe
; node version = v18.19.1
; ohpm local prefix = C:\Users\username
; ohpm version = 5.1.2-rc.2
; cwd = C:\Users\username
; HOME = C:\Users\username
```
 
  #### [h2]delete

ohpm config delete <key> 删除用户级目录下 ohpmrc 文件中指定的键值。

 **示例**

 
用户.ohpmrc中原始内容。```
registry=http://localhost:8088/repos/ohpm
strict_ssl=false
log_level=debug
```
 - 执行delete命令。```
ohpm config delete registry
```
 
成功执行后，.ohpmrc内容如下。```
strict_ssl=false
log_level=debug
```
 
  #### [h2]encrypt

ohpm config encrypt [options] 使用加密组件加密标准输入的数据，并输出密文到标准输出。

 **首次使用**：

 
必须在 config encrypt 命令后面配置  [--crypto_path <string>](#section313318216424) 生成新的加密组件，并用于数据加密。**示例**

 
- 执行 encrypt --crypto_path <string> 命令，指定的路径为空目录。```
ohpm config encrypt --crypto_path D:\path\to\empty_dir
```
 
成功执行后，在指定路径生成新的加密组件，并对用户输入内容进行加密，其中用户输入内容不可见。```
ohpm INFO: Attempted to create an crypto component at the "D:\path\to\empty_dir" path...
ohpm INFO: The crypto component has been created successfully.
Please enter the password to be encrypted:
ohpm INFO: encrypted result:
security:01:61AE9D3219664B7B785XXXXX:201f713d625daddafcb12198ea9d5121xxxxxx
```
 - 将生成的加密组件路径配置到 .ohpmrc 文件中，方便后续自动读取加密组件。crypto_path=D:\path\to\empty_dir 

 
 **非首次使用：**

 
- 若不指定 [--crypto_path](#section313318216424)，则自动从 .ohpmrc 文件中读取配置（优先级：项目级 > 用户级 .ohpmrc），必须保证路径存在且包含有效加密组件。
- 若报错提示加密组件错误，可重新执行ohpm config encrypt --crypto_path <string> 命令。
**示例**

 
- 执行 encrypt 命令。```
ohpm config encrypt
```
 
成功执行后，对用户输入内容进行加密，其中用户输入内容不可见。```
Please enter the password to be encrypted:
ohpm INFO: encrypted result:
security:01:61AE9D3219664B7B785XXXXX:201f713d625daddafcb12198ea9d5121xxxxxx
```
 
 
 **密文使用：**

 生成的加密结果可以配置到项目级或用户级 .ohpmrc 文件中，用于[敏感配置项](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section18322038185010)。

  #### Options

 #### [h2]json

- 默认值：false
- 类型： Boolean
- 别名：j

 可以在 config list 命令后面配置 -j或者--json 参数，以 json 格式输出所有配置项及默认值。

 ```
// 示例
// 1.执行list命令并以json形式输出
ohpm config list -j 或 ohpm config list --json
// 2.命令执行结果
{
  "registry": "http://localhost:8088/repos/ohpm", 
  "strict_ssl": false,
  "log_level": "info",
  ......
}
```
  #### [h2]crypto_path

- 默认值：无
- 类型： string

 指定加密组件路径用于数据加密。针对指定路径的不同情况，说明如下：

 
- 若指定路径不存在，自动创建目录并生成新加密组件；
- 若路径为空目录，将自动在目录中生成新加密组件；
- 若路径已存在有效加密组件，则使用现有组件加密。

 ```
// 示例1
// 1.执行 encrypt --crypto_path <string> 命令，指定的路径为空目录
ohpm config encrypt --crypto_path D:\path\to\empty_dir
// 2.成功执行后，在指定路径生成新的加密组件，并对用户输入内容进行加密，其中用户输入内容不可见
ohpm INFO: Attempted to create an crypto component at the "D:\path\to\empty_dir" path...
ohpm INFO: The crypto component has been created successfully.
Please enter the password to be encrypted:
ohpm INFO: encrypted result:
security:01:61AE9D3219664B7B785XXXXX:201f713d625daddafcb12198ea9d5121xxxxxx

// 示例2
// 1.执行 encrypt --crypto_path <string> 命令，指定的路径为有效的加密组件
ohpm config encrypt --crypto_path D:\path\to\crypto_dir
// 2.成功执行后，对用户输入内容进行加密，其中用户输入内容不可见
Please enter the password to be encrypted:
ohpm INFO: encrypted result:
security:01:61AE9D3219664B7B785XXXXX:201f713d625daddafcb12198ea9d5121xxxxxx
```
  #### [h2]log_level

- 默认值：无
- 类型： string

 从ohpm 6.0.2.636版本开始，可以在命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

---
*Updated: 2026-04-22 01:09:18*
