# inputmethod_private_command_capi.h

> **分区**: API参考  |  **Slug**: `capi-inputmethod-private-command-capi-h`  |  **DocID**: `5e0ad2b24e10410884f389d824de83ef`

---

# inputmethod_private_command_capi.h

  #### 概述

提供私有数据对象的创建、销毁与读写方法。

 **引用文件：** <inputmethod/inputmethod_private_command_capi.h>

 **库：** libohinputmethod.so

 **系统能力：** SystemCapability.MiscServices.InputMethodFramework

 **起始版本：** 12

 **相关模块：** [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) InputMethod_PrivateCommand 表示私有数据的结构体类型。输入框和输入法应用之间交互的私有数据。       #### [h2]函数

 名称 描述   [InputMethod_PrivateCommand *OH_PrivateCommand_Create(char key[], size_t keyLength)](#oh_privatecommand_create) 创建一个新的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例。  [void OH_PrivateCommand_Destroy(InputMethod_PrivateCommand *command)](#oh_privatecommand_destroy) 销毁一个[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例。  [InputMethod_ErrorCode OH_PrivateCommand_SetKey(InputMethod_PrivateCommand *command, char key[], size_t keyLength)](#oh_privatecommand_setkey) 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的key值。  [InputMethod_ErrorCode OH_PrivateCommand_SetBoolValue(InputMethod_PrivateCommand *command, bool value)](#oh_privatecommand_setboolvalue) 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的布尔类型value值。  [InputMethod_ErrorCode OH_PrivateCommand_SetIntValue(InputMethod_PrivateCommand *command, int32_t value)](#oh_privatecommand_setintvalue) 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的整数类型value值。  [InputMethod_ErrorCode OH_PrivateCommand_SetStrValue(InputMethod_PrivateCommand *command, char value[], size_t valueLength)](#oh_privatecommand_setstrvalue) 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的字符串类型value值。  [InputMethod_ErrorCode OH_PrivateCommand_GetKey(InputMethod_PrivateCommand *command, const char **key, size_t *keyLength)](#oh_privatecommand_getkey) 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取key值。  [InputMethod_ErrorCode OH_PrivateCommand_GetValueType(InputMethod_PrivateCommand *command, InputMethod_CommandValueType *type)](#oh_privatecommand_getvaluetype) 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取value的数据类型。  [InputMethod_ErrorCode OH_PrivateCommand_GetBoolValue(InputMethod_PrivateCommand *command, bool *value)](#oh_privatecommand_getboolvalue) 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取布尔类型的value的值。  [InputMethod_ErrorCode OH_PrivateCommand_GetIntValue(InputMethod_PrivateCommand *command, int32_t *value)](#oh_privatecommand_getintvalue) 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取整数类型的value的值。  [InputMethod_ErrorCode OH_PrivateCommand_GetStrValue(InputMethod_PrivateCommand *command, const char **value, size_t *valueLength)](#oh_privatecommand_getstrvalue) 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取字符串类型的value的值。       #### 函数说明

  #### [h2]OH_PrivateCommand_Create()

InputMethod_PrivateCommand *OH_PrivateCommand_Create(char key[], size_t keyLength) **描述**

 创建一个新的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   char key[] 私有数据的key值。  size_t keyLength key长度，单次所有私有数据与key值的大小限制32KB。     **返回：**

  类型 说明   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) * 如果创建成功，返回一个指向新创建的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。

  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。

        #### [h2]OH_PrivateCommand_Destroy()

void OH_PrivateCommand_Destroy(InputMethod_PrivateCommand *command) **描述**

 销毁一个[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被销毁的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。       #### [h2]OH_PrivateCommand_SetKey()

InputMethod_ErrorCode OH_PrivateCommand_SetKey(InputMethod_PrivateCommand *command, char key[], size_t keyLength) **描述**

 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的key值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被设置的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  char key[] key值。  size_t keyLength key长度。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_SetBoolValue()

InputMethod_ErrorCode OH_PrivateCommand_SetBoolValue(InputMethod_PrivateCommand *command, bool value) **描述**

 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的布尔类型value值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被设置的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  bool value 布尔类型value值。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_SetIntValue()

InputMethod_ErrorCode OH_PrivateCommand_SetIntValue(InputMethod_PrivateCommand *command, int32_t value) **描述**

 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的整数类型value值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被设置的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  int32_t value 整数类型的value的值。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_SetStrValue()

InputMethod_ErrorCode OH_PrivateCommand_SetStrValue(InputMethod_PrivateCommand *command, char value[], size_t valueLength) **描述**

 设置[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)的字符串类型value值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被设置的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  char value[] 字符串类型value值。  size_t valueLength 表示字符串数据值的长度。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_GetKey()

InputMethod_ErrorCode OH_PrivateCommand_GetKey(InputMethod_PrivateCommand *command, const char **key, size_t *keyLength) **描述**

 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取key值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被获取key值的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  const char **key key的生命周期和command一致。不要直接保存key地址，或者直接写key。建议拷贝后使用。  size_t *keyLength key长度。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_GetValueType()

InputMethod_ErrorCode OH_PrivateCommand_GetValueType(InputMethod_PrivateCommand *command, InputMethod_CommandValueType *type) **描述**

 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取value的数据类型。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被获取value值的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  [InputMethod_CommandValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_commandvaluetype) *type 表示指向 [InputMethod_CommandValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_commandvaluetype) 实例的指针。 用于value值的数据类型。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_GetBoolValue()

InputMethod_ErrorCode OH_PrivateCommand_GetBoolValue(InputMethod_PrivateCommand *command, bool *value) **描述**

 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取布尔类型的value的值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被获取value值的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  bool *value 布尔类型的value的值。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  [IME_ERR_QUERY_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 查询失败，命令中没有布尔值。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_GetIntValue()

InputMethod_ErrorCode OH_PrivateCommand_GetIntValue(InputMethod_PrivateCommand *command, int32_t *value) **描述**

 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取整数类型的value的值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被获取value值的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  int32_t *value 整数类型的value的值。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  [IME_ERR_QUERY_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 查询失败，命令中没有整数值。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_PrivateCommand_GetStrValue()

InputMethod_ErrorCode OH_PrivateCommand_GetStrValue(InputMethod_PrivateCommand *command, const char **value, size_t *valueLength) **描述**

 从[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)获取字符串类型的value的值。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand) *command 指向即将被获取value值的[InputMethod_PrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-privatecommand)实例的指针。  const char **value 字符串类型的value的值。  size_t *valueLength value的生命周期和command一致。不要直接保存value地址，或者直接写value。建议拷贝后使用。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  [IME_ERR_QUERY_FAILED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 查询失败，命令中没有字符串值。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

---
*Updated: 2026-04-22 06:43:51*
