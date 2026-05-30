# inputmethod_cursor_info_capi.h

> **分区**: API参考  |  **Slug**: `capi-inputmethod-cursor-info-capi-h`  |  **DocID**: `6da79d5a2e534827b9fd92899257e865`

---

# inputmethod_cursor_info_capi.h

  #### 概述

提供光标信息对象的创建、销毁与读写方法。

 **引用文件：** <inputmethod/inputmethod_cursor_info_capi.h>

 **库：** libohinputmethod.so

 **系统能力：** SystemCapability.MiscServices.InputMethodFramework

 **起始版本：** 12

 **相关模块：** [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

   #### 汇总

  #### [h2]结构体

 名称 typedef关键字 描述   [InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo) InputMethod_CursorInfo 光标信息。光标的坐标位置、宽度和高度。       #### [h2]函数

 名称 描述   [InputMethod_CursorInfo *OH_CursorInfo_Create(double left, double top, double width, double height)](#oh_cursorinfo_create) 创建一个新的[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例。  [void OH_CursorInfo_Destroy(InputMethod_CursorInfo *cursorInfo)](#oh_cursorinfo_destroy) 销毁一个[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例。  [InputMethod_ErrorCode OH_CursorInfo_SetRect(InputMethod_CursorInfo *cursorInfo, double left, double top, double width, double height)](#oh_cursorinfo_setrect) 设置光标信息内容。  [InputMethod_ErrorCode OH_CursorInfo_GetRect(InputMethod_CursorInfo *cursorInfo, double *left, double *top, double *width, double *height)](#oh_cursorinfo_getrect) 获取光标信息内容。       #### 函数说明

  #### [h2]OH_CursorInfo_Create()

InputMethod_CursorInfo *OH_CursorInfo_Create(double left, double top, double width, double height) **描述**

 创建一个新的[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   double left 光标靠左点与物理屏幕左侧距离的绝对值，单位px。  double top 光标顶点与物理屏幕上侧距离的绝对值，单位px。  double width 宽度，单位px。  double height 高度，单位px。     **返回：**

  类型 说明   [InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo) * 如果创建成功，返回一个指向新创建的[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例的指针。

  如果创建失败，对象返回NULL，可能的失败原因有应用程序的地址空间耗尽。

        #### [h2]OH_CursorInfo_Destroy()

void OH_CursorInfo_Destroy(InputMethod_CursorInfo *cursorInfo) **描述**

 销毁一个[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo) *cursorInfo 表示指向即将被销毁的[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例的指针。       #### [h2]OH_CursorInfo_SetRect()

InputMethod_ErrorCode OH_CursorInfo_SetRect(InputMethod_CursorInfo *cursorInfo, double left, double top, double width, double height) **描述**

 设置光标信息内容。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo) *cursorInfo 表示指向[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例的指针。  double left 光标靠左点与物理屏幕左侧距离的绝对值，单位px。  double top 光标顶点与物理屏幕上侧距离的绝对值，单位px。  double width 宽度，单位px。  double height 高度，单位px。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

        #### [h2]OH_CursorInfo_GetRect()

InputMethod_ErrorCode OH_CursorInfo_GetRect(InputMethod_CursorInfo *cursorInfo, double *left, double *top, double *width, double *height) **描述**

 获取光标信息内容。

 **起始版本：** 12

 **参数：**

  参数项 描述   [InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo) *cursorInfo 表示指向[InputMethod_CursorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-cursorinfo)实例的指针。  double *left 靠左点与物理屏幕左侧距离的绝对值，单位px。  double *top 顶点与物理屏幕上侧距离的绝对值，单位px。  double *width 宽度，单位px。  double *height 高度，单位px。     **返回：**

  类型 说明   [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) 返回一个特定的错误码。

  [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。

  [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。

  具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。

---
*Updated: 2026-04-22 06:43:31*
