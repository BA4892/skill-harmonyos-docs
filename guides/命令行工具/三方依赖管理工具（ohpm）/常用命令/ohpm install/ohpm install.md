# ohpm install

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-install`  |  **DocID**: `88b05416c9054995b24ec55fe8471d1f`  |  **NodeID**: `00020177579016104549845eee8d9835`

---

# ohpm install

 安装三方库。

 #### 命令格式

```
ohpm install [options] [[<@group>/]<pkg>[@<version> | @tag:<tag>]] ...
ohpm install [options] <folder> 
ohpm install [options] <har file>
alias: i
```
  
- @group：三方库的命名空间，可选。
- pkg：三方库名称，可选；当 install 后面没有指定三方库名称时，会根据当前目录下 oh-package.json5 定义的依赖关系进行全量安装。
- version：三方库的版本号，可选。
- tag：三方库的标签，标签会标记三方库的某个版本号，可选。

   #### 功能描述

用于安装指定组件或 oh-package.json5 文件中所有的依赖。如果存在 oh-package-lock.json5 文件，安装将取决于 oh-package-lock.json5 文件中锁定的版本。

 
ohpm install

 将依赖项安装到本地 oh_modules 文件夹中，并将所有依赖项作为 dependencies，写入 oh-package.json5 文件。

 ohpm install <folder>

 安装本地文件夹，则默认会创建一个软链接指向该文件夹。

 示例：

 ohpm install ../folder ohpm install <har file>

 安装压缩包，请注意压缩包的要求：

 
- 文件名必须使用 .tar, .tar.gz, .tgz, .har 作为扩展名；
- 压缩包里面包含子文件 package；
- 子文件夹 package 下面必须包含 oh-package.json5 文件，且配置文件中必须有 name 和 version 字段。

 示例：

 ```
ohpm install ./package.har
```
 
  #### Options

 #### [h2]install_all

- 默认值：true
- 类型：Boolean
- 别名：all

 可以在 install 命令后面配置 --all或者--install_all 参数，安装您项目下所有模块在其 oh-package.json5 中配置的全部依赖项。

  #### [h2]save-dynamic

- 默认值：false
- 类型：Boolean

 可以在 install 命令后面配置 --save-dynamic 参数，安装的三方库信息将会写入 oh-package.json5 文件的 dynamicDependencies 中。

  #### [h2]save-dev

- 默认值：false
- 类型：Boolean

 可以在 install 命令后面配置 --save-dev 参数，安装的三方库信息将会写入 oh-package.json5 文件的 devDependencies 中。

  #### [h2]save-prod

- 默认值：true
- 类型：Boolean

 可以在 install 命令后面配置 --save-prod 参数，安装的三方库信息将会写入 oh-package.json5 文件的 dependencies 中，这是 ohpm 的默认行为。

  #### [h2]no-save

- 默认值：false
- 类型：Boolean

 可以在 install 命令后面配置 --no-save 参数，安装的三方库信息将不会写入 oh-package.json5 文件中。

  #### [h2]prefix

- 默认值：""
- 类型： string

 可以在 install 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。

  #### [h2]parameterFile

- 默认值：无
- 类型： string
- 别名：pf

 可以在 install 命令后面配置 --pf <string> 或者 --parameterFile <string> 参数，用来指定参数化配置文件地址。使用该命令前需保证项目级别的oh-package.json5中已配置parameterFile参数。

  #### [h2]registry

- 默认值：""
- 类型：URL

 可以在 install 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。

  #### [h2]fetch_timeout

- 默认值：60000
- 类型： Number
- 别名：ft

 可以在 install 命令后面配置 --ft <number> 或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为60000ms。

  #### [h2]strict_ssl

- 默认值：true
- 类型： Boolean

 可以在 install 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。

  #### [h2]max_concurrent

- 默认值：50
- 类型： Number
- 别名：mc

 可以在 install 命令后面配置 --mc <number> 或者 --max_concurrent <number> 参数，设置最大活动并发请求数（即ohpm操作期间任何时间的最大网络请求数），如果没有指定，默认最大并发请求数为50次。

  #### [h2]retry_times

- 默认值：1
- 类型： Number
- 别名：rt

 可以在 install 命令后面配置 --rt <number> 或者 --retry_times <number> 参数，设置操作失败前的最大重试次数，如果没有指定，默认最大重试次数为1次。

  #### [h2]retry_interval

- 默认值：1000
- 类型： Number
- 别名：ri

 可以在 install 命令后面配置 --ri <number> 或者 --retry_interval <number> 参数，设置重试失败前的等待时间，如果没有指定，默认等待时间为1000ms。

  #### [h2]experimental-concurrently-safe

- 默认值：true
- 类型：Boolean

 可以在 install 命令后面配置 --experimental-concurrently-safe 参数，并发安全地安装依赖。这是一个实验性选项。

  #### [h2]target_path

- 默认值：无
- 类型：string

 可以在 install 命令后面配置 --target_path <string> 参数，用来指定在特定目标产物target语境下各模块的依赖配置文件（oh-package.json5）的路径。在执行ohpm install时，ohpm会优先安装<target_path>/<moduleName>/oh-package.json5文件中依赖。详情参见[target_path](#section79331822125611)。

  #### [h2]log_level

- 默认值：无
- 类型： String

 从ohpm 6.0.2.636版本开始，可以在 install 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]lockfile_stable_order

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --lockfile_stable_order 参数，当oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。

  #### [h2]odm_r2_project_root

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --odm_r2_project_root 参数。当存在overrideDependencyMap配置，且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析和查询相对路径，详情参见[odm_r2_project_root](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section136621053184912)。

  #### [h2]enable_cross_process_lock

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --enable_cross_process_lock 参数，由于oh_modules目录结构限制，ohpm不支持在同一个工程下并行运行多个ohpm install、ohpm update或ohpm uninstall命令。若需要在同一个工程下执行多个ohpm install、ohpm update或ohpm uninstall命令，可将该配置设置为true，使多个命令以串行的方式运行。

  #### [h2]resolve_conflict_strict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --resolve_conflict_strict 参数，ohpm会按照严格模式处理依赖版本冲突，详情参见[resolve_conflict_strict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section1942983310492)。

  #### [h2]resolve_conflict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --resolve_conflict 参数，ohpm会自动处理依赖版本冲突，详情参见[resolve_conflict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section368717475562)。

  #### [h2]cache

- 默认值：无
- 类型：String

 从ohpm 6.0.2.636版本开始，可以在 install 命令后面配置 --cache <string> 参数，设置缓存路径。

  #### 示例

安装 lottie 三方库，执行以下命令：

 ohpm install @ohos/lottie 结果示例：

 

  #### oh_modules 

 #### [h2]ohpm 1.0.0~1.3.0

使用 ohpm 安装时，项目中各 Module 的依赖项被统一安装在 Module 根目录下的 oh_modules 目录中，Module 中所有直接依赖和间接依赖都以平铺的方式存储在 oh_modules 目录下的 .ohpm 目录中，Module 的直接依赖则以软链接的方式添加进 oh_modules 文件夹的根目录中。因此，相同依赖项只会安装一次，从而减少磁盘使用空间，加快安装速度。

  #### [h2]ohpm 1.4.x

ohpm 客户端从 1.4.0 版本开始，同一项目下所有 Module 的依赖都会被统一安装在项目根目录下的 oh_modules 目录中，同时会在项目各 Module 根目录下的 oh_modules 中生成该 Module 的直接依赖的软链接，这些软链接会指向**项目根目录**下 oh_modules 中的 .ohpm 目录下依赖实际存储目录。

  #### target_path

为了支持在构建过程中针对不同的产物定制不同的依赖，Hvigor会在构建时根据目标产物target为各模块自动生成定制的依赖配置文件（oh-package.json5），开发者可以在ohpm install时使用target_path选项来指定在特定目标产物target语境下各模块的依赖配置文件（oh-package.json5）的路径。

 ohpm会优先安装<target_path>/moduleName/oh-package.json5文件中配置的依赖，并在<project_root>/moduleName下生成对应的oh-package-<targetName>-lock.json5文件。当指定target_path时，默认会开启依赖版本冲突自动处理功能，在依赖安装完成后，ohpm还会根据实际安装的依赖版本在<target_path>/resolve-conflict/moduleName目录下生成新的oh-package.json5文件。

 

 target_path目录结构示例：

 ```
+---default                   // <targetName>默认为default
|   |   dependencyMap.json5   // 记录在特定target语境下的各模块依赖配置文件路径
|   +---module1               // 在特定target语境下某模块的依赖配置文件的存储目录，与原模块根目录同名
|   |       oh-package.json5  // 在特定target语境下某模块依赖配置文件
|   +---module2
|   |       oh-package.json5
|   |   oh-package.json5      // 在特定target语境下生成的工程级依赖配置文件
```
 

 dependencyMap.json5内容示例：

 ```
{
  targetName: "default",
  rootDependency: "./oh-package.json5",
  dependencyMap: {
       "module1": "./module1/oh-package.json5",
       "module2": "./module2/oh-package.json5"
  }
}
```
 

 **ohpm install指定target_path时依赖配置优先级说明：**

 1、<target_path>/dependencyMap.json5中rootDependency配置的oh-package.json5的优先级高于<project_root>/oh-package.json5。

 2、.ohpmrc中projectPackageJson指定的项目级配置文件中overrides、overrideDependencyMap配置优先级同时高于<target_path>/dependencyMap.json5中rootDependency配置的oh-package.json5中对应配置 和 <project_root>/oh-package.json5中对应配置。

 3、<target_path>/moduleName/oh-package.json5的优先级高于overrideDependencyMap中的依赖配置文件。

 4、overrides中的依赖版本优先级高于<target_path>/moduleName/oh-package.json5中对应的依赖版本。

  仅当<target_path>/dependencyMap.json5中targetName的值不为空且不等于'default'时，<project_root>/moduleName目录下生成的lock文件名才会变更为：oh-package-targetName-lock.json5。

---
*Updated: 2026-04-22 01:09:19*
