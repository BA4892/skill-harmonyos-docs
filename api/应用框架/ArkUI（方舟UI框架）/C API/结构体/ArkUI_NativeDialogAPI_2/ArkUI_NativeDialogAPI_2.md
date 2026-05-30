# ArkUI_NativeDialogAPI_2

> **分区**: API参考  |  **Slug**: `capi-arkui-nativemodule-arkui-nativedialogapi-2`  |  **DocID**: `0ad73646e24147759c9ab46c91148eb2`

---

# ArkUI_NativeDialogAPI_2

 ```
typedef struct {...} ArkUI_NativeDialogAPI_2
```
  #### 概述

ArkUI提供的Native侧自定义弹窗接口集合。

 **起始版本：** 15

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **所在头文件：** [native_dialog.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [ArkUI_NativeDialogAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1) nativeDialogAPI1 ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI_NativeDialogAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1)。

 **起始版本：** 15

        #### [h2]成员函数

 名称 描述   [int32_t (*setKeyboardAvoidDistance)(ArkUI_NativeDialogHandle handle, float distance, ArkUI_LengthMetricUnit unit)](#setkeyboardavoiddistance) 弹窗避让键盘后，和键盘之间距离。  [int32_t (*setLevelMode)(ArkUI_NativeDialogHandle handle, ArkUI_LevelMode levelMode)](#setlevelmode) 设置弹窗的显示层级。  [int32_t (*setLevelUniqueId)(ArkUI_NativeDialogHandle handle, int32_t uniqueId)](#setleveluniqueid) 设置弹窗显示层级页面下的节点id。  [int32_t (*setImmersiveMode)(ArkUI_NativeDialogHandle handle, ArkUI_ImmersiveMode immersiveMode)](#setimmersivemode) 设置嵌入式弹窗蒙层的显示区域。       #### 成员函数说明

  #### [h2]setKeyboardAvoidDistance()

int32_t (*setKeyboardAvoidDistance)(ArkUI_NativeDialogHandle handle, float distance, ArkUI_LengthMetricUnit unit) **描述：**

 弹窗避让键盘后，和键盘之间距离。

   setKeyboardAvoidDistance方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

   **起始版本：** 15

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  float distance 避让键盘的距离，单位为vp。  [ArkUI_LengthMetricUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_lengthmetricunit) unit 避让距离的单位，参数类型[ArkUI_LengthMetricUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_lengthmetricunit)。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 接口初始化错误。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setLevelMode()

int32_t (*setLevelMode)(ArkUI_NativeDialogHandle handle, ArkUI_LevelMode levelMode) **描述：**

 设置弹窗的显示层级。

   setLevelMode方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

   **起始版本：** 15

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_LevelMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h#arkui_levelmode) levelMode 显示层级的枚举值， 类型为[ArkUI_LevelMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h#arkui_levelmode)。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setLevelUniqueId()

int32_t (*setLevelUniqueId)(ArkUI_NativeDialogHandle handle, int32_t uniqueId) **描述：**

 设置弹窗显示层级页面下的节点id。

   setLevelUniqueId方法需要在调用[setLevelMode](#setlevelmode)方法之前调用。

   **起始版本：** 15

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  int32_t uniqueId 指定节点id，会查找该节点所在页面，并将弹窗显示在该页面下。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setImmersiveMode()

int32_t (*setImmersiveMode)(ArkUI_NativeDialogHandle handle, ArkUI_ImmersiveMode immersiveMode) **描述：**

 设置嵌入式弹窗蒙层的显示区域。

   setImmersiveMode方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)方法之前调用。

   **起始版本：** 15

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_ImmersiveMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h#arkui_immersivemode) immersiveMode 显示区域类型的枚举值， 类型为[ArkUI_ImmersiveMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h#arkui_immersivemode)。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

---
*Updated: 2026-04-22 06:45:06*
