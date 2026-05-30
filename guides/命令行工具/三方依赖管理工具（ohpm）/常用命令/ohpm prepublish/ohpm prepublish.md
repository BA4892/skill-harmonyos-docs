# ohpm prepublish

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-ohpm-prepublish`  |  **DocID**: `d4e8d8fafaf54944a2e80a0219d6dab2`  |  **NodeID**: `000201775790161045506a130720b547`

---

# ohpm prepublish

 预发布一个三方库。

 #### 命令格式

```
ohpm prepublish [options] <har_or_tgz_file>
```
  
- har_or_tgz_file：压缩包路径，可以是 .har 包格式和由 hsp 模块打包出来的 .tgz 包格式，必选参数。
- ohpm v1.8.0 版本开始支持prepublish命令。

   #### 功能描述

- 拥有publish命令的所有内容校验规则，可以在发布前检测待发布的三方库能否通过ohpm客户端校验。
- 只校验待发布三方库内容，不对publish_registry、publish_id、key_path等做校验。
- 包的格式、结构及具体校验规则可参考[publish命令说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-publish)。

  #### Options

  #### [h2]log_level

- 默认值：无
- 类型： String

 从ohpm 6.0.2.636版本开始，可以在 prepublish 命令后配置--log_level <string>参数，指定执行当前命令的日志级别（info、debug、warn、error），如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### [h2]debug

- 默认值：false
- 类型： Boolean

 从ohpm 6.0.2.636版本开始，可以在命令后配置--debug参数，指定执行当前命令的日志级别为debug，该配置仅在当前命令行生效，不修改.ohpmrc中的日志级别，如果未指定该值则日志级别为.ohpmrc中配置的log_level的级别。

  #### 示例

预发布工作目录下的三方库，执行以下命令：

 ohpm prepublish publish_test.har 结果示例：

 ```
C:\Program Files\Huawei\DevEco Studio\tools\ohpm\bin> ohpm prepublish D:\publish_test.har
prepublish publish_test 1.0.0 succeed.
```

---
*Updated: 2026-04-22 01:09:19*
