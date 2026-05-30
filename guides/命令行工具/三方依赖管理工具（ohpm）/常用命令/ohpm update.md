# ohpm update

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-update`  |  **DocID**: `77f713fc52a742f9b5155fcf93824a08`  |  **NodeID**: `0002017757901610455097868f92cf35`

---

# ohpm update

 更新三方库。

 #### 命令格式

```
ohpm update [options] [[<@group>/]<pkg>] ...
alias: up
```
  
- @group：三方库的命名空间，可选。
- pkg：三方库名称，可选。

   #### 功能描述

根据三方库及其依赖版本号的 [semver](https://semver.org/) 规范，将本地安装的三方库更新到最新版本。若未指定三方库名称，则全量更新当前工程的依赖，且会安装缺少的三方库。

  #### Options

 #### [h2]install_all

- 默认值：false
- 类型：Boolean
- 别名：all

 您可以在 update 命令后面配置 --all或者--install_all 参数，表示更新当前模块指定依赖成功后同时安装当前工程下的所有模块的依赖。

  #### [h2]prefix

- 默认值：""
- 类型： string

 可以在 update 命令后面配置 --prefix <string> 参数，用来指定包的根目录，该目录下必须存在 oh-package.json5 文件。

  #### [h2]fetch_timeout

- 默认值：60000
- 类型： Number
- 别名：ft

 可以在 update 命令后面配置 --ft <number>或者 --fetch_timeout <number> 参数，设置操作的超时时间，如果没有指定，默认超时时间为 60000 ms。

  #### [h2]max_concurrent

- 默认值：50
- 类型： Number
- 别名：mc

 可以在 update 命令后面配置 --mc <number> 或者 --max_concurrent <number> 参数，设置最大活动并发请求数（即 ohpm 操作期间任何时间的最大网络请求数），如果没有指定，默认最大并发请求数为 50 次。

  #### [h2]retry_times

- 默认值：1
- 类型： Number
- 别名：rt

 可以在 update 命令后面配置 --rt <number> 或者 --retry_times <number> 参数，设置操作失败前的最大重试次数，如果没有指定，默认最大重试次数为 1 次。

  #### [h2]retry_interval

- 默认值：1000
- 类型： Number
- 别名：ri

 可以在 update 命令后面配置 --ri <number> 或者 --retry_interval <number> 参数，设置重试失败前的等待时间，如果没有指定，默认等待时间为 1000 ms。

  #### [h2]strict_ssl

- 默认值：true
- 类型： Boolean

 可以在 update 命令后面配置 --strict_ssl true 参数，校验 https 证书；配置 --strict_ssl false 参数，不校验 https 证书。

  #### [h2]registry

- 默认值：""
- 类型：URL

 可以在 update 命令后面配置 --registry <registry> 参数，指定仓库地址；如果没有指定，默认从配置中获取仓库地址。

  #### [h2]all-modules

- 默认值：""
- 类型：Boolean

 可以在 update 命令后面配置 --all-modules 参数，表示同步更新所有模块的依赖关系。

  #### [h2]tag-filter

- 默认值：无
- 类型：Regex

 可以在 update 命令后面配置 --tag-filter <regex> 参数，表示更新以tag为规范，只更新tag符合正则表达式的依赖。使用 --tag-filter 参数默认更新所有模块的依赖关系。

  #### [h2]experimental-concurrently-safe

- 默认值：true
- 类型：Boolean

 可以在 update 命令后面配置 --experimental-concurrently-safe 参数，并发安全地安装依赖。这是一个实验性选项。

  #### [h2]log_level

- 默认值：无
- 类型： String

 从ohpm 6.0.2.636版本开始，可以在 update 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]lockfile_stable_order

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --lockfile_stable_order 参数，当oh-package.json5文件未变更时，当前已生成的oh-package-lock.json5各字段内容不变。

  #### [h2]odm_r2_project_root

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --odm_r2_project_root 参数，当存在overrideDependencyMap配置且其配置项对应的配置文件内存在相对路径的依赖配置时，ohpm会基于工程根路径解析来查找这些相对路径，详情参见[odm_r2_project_root](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section136621053184912)。

  #### [h2]resolve_conflict_strict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --resolve_conflict_strict 参数，ohpm会按照严格模式处理依赖版本冲突，详情参见[resolve_conflict_strict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section1942983310492)。

  #### [h2]resolve_conflict

- 默认值：false
- 类型：Boolean

 从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --resolve_conflict 参数，ohpm会自动处理依赖版本冲突，详情参见[resolve_conflict](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpmrc#section368717475562)。

  #### [h2]cache

- 默认值：无
- 类型：string

 从ohpm 6.0.2.636版本开始，可以在 update 命令后面配置 --cache <string> 参数，设置缓存路径。

  #### 示例

若当前三方库是 APP，且它的依赖项为：dep1 ( dep2，...)，dep1 已发布的版本有：

 ```
{
  "dist-tags": { "latest": "1.2.2", "release": "1.2.0" },
  "versions": [
    "1.2.2",
    "1.2.1",
    "1.2.0",
    "1.1.2",
    "1.1.1",
    "1.0.0",
    "0.4.1",
    "0.4.0",
    "0.2.0"
  ]
}
```
  #### [h2]^ 依赖项

使用^符号会更新到版本 x.y.z 中 y 和 z 的最新版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为：

 ```
"dependencies": {
  "dep1": "^1.1.1"
}
```
 ohpm update 则安装 dep1@1.2.2，因为最新版本指向 1.2.2，且1.2.2 满足 ^1.1.1。

  #### [h2]~ 依赖项

使用~符号会更新到版本 x.y.z 中 z 的最新版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为：

 ```
"dependencies": {
  "dep1": "~1.1.1"
}
```
 ohpm update 则安装 dep1@1.1.2，尽管最新版本指向 1.2.2，但 1.2.2 不满足 ~1.1.1（版本号须 1.1.1 ≤ version < 1.2.0），所以 ~1.1.1 使用满足最高排序版本，即1.1.2 ，进行更新。

  #### [h2]tag 依赖项

使用 tag 会更新到 tag 对应的版本。如果 APP 中 oh-package.json5 文件中 dep1 的版本号为：

 ```
"dependencies": {
  "dep1": "tag:release"
}
```
 如果此时 release 标签对应版本被变更为 1.2.2，ohpm update --tag-filter ^r 则会将 dep1@1.2.0 更新为 dep1@1.2.2，因为 dep1 是通过 release 标签引入，release 符合 --tag-filter 指定的 ^r 正则表达式，所以会重新获取 release 标签对应的版本 1.2.2。

  #### [h2]低于 1.0.0 版本的 ^ 依赖项

如果 APP 中 dep1 依赖版本号低于 1.0.0 且带有 ^，例如：

 ```
"dependencies": {
  "dep1": "^0.2.0"
}
```
 ohpm update 则安装 dep1@0.2.0，因为没有其他版本满足 ^0.2.0。

 但是 dep1 依赖版本号是 ^0.4.0：

 ```
"dependencies": {
  "dep1": "^0.4.0"
}
```
 ohpm update 则安装  dep1@0.4.1，因为它是满足 ^0.4.0（版本号须 0.4.0 ≤ version < 0.5.0）的最高排序版本。

---
*Updated: 2026-04-22 01:09:20*
