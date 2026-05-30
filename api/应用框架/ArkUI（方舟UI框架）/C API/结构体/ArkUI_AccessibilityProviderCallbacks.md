# ArkUI_AccessibilityProviderCallbacks

> **分区**: API参考  |  **Slug**: `accessibility-arkui-accessibilityprovidercallbacks`  |  **DocID**: `e879d18167544fd8b5f4c409e87429b1`

---

# ArkUI_AccessibilityProviderCallbacks

 ```
typedef struct {...} ArkUI_AccessibilityProviderCallbacks
```
  #### 概述

第三方操作[provider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-arkui-accessibility-arkui-accessibilityprovider)回调函数结构定义，需要第三方平台实现的相关函数，通过[OH_ArkUI_AccessibilityProviderRegisterCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallback)注册到系统侧。

 **起始版本：** 13

 **相关模块：** [ArkUI_Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility)

 **所在头文件：** [native_interface_accessibility.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h)

   #### 汇总

  #### [h2]成员函数

 名称 描述   [int32_t (*findAccessibilityNodeInfosById)(int64_t elementId, ArkUI_AccessibilitySearchMode mode, int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList)](#findaccessibilitynodeinfosbyid) 查询指定节点的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。  [int32_t (*findAccessibilityNodeInfosByText)(int64_t elementId, const char* text, int32_t requestId,ArkUI_AccessibilityElementInfoList* elementList)](#findaccessibilitynodeinfosbytext) 基于指定的节点，查询满足指定text内容的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。  [int32_t (*findFocusedAccessibilityNode)(int64_t elementId, ArkUI_AccessibilityFocusType focusType, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)](#findfocusedaccessibilitynode) 从指定节点出发，根据焦点类型查找当前已获得焦点的节点，并将该节点元素信息返回。由接入方平台实现的回调函数，注册给系统侧调用。  [int32_t (*findNextFocusAccessibilityNode)(int64_t elementId, ArkUI_AccessibilityFocusMoveDirection direction, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)](#findnextfocusaccessibilitynode) 根据参考节点查询可以聚焦的节点，根据模式和方向查询下一个可以聚焦的节点。  [int32_t (*executeAccessibilityAction)(int64_t elementId, ArkUI_Accessibility_ActionType action,ArkUI_AccessibilityActionArguments *actionArguments, int32_t requestId)](#executeaccessibilityaction) 在指定节点上执行Action操作。  [int32_t (*clearFocusedFocusAccessibilityNode)()](#clearfocusedfocusaccessibilitynode) 清除当前焦点节点的焦点状态。  [int32_t (*getAccessibilityNodeCursorPosition)(int64_t elementId, int32_t requestId, int32_t* index)](#getaccessibilitynodecursorposition) 查询指定节点的当前光标位置。       #### 成员函数说明

  #### [h2]findAccessibilityNodeInfosById()

int32_t (*findAccessibilityNodeInfosById)(int64_t elementId, ArkUI_AccessibilitySearchMode mode,int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList) **描述：**

 查询指定节点的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  [ArkUI_AccessibilitySearchMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_accessibilitysearchmode) mode 表示无障碍搜索模式。  int32_t requestId 表示请求ID。  [ArkUI_AccessibilityElementInfoList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-accessibility-arkui-accessibilityelementinfolist)* elementList 表示无障碍元素信息列表。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]findAccessibilityNodeInfosByText()

int32_t (*findAccessibilityNodeInfosByText)(int64_t elementId, const char* text, int32_t requestId,ArkUI_AccessibilityElementInfoList* elementList) **描述：**

 基于指定的节点，查询满足指定text内容的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  const char* text 表示无障碍文本。  int32_t requestId 表示请求ID。  [ArkUI_AccessibilityElementInfoList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-accessibility-arkui-accessibilityelementinfolist)* elementList 表示无障碍元素信息列表。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]findFocusedAccessibilityNode()

int32_t (*findFocusedAccessibilityNode)(int64_t elementId, ArkUI_AccessibilityFocusType focusType, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo) **描述：**

 从指定节点出发，根据焦点类型查找当前已获得焦点的节点，并将该节点元素信息返回。由接入方平台实现的回调函数，注册给系统侧调用。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  [ArkUI_AccessibilityFocusType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_accessibilityfocustype) focusType 表示焦点的类型。  int32_t requestId 表示请求ID。  [ArkUI_AccessibilityElementInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkui-accessibility-arkui-accessibilityelementinfo)* elementInfo 表示无障碍元素信息。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]findNextFocusAccessibilityNode()

int32_t (*findNextFocusAccessibilityNode)(int64_t elementId, ArkUI_AccessibilityFocusMoveDirection direction, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo) **描述：**

 根据参考节点的模式和查找方向查询下一个可以聚焦的节点。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  [ArkUI_AccessibilityFocusMoveDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_accessibilityfocusmovedirection) direction 表示查找方向。  int32_t requestId 表示请求ID。  [ArkUI_AccessibilityElementInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkui-accessibility-arkui-accessibilityelementinfo)* elementInfo 查询到的无障碍元素信息。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]executeAccessibilityAction()

int32_t (*executeAccessibilityAction)(int64_t elementId, ArkUI_Accessibility_ActionType action,ArkUI_AccessibilityActionArguments *actionArguments, int32_t requestId) **描述：**

 在指定的无障碍节点上执行无障碍Action操作。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  [ArkUI_Accessibility_ActionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_accessibility_actiontype) action 表示要执行的动作。  [ArkUI_AccessibilityActionArguments](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-accessibility-arkui-accessibilityactionarguments) *actionArguments 表示动作的参数。  int32_t requestId 表示请求的ID。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]clearFocusedFocusAccessibilityNode()

int32_t (*clearFocusedFocusAccessibilityNode)() **描述：**

 清除当前焦点节点的焦点状态。

 **起始版本：** 13

 **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

        #### [h2]getAccessibilityNodeCursorPosition()

int32_t (*getAccessibilityNodeCursorPosition)(int64_t elementId, int32_t requestId, int32_t* index) **描述：**

 查询指定节点的当前光标位置。

 **起始版本：** 13

 **参数：**

  参数项 描述   int64_t elementId 无障碍元素的唯一编号。  int32_t requestId 表示请求的ID。  int32_t* index 表示光标位置的索引。     **返回：**

  类型 说明   int32_t [ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示操作成功。

 [ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode)，表示参数错误。

---
*Updated: 2026-04-22 06:45:18*
