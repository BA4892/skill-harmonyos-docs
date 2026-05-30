# 应用配置文件概述（Stage模型）

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `application-configuration-file-overview-stage`  |  **DocID**: `153c76436eaa4113a4442e16071ac569`  |  **NodeID**: `000201775795466123509d745b7d57f7`

---

# 应用配置文件概述（Stage模型）

 每个应用项目的代码目录下必须包含应用配置文件，这些配置文件会向编译工具、操作系统和应用市场提供应用的基本信息。

 在基于Stage模型开发的应用项目代码下，都存在一个app.json5配置文件、以及一个或多个module.json5配置文件。

   编译后，单个模块的编译产物中，app.json5和module.json5的内容会合并到一个module.json文件中，详情参考[编译态包结构](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-structure-stage#编译态包结构)的编译打包后的视图。

   [app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)包含以下内容：

 
应用的全局配置信息，包含应用的Bundle名称、开发厂商、版本号等基本信息。

  特定设备类型的配置信息。

  
 [module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)包含以下内容：

 
[Module](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-overview#module类型)的基本配置信息，包含Module名称、类型、描述、支持的设备类型等基本信息。

  应用组件信息，包含[UIAbility组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#abilities标签)和[ExtensionAbility组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#extensionabilities标签)的描述信息。

  应用运行过程中需要的权限信息。

---
*Updated: 2026-04-20 01:44:29*
