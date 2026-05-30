# @ohos.net.vpn (VPN管理)

> **分区**: API参考  |  **Slug**: `js-apis-net-vpn`  |  **DocID**: `30781dcf33794487aaabb608b42d6c53`

---

# @ohos.net.vpn (VPN管理)

       本模块是操作系统提供的内置VPN功能，允许用户通过系统的网络设置进行VPN连接，通常提供的功能较少，而且有比较严格的限制。

                     本模块首批接口从 API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

                       #### 导入模块

     ```
import { vpn } from '@kit.NetworkKit';
```
                  #### LinkAddress

     type LinkAddress = connection.LinkAddress

     获取网络链接信息。

     **系统能力**：SystemCapability.Communication.NetManager.Core

                                   类型         说明                                       [connection.LinkAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#linkaddress)         网络链路信息。                                            #### RouteInfo

     type RouteInfo = connection.RouteInfo

     获取网络路由信息。

     **系统能力**：SystemCapability.Communication.NetManager.Core

                                   类型         说明                                       [connection.RouteInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#routeinfo)         网络路由信息。                                            #### AbilityContext

     type AbilityContext = _AbilityContext

     **系统能力**：SystemCapability.Ability.AbilityRuntime.Core

                                   类型         说明                                       [_AbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)         需要保存状态的UIAbility所对应的context，继承自[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)，提供UIAbility的相关配置信息以及操作UIAbility和ServiceExtensionAbility的方法。

---
*Updated: 2026-04-22 06:47:45*
