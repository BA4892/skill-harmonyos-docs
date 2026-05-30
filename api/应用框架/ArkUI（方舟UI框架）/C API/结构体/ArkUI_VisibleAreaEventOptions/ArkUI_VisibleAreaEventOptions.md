# ArkUI_VisibleAreaEventOptions

> **分区**: API参考  |  **Slug**: `i-arkui-nativemodule-arkui-visibleareaeventoptions`  |  **DocID**: `94bfe110ca2843b98def60d9435ab23f`

---

# ArkUI_VisibleAreaEventOptions

 ```
typedef struct ArkUI_VisibleAreaEventOptions ArkUI_VisibleAreaEventOptions
```
  #### 概述

可见区域变化监听的参数。

 开发者在使用该类型时，首先需要调用[OH_ArkUI_VisibleAreaEventOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_create)创建一个ArkUI_VisibleAreaEventOptions参数对象。然后可通过如下接口配置监听行为：

 使用[OH_ArkUI_VisibleAreaEventOptions_SetRatios](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_setratios)设置阈值数组，定义触发可见区域变化的阈值条件。

 使用[OH_ArkUI_VisibleAreaEventOptions_SetExpectedUpdateInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_setexpectedupdateinterval)设置预期更新间隔。

 使用[OH_ArkUI_VisibleAreaEventOptions_SetMeasureFromViewport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_setmeasurefromviewport)设置可见区域的计算模式。

 如需获取已设置的参数值，可使用：

 [OH_ArkUI_VisibleAreaEventOptions_GetRatios](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_getratios)获取阈值数组。

 [OH_ArkUI_VisibleAreaEventOptions_GetExpectedUpdateInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_getexpectedupdateinterval)获取预期更新间隔。

 [OH_ArkUI_VisibleAreaEventOptions_GetMeasureFromViewport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_getmeasurefromviewport)获取可见区域计算模式。

 使用完毕后，应调用[OH_ArkUI_VisibleAreaEventOptions_Dispose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_visibleareaeventoptions_dispose)释放资源。

 **起始版本：** 17

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **所在头文件：** [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

---
*Updated: 2026-04-22 06:45:19*
