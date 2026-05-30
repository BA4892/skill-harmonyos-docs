# inputmethod_attach_options_capi.h

> **分区**: API参考  |  **Slug**: `capi-inputmethod-attach-options-capi-h`  |  **DocID**: `b1d959222d3a4183baeab492a4ae5e98`

---

# inputmethod_attach_options_capi.h

  #### 概述

提供输入法绑定选项对象的创建、销毁与读写方法。

 **引用文件：** <inputmethod/inputmethod_attach_options_capi.h>

 **库：** libohinputmethod.so

 **系统能力：** SystemCapability.MiscServices.InputMethodFramework

 **起始版本：** 12

 **相关模块：** [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) InputMethod_AttachOptions 输入法绑定选项。绑定输入法时携带的选项。       #### [h2]函数

 名称 描述   [InputMethod_AttachOptions *OH_AttachOptions_Create(bool showKeyboard)](#oh_attachoptions_create) 创建一个新的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。  [InputMethod_AttachOptions *OH_AttachOptions_CreateWithRequestKeyboardReason(bool showKeyboard, InputMethod_RequestKeyboardReason requestKeyboardReason)](#oh_attachoptions_createwithrequestkeyboardreason) 创建一个新的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。  [void OH_AttachOptions_Destroy(InputMethod_AttachOptions *options)](#oh_attachoptions_destroy) 销毁一个[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。  [InputMethod_ErrorCode OH_AttachOptions_IsShowKeyboard(InputMethod_AttachOptions *options, bool *showKeyboard)](#oh_attachoptions_isshowkeyboard) 从[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)中获取是否显示键盘的值。  [InputMethod_ErrorCode OH_AttachOptions_GetRequestKeyboardReason(InputMethod_AttachOptions *options, int *requestKeyboardReason)](#oh_attachoptions_getrequestkeyboardreason) 从[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)中获取触发输入法拉起的场景原因。       #### 函数说明

  #### [h2]OH_AttachOptions_Create()

InputMethod_AttachOptions *OH_AttachOptions_Create(bool showKeyboard) **描述**

 创建一个新的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   bool showKeyboard 表示绑定时是否显示键盘。true - 表示绑定完成时需要显示键盘。false - 表示绑定完成时不需要显示键盘。     **返回：**

  类型 说明   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) * 如果创建成功，返回一个指向新创建的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例的指针。

  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。

        #### [h2]OH_AttachOptions_CreateWithRequestKeyboardReason()

InputMethod_AttachOptions *OH_AttachOptions_CreateWithRequestKeyboardReason(bool showKeyboard, InputMethod_RequestKeyboardReason requestKeyboardReason) **描述**

 创建一个新的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。

 **起始版本：** 15

 **参数：**

  参数项 描述   bool showKeyboard 表示绑定时是否显示键盘。true - 表示绑定完成时需要显示键盘。false - 表示绑定完成时不需要显示键盘。  [InputMethod_RequestKeyboardReason](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_requestkeyboardreason) requestKeyboardReason 表示请求键盘输入的原因。     **返回：**

  类型 说明   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) * 如果创建成功，返回一个指向新创建的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例的指针。

  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。

        #### [h2]OH_AttachOptions_Destroy()

void OH_AttachOptions_Destroy(InputMethod_AttachOptions *options) **描述**

 销毁一个[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) *options 表示即将被销毁的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。       #### [h2]OH_AttachOptions_IsShowKeyboard()

InputMethod_ErrorCode OH_AttachOptions_IsShowKeyboard(InputMethod_AttachOptions *options, bool *showKeyboard) **描述**

 从[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)中获取是否显示键盘的值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) *options 表示被读取值的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。  bool *showKeyboard 表示绑定时是否显示键盘。true - 表示绑定完成时需要显示键盘。false - 表示绑定完成时不需要显示键盘。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_AttachOptions_GetRequestKeyboardReason()

InputMethod_ErrorCode OH_AttachOptions_GetRequestKeyboardReason(InputMethod_AttachOptions *options, int *requestKeyboardReason) **描述**

 从[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)中获取请求键盘的原因。

 **起始版本：** 15

 **参数：**

  参数项 描述   [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) *options 表示被读取值的[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例。  int *requestKeyboardReason 表示请求键盘输入的原因。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

---
*Updated: 2026-04-22 06:42:59*
