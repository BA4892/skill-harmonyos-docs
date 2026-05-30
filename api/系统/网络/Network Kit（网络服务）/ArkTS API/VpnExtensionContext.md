# VpnExtensionContext

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `js-apis-inner-application-vpnextensioncontext`

**DocID**: `cc1e7a1ab8484a2d99537ce7ae5c8728`

**NodeID**: `000201775796341684681d2c24fe7e31`

---

VpnExtensionContext

VpnExtensionContext是VpnExtensionAbility的上下文环境，继承自
ExtensionContext
。

VpnExtensionContext可直接作为VpnExtension的上下文环境，提供允许访问特定于VpnExtensionAbility的资源的能力。

本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

导入模块

import { VpnExtensionAbility } from '@kit.NetworkKit';

使用说明

通过VpnExtensionAbility子类实例来获取。

import { VpnExtensionAbility, vpnExtension } from '@kit.NetworkKit';
import { Want } from '@kit.AbilityKit';

export default class MyVpnExtAbility extends VpnExtensionAbility {
 private vpnServerIp: string = 'xxx.xxx.x.x';
 private tunIp: string = 'x.x.x.x';
 private blockedAppName: string = 'xxxx';

 onCreate(want: Want) {
 let VpnConnection: vpnExtension.VpnConnection = vpnExtension.createVpnConnection(this.context);
 console.info("vpn createVpnConnection: " + JSON.stringify(VpnConnection));
 }
}

VpnExtensionAbility

三方VPN拓展能力。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

名称

类型

只读

可选

说明

context

VpnExtensionContext

否

否

指定context。

[h2]onCreate

onCreate(want: Want): void

拓展VPN启动初始化的时候进行回调。

建议配对调用
onDestroy
监听拓展VPN的销毁，及时执行资源清理等操作。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

参数：

参数名

类型

必填

说明

want

Want

是

指示要启动的信息。

[h2]onDestroy

onDestroy(): void

拓展VPN销毁之前进行回调。

系统能力
：SystemCapability.Ability.AbilityRuntime.Core

模型约束
：此接口仅可在Stage模型下使用。

---
*2026-04-22T15:55:02.898Z*