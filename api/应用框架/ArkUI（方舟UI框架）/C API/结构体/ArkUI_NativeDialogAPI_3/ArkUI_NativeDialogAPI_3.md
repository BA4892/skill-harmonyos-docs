# ArkUI_NativeDialogAPI_3

> **分区**: API参考  |  **Slug**: `capi-arkui-nativemodule-arkui-nativedialogapi-3`  |  **DocID**: `6c68d22a7a5a477381de23cf2a64f274`

---

# ArkUI_NativeDialogAPI_3

 ```
typedef struct {...} ArkUI_NativeDialogAPI_3
```
  #### 概述

ArkUI提供的Native侧自定义弹窗接口集合。

 **起始版本：** 19

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **所在头文件：** [native_dialog.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [ArkUI_NativeDialogAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1) nativeDialogAPI1 ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI_NativeDialogAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1)。

 **起始版本：** 19

   [ArkUI_NativeDialogAPI_2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-2) nativeDialogAPI2 ArkUI提供的Native侧自定义弹窗接口集合，范围是[ArkUI_NativeDialogAPI_2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-2)。

 **起始版本：** 19

        #### [h2]成员函数

 名称 描述   [int32_t (*setLevelOrder)(ArkUI_NativeDialogHandle handle, double levelOrder)](#setlevelorder) 设置自定义弹窗显示的顺序。  [int32_t (*registerOnWillAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))](#registeronwillappear) 注册自定义弹窗显示之前的回调函数。  [int32_t (*registerOnDidAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))](#registerondidappear) 注册自定义弹窗显示之后的回调函数。  [int32_t (*registerOnWillDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))](#registeronwilldisappear) 注册自定义弹窗关闭之前的回调函数。  [int32_t (*registerOnDidDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData))](#registerondiddisappear) 注册自定义弹窗关闭之后的回调函数。  [int32_t (*setBorderWidth)(ArkUI_NativeDialogHandle handle, float top, float right, float bottom, float left, ArkUI_LengthMetricUnit unit)](#setborderwidth) 设置自定义弹窗的边框宽度。  [int32_t (*setBorderColor)(ArkUI_NativeDialogHandle handle, uint32_t top, uint32_t right, uint32_t bottom, uint32_t left)](#setbordercolor) 设置自定义弹窗的边框颜色。  [int32_t (*setBorderStyle)(ArkUI_NativeDialogHandle handle, int32_t top, int32_t right, int32_t bottom, int32_t left)](#setborderstyle) 设置自定义弹窗的边框样式。  [int32_t (*setWidth)(ArkUI_NativeDialogHandle handle, float width, ArkUI_LengthMetricUnit unit)](#setwidth) 设置自定义弹窗的背板宽度。  [int32_t (*setHeight)(ArkUI_NativeDialogHandle handle, float height, ArkUI_LengthMetricUnit unit)](#setheight) 设置自定义弹窗的背板高度。  [int32_t (*setShadow)(ArkUI_NativeDialogHandle handle, ArkUI_ShadowStyle shadow)](#setshadow) 设置自定义弹窗的背板阴影。  [int32_t (*setCustomShadow)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* customShadow)](#setcustomshadow) 设置自定义弹窗的背板阴影。  [int32_t (*setBackgroundBlurStyle)(ArkUI_NativeDialogHandle handle, ArkUI_BlurStyle blurStyle)](#setbackgroundblurstyle) 设置自定义弹窗的背板模糊材质。  [int32_t (*setKeyboardAvoidMode)(ArkUI_NativeDialogHandle handle, ArkUI_KeyboardAvoidMode keyboardAvoidMode)](#setkeyboardavoidmode) 设置自定义弹窗避让键盘模式。  [int32_t (*enableHoverMode)(ArkUI_NativeDialogHandle handle, bool enableHoverMode)](#enablehovermode) 设置自定义弹窗是否响应悬停态。  [int32_t (*setHoverModeArea)(ArkUI_NativeDialogHandle handle, ArkUI_HoverModeAreaType hoverModeAreaType)](#sethovermodearea) 设置悬停态下自定义弹窗默认展示区域。  [int32_t (*setFocusable)(ArkUI_NativeDialogHandle handle, bool focusable)](#setfocusable) 设置自定义弹窗是否获取焦点。  [int32_t (*setBackgroundBlurStyleOptions)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundBlurStyleOptions)](#setbackgroundblurstyleoptions) 设置自定义弹窗的背景模糊效果。  [int32_t (*setBackgroundEffect)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundEffect)](#setbackgroundeffect) 设置自定义弹窗的背景效果参数。       #### 成员函数说明

  #### [h2]setLevelOrder()

int32_t (*setLevelOrder)(ArkUI_NativeDialogHandle handle, double levelOrder) **描述：**

 设置自定义弹窗显示的顺序。

   setLevelOrder方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  double levelOrder 自定义弹窗显示的顺序。

 默认值：0，取值范围：[-100000.0, 100000.0]。超出取值范围属性不生效。

      **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]registerOnWillAppear()

int32_t (*registerOnWillAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData)) **描述：**

 注册自定义弹窗显示之前的回调函数。

   registerOnWillAppear方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  void* userData 用户自定义数据。  callback 自定义弹窗显示之前的回调函数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]registerOnDidAppear()

int32_t (*registerOnDidAppear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData)) **描述：**

 注册自定义弹窗显示之后的回调函数。

   registerOnDidAppear方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  void* userData 用户自定义数据。  callback 自定义弹窗显示之后的回调函数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]registerOnWillDisappear()

int32_t (*registerOnWillDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData)) **描述：**

 注册自定义弹窗关闭之前的回调函数。

   registerOnWillDisappear方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  void* userData 用户自定义数据。  callback 自定义弹窗关闭之前的回调函数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]registerOnDidDisappear()

int32_t (*registerOnDidDisappear)(ArkUI_NativeDialogHandle handle, void* userData, void (*callback)(void* userData)) **描述：**

 注册自定义弹窗关闭之后的回调函数。

   registerOnDidDisappear方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  void* userData 用户自定义数据。  callback 自定义弹窗关闭之后的回调函数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBorderWidth()

int32_t (*setBorderWidth)(ArkUI_NativeDialogHandle handle, float top, float right, float bottom, float left, ArkUI_LengthMetricUnit unit) **描述：**

 设置自定义弹窗的边框宽度。

   setBorderWidth方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  float top 上边框的宽度。  float right 右边框的宽度。  float bottom 下边框的宽度。  float left 左边框的宽度。  [ArkUI_LengthMetricUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_lengthmetricunit) unit 指定宽度单位，默认为vp。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBorderColor()

int32_t (*setBorderColor)(ArkUI_NativeDialogHandle handle, uint32_t top, uint32_t right, uint32_t bottom, uint32_t left) **描述：**

 设置自定义弹窗的边框颜色。

   setBorderColor方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  uint32_t top 上边框的颜色。  uint32_t right 右边框的颜色。  uint32_t bottom 下边框的颜色。  uint32_t left 左边框的颜色。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBorderStyle()

int32_t (*setBorderStyle)(ArkUI_NativeDialogHandle handle, int32_t top, int32_t right, int32_t bottom, int32_t left) **描述：**

 设置自定义弹窗的边框样式。

   setBorderStyle方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  int32_t top 上边框的样式。参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。  int32_t right 右边框的样式。参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。  int32_t bottom 下边框的样式。参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。  int32_t left 左边框的样式。参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setWidth()

int32_t (*setWidth)(ArkUI_NativeDialogHandle handle, float width, ArkUI_LengthMetricUnit unit) **描述：**

 设置自定义弹窗的背板宽度。

   setWidth方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  float width 背板宽度。  [ArkUI_LengthMetricUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_lengthmetricunit) unit 指定宽度的单位，默认为vp。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setHeight()

int32_t (*setHeight)(ArkUI_NativeDialogHandle handle, float height, ArkUI_LengthMetricUnit unit) **描述：**

 设置自定义弹窗的背板高度。

   setHeight方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  float height 背板高度。  [ArkUI_LengthMetricUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_lengthmetricunit) unit 指定高度的单位，默认为vp。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setShadow()

int32_t (*setShadow)(ArkUI_NativeDialogHandle handle, ArkUI_ShadowStyle shadow) **描述：**

 设置自定义弹窗的背板阴影。

   setShadow方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_ShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_shadowstyle) shadow 背板阴影样式，枚举值。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setCustomShadow()

int32_t (*setCustomShadow)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* customShadow) **描述：**

 设置自定义弹窗的背板阴影。

   setCustomShadow方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  const [ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)* customShadow 自定义阴影参数，格式与[ArkUI_NodeAttributeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeattributetype)中的NODE_SHADOW属性一致。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBackgroundBlurStyle()

int32_t (*setBackgroundBlurStyle)(ArkUI_NativeDialogHandle handle, ArkUI_BlurStyle blurStyle) **描述：**

 设置自定义弹窗的背板模糊材质。

   setBackgroundBlurStyle方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_BlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_blurstyle) blurStyle 背板模糊材质，枚举值。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setKeyboardAvoidMode()

int32_t (*setKeyboardAvoidMode)(ArkUI_NativeDialogHandle handle, ArkUI_KeyboardAvoidMode keyboardAvoidMode) **描述：**

 设置自定义弹窗避让键盘模式。

   setKeyboardAvoidMode方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_KeyboardAvoidMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_keyboardavoidmode) keyboardAvoidMode 避让键盘模式，枚举值。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]enableHoverMode()

int32_t (*enableHoverMode)(ArkUI_NativeDialogHandle handle, bool enableHoverMode) **描述：**

 设置自定义弹窗是否响应悬停态。

   enableHoverMode方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  bool enableHoverMode 是否响应悬停态，默认false。true表示响应悬停态，false表示不响应悬停态。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setHoverModeArea()

int32_t (*setHoverModeArea)(ArkUI_NativeDialogHandle handle, ArkUI_HoverModeAreaType hoverModeAreaType) **描述：**

 设置悬停态下自定义弹窗默认展示区域。

   setHoverModeArea方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  [ArkUI_HoverModeAreaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_hovermodeareatype) hoverModeAreaType 悬停态区域，枚举值。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setFocusable()

int32_t (*setFocusable)(ArkUI_NativeDialogHandle handle, bool focusable) **描述：**

 设置自定义弹窗是否获取焦点。

   setFocusable方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  bool focusable 自定义弹窗是否获取焦点。true表示自动获取焦点，false表示不自动获取焦点。默认值：true     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBackgroundBlurStyleOptions()

int32_t (*setBackgroundBlurStyleOptions)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundBlurStyleOptions) **描述：**

 设置自定义弹窗的背景模糊效果。

   setBackgroundBlurStyleOptions方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  const [ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)* backgroundBlurStyleOptions 背景模糊效果。参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式：

  .value[0].i32：表示深浅色模式，取[ArkUI_ColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_colormode)枚举值。

  .value[1]?.i32：表示取色模式，取[ArkUI_AdaptiveColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_adaptivecolor)枚举值。

  .value[2]?.f32：表示模糊效果程度，取[0.0,1.0]范围内的值，超出有效值区间时取边界值。

  .value[3]?.u32：表示灰阶模糊参数，对黑色的提亮程度，有效值范围为[0,127]，超出有效值范围，取0。

  .value[4]?.u32：表示灰阶模糊参数，对白色的压暗程度，有效值范围为[0,127]，超出有效值范围，取0。

  .value[5]?.i32：表示模糊激活策略，取[ArkUI_BlurStyleActivePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_blurstyleactivepolicy)枚举值。

  .value[6]?.u32：表示窗口失焦后，窗口内控件模糊效果会被移除，此时控件背板的颜色，0xargb类型。

      **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]setBackgroundEffect()

int32_t (*setBackgroundEffect)(ArkUI_NativeDialogHandle handle, const ArkUI_AttributeItem* backgroundEffect) **描述：**

 设置自定义弹窗的背景效果参数。

   setBackgroundEffect方法需要在调用[show](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialogapi-1#show)之前调用。

   **起始版本：** 19

 **参数：**

  参数项 描述   [ArkUI_NativeDialogHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) handle 指向自定义弹窗控制器的指针。  const [ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)* backgroundEffect 背景效果参数。参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式：

  .value[0].f32：表示模糊半径，单位为vp。

  .value[1]?.f32：表示饱和度。

  .value[2]?.f32：表示亮度。

  .value[3]?.u32：表示颜色，0xargb类型。

  .value[4]?.i32：表示取色模式，取[ArkUI_AdaptiveColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_adaptivecolor)枚举值。

  .value[5]?.u32：表示灰阶模糊参数，对黑色的提亮程度，有效值范围为[0,127]，超出有效值范围，取0。

  .value[6]?.u32：表示灰阶模糊参数，对白色的压暗程度，有效值范围为[0,127]，超出有效值范围，取0。

  .value[7]?.i32：表示模糊激活策略，取[ArkUI_BlurStyleActivePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_blurstyleactivepolicy)枚举值。

  .value[8]?.u32：表示窗口失焦后，窗口内控件模糊效果会被移除，此时控件背板的颜色，0xargb类型。

      **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

---
*Updated: 2026-04-22 06:45:08*
