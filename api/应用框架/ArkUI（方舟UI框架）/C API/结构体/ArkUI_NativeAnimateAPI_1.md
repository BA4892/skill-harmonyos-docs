# ArkUI_NativeAnimateAPI_1

> **分区**: API参考  |  **Slug**: `capi-arkui-nativemodule-arkui-nativeanimateapi-1`  |  **DocID**: `506078836fdc42f19e768d4b5838cf72`

---

# ArkUI_NativeAnimateAPI_1

 ```
typedef struct {...} ArkUI_NativeAnimateAPI_1
```
  #### 概述

ArkUI提供的Native侧动画接口集合。

 **起始版本：** 12

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **所在头文件：** [native_animate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h)

   #### 汇总

  #### [h2]成员函数

 名称 描述   [int32_t (*animateTo)(ArkUI_ContextHandle context, ArkUI_AnimateOption* option, ArkUI_ContextCallback* update,ArkUI_AnimateCompleteCallback* complete)](#animateto) 显式动画接口。  [int32_t (*keyframeAnimateTo)(ArkUI_ContextHandle context, ArkUI_KeyframeAnimateOption* option)](#keyframeanimateto) 关键帧动画接口。  [ArkUI_AnimatorHandle (*createAnimator)(ArkUI_ContextHandle context, ArkUI_AnimatorOption* option)](#createanimator) 创建animator动画对象。  [void (*disposeAnimator)(ArkUI_AnimatorHandle animatorHandle)](#disposeanimator) 销毁animator动画对象。       #### 成员函数说明

  #### [h2]animateTo()

int32_t (*animateTo)(ArkUI_ContextHandle context, ArkUI_AnimateOption* option, ArkUI_ContextCallback* update,ArkUI_AnimateCompleteCallback* complete) **描述：**

 显式动画接口。

 **参数：**

  参数项 描述   [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h) context UIContext实例。  [ArkUI_AnimateOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-animateoption)* option 设置动画效果相关参数。  [ArkUI_ContextCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-contextcallback)* update 指定动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。

 **说明**：在闭包函数中要设置的组件属性，必须在其之前设置过。

   [ArkUI_AnimateCompleteCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/i-arkui-nativemodule-arkui-animatecompletecallback)* complete 设置动画播放完成回调参数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]keyframeAnimateTo()

int32_t (*keyframeAnimateTo)(ArkUI_ContextHandle context, ArkUI_KeyframeAnimateOption* option) **描述：**

 关键帧动画接口。

 **参数：**

  参数项 描述   [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h) context UIContext实例。  [ArkUI_KeyframeAnimateOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/api-arkui-nativemodule-arkui-keyframeanimateoption)* option 关键帧动画参数。     **返回：**

  类型 说明   int32_t 错误码。

  [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。

  [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。

        #### [h2]createAnimator()

ArkUI_AnimatorHandle (*createAnimator)(ArkUI_ContextHandle context, ArkUI_AnimatorOption* option) **描述：**

 创建animator动画对象。

 **参数：**

  参数项 描述   [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h) context UIContext实例。  [ArkUI_AnimatorOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-animatoroption)* option animator动画参数。     **返回：**

  类型 说明   [ArkUI_AnimatorHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-animator8h) animator动画对象指针。函数参数异常时返回NULL。       #### [h2]disposeAnimator()

void (*disposeAnimator)(ArkUI_AnimatorHandle animatorHandle) **描述：**

 销毁animator动画对象。

 **参数：**

  参数项 描述   [ArkUI_AnimatorHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-animator8h) animatorHandle animator动画对象。

---
*Updated: 2026-04-22 06:44:46*
