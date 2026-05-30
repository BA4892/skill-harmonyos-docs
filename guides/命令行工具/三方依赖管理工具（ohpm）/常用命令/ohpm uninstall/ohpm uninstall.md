# ohpm uninstall

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-uninstall`  |  **DocID**: `6c22e32a19d844dab0fdcb19dcd61618`  |  **NodeID**: `00020177579016104550314f9e602208`

---

# ohpm uninstall

 卸载三方库。

 #### 命令格式

```
ohpm uninstall [options] [<@group>/]<pkg> ...
alias: un
```
  
- @group：三方库的命名空间，可选。
- pkg：三方库名称，必选。

   #### 功能描述

卸载指定已安装的模块，并将 oh-package.json5 文件中 dependencies、devDependencies 属性里移除指定三方库信息；若没有指定三方库，则不做任何动作。

 如无需在 oh-package.json5 文件中 dependencies、devDependencies 属性里移除指定三方库信息，则可配置 --no-save 参数。

  #### Options

 #### [h2]install_all

- 默认值：false
- 类型：Boolean
- 别名：all

 您可以在 uninstall 命令后面配置 --all或者--install_all 参数，表示卸载当前模块指定依赖成功后同时安装当前工程下的所有模块的依赖。

  #### [h2]no-save

- 默认值：false
- 类型：Boolean

 您可以在 uninstall 命令后面配置 --no-save 参数，卸载的三方库信息不会从 oh-package.json5 文件中删除。

  #### [h2]prefix

- 默认值：""
- 类型： string

 可以在 uninstall 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。

  #### [h2]registry

- 默认值：""
- 类型：URL

 可以在 uninstall 命令后面配置 --registry <registry> 参数，当检测到oh-package.json5文件存在未安装的三方包时，卸载命令执行后，会自动从registry指定的仓库中下载并安装该三方包；如果没有指定，默认从配置中获取仓库地址。

  #### [h2]fetch_timeout

- 默认值：60000
- 类型：Number
- 别名：ft

 可以在 uninstall 命令后面配置 --ft <number> 或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。

  #### [h2]strict_ssl

- 默认值：true
- 类型：Boolean

 可以在 uninstall 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。

  #### [h2]experimental-concurrently-safe

- 默认值：true
- 类型：Boolean

 可以在 uninstall 命令后面配置 --experimental-concurrently-safe 参数，并发安全地安装依赖。这是一个实验性选项。

  #### [h2]log_level

- 默认值：无
- 类型： string

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]lockfile_stable_order

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后面配置 --lockfile_stable_order 参数，会确保在oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。

  #### [h2]odm_r2_project_root

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后面配置 --odm_r2_project_root 参数，当存在overrideDependencyMap配置且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析来查找这些相对路径。详情参见[odm_r2_project_root](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section136621053184912)。

  #### [h2]resolve_conflict_strict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后面配置 --resolve_conflict_strict 参数，ohpm会按照严格模式处理依赖版本冲突，详情参见[resolve_conflict_strict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section1942983310492)。

  #### [h2]resolve_conflict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后面配置 --resolve_conflict 参数，ohpm会自动处理依赖版本冲突，详情参见[resolve_conflict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section368717475562)。

  #### [h2]cache

- 默认值：无
- 类型：string

 从ohpm 6.0.2.636版本开始，可以在 uninstall 命令后面配置 --cache <string> 参数，设置缓存路径。

  #### 示例

从当前工程下卸载**直接**依赖的某个package。

 执行以下命令：

 ohpm uninstall lottie 

  
- ohpm 1.0.0~1.3.0
使用 ohpm 卸载时，如果 json 是直接依赖的三方包，则当前工程 oh_modules 目录下文件夹 lottie 目录被删除，以及 json 对应的间接依赖也可能被删除（若间接依赖的包没有被其他三方包关联引用的情况下）。
- oh-package.json5 文件中 dependencies 属性删除对应的行（例如："lottie": "2.0.7"）。

 - ohpm 1.4.x
ohpm 客户端从 1.4.0 版本开始，使用 ohpm 卸载时，项目级 oh_modules 目录下的文件夹 lottie 目录**不会**被删除，模块级 oh_modules 目录下的文件夹 lottie 目录会被删除。
- oh-package.json5 文件中 dependencies 属性删除对应的行（例如："lottie": "2.0.7"）。

---
*Updated: 2026-04-22 01:09:19*
