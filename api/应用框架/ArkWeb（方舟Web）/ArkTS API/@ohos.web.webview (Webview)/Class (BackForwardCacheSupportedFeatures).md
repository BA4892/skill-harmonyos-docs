# Class (BackForwardCacheSupportedFeatures)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `kts-apis-webview-backforwardcachesupportedfeatures`

**DocID**: `482eabfb173a48089df5bc61ec38bbc9`

**NodeID**: `0002017757962161978229ded31167f5`

---

Class (BackForwardCacheSupportedFeatures)

选择性允许使用以下特性的页面进入前进后退缓存。完整示例代码参考
enableBackForwardCache
。

本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

本Class首批接口从API version 12开始支持。

示例效果请以真机运行为准。

属性

系统能力：
 SystemCapability.Web.Webview.Core

名称

类型

只读

可选

说明

nativeEmbed
12+

boolean

否

否

是否允许使用同层渲染的页面进入前进后退缓存。

如果设置为允许，需要维护为同层渲染元素创建的系统控件的生命周期，避免造成泄漏。

true：允许使用同层渲染的页面进入前进后退缓存，false：不允许使用同层渲染的页面进入前进后退缓存。

默认值：false。

mediaTakeOver
12+

boolean

否

否

是否允许使用视频托管的页面进入前进后退缓存。

如果设置为允许，需要维护为视频元素创建的系统控件的生命周期，避免造成泄漏。

true：允许使用视频托管的页面进入前进后退缓存，false：不允许使用视频托管的页面进入前进后退缓存。

默认值：false。

constructor
12+

constructor()

BackForwardCacheSupportedFeatures的构造函数。

系统能力：
 SystemCapability.Web.Webview.Core

---
*2026-04-22T15:55:02.362Z*