# HAP转HAR指导

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `hap-to-har`  |  **DocID**: `77c4c6c6e5b3492ea9f616b19a74c781`  |  **NodeID**: `000201775795466123531d0a40a126c9`

---

# HAP转HAR指导

       HAP不支持导出接口或ArkUI组件给其他模块或应用使用，如果需要导出模块中的接口或ArkUI组件，并将模块作为二方库、三方库共享给其他模块或应用，可以使用HAR。本文介绍如何通过配置项的变更将HAP工程变成HAR工程。

                     部分组件和模块在HAP、HSP、HAR中集成使用时存在差异，例如[加载HAR中Worker线程文件相比HSP存在单独的使用约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction#文件路径注意事项)，因此按照如下步骤完成HAP转HAR后，请关注对应组件和模块介绍并进行适配。

                       #### HAP转HAR的操作步骤

     
             修改HAP模块下的[module.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)文件，具体操作如下：

       
        - 将type标签值改为har，删除mainElement、deliveryWithInstall、installationFree和pages标签。
        - 由于API version 17及之前版本HAR不支持创建任何ExtensionAbility，从API version 18开始HAR仅支持创建[两种ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-new-ability#section18891639459)，因此在API version 18及之后版本但未配置为支持的两种ExtensionAbility、或在API version 17及之前版本，需要删除extensionAbilities标签，并将关联的ExtensionAbility组件删除或迁移到其他HAP模块中。
        - 由于HAR模块在API version 13及以下不支持UIAbility，因此在API version 13及以前的版本，需要删除abilities标签，并将关联的UIAbility组件删除或迁移到其他HAP模块中。
       
       ```
{
  "module": {
    "name": "har",
    "type": "har",
    "deviceTypes": [
      "tablet",
      "2in1"
    ]
  }
}
```
             在HAP模块的src\main\resource\base\profile文件夹下，删除main_pages.json文件。

             修改HAP模块的hvigorfile.ts文件，将内容替换为以下内容：

       ```
import { harTasks } from '@ohos/hvigor-ohos-plugin';

export default {
  system: harTasks,  // 修改成HAR编译任务
  plugins:[]
}
```
             在HAP模块的根目录下创建名为Index.ets的文件，并在模块的oh-package.json5文件中的main标签配置该文件。Index.ets文件用于导出ArkUI组件或接口，详细导出方法参见[HAR-开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package#开发)。

       ```
{
  // ...
  "main": "Index.ets",
  // ...
}
```
             修改项目级的配置文件[build-profile.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app)，在 modules 标签下找到HAP的配置信息，并删除HAP配置下的 targets。

---
*Updated: 2026-04-20 01:44:30*
