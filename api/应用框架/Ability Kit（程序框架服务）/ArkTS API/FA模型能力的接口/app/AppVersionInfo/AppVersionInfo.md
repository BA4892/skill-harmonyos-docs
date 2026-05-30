# AppVersionInfo

> **分区**: API参考  |  **Slug**: `js-apis-inner-app-appversioninfo`  |  **DocID**: `c3b20a3aae05443590f28d489ed55400`

---

# AppVersionInfo

 应用版本信息，可以通过[getAppVersionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-app-context#contextgetappversioninfo7)获取当前应用的版本信息。

   本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

  本模块接口仅可在FA模型下使用。

    #### 导入模块

```
import featureAbility from '@ohos.ability.featureAbility';
```
   #### 属性

**元服务API**：从API version 11开始，该接口支持在元服务中使用。

 **系统能力**：SystemCapability.Ability.AbilityRuntime.Core

  名称 类型 只读 可选 说明   appName string 是 否 应用名称。  versionCode number 是 否 应用版本编码。  versionName string 是 否 应用版本名称。

---
*Updated: 2026-04-22 06:45:21*
